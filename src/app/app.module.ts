import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BellCurveChartComponent } from '../app/bell-curve-chart/bell-curve-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BellCurveChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
