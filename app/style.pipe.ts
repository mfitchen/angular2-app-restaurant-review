import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {
  transform(input: Restaurant[], args){
    if(args[0] != "all" ) {
        return input.filter((restaurant) => {
          return restaurant.style.toLowerCase() === args[0];
        });
    } else {
      return input;
    }
  }
}
