# ember-slide-push-menu

[![Build Status](https://travis-ci.org/rajasegar/ember-slide-push-menu.svg?branch=master)](https://travis-ci.org/rajasegar/ember-slide-push-menu) 
[![npm](https://img.shields.io/npm/dm/ember-slide-push-menu.svg)](https://www.npmjs.com/package/ember-slide-push-menu)
[![npm version](http://img.shields.io/npm/v/ember-slide-push-menu.svg?style=flat)](https://npmjs.org/package/ember-slide-push-menu "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![EmberObserver](http://emberobserver.com/badges/ember-slide-push-menu.svg?branch=master)](http://emberobserver.com/addons/ember-slide-push-menu)



Fixed menus that will slide out from the sides of the page and in case of the right and left side optionally move the body.

## Installation

```sh
ember install ember-slide-push-menu
```

## Demo
Coming soon

## Usage

Render the menu using the component 
```hbs
{{#esp-menu position="left" pushMenu=pushLeftMenu open=showLeftSlideMenu}}
  <h3>Menu</h3>
	<a href="#">Celery seakale</a>
	<a href="#">Dulse daikon</a>
	<a href="#">Zucchini garlic</a>
	<a href="#">Catsear azuki bean</a>
	<a href="#">Dandelion bunya</a>
	<a href="#">Rutabaga</a>
{{/esp-menu}}
```

Trigger the menu using a button
```hbs
<button onclick={{action 'toggleMenu' 'leftSlide'}}>Show/Hide Left Slide Menu</button>
```


## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
