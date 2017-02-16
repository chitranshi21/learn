import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Auth } from '../providers/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage :any;
  loader: any;

  constructor(public auth:Auth, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.auth.login().then((isLoggedIn)=>{
      if(isLoggedIn){
        this.rootPage = HomePage;
        this.loader.dismiss();
      }else{
        this.rootPage = LoginPage;
        this.loader.dismiss();
      }
    });

  }

  presentLoading(){
    this.loader = this.loadingCtrl.create({
      content: 'please wait..',
      
    });
    this.loader.present();
  }
}
