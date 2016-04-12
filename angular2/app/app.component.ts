import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries} from 'vaadin-charts';
import {PipeTest} from './pipes/pipe-test';

@Component({
  selector: 'my-app',
  template: `
  <input #testinput (keyup)="0" [value]="fooData">
  <button (click)="onKey()">Change MyComponent</button>
<vaadin-line-chart vaadin-chart #chart>
<chart-title>{{foobar}}</chart-title>
<data-series [data]="testinput.value">
</data-series>
<x-axis>
  <chart-title>Shoe size (EU)</chart-title>
</x-axis>
<y-axis>
  <chart-title>Age (years)</chart-title>
</y-axis>
</vaadin-line-chart>
<vaadin-column-chart vaadin-chart #chart>
<chart-title>{{foobar}}</chart-title>
<data-series [data]="dummyData">
</data-series>
<x-axis>
<chart-title>Shoe size (EU)</chart-title>
</x-axis>
<y-axis>
<chart-title>Age (years)</chart-title>
</y-axis>
</vaadin-column-chart>
<vaadin-bubble-chart id="bubble-chart">
  <chart zoom-type="xy"></chart>
  <title>Vaadin Charts Bubbles</title>
  <data-series [data]="dummyData">
  </data-series>
  <data-series [data]="dummyData">
  </data-series>
</vaadin-bubble-chart>
    `,
  directives: [VaadinCharts, DataSeries],
  pipes: [PipeTest]
})
export class AppComponent {

  fooData =[['Website visits', 15654], ['Downloads', 4064], ['Requested price list', 1987], ['Invoice sent', 976], ['Finalized', 846]];

  dummyData = [
     [17, 0.3], [18, 0.7], [19, 0.8], [20, 1.0], [21, 1.3], [22, 1.5],
     [23, 2.0], [24, 2.5], [25, 3.0], [26, 3.5], [27, 4.0], [28, 4.5],
     [29, 5.0], [30, 5.5], [31, 6.5], [32, 7.0], [33, 8.0], [34, 9.0],
     [35, 10.0], [36, 11.0]
  ];
  inputData = '';

  dataSeries = [
    [
      [17, 0.3], [18, 0.7], [19, 0.8], [20, 1.0], [21, 1.3], [22, 1.5],
      [23, 2.0], [24, 2.5], [25, 3.0], [26, 3.5], [27, 4.0], [28, 4.5],
      [29, 5.0], [30, 5.5], [31, 6.5], [32, 7.0], [33, 8.0], [34, 9.0],
      [35, 10.0], [36, 11.0]
    ],
    [
      [20, 0.3], [21, 0.7], [23, 0.8], [26, 1.0], [29, 1.3], [30, 1.5]
    ],
    [
      [20, 0.7], [21, 0.9], [23, 1.4], [26, 1.6], [29, 1.9], [30, 2.5]
    ]
  ];

  showSeries = true;



  foobar = 'sami';
  onKey(event: any) {
    this.fooData.push(['asd', 2000]);
    //this.dummyData = [[35, 10.0], [36, 11.0]];
    //this.dummyData.push([37, 12.0]);
    //this.dummyData = [[37, 12.0]];
    //this.dummyData = [];
    console.log(this.dummyData);
    this.dummyData = [
       [17, 0.3], [18, 0.7], [19, 0.8], [20, 1.0], [21, 1.3], [22, 1.5],
       [23, 2.0], [24, 2.5]
    ];
    this.showSeries = false;
    /*this.inputData = event.target.value;
    this.dummyData = [];
    //var self = this;
    setTimeout(function(){
      //self.dummyData = [[17, 0.3], [18, 0.7]];
    }, 1000);*/
  }
}
