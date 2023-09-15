import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
  newItem: string = '';
  allItems: string[] = [];
  childItems: string[] = ['Marena', 'Sundar Resort'];
  isDisplayed: boolean = false;
  isDisplayed2: boolean = false;

  ifChecked(event: any, item: string) {
    if (event.target.checked == true) {
      this.toggleDisplay();
    } else {
      this.toggleDisplay();
    }
  }

  ifChecked2(event: any, item: string) {
    if (event.target.checked == true) {
      this.toggleDisplay2();
    } else {
      this.toggleDisplay2();
    }
  }

  addItem(description: string) {
    this.allItems.push(this.newItem);
    this.newItem = '';
  }

  toggleDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }

  toggleDisplay2(){
    this.isDisplayed2 = !this.isDisplayed2;
  }
}
