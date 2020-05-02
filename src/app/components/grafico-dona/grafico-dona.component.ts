import { Component, OnInit, Input } from '@angular/core';

import {  ChartType} from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [ './doughnut-chart.component.scss'
  ]
})




export class GraficoDonaComponent implements OnInit {

  @Input() etiqueta: Label[];
  @Input () datos: MultiDataSet;
  @Input () tipo: ChartType;



  public doughnutChartLabels: Label[];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType;
  constructor() { }

  ngOnInit(): void {
  this.doughnutChartLabels = this.etiqueta;
  this.doughnutChartData = this.datos;
  this.doughnutChartType = this.tipo;
  }

}
