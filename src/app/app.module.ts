import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlanATripPage } from '../pages/plan-a-trip/plan-a-trip';
import { TbMenuComponent } from '../components/tb-menu/tb-menu';
import { TbHeaderComponent } from '../components/tb-header/tb-header';
import { TbFooterComponent } from '../components/tb-footer/tb-footer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlanATripPage,
    TbMenuComponent,
    TbHeaderComponent,
    TbFooterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlanATripPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
