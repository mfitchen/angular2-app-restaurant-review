import {Component} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
  <div>
    <div class="rest-name"><h4>{{ restaurant.name }}</h4></div>
    <div class="rest-style">{{ restaurant.style }}</div>
    <div class="rest-address">{{ restaurant.address }}</div>
    <div class="rest-cost">{{ showCost() }}</div>
  </div>

  `
})

export class RestaurantComponent {
  public restaurant: Restaurant;

  showCost(){
    var dsigns = "";
    for(var i = 0; i < this.restaurant.cost; i++) {
      dsigns += "$";
    }
    return dsigns;
  }

}
