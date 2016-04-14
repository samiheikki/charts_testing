import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries} from 'vaadin-charts';



@Component({
  selector: 'test1-component',
  template: `
  <vaadin-column-chart vaadin-chart #chart>
  <chart-title>{{foobar}}</chart-title>
  <data-series>
  <data>
  [12321, 212]
  </data>
  </data-series>
  <x-axis>
  <chart-title>Shoe size (EU)</chart-title>
  </x-axis>
  <y-axis>
  <chart-title>Age (years)</chart-title>
  </y-axis>
  </vaadin-column-chart>
  <vaadin-column-chart vaadin-chart #chart>
  <chart-title>{{foobar}}</chart-title>
  <data-series>
  <data>
  [12321, 212]
  </data>
  </data-series>
  <x-axis>
  <chart-title>Shoe size (EU)</chart-title>
  </x-axis>
  <y-axis>
  <chart-title>Age (years)</chart-title>
  </y-axis>
  </vaadin-column-chart>
  <vaadin-column-chart vaadin-chart #chart>
  <chart-title>{{foobar}}</chart-title>
  <data-series>
  <data>
  [12321, 212]
  </data>
  </data-series>
  <x-axis>
  <chart-title>Shoe size (EU)</chart-title>
  </x-axis>
  <y-axis>
  <chart-title>Age (years)</chart-title>
  </y-axis>
  </vaadin-column-chart>
    `,
    directives: [VaadinCharts, DataSeries]
})
export class Test1Component {
  foobar = 'asd';
}
