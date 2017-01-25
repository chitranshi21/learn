import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddressPage } from "../address/address";
import { AppliancesEnum } from "../../common/enums";
/*
  Generated class for the Appliances page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-appliances',
  templateUrl: 'appliances.html'
})
export class AppliancesPage {
	appliancesServiceList:Array<{name:string,component:Array<AppliancesEnum>,
								selectedList:Array<string>}>;
	selectedList: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.appliancesServiceList = [];
  	this.appliancesServiceList.push(
  			{
  				name: "AC",
  				component:  [	
			                    AppliancesEnum.AC_SERVICE, 
								AppliancesEnum.AC_GAS_FILL,
								AppliancesEnum.AC_INSTALLATION,
								AppliancesEnum.AC_OTHER_REPAIR
  							],
  				selectedList:[]
  			},
  			{
  				name: "Refrigerator",
  				component:  [	
			                    AppliancesEnum.REFRIGERATOR_SERVICE, 
								AppliancesEnum.REFRIGERATOR_REPAIR,
  							],
  				selectedList:[]
  			},
  			{
  				name: "Washing machine",
  				component:  [	
			                    AppliancesEnum.WASHING_MACHINE_SERVICE, 
								AppliancesEnum.WASHING_MACHINE_REPAIR,
  							],
  				selectedList:[]
  			},
  			{
  				name: "Other appliances",
  				component:  [	
			                    AppliancesEnum.MICROWAVE_OVEN_REPAIR, 
								AppliancesEnum.WATER_PURIFIER_SERVICE,
								AppliancesEnum.TV_REPAIR,
								AppliancesEnum.GEYSER_SERVICE,
								AppliancesEnum.OTHERS
  							],
  				selectedList:[]
  			},

  		)
  }

  ionViewDidLoad() {
    
  }


  updateSelectedList(){
  	this.selectedList = [];
  	for(let service of this.appliancesServiceList){
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
