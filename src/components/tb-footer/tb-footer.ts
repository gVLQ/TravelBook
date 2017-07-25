import { Component } from '@angular/core';

/**
 * Generated class for the TbFooterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tb-footer',
  templateUrl: 'tb-footer.html'
})
export class TbFooterComponent {

  text: string;

  constructor() {
    console.log('Hello TbFooterComponent Component');
    this.text = 'Hello World';
  }

}
