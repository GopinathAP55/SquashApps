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
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
         label: '# of Votes',
         data: [9,7 , 3, 5, 2, 10],
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
            labelString: this.chartData.getAxis()
          }
         }]
     }
    }
    });
  }
}
