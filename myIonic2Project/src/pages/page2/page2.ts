import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  top_item_array: String[]; 
  bottom_item_array:String[]; 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.top_item_array = ["Item A", "Item B", "Item C"];
    this.bottom_item_array = ["Item D", "Item E", "Item F"];

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  move_from_top_to_bottom(idx){
      this.bottom_item_array.push(this.top_item_array[idx])
      this.top_item_array.splice(idx, 1)
    }

    move_from_bottom_to_top(idx){
      this.top_item_array.push(this.bottom_item_array[idx])
      this.bottom_item_array.splice(idx, 1)
    }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }
}
