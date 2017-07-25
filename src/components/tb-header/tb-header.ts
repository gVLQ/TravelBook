import { Component } from '@angular/core';

/**
 * Generated class for the TbHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tb-header',
  templateUrl: 'tb-header.html'
})
export class TbHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello TbHeaderComponent Component');
    this.text = 'Hello World';
  }

}
