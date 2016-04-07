import {Component} from 'angular2/core';
import {VaadinCharts} from './vaadin-line-chart/vaadin-line-chart.directive'

@Component({
  selector: 'my-app',
  template: `
  <input (keyup)="onKey($event)" #input>
<vaadin-line-chart vaadin-chart #chart>
<chart-title>{{input.value}}</chart-title>
<data-series [name]="input.value" [data]="dummyData">
</data-series>
<x-axis>
  <chart-title>Shoe size (EU)</chart-title>
</x-axis>
<y-axis>
  <chart-title>Age (years)</chart-title>
</y-axis>
</vaadin-line-chart>

<vaadin-pie-chart id="pie-with-legend">
  <title>Browser market shares at a specific website, 2014</title>
  <tooltip value-decimals="1" point-format="{series.name}: <b>{point.percentage:.1f}%</b>">
  </tooltip>
  <plot-options>
    <pie allow-point-select="true" show-in-legend="true" cursor="pointer">
      <data-labels enabled="true" format="<b>{point.name}</b>:    {point.percentage} %">
      </data-labels>
    </pie>
  </plot-options>

  <data-series name="Browser share">
    <data>
      ["Firefox", 45.0], ["IE", 26.8], ["Chrome", 12.8], ["Safari", 8.5], ["Opera", 6.2], ["Others", 0.7],
    </data>
  </data-series>
</vaadin-pie-chart>
    `,
  directives: [VaadinCharts]
})
export class AppComponent {
  dummyData = [
     [17, 0.3], [18, 0.7], [19, 0.8], [20, 1.0], [21, 1.3], [22, 1.5],
     [23, 2.0], [24, 2.5], [25, 3.0], [26, 3.5], [27, 4.0], [28, 4.5],
     [29, 5.0], [30, 5.5], [31, 6.5], [32, 7.0], [33, 8.0], [34, 9.0],
     [35, 10.0], [36, 11.0]
  ]
  inputData = '';
  onKey(event: any) {
    this.dummyData.push([37, 12.0]);
    //this.dummyData = [];
    console.log("here");
    /*this.inputData = event.target.value;
    this.dummyData = [];
    //var self = this;
    setTimeout(function(){
      //self.dummyData = [[17, 0.3], [18, 0.7]];
    }, 1000);*/
  }
}
