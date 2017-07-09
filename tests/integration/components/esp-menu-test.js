import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const {
  $
} = Ember;

moduleForComponent('esp-menu', 'Integration | Component | esp menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{esp-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#esp-menu}}
      template block text
    {{/esp-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders slide left menu', function(assert) {
  this.set('showLeftSlideMenu', false);

  this.on('showMenu', () => {
    let _property = this.get('showLeftSlideMenu');
    this.set('showLeftSlideMenu', !_property);
  });


  this.render(hbs`
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

  assert.equal(this.$('nav.cbp-spmenu-left').length, 1);
  this.$('#showLeft').click();
  assert.equal(this.$('nav.cbp-spmenu-left.cbp-spmenu-open').length, 1);
  this.$('#showLeft').click();
  assert.equal(this.$('nav.cbp-spmenu-left.cbp-spmenu-open').length, 0);

});

test('it renders slide right menu', function(assert) {
  this.set('showRightSlideMenu', false);

  this.on('toggleMenu', () => {
    let _property = this.get('showRightSlideMenu');
    this.set('showRightSlideMenu', !_property);
  });


  this.render(hbs`
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

  assert.equal(this.$('nav.cbp-spmenu-right').length, 1);
  this.$('#showLeft').click();
  assert.equal(this.$('nav.cbp-spmenu-right.cbp-spmenu-open').length, 1);
  this.$('#showLeft').click();
  assert.equal(this.$('nav.cbp-spmenu-right.cbp-spmenu-open').length, 0);

});

test('it renders slide top menu', function(assert) {
  this.set('showTopSlideMenu', false);

  this.on('toggleMenu', () => {
    let _property = this.get('showTopSlideMenu');
    this.set('showTopSlideMenu', !_property);
  });


  this.render(hbs`
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

  assert.equal(this.$('nav.cbp-spmenu-top').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-top.cbp-spmenu-open').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-top.cbp-spmenu-open').length, 0);

});

test('it renders slide bottom menu', function(assert) {
  this.set('showMenu', false);

  this.on('toggleMenu', () => {
    let _property = this.get('showMenu');
    this.set('showMenu', !_property);
  });


  this.render(hbs`
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

  assert.equal(this.$('nav.cbp-spmenu-bottom').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-bottom.cbp-spmenu-open').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-bottom.cbp-spmenu-open').length, 0);

});

test('it renders push left menu', function(assert) {
  this.set('showMenu', false);
  this.set('pushMenu', false);

  this.on('toggleMenu', () => {
    let _show = this.get('showMenu');
    let _push = this.get('pushMenu');
    this.set('showMenu', !_show);
    this.set('pushMenu', !_push);
  });


  this.render(hbs`
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

  assert.equal(this.$('nav.cbp-spmenu-left').length, 1);
  assert.equal($('body.cbp-spmenu-push').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-left.cbp-spmenu-open').length, 1);
  assert.equal($('body.cbp-spmenu-push.cbp-spmenu-push-toright').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-left.cbp-spmenu-open').length, 0);
  assert.equal($('body.cbp-spmenu-push.cbp-spmenu-push-toright').length, 0);

});

test('it renders push right menu', function(assert) {
  this.set('showMenu', false);
  this.set('pushMenu', false);

  this.on('toggleMenu', () => {
    let _show = this.get('showMenu');
    let _push = this.get('pushMenu');
    this.set('showMenu', !_show);
    this.set('pushMenu', !_push);
  });


  this.render(hbs`
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

  assert.equal(this.$('nav.cbp-spmenu-right').length, 1);
  assert.equal($('body.cbp-spmenu-push').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-right.cbp-spmenu-open').length, 1);
  assert.equal($('body.cbp-spmenu-push.cbp-spmenu-push-toleft').length, 1);
  this.$('#showMenu').click();
  assert.equal(this.$('nav.cbp-spmenu-right.cbp-spmenu-open').length, 0);
  assert.equal($('body.cbp-spmenu-push.cbp-spmenu-push-toleft').length, 0);

});
