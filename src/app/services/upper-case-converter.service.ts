import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpperCaseConverterService {

  constructor(private _httpClient:HttpClient) { }
  
  public convertToUpperCase(obj):any {
    return  this._httpClient.post('http://test-routes.herokuapp.com/test/uppercase',obj);
  } 

  }

