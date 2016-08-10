import {Component, EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Component({
  selector: 'rate-restaurant',
  inputs: ['restaurant'],
  outputs: ['onSubmitNewRating'],
  template:`
  <div class="new-rating">
    <h3>Add A Rating</h3>
    <select name="rating" #rating>
      <option value="1"><i class="fa fa-star" aria-hidden="true"></i></option>
      <option value="2"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></option>
      <option value="3"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></option>
      <option value="4"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></option>
      <option value="5"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></option>
    </select>
    <button (click)="addRating(rating)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class RateRestaurantComponet {
  public onSubmitNewRating: EventEmitter<number>;
  constructor(){
    this.onSubmitNewRating = new EventEmitter();
  }
  addRating(rating: HTMLSelectElement){
    this.onSubmitNewRating.emit(parseInt(rating.value));
  }
}
