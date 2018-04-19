import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

@IonicPage()
@Component({
	selector: 'page-setting',
	templateUrl: 'setting.html',
})

export class SettingPage {

	public username: String;
	public userinfo: any;

	constructor(public modalCtrl: ModalController, public storage: Storage) {
	}

	ionViewDidLoad() {
		//console.log('ionViewDidLoad SettingPage');
		this.getInfo().subscribe(res => {
			this.userinfo = res
		});
		this.getUser().subscribe(res => {
			this.username = res
		});
		console.log(this.userinfo)
	}
	getInfo() {
		return Observable.fromPromise(this.storage.get('userinfo')
			.then((res) => {
				console.log(res)
				return res;
			}));
	}
	getUser() {
		return Observable.fromPromise(this.storage.get('username')
			.then((res) => {
				return res;
			}));
	}
	signOut() {
		this.storage.remove('username')
		this.storage.remove('userinfo')
		let modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}
	logOut() {
		this.storage.clear()
		let modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}
	versionControl() {

	}
}
