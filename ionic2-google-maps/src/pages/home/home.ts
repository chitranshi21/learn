import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('map') mapElement;
	map:any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
  	this.initMap();
  }

  initMap(){

    Geolocation.getCurrentPosition().then((position) => {
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    let mapOptions = {
      center: latLng,
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    },(err) => {
      console.log(err);
    }
    )
  	// let latLng = new google.maps.LatLng(-34.9290,138.6010);
  	// let mapOptions = {
  	// 	center: latLng,
  	// 	zoom:15,
  	// 	mapTypeId: google.maps.MapTypeId.ROADMAP
  	// };
  	// this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
