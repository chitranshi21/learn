import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarpentryEnum } from "../../common/enums"; 
import { AddressPage } from "../address/address";

/*
  Generated class for the Carpentry page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-carpentry',
  templateUrl: 'carpentry.html'
})
export class CarpentryPage {
	carpentryServiceList:Array<{name:string,component:Array<CarpentryEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.carpentryServiceList = [];
  		this.carpentryServiceList.push(
  				{
  					name: "Door fittings",
  					component: [
  						CarpentryEnum.DOOR_STOPPER,
  						CarpentryEnum.HANDLE,
  						CarpentryEnum.DOOR_CHAIN,
  						CarpentryEnum.DOOR_LATCH,
  						CarpentryEnum.HINGES,
  						CarpentryEnum.DOOR_PEEPHOLE
  					],
  					selectedList: []
  				},
  				{
  					name: "General Carpentry Work",
  					component: [
  						CarpentryEnum.LOCK,
  						CarpentryEnum.LAMINATION,
  						CarpentryEnum.WOODEN_PARTITION,
  						CarpentryEnum.MESH,
  						CarpentryEnum.SOFA,
  						CarpentryEnum.WOODEN_CHAIR,
  						CarpentryEnum.BED,
  						CarpentryEnum.FURNITURE_REPAIR,
  						CarpentryEnum.OTHERS
  					],
  					selectedList: []
  				},

  			)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarpentryPage');
  }

  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.carpentryServiceList){
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
