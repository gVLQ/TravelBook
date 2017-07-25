import { Component } from '@angular/core';

/**
 * Generated class for the TbMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tb-menu',
  templateUrl: 'tb-menu.html'
})
export class TbMenuComponent {

  text: string;

  constructor() {
    console.log('Hello TbMenuComponent Component');
    this.text = 'Hello World';
  }

}
