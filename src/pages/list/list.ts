import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Content } from "ionic-angular";
import { RestApiProvider } from "../../providers/rest-api/rest-api";
import { LoadingController } from "ionic-angular";

//import { ElasticHeaderDirective } from "../../directives/elastic-header/elastic-header";
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-list",
	templateUrl: "list.html"
})
export class ListPage {
	data: any;
	users: string[];
	errorMessage: string;
	page = 1;
	perPage = 10;
	totalData = 0;
	totalPage = 0;
	myParam: string;
	title: string;
	loader: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public restApi: RestApiProvider,
		public loading: LoadingController
	) {}

	@ViewChild(Content) content: Content;

	ionViewDidLoad() {
		//console.log('ionViewDidLoad ListPage');
		this.loader = this.loading.create({
			content: "数据加载中..."
		});
		this.loader.present().then(() => {
			this.getUsers();
		});
		this.myParam = this.navParams.get("menuName");
		this.title = this.navParams.get("title");
	}
	getUsers() {
		this.restApi.getUsers(this.page, this.perPage).subscribe(res => {
			//console.log(res)
			this.data = res["data"].res;
			this.users = this.data.data;
			//this.perPage = this.data.per_page;
			this.totalData = this.data.total;
			this.totalPage = this.data.total_pages;
			this.loader.dismiss();
		}, error => (this.errorMessage = <any>error));
	}
	doRefresh(refresher) {
		console.log("DOREFRESH", refresher);
		this.users = [];
		setTimeout(() => {
			this.restApi.getUsers(1, this.perPage).subscribe(res => {
				///console.log(res)
				this.data = res["data"].res;
				//this.perPage = this.data.per_page;
				this.totalData = this.data.total;
				this.totalPage = this.data.total_pages;
				for (let i = 0; i < this.data.data.length; i++) {
					this.users.push(this.data.data[i]);
				}
			}, error => (this.errorMessage = <any>error));

			console.log("Async operation has ended");
			refresher.complete();
		}, 1000);
	}

	doInfinite(infiniteScroll) {
		this.page = this.page + 1;
		setTimeout(() => {
			this.restApi.getUsers(this.page, this.perPage).subscribe(res => {
				//console.log(res)
				this.data = res["data"].res;
				//this.perPage = this.data.per_page;
				this.totalData = this.data.total;
				this.totalPage = this.data.total_pages;
				for (let i = 0; i < this.data.data.length; i++) {
					this.users.push(this.data.data[i]);
				}
			}, error => (this.errorMessage = <any>error));

			//console.log('Async operation has ended');
			infiniteScroll.complete();
		}, 1000);
	}
}
