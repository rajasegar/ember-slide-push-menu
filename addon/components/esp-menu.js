/**
   esp-menu component
   The Main menu component to render the slide and push menus

   @class esp-menu
*/


import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const BODY_PUSH_CLASS = {
  'left': 'cbp-spmenu-push-toright',
  'right': 'cbp-spmenu-push-toleft',
  'top': null,
  'bottom': null
};

export default class EspMenuComponent extends Component {

  get classNames() {
    let str = 'cbp-spmenu ';
    str += this.args.horizontal ? ' cbp-spmenu-horizontal' : '';
    str += this.vertical ? ' cbp-spmenu-vertical' : '';
    str += ' ' + this.positionClass || '';
    str += this.args.open ? ' cbp-spmenu-open' : '';
    str += ' ' + this.args.customClasses || '';
    return str;
  }

  /**
     Boolean computed prperty based on the negative value of horizontal

     @public
     @property vertical
     @type { Computed }
  */

  @tracked vertical = !this.args.horizontal;
  /**
     Boolean flag to render the menu as either slide or push menu

     - pushMenu = true => Renders Push Menu

     - pushMenu = false => Renders Slide Menu (Default behaviour)

     @public
     @property pushMenu
     @type { Boolean }
     @default false
  */

  @tracked positionClass = `cbp-spmenu-${this.args.position}`;


  addBodyClass() {
    document.body.classList.add('cbp-spmenu-push');
  }

  updateBodyClass(element, [position, pushMenu]) {
    let _bodyClass = BODY_PUSH_CLASS[position];
    // Clean up
    document.body.classList.remove('cbp-spmenu-push-toleft');
    document.body.classList.remove('cbp-spmenu-push-toright');
    if(pushMenu) {
      document.body.classList.add(_bodyClass);
    }
  }

  removePushClass() {
    document.body.classList.remove('cbp-spmenu-push');
  }

}
