import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ElectricalEnum } from "../../common/enums"; 
import { AddressPage } from "../address/address";

/*
  Generated class for the Electrical page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-electrical',
  templateUrl: 'electrical.html'
})
export class ElectricalPage {
	electricalServiceList:Array<{name:string,component:Array<ElectricalEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.electricalServiceList = [];
  	this.electricalServiceList.push(
  				{
  					name: "Fans",
  					component: [
  						ElectricalEnum.CEILING_FAN,
  						ElectricalEnum.EXHAUST_FAN,
  						ElectricalEnum.STAND_FAN
  					],
  					selectedList: []
  				},
  				{
  					name: "Switches, Meters and Fuses",
  					component: [
  						ElectricalEnum.MCB,
  						ElectricalEnum.NEW_ELECTRIC_POINT,
  						ElectricalEnum.THREE_PHASE_PANNEL_BOARD
  					],
  					selectedList: []
  				},
  				{
  					name: "Lights and Wiring",
  					component: [
  						ElectricalEnum.TUBE_LIGHT_WITH_PANNEL,
  						ElectricalEnum.FANCY_LIGHT,
  						ElectricalEnum.SOCKET_AND_HOLDERS,
  						ElectricalEnum.WIRING
  					],
  					selectedList: []
  				},
  				{
  					name: "Others",
  					component: [
  						ElectricalEnum.INVERTER,
  						ElectricalEnum.OTHERS,
  					],
  					selectedList: []
  				},
  		)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricalPage');
  }

  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.electricalServiceList){
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
