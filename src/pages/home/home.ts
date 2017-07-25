import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlanATripPage } from '../plan-a-trip/plan-a-trip';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openPlanATripPage() {
    this.navCtrl.push(PlanATripPage);
  }
}
