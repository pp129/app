import { ListPage } from './../pages/list/list';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { SettingPage } from '../pages/setting/setting';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackButtonServiceProvider } from '../providers/back-button-service/back-button-service';
import { RestApiProvider } from '../providers/rest-api/rest-api';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingPage,
    HomePage,
    TabsPage,
    LoginPage,
    ListPage
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
    LoginPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BackButtonServiceProvider,
    RestApiProvider
  ]
})
export class AppModule { }
