import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

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

export default class IndexController extends Controller {
  @tracked showLeftSlideMenu = false;
  @tracked showRightSlideMenu = false;
  @tracked showTopSlideMenu = false;
  @tracked showBottomSlideMenu = false;
  @tracked pushLeftMenu = false;
  @tracked pushRightMenu = false;

    @action
    toggleMenu(key) {
      this[MENU_PROPERTY_HASH[key]] = !this[MENU_PROPERTY_HASH[key]];
    }

    @action
    togglePushMenu(key) {
      this[MENU_PROPERTY_HASH[key]] =  !this[MENU_PROPERTY_HASH[key]];
      this[PUSH_MENU_PROPERTY_HASH[key]] = !this[PUSH_MENU_PROPERTY_HASH[key]];
    }


}
