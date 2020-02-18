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
  
  ngOnInit() {

  }

  xAxiz:any;
  yAxis:any;
  onFileSelect($event){
   var self = this;
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

       console.log(csvDataArray);

       var data1 = csvDataArray.forEach(element => {
        var sp = element.split(',');
        return sp[0];
       });

       var dataForGraph1 =[];
       var dataForGraph2 =[];


       for(let i = 1 ; i< csvDataArray.length ;i++)
       {
        var data = csvDataArray[i].split(',');
        dataForGraph1.push(data[0]);
        dataForGraph2.push(data[1]);

       }
        
       self.chartData.setDataForGraph1(dataForGraph1);
       self.chartData.setDataForGraph2(dataForGraph2);

       self.chartData.setXaxis(headerArray[0]);
       self.chartData.setYaxis(headerArray[1]);


      }
      var dataArray = reader.readAsText($event.target.files[0]);
      console.log(dataArray);
     
    }
    
  

  onSubmit(){
    this.loadChart = true;
  }

}
