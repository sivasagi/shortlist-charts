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
  			console.log(this.candidateScoreList);
  		}
  	);
  	// if(this.candidateScoreList.length>0){
  		var data =  [
		    48.214285714285715,
		    42.857142857142854,
		    19.642857142857142,
		    46.42857142857143,
		    73.21428571428572,
		    85.71428571428572,
		    39.285714285714285,
		    14.285714285714285,
		    80.35714285714286,
		    41.07142857142857,
		    66.07142857142857,
		    73.21428571428572,
		    85.71428571428572,
		    66.07142857142857,
		    73.21428571428572,
		    39.285714285714285,
		    71.42857142857143,
		    41.07142857142857,
		    71.42857142857143,
		    49.07142857142857,
		    25,
		    67.85714285714286,
		    53.57142857142857,
		    41.07142857142857,
		    60.714285714285715,
		    85.71428571428572,
		    80.35714285714286,
		    41.07142857142857,
		    78.57142857142857,
		    19.642857142857142,
		    78.57142857142857,
		    33.92857142857143,
		    46.42857142857143,
		    66.07142857142857,
		    46.42857142857143,
		    46.42857142857143,
		    25,
		    53.57142857142857,
		    58.92857142857143,
		    85.71428571428572
		  ];
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
		        data: data,
		        marker: {
		            radius: 1.5
		        }
		    }]
		});
  	// }
  }

}
