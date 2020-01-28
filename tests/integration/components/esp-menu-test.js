import { click, find, findAll, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | esp menu', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('it renders', async function(assert) {

    await render(hbs`{{esp-menu}}`);

    assert.equal(find('*').textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#esp-menu}}
        template block text
      {{/esp-menu}}
    `);

    assert.equal(find('*').textContent.trim(), 'template block text');
  });

  test('it renders slide left menu', async function(assert) {
    this.set('showLeftSlideMenu', false);

    this.actions.showMenu = () => {
      let _property = this.get('showLeftSlideMenu');
      this.set('showLeftSlideMenu', !_property);
    };


    await render(hbs`
  {{#esp-menu position="left" open=showLeftSlideMenu }}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
              <button id="showLeft" onclick={{action 'showMenu' 'leftSlide'}}>Show/Hide Left Slide Menu</button>
  `);

    assert.equal(findAll('nav.cbp-spmenu-left').length, 1);
    await click('#showLeft');
    assert.equal(findAll('nav.cbp-spmenu-left.cbp-spmenu-open').length, 1);
    await click('#showLeft');
    assert.equal(findAll('nav.cbp-spmenu-left.cbp-spmenu-open').length, 0);

  });

  test('it renders slide right menu', async function(assert) {
    this.set('showRightSlideMenu', false);

    this.actions.toggleMenu = () => {
      let _property = this.get('showRightSlideMenu');
      this.set('showRightSlideMenu', !_property);
    };


    await render(hbs`
  {{#esp-menu position="right" open=showRightSlideMenu }}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
              <button id="showLeft" onclick={{action 'toggleMenu' }}>Show/Hide Right Slide Menu</button>
  `);

    assert.equal(findAll('nav.cbp-spmenu-right').length, 1);
    await click('#showLeft');
    assert.equal(findAll('nav.cbp-spmenu-right.cbp-spmenu-open').length, 1);
    await click('#showLeft');
    assert.equal(findAll('nav.cbp-spmenu-right.cbp-spmenu-open').length, 0);

  });

  test('it renders slide top menu', async function(assert) {
    this.set('showTopSlideMenu', false);

    this.actions.toggleMenu = () => {
      let _property = this.get('showTopSlideMenu');
      this.set('showTopSlideMenu', !_property);
    };


    await render(hbs`
  {{#esp-menu horizontal=true position="top" open=showTopSlideMenu }}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
              <button id="showMenu" onclick={{action 'toggleMenu' }}>Show/Hide Slide Menu</button>
  `);

    assert.equal(findAll('nav.cbp-spmenu-top').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-top.cbp-spmenu-open').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-top.cbp-spmenu-open').length, 0);

  });

  test('it renders slide bottom menu', async function(assert) {
    this.set('showMenu', false);

    this.actions.toggleMenu = () => {
      let _property = this.get('showMenu');
      this.set('showMenu', !_property);
    };


    await render(hbs`
  {{#esp-menu horizontal=true position="bottom" open=showMenu }}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
              <button id="showMenu" onclick={{action 'toggleMenu' }}>Show/Hide Slide Menu</button>
  `);

    assert.equal(findAll('nav.cbp-spmenu-bottom').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-bottom.cbp-spmenu-open').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-bottom.cbp-spmenu-open').length, 0);

  });

  test('it renders push left menu', async function(assert) {
    this.set('showMenu', false);
    this.set('pushMenu', false);

    this.actions.toggleMenu = () => {
      let _show = this.get('showMenu');
      let _push = this.get('pushMenu');
      this.set('showMenu', !_show);
      this.set('pushMenu', !_push);
    };


    await render(hbs`
  {{#esp-menu position="left" pushMenu=pushMenu open=showMenu }}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
              <button id="showMenu" onclick={{action 'toggleMenu' }}>Show/Hide Push Menu</button>
  `);

    assert.equal(findAll('nav.cbp-spmenu-left').length, 1);
    assert.equal(document.querySelectorAll('body.cbp-spmenu-push').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-left.cbp-spmenu-open').length, 1);
    assert.equal(document.querySelectorAll('body.cbp-spmenu-push.cbp-spmenu-push-toright').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-left.cbp-spmenu-open').length, 0);
    assert.equal(document.querySelectorAll('body.cbp-spmenu-push.cbp-spmenu-push-toright').length, 0);

  });

  test('it renders push right menu', async function(assert) {
    this.set('showMenu', false);
    this.set('pushMenu', false);

    this.actions.toggleMenu = () => {
      let _show = this.get('showMenu');
      let _push = this.get('pushMenu');
      this.set('showMenu', !_show);
      this.set('pushMenu', !_push);
    };


    await render(hbs`
  {{#esp-menu position="right" pushMenu=pushMenu open=showMenu }}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
              <button id="showMenu" onclick={{action 'toggleMenu' }}>Show/Hide Push Menu</button>
  `);

    assert.equal(findAll('nav.cbp-spmenu-right').length, 1);
    assert.equal(document.querySelectorAll('body.cbp-spmenu-push').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-right.cbp-spmenu-open').length, 1);
    assert.equal(document.querySelectorAll('body.cbp-spmenu-push.cbp-spmenu-push-toleft').length, 1);
    await click('#showMenu');
    assert.equal(findAll('nav.cbp-spmenu-right.cbp-spmenu-open').length, 0);
    assert.equal(document.querySelectorAll('body.cbp-spmenu-push.cbp-spmenu-push-toleft').length, 0);

  });

  test('it renders menu with custom classnames', async function(assert) {

    await render(hbs`
  {{#esp-menu position="right"  open=showMenu customClasses='my-custom-menu'}}
    <h3>Menu</h3>
      <a href="#">Celery seakale</a>
      <a href="#">Dulse daikon</a>
      <a href="#">Zucchini garlic</a>
      <a href="#">Catsear azuki bean</a>
      <a href="#">Dandelion bunya</a>
      <a href="#">Rutabaga</a>
  {{/esp-menu}}
  `);

    assert.equal(findAll('nav.cbp-spmenu-right').length, 1);
    assert.equal(findAll('nav.cbp-spmenu-right.my-custom-menu').length, 1);

  });
});
