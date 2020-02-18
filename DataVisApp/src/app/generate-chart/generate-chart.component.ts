import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ChartDataService } from '../service/chart-data.service';

@Component({
  selector: 'app-generate-chart',
  templateUrl: './generate-chart.component.html',
  styleUrls: ['./generate-chart.component.css']
})
export class GenerateChartComponent implements OnInit {
  [x: string]: any;
  BarChart;
  constructor(private chartData : ChartDataService) { }
  ngOnInit() {
    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels:  this.chartData.getDataForGraph1(),
     datasets: [{
         label: '# of Votes',
         data: this.chartData.getDataForGraph2(),
         backgroundColor:'burlywood',
         borderColor:'black',
         borderWidth: 2
     }]
    }, 
    options: {
     title:{
         text:"BAR CHART",
         display:true
     },
     scales: {
         yAxes: [{
             scaleLabel: {
							display: true,
							labelString: this.chartData.getYAxis()
						}
         }],
         xAxes:[{
          scaleLabel: {
            display: true,
            labelString: this.chartData.getXAxis()
          }
         }]
     }
    }
    });
  }
}
