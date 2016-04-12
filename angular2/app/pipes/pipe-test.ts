import {Pipe, PipeTransform} from 'angular2/core';
@Pipe({
  name: 'listFilter'
})
export class PipeTest implements PipeTransform {
    transform(arr: any[], filter: string[]): any {
      return arr;
    }
}
