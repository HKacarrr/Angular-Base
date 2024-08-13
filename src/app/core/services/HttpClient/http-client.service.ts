import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs";
import {AbstractProviderService} from "../abstract.provider.service";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService extends AbstractProviderService{
  constructor(private http: HttpClient) {
    super();
  }


  post(url:string, data:object){
    // if (!httpOptions){
    //   httpOptions = this.httpOptions;
    // }

    let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        })
    }

    return this.http.post(url, data, httpOptions).pipe(
      tap(data => JSON.stringify(data)),
      catchError(this.handleException)
    )
  }

}
