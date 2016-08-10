import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "cost",
  pure: false
})

export class CostPipe implements PipeTransform {
  transform(input: Restaurant[], args){
    if(args[0] > 0) {
        return input.filter((restaurant) => {
          return restaurant.cost <= args[0];
        });
    } else {
      return input;
    }
  }
}
