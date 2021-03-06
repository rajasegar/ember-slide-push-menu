# ember-slide-push-menu

![Build and Deploy](https://github.com/rajasegar/ember-slide-push-menu/workflows/CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-slide-push-menu/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-slide-push-menu?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-slide-push-menu.svg?style=flat)](https://npmjs.org/package/ember-slide-push-menu "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-slide-push-menu.svg?branch=master)](http://emberobserver.com/addons/ember-slide-push-menu)

Fixed menus that will slide out from the sides of the page and in case of the right and left side optionally move the body.

Inspired by this Codrops [article](https://tympanus.net/codrops/2013/04/17/slide-and-push-menus/)

```sh
ember install ember-slide-push-menu
```

## Demo

[Demo](https://rajasegar.github.io/ember-slide-push-menu/)

## Usage

### Render the menu using the component

```hbs
<EspMenu @position="left" @open={{showLeftSlideMenu}}>
  <h3>Menu</h3>
	<a href="#">Celery seakale</a>
	<a href="#">Dulse daikon</a>
	<a href="#">Zucchini garlic</a>
	<a href="#">Catsear azuki bean</a>
	<a href="#">Dandelion bunya</a>
	<a href="#">Rutabaga</a>
</EspMenu>
```

### Trigger the menu using a button

```hbs
<button {{ on "click" (fn this.toggleMenu 'showLeftSlideMenu')}}>Show/Hide Left Slide Menu</button>
```

### Toggle the property set in your component/route/controller

```js
import { action } from '@ember/object';

export default class IndexController extends Controller {
  showLeftSlideMenu =  false;

  @action
    toggleMenu() {
      this.showLeftSlideMenu = !this.showLeftSlideMenu;
    }

}

```

### Use custom class

```hbs
<EspMenu @position="left" @pushMenu={{pushLeftMenu}} @open={{showLeftSlideMenu}} @customClasses="my-custom-menu">
  <h3>Menu</h3>
	<a href="#">Celery seakale</a>
	<a href="#">Dulse daikon</a>
	<a href="#">Zucchini garlic</a>
	<a href="#">Catsear azuki bean</a>
	<a href="#">Dandelion bunya</a>
	<a href="#">Rutabaga</a>
</EspMenu>
```

### Customizing with your class for the menus

```css
/* Custom classes */
.my-custom-menu {
	  background: red;
}

.my-custom-menu h3 {
	  color: yellow;
	  font-size: 1.9em;
	  padding: 20px;
	  margin: 0;
	  font-weight: 300;
	  background: maroon;
}

.my-custom-menu a {
	  display: block;
	  color: yellow;
	  font-size: 1.1em;
	  font-weight: 300;
}

.my-custom-menu a:hover {
	  background: lightred;
}

.my-custom-menu a:active {
	  background: maroon;
	  color: pink;
}

```

## Running

-   `ember serve`
-   Visit your app at <http://localhost:4200>.

## Running Tests

-   `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
-   `ember test`
-   `ember test --server`

## Building

-   `ember build`

For more information on using ember-cli, visit <https://ember-cli.com/>.
See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
