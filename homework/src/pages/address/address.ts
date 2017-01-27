import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
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
    );
  	// let latLng = new google.maps.LatLng(-34.9290, 138.6010);
  	// let mapOptions = {
  	// 	center:latLng,
  	// 	zoom:15,
  	// 	mapTypeId: google.maps.MapTypeId.ROADMAP
  	// };
  	// this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
