import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() { }

  xAixsName : string;
  yAixsName : string;

  setXaxis(xaxis : string){
    this.xAixsName = xaxis;
  }

  getAxis(){
    return this.xAixsName;
  }

  setYaxis(xaxis : string){
    this.xAixsName = xaxis;
  }

  getYAxis(){
    return this.xAixsName;
  }
}
