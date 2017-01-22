import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Address page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {
	@ViewChild('map') mapElement;
	map:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.initMap();
  }

  initMap(){
  	let latLng = new google.maps.LatLng(-34.9290, 138.6010);
  	let mapOptions = {
  		center:latLng,
  		zoom:15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP
  	};
  	this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
