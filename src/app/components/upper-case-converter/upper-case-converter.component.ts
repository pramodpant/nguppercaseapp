import { Component, OnInit } from '@angular/core';
import {UpperCaseConverterService} from 'src/app/services/upper-case-converter.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-upper-case-converter',
  templateUrl: './upper-case-converter.component.html',
  styleUrls: ['./upper-case-converter.component.scss']
})
export class UpperCaseConverterComponent implements OnInit {

  public result:any;
  public myname:string;
  constructor(private _servce:UpperCaseConverterService) { }

  ngOnInit(): void {
  }

  public convert(obj): any {
    this._servce.convertToUpperCase(obj).subscribe (
      res=> this.result=res, (
        err:HttpErrorResponse) => {
           console.error(err);
        }
      
    )
  }

}
