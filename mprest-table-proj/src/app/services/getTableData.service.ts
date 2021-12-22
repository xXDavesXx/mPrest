import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetTableDataService {

  private infoUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  getUrlData(): Observable<any> {
   return this.http.get(this.infoUrl);
  }
}



