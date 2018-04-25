import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var Highcharts;
@Component({
  selector: 'app-bell-curve-chart',
  templateUrl: './bell-curve-chart.component.html',
  styleUrls: ['./bell-curve-chart.component.css']
})
export class BellCurveChartComponent implements OnInit {
  candidateScoreList = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  	this.httpClient.get('https://api.myjson.com/bins/7azib').subscribe(
  		(data: any)=>{
  			for(var i=0;i<data.candidateScoreList.length;i++){
  				this.candidateScoreList.push(data.candidateScoreList[i].totalScore);
  			}
  			Highcharts.chart('container', {
			    title: {
			        text: 'Overall assessement score 49%'
			    },
			    xAxis: [{
			        title: {
			            text: 'Score in %'
			        },
			        alignTicks: false
			    }, {
			        title: {
			            text: ''
			        },
			        alignTicks: false,
			        opposite: true
			    }],
			    yAxis: [{
			        title: { text: 'No of candidates' }
			    }, {
			        title: { text: '' },
			        opposite: true
			    }],
			    series: [{
			        name: 'Bell curve',
			        type: 'bellcurve',
			        xAxis: 1,
			        yAxis: 1,
			        baseSeries: 1,
			        zIndex: -1
			    }, {
			        name: 'Data',
			        type: 'scatter',
			        data: this.candidateScoreList,
			        marker: {
			            radius: 1.5
			        }
			    }]
			});
  		}
  	);
  }

}
