import { Component, OnInit } from '@angular/core';
declare var Highcharts;
@Component({
  selector: 'app-bell-curve-chart',
  templateUrl: './bell-curve-chart.component.html',
  styleUrls: ['./bell-curve-chart.component.css']
})
export class BellCurveChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	var data = [48.214285714285715, 42.857142857142854, 85.71428571428572, 41.07142857142857, 39.285714285714285, 73.21428571428572];
  	Highcharts.chart('container', {
	    title: {
	        text: 'Bell curve'
	    },

	    xAxis: [{
	        title: {
	            text: 'Data'
	        },
	        alignTicks: false
	    }, {
	        title: {
	            text: 'Bell curve'
	        },
	        alignTicks: false,
	        opposite: true
	    }],

	    yAxis: [{
	        title: { text: 'Data' }
	    }, {
	        title: { text: 'Bell curve' },
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
  }

}
