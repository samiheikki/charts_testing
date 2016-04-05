import {Component} from 'angular2/core';
import {VaadinElement} from './vaadin-element/vaadin_element.directive';

@Component({
    selector: 'my-app',
    template: `<vaadin-line-chart vaadin-chart (point-mouse-over)="onPointMouseOver()">
      <chart-title>Hello Charts!</chart-title>
      <data-series name="Girls">
        <data>
          [17, 0.3], [18, 0.7], [19, 0.8], [20, 1.0], [21, 1.3], [22, 1.5], [23, 2.0], [24, 2.5], [25, 3.0], [26, 3.5], [27, 4.0], [28, 4.5], [29, 5.0], [30, 5.5], [31, 6.5], [32, 7.0], [33, 8.0], [34, 9.0], [35, 10.0], [36, 11.0]
        </data>
      </data-series>
      <x-axis>
        <chart-title>Shoe size (EU)</chart-title>
      </x-axis>
      <y-axis>
        <chart-title>Age (years)</chart-title>
      </y-axis>
    </vaadin-line-chart>`,
    directives: [VaadinElement]
})
export class AppComponent {

  onPointMouseOver() {
    console.log("as");
  }
}
