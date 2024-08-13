import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AbstractProviderService {

  constructor() { }


  handleException(err: HttpErrorResponse)
  {
    let errorMessage:string = '';

    if (err.error instanceof ErrorEvent){
      errorMessage = err.error.message;
    }else{
      errorMessage = 'System Error';
    }

    return throwError(() => errorMessage);
  }
}
