import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataVizzComponent } from './data-vizz/data-vizz.component';
import { GenerateChartComponent } from './generate-chart/generate-chart.component';
import { ChartDataService } from './service/chart-data.service';
@NgModule({
  declarations: [
    AppComponent,
    DataVizzComponent,
    GenerateChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
