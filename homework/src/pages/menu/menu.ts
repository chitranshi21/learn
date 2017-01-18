import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';


/*
  Generated class for the Menu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
	menuList: Array<{name:string, image:string, page:Component}>;
	bannerList: Array<{name:string, image:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  			 public toastCtrl: ToastController) {
  	this.menuList = [];
  	this.menuList.push({
  							name:"plumbing",
  							image:"",
  							page:null},
  						{
  							name:"Electrical",
  							image:"",
  							page:null
  						},
  						{
  							name:"Carpantry",
  							image:"",
  							page:null
  						},
  						{
  							name:"Appliances",
  							image:"",
  							page:null
  						},
  						{
  							name:"Cars and Bikes",
  							image:"",
  							page:null
  						},
  						{
  							name:"Beauty",
  							image:"",
  							page:null
  						},
  						{
  							name:"Business Service",
  							image:"",
  							page:null
  						},
  						{
  							name:"Personal Service",
  							image:"",
  							page:null
  						},
  						{
  							name:"Others",
  							image:"",
  							page:null
  						},
  						);

  }

  ionViewWillEnter(){
  	this.bannerList = [];
  	this.bannerList.push(
  							{
  								name: "test banner 1",
  								image: "",
  							},
  							{
  								name: "test banner 1",
  								image: "",
  							}
  		)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  menuTap(event){
  	let toast = this.toastCtrl.create(
  				{
  					message: "you clicked our service",
  					duration : 3000
  				}
  		);
  	toast.present();
  }

}
