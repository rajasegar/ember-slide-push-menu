/**
   esp-menu component
   The Main menu component to render the slide and push menus

   @class esp-menu
*/


import Ember from 'ember';
import layout from '../templates/components/esp-menu';

const {
  Component,
  computed,
  $
} = Ember;

const BODY_PUSH_CLASS = {
  'left': 'cbp-spmenu-push-toright',
  'right': 'cbp-spmenu-push-toleft',
  'top': null,
  'bottom': null
};

export default Component.extend({
  layout,
  tagName: 'nav',
  classNames: ['cbp-spmenu'],
  classNameBindings: [
    'horizontal:cbp-spmenu-horizontal',
    'vertical:cbp-spmenu-vertical',
    'positionClass',
    'open:cbp-spmenu-open',
    'customClasses'
  ],

  /**
     Boolean flag to set the menu to horizontal or vertical style

     @public
     @property horizontal
     @type { Boolean }
     @default false
  */

  horizontal: false,
  /**
     Boolean computed prperty based on the negative value of horizontal

     @public
     @property vertical
     @type { Computed }
  */

  vertical: computed.not('horizontal'),
  /**
     Boolean flag to render the menu as either slide or push menu

     - pushMenu = true => Renders Push Menu

     - pushMenu = false => Renders Slide Menu (Default behaviour)

     @public
     @property pushMenu
     @type { Boolean }
     @default false
  */

  pushMenu: false,
  positionClass: computed('position', function() {
    return `cbp-spmenu-${this.get('position')}`;
  }),

  bodyClass: computed('position', function() {
    return BODY_PUSH_CLASS[this.get('position')];
  }),

  didInsertElement() {
    this._super(...arguments);
    $('body').addClass('cbp-spmenu-push');
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.updateBodyClass();
  },

  updateBodyClass() {
    let _bodyClass = this.get('bodyClass');
    // Clean up
    $('body').removeClass('cbp-spmenu-push-toleft');
    $('body').removeClass('cbp-spmenu-push-toright');
    if(this.get('pushMenu')) {
      $('body').addClass(_bodyClass);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    $('body').removeClass('cbp-spmenu-push');
  }

});
