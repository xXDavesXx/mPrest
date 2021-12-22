import {Component} from '@angular/core';
import {GetTableDataService} from "../../services/getTableData.service";
import {LineDataIfc, LineToDeleteIfc, TableDataIfc} from "../../interfaces/interfaces";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  lines: TableDataIfc[] = [];
  linesForDisplay: TableDataIfc[] = [];
  selectedImg: string = '';

  constructor(private getDataService: GetTableDataService) {
    this.getTableData();
  }

  deleteLine(line: LineToDeleteIfc): void {
    const index = this.lines.findIndex( x => (x.id === line.id && x.albumId === line.albumId));
    if (index > -1) {
      this.lines.splice(index, 1);
      this.linesForDisplay = [...this.lines];
    }
  }

  addNewLine(): void {

  }

  getTableData() {
    this.getDataService.getUrlData().subscribe( (data: any) => {
      this.lines = data.map( (line: any) => {
        return {
          id: line.id,
          title: line.title,
          albumId: line.albumId,
          imgPath: line.url,
          thumbImgPath: line.thumbnailUrl,
        }
      });
      this.linesForDisplay = data.map( (line: any) => {
        return {
          id: line.id,
          title: line.title,
          albumId: line.albumId,
          imgPath: line.url,
          thumbImgPath: line.thumbnailUrl,
        }
      });
    });
  }

  filterList(key: any):void {
    if (key !== '') {
      this.linesForDisplay = [...this.lines.filter(x => (x.id === +key || x.albumId === +key))];
    } else {
      this.linesForDisplay = [...this.lines];
    }
  }

  changeLineTitle(lineData: LineDataIfc): void {
    const index = this.lines.findIndex( x => (x.id === lineData.id && x.albumId === lineData.albumId));
    if (index > -1) {
      const newLine: TableDataIfc = {
        id: lineData.id,
        title: lineData.text,
        albumId: lineData.albumId,
        imgPath: this.lines[index].imgPath,
        thumbImgPath: this.lines[index].thumbImgPath,
      }
      this.lines.splice(index, 1, newLine);
      this.lines = [...this.lines];
    }
  }

  displayBigImg(lineIndex: number): void {
    this.selectedImg = this.linesForDisplay[lineIndex].imgPath;

  }

}
