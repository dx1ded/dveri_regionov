(()=>{var t={757:(t,e,r)=>{t.exports=r(666)},572:()=>{var t=document.querySelector(".burger"),e=document.querySelector("#burger-toggle");e.addEventListener("click",(function(){t.classList.toggle("burger--active")}))},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof y?e:y,o=Object.create(a.prototype),i=new P(n||[]);return o._invoke=function(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var _={};s(_,o,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(T([])));w&&w!==r&&n.call(w,o)&&(_=w);var x=g.prototype=y.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;this._invoke=function(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return m.prototype=g,s(x,"constructor",g),s(g,"constructor",m),m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),s(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(572);var t="http://localhost:5000",e=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(t).concat(e),r)};function n(t,e,r){e.innerHTML="",t.forEach((function(t){e.insertAdjacentHTML("beforeend",function(t){var e=t.id,r=t.type,n=t.name,a=t.price,o=t.image;return'\n  <article class="product">\n    <div class="product__image">\n      <img src="'.concat(o,'" alt="Изображение товара">\n    </div>\n    <div class="product__info">\n      <h4 class="product__name text text--md text--gray">').concat(n,'</h4>\n      <div class="product__wrapper">\n        <a href="/product?type=').concat(r,"&id=").concat(e,'" class="product__buy link-reset btn btn--md btn--primary">Купить</a>\n        <p class="product__price">от ').concat(a," р.</p>\n      </div>\n    </div>\n  </article>\n")}({id:t._id,type:r,name:t.name,price:t.price_opt,image:"https://dver.com/xml/images/".concat(t.articul,".jpeg")}))}))}var a=document.querySelector(".breadcrumbs__list"),o=function(){document.querySelector(".loader").remove()};function i(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function c(t){i(o,n,a,c,s,"next",t)}function s(t){i(o,n,a,c,s,"throw",t)}c(void 0)}))}}var s=r(757),u=r.n(s),l=document.querySelector(".pagination__list");function f(t){l.innerHTML="";var e=new URL(location.href).searchParams,r=+e.get("page");r>1&&(!function(t){l.insertAdjacentHTML("beforeend",'\n      <li class="pagination__item">\n        <a href="?'.concat(t,'" class="link-reset">\n          <svg>\n            <use xlink:href="assets/images/sprite.svg#arrow-left"></use>\n          </svg>\n        </a>\n      </li>\n    '))}((e.set("page",r-1),e.toString())),h((e.set("page",r-1),e.toString()),r-1)),h((e.set("page",r),e.toString()),r,!0),t&&(h((e.set("page",r+1),e.toString()),r+1),function(t){l.insertAdjacentHTML("beforeend",'\n      <li class="pagination__item">\n        <a href="?'.concat(t,'" class="link-reset">\n          <svg>\n            <use xlink:href="assets/images/sprite.svg#arrow-right"></use>\n          </svg>\n        </a>\n      </li>\n    '))}((e.set("page",r+1),e.toString())))}function h(t,e,r){l.insertAdjacentHTML("beforeend",'\n      <li class="pagination__item '.concat(r?"pagination__item--active":"",'">\n        <a href="?').concat(t,'" class="link-reset text text--sm">').concat(e,"</a>\n      </li>\n    "))}var p=function(t){return'\n  <h3 class="title title--xs title--primary filter__title">'.concat(t.title,"</h3>\n  ").concat(t.list?t.list.map((function(t){var e=t.name,r=t.key,n=t.value;return'\n    <div\n      class="filter-item"\n      data-key="'.concat(r,'"\n      data-value="').concat(n,'"\n    >\n      <span class="filter-item__display">').concat(e,'</span>\n      <div class="list-reset filter-item__brands"></div>\n    </div>\n  ')})).join(""):"","\n")},d={accessories:{title:"Погонаж"},doors:{title:"Межкомнатные двери",list:[{name:"Двери шпонированные",key:"coverage_type",value:"Шпон"},{name:"Двери эмаль",key:"coverage_type",value:"Эмаль"},{name:"Двери Экошпон, ПВХ",key:"coverage_type",value:"Экошпон"},{name:"Двери глянцевые",key:"coverage_type",value:"Глянцевое покрытие"},{name:"Двери INVISIBLE",key:"collection",value:"Серия INVISIBLE"}]},"iron-doors":{title:"Входные двери",list:[{name:"PROTECTOR готовые двери",key:"group",value:"Готовые вх. двери"},{name:"PROTECTOR с панелями",key:"group",value:"Вх. двери со сменными панелями"}]},furniture:{title:"Фурнитура",list:[{name:"Ручки дверные",key:"group",value:"Ручки дверные"},{name:"Фиксаторы",key:"parent_group",value:"Сантехнические фиксаторы"},{name:"Накладки под цилиндр",key:"parent_group",value:"Накладки под цилиндр"},{name:"Замки, защелки",key:"parent_group",value:"Замки, защелки"},{name:"Петли",key:"parent_group",value:"Петли"}]}},v=document.querySelector(".filter"),y=document.querySelector(".list__wrapper"),m="filter-item--active",g="filter-item__brand--active",_=new URL(location.href).searchParams,b=_.get("type");function w(){return(w=c(u().mark((function t(){var e,r,n,a,o;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v.insertAdjacentHTML("beforeend",p(d[b])),document.querySelectorAll(".filter-item__display").forEach((function(t){return t.addEventListener("click",(function(t){return x(t.target.parentElement)}))})),e=_.get("key"),r=_.get("value"),!(n=v.querySelector('[data-key="'.concat(e,'"][data-value="').concat(r,'"]')))){t.next=9;break}return t.next=9,x(n,!0);case 9:a=_.get("brand"),(o=v.querySelector('[data-brand="'.concat(a,'"]')))&&o.classList.add(g);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return L.apply(this,arguments)}function L(){return L=c(u().mark((function t(r,a){var o,i,c,s,l,h,p,d,g,_,w;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.querySelector(".filter-item__brands"),i=r.dataset.key,c=r.dataset.value,s=new URL(location.href),a||(s.searchParams.delete("brand"),s.searchParams.set("page",1)),s.searchParams.set("key",i),s.searchParams.set("value",c),history.pushState(null,"",s.toString()),(l=v.querySelector(".".concat(m)))&&(l.querySelector(".filter-item__brands").innerHTML="",l.classList.remove(m)),r.classList.add(m),t.next=13,e("/filter/getBrands?".concat(s.searchParams.toString()));case 13:return h=t.sent,t.next=16,h.json();case 16:if(p=t.sent,p.brands.forEach((function(t){var e=document.createElement("button");e.classList.add("btn-reset","filter-item__brand"),e.textContent=t.name,e.setAttribute("data-brand",t.name),e.addEventListener("click",(function(t){return k(t.target)})),o.appendChild(e)})),a){t.next=30;break}return t.next=22,e("/catalog/".concat(b,"?").concat(s.searchParams.toString()));case 22:return d=t.sent,t.next=25,d.json();case 25:g=t.sent,_=g.products,w=g.more,n(_,y,b),f(w);case 30:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function k(t){return S.apply(this,arguments)}function S(){return S=c(u().mark((function t(r){var a,o,i,c,s,l,h,p,d;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.textContent,o=new URL(location.href),(i=o.searchParams).set("brand",a),c=document.querySelector(".".concat(g)),s=null==c?void 0:c.textContent,!c||s!==a){t.next=10;break}return t.abrupt("return");case 10:c&&c.classList.remove(g);case 11:return r.classList.add(g),history.pushState(null,"",o.toString()),t.next=15,e("/catalog/".concat(b,"?").concat(i.toString()));case 15:return l=t.sent,t.next=18,l.json();case 18:h=t.sent,p=h.products,d=h.more,n(p,y,b),f(d);case 23:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}var E,j={doors:"Каталог дверей",accessories:"Каталог погонажа",furniture:"Каталог фурнитуры",arch:"Каталог арок","iron-doors":"Каталог железных дверей"},P=document.querySelector(".list"),T=document.querySelector(".list__container"),O=T.querySelector(".list__wrapper"),q=new URL(document.location).searchParams.get("type");E=[{name:"Главная",path:"/"},{name:"Каталог",path:"/catalog"},{name:j[q],path:"/catalog/".concat(q)}],a.innerHTML="",E.forEach((function(t){var e=t.name,r=t.path;a.insertAdjacentHTML("beforeend",'\n        <li class="breadcrumbs__item">\n          <a href="'.concat(r,'" class="link-reset text text--sm text--gray">').concat(e,"</a>\n        </li>\n      "))})),function(t,e){var r=document.createElement("div");r.classList.add("loader"),e&&(r.style.position="absolute"),t.appendChild(r)}(P),e("".concat({doors:"/catalog/doors",arch:"/catalog/arch",furniture:"/catalog/furniture",accessories:"/catalog/accessories","iron-doors":"/catalog/iron-doors"}[q]).concat(location.search)).then((function(t){return t.json()})).then((function(t){var e=t.products,r=t.more;o(),n(e,O,q),function(){w.apply(this,arguments)}(),f(r),document.title="".concat(j[q]," - Дверной Регион")})).catch((function(){o(),T.innerHTML="<h2 class='title title--xl' style='margin: 0 0 5rem'>Страница не найдена</h2>",document.title="Страница не найдена"}))})()})();