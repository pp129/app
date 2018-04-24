//basic
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { IonicStorageModule } from "@ionic/storage";
import { HttpModule } from "@angular/http";
//page
import { AboutPage } from "../pages/about/about";
import { SettingPage } from "../pages/setting/setting";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
//native
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
//providers
import { BackButtonServiceProvider } from "../providers/back-button-service/back-button-service"; //安卓按两下返回退出程序
import { RestApiProvider } from "../providers/rest-api/rest-api"; //测试服务
//directives
import { ElasticHeader } from "../directives/elastic-header/elastic-header";
//components
import { ExpandableHeader } from '../components/expandable-header/expandable-header';
//others

//https://www.angular.cn/guide/ngmodule-faq

//1)、对于Component来说，必须import { IonicModule }，并在@NgModule的imports部分进行声明，其他的Directive和Pipe不需要；
//2)、因为是独立的模块，所以该模块需要依赖的第三方模块必须引入，并在@NgModule的imports部分进行声明，比如ngx-datatable、md2、ng2-tree相关的Module；
//3)、一个Component、Directive和Pipe，不能同时在有依赖关系的多个模块中进行declarations和exports，这本身就是一种重复引入，会造成冲突。所以这样在最顶级的模块app.module.ts中就要删掉对这些组件的declarations和exports。
@NgModule({
	//该应用所拥有的组件。
	declarations: [
		MyApp,
		AboutPage,
		SettingPage,
		HomePage,
		TabsPage,
		LoginPage,
		ExpandableHeader,
		ElasticHeader
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot(),
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		AboutPage,
		SettingPage,
		HomePage,
		TabsPage,
		LoginPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		BackButtonServiceProvider,
		RestApiProvider
	]
})
export class AppModule {}
