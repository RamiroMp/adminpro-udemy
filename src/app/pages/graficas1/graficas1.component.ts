import { Component, OnInit } from '@angular/core';

import {  ChartType} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [ './doughnut-chart.component.scss'
  ]
})
export class Graficas1Component implements OnInit {

  graficos: any[] = [];
  constructor() {
    this.graficos = [
      {
        labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
        data:  [24, 30, 46],
        type: 'doughnut',
        leyenda: 'El pan se come con'
      },
      {
        labels: ['Hombres', 'Mujeres'],
        data:  [4500, 6000],
        type: 'doughnut',
        leyenda: 'Entrevistados'
      },
      {
        labels: ['Si', 'No'],
        data:  [95, 5],
        type: 'doughnut',
        leyenda: '¿Le dan gases los frijoles?'
      },
      {
        labels: ['No', 'Si'],
        data:  [85, 15],
        type: 'doughnut',
        leyenda: '¿Le importa que le den gases?'
      }];
  }

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';


  

  ngOnInit(): void {
    console.log(this.graficos);
  }



}
