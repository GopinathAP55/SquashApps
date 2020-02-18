import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../service/chart-data.service';
@Component({
  selector: 'app-data-vizz',
  templateUrl: './data-vizz.component.html',
  styleUrls: ['./data-vizz.component.css']
})
export class DataVizzComponent implements OnInit {

  enableSubmitButton : boolean = false;
  loadChart : boolean = false;

  arrayBuffer : ArrayBuffer;
  constructor(private chartData : ChartDataService) { }
  self = this;
  ngOnInit() {

  }

  xAxiz:any;
  yAxis:any;
  onFileSelect($event){
    var fileName = $event.target.files[0].name;

    if(fileName.split(".")[1]!=="csv"){
      alert("Please select CSV file");
    }else{
      this.enableSubmitButton = true;
    }


    let reader = new FileReader();
     reader.onload = function() {
       const csvArray = (<string>reader.result).split(/\r\n|\n/);
       const header = csvArray[0].split(',');
       const headerArray = [];
       for(let i = 0 ; i< header.length ;i++)
       {
         headerArray.push(header[i]);
       }
       const csvDataArray = [];
       for(let i = 1 ; i< csvArray.length ;i++)
       {
        csvDataArray.push(csvArray[i]);
       }  
      }
      var dataArray = reader.readAsText($event.target.files[0]);
      console.log(dataArray);
      this.chartData.setXaxis(dataArray[0]);
      this.chartData.setXaxis(dataArray[1]);

    }
    
  

  onSubmit(){
    this.loadChart = true;
  }

}
