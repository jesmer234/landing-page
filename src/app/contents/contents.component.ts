import { Component, OnInit } from '@angular/core';
import { faPieChart, faLightbulb, faChartLine } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html'
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faPieChart = faPieChart;
  faLightbulb = faLightbulb;
  faChartLine = faChartLine;
}
