import {Component} from '@angular/core';
import {NavController,Loading} from 'ionic-angular';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  }

  presentLoading(){
  	let loading = Loading.create({
  		content:"Please wait",
  		duration: 3000,
  		dismissOnPageChange:true
  		});
  	this.navCtrl.present(loading);

  	setTimeout(()=>{
  		loading.dismiss();
  		},3000);
  }


}
