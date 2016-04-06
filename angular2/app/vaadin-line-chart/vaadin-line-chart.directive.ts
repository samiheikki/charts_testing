import {Directive, ElementRef, Output, HostListener, EventEmitter, Provider, forwardRef, Renderer} from 'angular2/core';
import {NG_VALUE_ACCESSOR} from 'angular2/src/common/forms/directives/control_value_accessor';
import {DefaultValueAccessor} from 'angular2/src/common/forms/directives/default_value_accessor';
import {CONST_EXPR} from 'angular2/src/facade/lang';
declare var Polymer;

const VAADIN_LINE_CHART_CONTROL_VALUE_ACCESSOR = CONST_EXPR(new Provider(
    NG_VALUE_ACCESSOR, {
      useExisting: forwardRef(() => VaadinLineChart),
      multi: true
    }));

@Directive({
  selector: 'vaadin-line-chart',
  providers: [VAADIN_LINE_CHART_CONTROL_VALUE_ACCESSOR]
})
export class VaadinLineChart extends DefaultValueAccessor {

  private element;

  /*@Output() valueChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('value-changed', ['$event.detail.value'])
  valuechanged(value) {
    this.valueChange.emit(value);
    if (value) {
      // Assuming that the registered onChange function is only used
      // for the pristine/dirty status here.
      this.onChange(value);
    }
  }

  @Output() invalidChange: EventEmitter<any> = new EventEmitter(false);
  @HostListener('invalid-changed', ['$event.detail.value'])
  invalidchanged(value) {
    this.invalidChange.emit(value);
  }*/

  onImport(e) {
    console.log(e);
    /*this.element.$$('paper-input-container').addEventListener('blur', () => {
      if (!this.element.opened && !this.element._opened) {
        this.onTouched();
      }
    });*/
    if (this.element.reloadConfiguration) {
      // Charts need reloadConfiguration called if light dom configuration changes dynamically
      this.element.reloadConfiguration();
    }
  }

  constructor(renderer: Renderer, el: ElementRef) {
    super(renderer, el);
    this.element = el.nativeElement;
    Polymer.Base.importHref('bower_components/vaadin-charts/vaadin-line-chart.html', this.onImport.bind(this));
  }

  /* Vaadin chart things
  if (this.element.reloadConfiguration) {
    // Charts need reloadConfiguration called if light dom configuration changes dynamically
    this.element.reloadConfiguration();
  }

  */

}
