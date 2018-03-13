import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Platform } from 'ionic-angular';
import { BackButtonServiceProvider } from '../../providers/back-button-service/back-button-service';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	public remember: boolean;
	public users: any;

	constructor(public modalCtrl: ModalController,
		private backButtonService: BackButtonServiceProvider,
		private platform: Platform,
		private http: Http,
		private storage: Storage,
		public toastCtrl: ToastController) {

		platform.ready().then(() => {
			this.backButtonService.registerBackButtonAction(null);
		});
	}

	ionViewDidLoad() {
		this.users = {
			"username": "",
			"password": ""
		}
		this.getRes('remember').subscribe(data => {
			console.log(data)
			if (data!=null) {
				this.remember = data;
				this.getRes('username-r').subscribe(res => {
					console.log(res)
					this.users.username = res
				});
				if (data == true) {
					this.getRes('password-r').subscribe(val => {
						this.users.password = val;
					});
				} else {
					this.users.password = null;
				}
			}
		});
	}

	logIn(username: HTMLInputElement, password: HTMLInputElement) {
		// this.storage.set('username', username.value);
		// this.storage.set('userinfo', res.json()[i]);
		// let modal = this.modalCtrl.create(TabsPage);
		// modal.present();
		if (username.value.length == 0) {
			alert("请输入账号");
		} else if (password.value.length == 0) {
			alert("请输入密码");
		} else {
			//var type;
			this.http.get("assets/json/user.json").subscribe((res: Response) => {
				var users = [];
				var hasUser = false;
				var userinfo;
				for (const i of res.json()) {
					users.push(i.username)
					for (var j = 0; j < users.length; j++) {
						if (users[j] == username.value) {
							hasUser = true
						}
						if (hasUser) {
							if (username.value == i.username) {
								userinfo = i
							}
						}
					}
				}
				if (hasUser) {
					if (userinfo.password == password.value) {
						this.storage.set('username', username.value);
						this.storage.set('userinfo', userinfo);
						console.log(this.remember)
						if (this.remember) {
							this.storage.set('username-r', username.value)
							this.storage.set('remember', true);
							this.storage.set('password-r', password.value);
						} else {
							//this.storage.remove('username-r')
							this.storage.set('username-r', username.value)
							this.storage.remove('password-r')
							this.storage.set('remember', false);
						}
						let modal = this.modalCtrl.create(TabsPage);
						modal.present();
					} else {
						this.presentToast('密码错误')
					}
				} else {
					this.presentToast('不存在此用户')
				}
			})
		}
	}

	presentToast(text) {
		var message = text;
		let toast = this.toastCtrl.create({
			message: message,
			duration: 3000,
			position: 'middle'
		});
		toast.present();
	}

	ifRemember(username: HTMLInputElement, password: HTMLInputElement) {
		console.log("Toggled: " + this.remember);
	}
	getRes(el) {
		return Observable.fromPromise(this.storage.get(el)
			.then((res) => {
				return res;
			}));
	}
}
