import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-res",
	templateUrl: "res.html"
})
export class ResPage {
	param: any;
	paramJson:String;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.param = this.navParams.get("param")
		this.paramJson = JSON.stringify(this.param);
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ResPage");
	}
}
