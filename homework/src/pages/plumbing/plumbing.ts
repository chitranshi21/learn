import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlumbingEnum } from "../../common/enums";
import { AddressPage } from "../address/address";
/*
  Generated class for the Plumbing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-plumbing',
  templateUrl: 'plumbing.html'
})
export class PlumbingPage {
	plumbingServiceList:Array<{name:string,component:Array<PlumbingEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.plumbingServiceList = [];
  	this.plumbingServiceList.push(
  						{
  							name: "Taps, Wash Basin and Sink",
  							component:  [	
                        PlumbingEnum.TAP, 
  											PlumbingEnum.WASH_BASIN,
  											PlumbingEnum.KITCHEN_SINK
  										],
  							selectedList:[]

  						},
  						{
  							name: "Toilet and Sanitary Work",
  							component:  [	PlumbingEnum.WESTERN_TOILET, 
  											PlumbingEnum.FLUSH_TANK,
  											PlumbingEnum.INDIAN_TOILET,
  											PlumbingEnum.TOILET_JET
  										],
  							selectedList:[]

  						},
  						{
  							name: "Bathroom Fittings",
  							component:  [	PlumbingEnum.SHOWER, 
  											PlumbingEnum.PIPELINE,
  											PlumbingEnum.PUMPS,
  										],
  							selectedList:[],

  						}


  	)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlumbingPage');
  }

  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.plumbingServiceList){
  		for(let comp of service.selectedList){
  			this.selectedList.push(comp);
  		}
  	}
  	console.log(this.selectedList);
  }

  onclickNext(){
    this.navCtrl.push(AddressPage);
  }

}
