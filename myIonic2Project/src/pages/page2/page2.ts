import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  @ViewChild('map') mapElement:ElementRef;
  map:any;

   ngAfterViewInit() {
    this.loadMap();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public platform: Platform) {
   //this.loadMap();
  }

  ionViewLoaded() {}

  loadMap(){
    let thisMap = this.map;
    let thisMapElement = this.mapElement;
    this.platform.ready().then(function(){
      Geolocation.getCurrentPosition().then(function(position) {
        console.log('res', position.coords.latitude, position.coords.longitude);
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          //mapTypeId: google.maps.mapTypeId.ROADMAP
        };
        thisMap = new google.maps.Map(thisMapElement.nativeElement, mapOptions);
       
      });
     });     
    }

  addMarker(){
    let markerMap = this.map;
    let marker = new google.maps.Marker({
      map: this.map,
      //animation: google.maps.Animantion.DROP,
      position: markerMap.getCenter()
    });

    let content = "<h4>Information!</h4>";
    //this.addInfoWindow(marker, content);
  }
}
