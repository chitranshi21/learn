import { Component,NgZone,ViewChild } from '@angular/core';
import { NavController, NavParams,Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ProfilePage } from '../profile/profile';

import * as io from 'socket.io-client';

/*
  Generated class for the Chat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
	@ViewChild(Content) content: Content;
	messages: any = [];
	name: string;
	socketHost: String = "http://localhost:3000";
	socket: any;
	chat: any;
	zone:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  		this.socket = io.connect(this.socketHost);
    	this.zone = new NgZone({enableLongStackTrace:false});
      this.socket.on("history", (msg)=> {
        this.zone.run(()=>{
          this.messages.push.apply(this.messages,msg);
          setTimeout(() =>{
            this.content.scrollToBottom(300);
          }
          , 300);
          // this.content.scrollToBottom(300);
        });
      });
    	this.socket.on("chat message", (msg) => {
    	this.zone.run(() =>{
    		this.messages.push(msg);
        setTimeout(() =>{
            this.content.scrollToBottom(300);
          }
          , 300);
    		// this.content.scrollToBottom(300);
    	});
    })
  }

  ionViewDidLoad() {

    
  }
  ionViewDidEnter(){
  	this.checkForAccountDetail();
  }
  checkForAccountDetail(){
  	 this.storage.get("name").then((data)=> {
  		if(data === null){
  			console.log("data value is null");
  		this.navCtrl.parent.select(1, {
  			message: "please enter a name first",
  		});
  		}
  		else{
  			this.name = data;

  		}
  	});
  }
  chatSend(){
  		this.storage.get("name").then((data)=> {
  		if(data === null){
  			console.log("data value is null");
  		this.navCtrl.parent.select(1, {
  			message: "please enter a name first",
  		});
  		}
  		else{
  			this.name = data;
  			let m = {
  			message: this.chat,
  			username: this.name,
  		}
  		this.socket.emit('new message', m);
      this.chat = "";

  		}
  	});
  		
  	}


}
