import Controller from '@ember/controller';

const MENU_PROPERTY_HASH = {
  'leftSlide': 'showLeftSlideMenu',
  'rightSlide': 'showRightSlideMenu',
  'topSlide': 'showTopSlideMenu',
  'bottomSlide': 'showBottomSlideMenu'
};

const PUSH_MENU_PROPERTY_HASH = {
  'leftSlide': 'pushLeftMenu',
  'rightSlide': 'pushRightMenu'
};

export default Controller.extend({
  showLeftSlideMenu: false,
  showRightSlideMenu: false,
  showTopSlideMenu: false,
  pushLeftMenu: false,
  pushRightMenu: false,

  actions: {
    toggleMenu(key) {
      this.toggleProperty(MENU_PROPERTY_HASH[key]);
    },

    togglePushMenu(key) {
      this.toggleProperty(MENU_PROPERTY_HASH[key]);
      this.toggleProperty(PUSH_MENU_PROPERTY_HASH[key]);
    }

  }

});
