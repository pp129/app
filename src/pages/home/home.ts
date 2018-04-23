import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	params: Object;
	list: any;
	menuItems: any;
	first:boolean;
	constructor(public navCtrl: NavController) {
		this.list = 'ListPage';
		this.params = { id: 42 };
		this.first=true;
		this.menuItems = [{
			name:'接单管理',
			icon:'document',
			url:this.list,
			param:{menuName:'recbill',title:'接单管理'},
			color:'secondary'
		},{
			name:'出车管理',
			icon:'car',
			url:this.list,
			param:{menuName:'outcar',title:'出车管理'},
			color:'primary'
		},{
			name:'我的任务',
			icon:'list',
			url:this.list,
			param:{menuName:'mymission',title:'我的任务'},
			color:'danger'
		},{
			name:'自定义图标',
			icon:'qq-outline',
			url:'',
			param:{menuName:'',title:''},
			color:''
		},{
			name:'',
			icon:'',
			url:'',
			param:{menuName:'',title:''},
			color:''
		},{
			name:'',
			icon:'',
			url:'',
			param:{menuName:'',title:''},
			color:''
		},{
			name:'',
			icon:'',
			url:'',
			param:{menuName:'',title:''},
			color:''
		},{
			name:'',
			icon:'',
			url:'',
			param:{menuName:'',title:''},
			color:''
		},{
			name:'',
			icon:'',
			url:'',
			param:{menuName:'',title:''},
			color:''
		}];
	}

}
