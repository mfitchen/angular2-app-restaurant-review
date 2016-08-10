import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RateRestaurantComponet} from './rate-restaurant.component';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  directives: [RateRestaurantComponet],
  template: `
  <div class="edit-restaurant">
    <input [(ngModel)]="restaurant.name" class="col-sm-8 input-lg"/>
    <input [(ngModel)]="restaurant.style" class="col-sm-8 input-lg"/>
    <input [(ngModel)]="restaurant.address" class="col-sm-8 input-lg"/>
    <select [(ngModel)]="restaurant.cost" class="form-control input-lg">
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
    </select>
    <rate-restaurant (onSubmitNewRating)=newRating($event)></rate-restaurant>
  </div>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;
  
  newRating(arg: number): void{
    this.restaurant.rating.push(arg);
  }
}
