import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ChatPage } from '../chat/chat';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	name:string


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
  	private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    if(this.navParams.get("message") != null){
  		 let toast = this.toastCtrl.create({
    	message: this.navParams.get("message"),
    	duration: 3000,
    	position: 'bottom'
  });
  		 toast.present();
  	}
  	else{
  		this.getData();
  	}
  }

  setData(key: string, value: string){
  	this.storage.set(key, value);
  }

  getData(){
  	this.storage.get("name").then((data)=> {
  		this.name = data;
  	});
  }

  setName(){
  	this.setData("name",this.name);
  	this.navCtrl.parent.select(0);
  }

}
