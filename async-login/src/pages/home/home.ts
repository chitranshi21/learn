import { Component } from '@angular/core';
import { Geofence, Geolocation, SMS } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';
import { ActivePage } from '../active/active';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	radius: number = 100;
	error: any;
	success:any;

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(()=>{
    	Geolocation.initialize().then(
    		()=> console.log("geolocation intialize"),
    		(err) => console.log(err)
    		);
    })
  }

  setGeofence(value:number){
  	Geolocation.getCurrentPosition({
  		enableHighAccuracy:true  	
  	}).then((resp) =>{
  		var longitude = resp.coords.longitude;
  		var latitude = resp.coords.latitude;
  		var radius = value;
  	});
  }

}
