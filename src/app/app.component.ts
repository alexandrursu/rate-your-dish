import { Component} from '@angular/core';
import { DISHES } from './mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public dishes: any = DISHES;
  public started: boolean = false;

  public increaseRating(id) {
    for (let i = 0; i < this.dishes.length; i++) {
      if (id === this.dishes[i].id) {
        this.dishes[i].rating += 1;
      }
    }
    this.started = true;
  }
}

