import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <restaurant-list
        [restaurantList]="restaurants"
        (onRestaurantSelect)="restaurantWasSelected($event)">
      </restaurant-list>
    </div>
  `
})

export class AppComponent {
  public restaurants: Restaurant[];

  constructor(){
    this.restaurants = [
      new Restaurant("Saburo's Sushi", "Japanese", "1667 SE Bybee Boulevard, Portland, OR 97202", 2, 0),
      new Restaurant("El Gallo Taqueria", "Mexican", "4422 SE Woodstock Boulevard, Portland, OR 97202", 1, 1),
      new Restaurant("Piazza Italia", "Italian", "1129 NW Johnson Street, Portland, OR 97209", 2, 2),
      new Restaurant("Chart House", "Seafood & Steakhouse", "5700 SW Terwilliger Boulevard, Portland, OR 97239", 3, 3),
      new Restaurant("Departure", "Asian", "525 SW Terwilliger Boulevard, Portland, OR 97239", 3, 4)
    ];
  }

  restaurantWasSelected(clickedRestaurant: Restaurant): void {
    console.log("parent", clickedRestaurant);
  }
}
