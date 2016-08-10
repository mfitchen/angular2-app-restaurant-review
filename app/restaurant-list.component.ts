import { Component, EventEmitter } from 'angular2/core';
import { RestaurantComponent } from './restaurant.component';
import { Restaurant } from './restaurant.model';
import { NewRestaurantComponent }  from './new-restaurant.component';
import { EditRestaurantComponent} from './edit-restaurant.component';
import { CostPipe } from './cost.pipe';
import { StylePipe } from './style.pipe';

@Component({
  selector: 'restaurant-list',
  inputs: ['restaurantList'],
  outputs: ['onRestaurantSelect'],
  pipes: [CostPipe, StylePipe],
  directives: [RestaurantComponent, EditRestaurantComponent, NewRestaurantComponent],
  template: `
  <div class="row">
   <div class="col-md-3">
     <h1>Restaurants</h1>
     <select (change)="onCostChange($event.target.value)" class="dropdown filter col-sm-3 form-control input-lg">
       <option value="all" selected="selected">Show All Restaurants</option>
       <option value="low">Show Low Restaurants</option>
     </select>
     <select (change)="onStyleChange($event.target.value)" class="dropdown filter col-sm-3 form-control input-lg">
       <option value="all" selected="selected">Show All Restaurants</option>
       <option value="mexican">Show Mexican Food Restaurants</option>
       <option value="japanese">Show Japanese Food Restaurants</option>
     </select>
     <restaurant-display *ngFor="#currentRestaurant of restaurantList | cost:filterCost | style:filterStyle"
       (click)="restaurantClicked(currentRestaurant)"
       [class.selected]="currentRestaurant === selectedRestaurant"
       [restaurant]="currentRestaurant">
     </restaurant-display>
   </div>
   <div class="col-md-9">
     <h1>Restaurant Details</h1>
     <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant">
     </edit-restaurant>
   </div>
 </div>
 <div class="row">
   <new-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></new-restaurant>
 </div>
  `

})

export class RestaurantListComponent {
  public restaurantList: Restaurant[];
  public onRestaurantSelect: EventEmitter<Restaurant>;
  public selectedRestaurant: Restaurant;
  public filterCost: string = "all";
  public filterStyle: string = "all";
  public styleList: string[];

  constructor(){
    this.onRestaurantSelect = new EventEmitter();
  }

  restaurantClicked(clickedRest: Restaurant): void {
    this.selectedRestaurant = clickedRest;
    this.onRestaurantSelect.emit(clickedRest);
  }

  createRestaurant(arg: string[]): void {
    this.restaurantList.push(
      new Restaurant(arg[0], arg[1], arg[2], parseInt(arg[3]), parseInt(arg[4]))
    );
  }

  onStyleChange(filterOption){
    this.filterStyle = filterOption;
  }

  onCostChange(filterOption){
    this.filterCost = filterOption;
  }

}
