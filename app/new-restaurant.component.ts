
import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Restaurant:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Style" class="col-sm-8 input-lg" #newStyle>
    <input placeholder="Address" class="col-sm-8 input-lg" #newAddress>
    <div class="col-sm-4">
      <select class="form-control input-lg" #newCost>
        <option value="1">$</option>
        <option value="2">$</option>
        <option value="3">$</option>
      </select>
    </div>
    <br>
    <button (click)="addRestaurant(newName, newStyle, newAddress, newCost)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewRestaurantComponent {
  public onSubmitNewRestaurant: EventEmitter<String[]> ;
  constructor(){
    this.onSubmitNewRestaurant = new EventEmitter();
  }

  addRestaurant(userName: HTMLInputElement,
                userStyle: HTMLInputElement,
                userAddress: HTMLInputElement,
                userCost: HTMLSelectElement){
    this.onSubmitNewRestaurant.emit([userName.value,
                              userStyle.value,
                              userAddress.value,
                              userCost.value]);
    userName.value = "";
    userStyle.value = "";
    userAddress.value = "";
  }
}
