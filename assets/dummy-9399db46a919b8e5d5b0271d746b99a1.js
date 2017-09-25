"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0})
var i=void 0
Ember.MODEL_FACTORY_INJECTIONS=!0,i=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default}),(0,n.default)(i,a.default.modulePrefix),e.default=i}),define("dummy/components/esp-menu",["exports","ember-slide-push-menu/components/esp-menu"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t={leftSlide:"showLeftSlideMenu",rightSlide:"showRightSlideMenu",topSlide:"showTopSlideMenu",bottomSlide:"showBottomSlideMenu"},n={leftSlide:"pushLeftMenu",rightSlide:"pushRightMenu"}
e.default=Ember.Controller.extend({showLeftSlideMenu:!1,showRightSlideMenu:!1,showTopSlideMenu:!1,pushLeftMenu:!1,pushRightMenu:!1,actions:{toggleMenu:function(e){this.toggleProperty(t[e])},togglePushMenu:function(e){this.toggleProperty(t[e]),this.toggleProperty(n[e])}}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,i=t.default.exportApplicationGlobal
a="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){}),e.default=n}),define("dummy/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"9VmJVqgF",block:'{"symbols":[],"statements":[[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"U4T6eS8L",block:'{"symbols":[],"statements":[[4,"esp-menu",null,[["position","pushMenu","open","customClasses"],["left",[19,0,["pushLeftMenu"]],[19,0,["showLeftSlideMenu"]],"my-custom-menu"]],{"statements":[[0,"  "],[6,"h3"],[7],[0,"Menu"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Celery seakale"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dulse daikon"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Zucchini garlic"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Catsear azuki bean"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dandelion bunya"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Rutabaga"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"esp-menu",null,[["position","pushMenu","open"],["right",[19,0,["pushRightMenu"]],[19,0,["showRightSlideMenu"]]]],{"statements":[[0,"\\t"],[6,"h3"],[7],[0,"Menu"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Celery seakale"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dulse daikon"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Zucchini garlic"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Catsear azuki bean"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dandelion bunya"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Rutabaga"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"esp-menu",null,[["horizontal","position","open"],[true,"top",[19,0,["showTopSlideMenu"]]]],{"statements":[[0,"\\t"],[6,"h3"],[7],[0,"Menu"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Celery seakale"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dulse daikon"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Zucchini garlic"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Catsear azuki bean"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dandelion bunya"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Rutabaga"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Celery seakale"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dulse daikon"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Zucchini garlic"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Catsear azuki bean"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dandelion bunya"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Rutabaga"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"esp-menu",null,[["horizontal","position","open"],[true,"bottom",[19,0,["showBottomSlideMenu"]]]],{"statements":[[0,"\\t"],[6,"h3"],[7],[0,"Menu"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Celery seakale"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dulse daikon"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Zucchini garlic"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Catsear azuki bean"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dandelion bunya"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Rutabaga"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Celery seakale"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dulse daikon"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Zucchini garlic"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Catsear azuki bean"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Dandelion bunya"],[8],[0,"\\n\\t"],[6,"a"],[9,"href","#"],[7],[0,"Rutabaga"],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[6,"div"],[9,"class","container"],[7],[0,"\\n\\t"],[6,"header"],[9,"class","clearfix"],[7],[0,"\\n\\t\\t"],[6,"h1"],[7],[0,"Ember Slide and Push Menus"],[8],[0,"\\n\\t"],[8],[0,"\\n\\t"],[6,"div"],[9,"class","main"],[7],[0,"\\n    "],[6,"p"],[7],[6,"a"],[9,"href","docs"],[7],[0,"Documentation"],[8],[8],[0,"\\n\\t\\t"],[6,"section"],[7],[0,"\\n\\t\\t\\t"],[6,"h2"],[7],[0,"Slide Menus"],[8],[0,"\\n\\t\\t\\t"],[2," Class \\"cbp-spmenu-open\\" gets applied to menu "],[0,"\\n\\t\\t\\t"],[6,"button"],[9,"id","showLeft"],[10,"onclick",[25,"action",[[19,0,[]],"toggleMenu","leftSlide"],null],null],[7],[0,"Show/Hide Left Slide Menu"],[8],[0,"\\n\\t\\t\\t"],[6,"button"],[9,"id","showRight"],[10,"onclick",[25,"action",[[19,0,[]],"toggleMenu","rightSlide"],null],null],[7],[0,"Show/Hide Right Slide Menu"],[8],[0,"\\n\\t\\t\\t"],[6,"button"],[9,"id","showTop"],[10,"onclick",[25,"action",[[19,0,[]],"toggleMenu","topSlide"],null],null],[7],[0,"Show/Hide Top Slide Menu"],[8],[0,"\\n\\t\\t\\t"],[6,"button"],[9,"id","showBottom"],[10,"onclick",[25,"action",[[19,0,[]],"toggleMenu","bottomSlide"],null],null],[7],[0,"Show/Hide Bottom Slide Menu"],[8],[0,"\\n\\t\\t"],[8],[0,"\\n\\t\\t"],[6,"section"],[9,"class","buttonset"],[7],[0,"\\n\\t\\t\\t"],[6,"h2"],[7],[0,"Push Menus"],[8],[0,"\\n\\t\\t\\t"],[2," Class \\"cbp-spmenu-open\\" gets applied to menu and \\"cbp-spmenu-push-toleft\\" or \\"cbp-spmenu-push-toright\\" to the body "],[0,"\\n\\t\\t\\t"],[6,"button"],[9,"id","showLeftPush"],[10,"onclick",[25,"action",[[19,0,[]],"togglePushMenu","leftSlide"],null],null],[7],[0,"Show/Hide Left Push Menu"],[8],[0,"\\n\\t\\t\\t"],[6,"button"],[9,"id","showRightPush"],[10,"onclick",[25,"action",[[19,0,[]],"togglePushMenu","rightSlide"],null],null],[7],[0,"Show/Hide Right Push Menu"],[8],[0,"\\n\\t\\t"],[8],[0,"\\n\\t"],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",["ember"],function(e){try{var t="dummy/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),a=JSON.parse(unescape(n)),i={default:a}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({})
