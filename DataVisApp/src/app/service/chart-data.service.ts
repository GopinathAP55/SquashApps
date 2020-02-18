import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() { }

  xAxisName : any;
  yAxisName : any;
   dataForGraph1 : any =[];
   dataForGraph2 : any =[];


  setXaxis(xaxis : any){
    this.xAxisName = xaxis;
  }

  getXAxis(){
    return this.xAxisName;
  }

  setYaxis(xaxis : any){
    this.yAxisName = xaxis;
  }

  getYAxis(){
    return this.yAxisName;
  }

  setDataForGraph1(data : any){
    this.dataForGraph1 = data;
  }

  getDataForGraph1(){
    return this.dataForGraph1;
  }

  setDataForGraph2(data : any){
    this.dataForGraph2 = data;
  }

  getDataForGraph2(){
    return this.dataForGraph2;
  }
}
