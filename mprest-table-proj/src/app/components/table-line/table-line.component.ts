import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import {LineDataIfc, LineToDeleteIfc, TableDataIfc} from "../../interfaces/interfaces";



@Component({
  selector: 'app-table-line',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.scss']
})
export class TableLineComponent implements OnChanges{

  @Input() lineData: TableDataIfc;
  @Input() index: number;
  @Input() newLine: boolean;
  @Output() lineDataChange = new EventEmitter<LineDataIfc>();
  @Output() deleteLine = new EventEmitter<LineToDeleteIfc>();

  displayLineData: TableDataIfc;
  isEditMode: boolean;

  ngOnChanges(changes: SimpleChanges) {
    const lineData: SimpleChange = changes ['lineData'];
    if (lineData && lineData.currentValue) {
      this.displayLineData = {...lineData.currentValue};
    }
  }



  action(action: string): void {
    // @ts-ignore
    event.stopPropagation();
    if (action === 'edit') {
      this.isEditMode = true;
    } else {
      this.deleteLine.emit({
        id: this.lineData.id,
        albumId: this.lineData.albumId,
      })
    }
  }

  getTitleText(titleValue: string): void {
    this.lineDataChange.emit({
      text: titleValue,
      id: this.lineData.id,
      albumId: this.lineData.albumId,
    })
    this.isEditMode = false;
  }

}
