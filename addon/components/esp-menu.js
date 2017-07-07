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
    'open:cbp-spmenu-open'
  ],
  horizontal: false,
  vertical: computed.not('horizontal'),
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
