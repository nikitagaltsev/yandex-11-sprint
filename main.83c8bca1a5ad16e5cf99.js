!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(t,n,r,o,i){var a,c,u,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u=function(){s.openImageCallback(s.link)},(c="onImageClick")in(a=this)?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,this.cardData=t,this.name=t.name,this.link=t.link,this.likes=t.likes,this.template=n,this.openImageCallback=r,this.openImageCallback=this.openImageCallback.bind(this),this.like=this.like.bind(this),this.remove=this.remove.bind(this),this.deleteCard=o,this.userId=i}var t,n,o;return t=e,(n=[{key:"like",value:function(e){e.target.classList.toggle("place-card__like-icon_liked")}},{key:"remove",value:function(e){this._view.querySelector(".place-card__like-icon").removeEventListener("click",this.like),this._view.querySelector(".place-card__delete-icon").removeEventListener("click",this.remove),this._view.querySelector(".place-card__image").removeEventListener("click",this.onImageClick),e.stopPropagation(),this._view.remove()}},{key:"create",value:function(){var e=this;return this._view=this.template.cloneNode(!0).children[0],this._view.querySelector(".place-card__name").textContent=this.name,this._view.querySelector(".place-card__image").setAttribute("style","background-image: url(".concat(this.link,")")),this._view.querySelector(".place-card__like-icon").addEventListener("click",this.like),this._view.querySelector(".place-card__image").addEventListener("click",this.onImageClick),this._view.querySelector(".place-card__like-counter").textContent=this.likes.length,this.cardData.owner._id===this.userId&&(this._view.querySelector(".place-card__delete-icon").style.display="block",this._view.querySelector(".place-card__delete-icon").addEventListener("click",(function(t){window.confirm("Что, вот прям удалить?")&&(e.deleteCard(e.cardData._id).then((function(){return e.remove(t)})).catch((function(e){return console.log(e)})),e.deleteCard(e.cardData._id),e.remove(t)),t.stopPropagation()}))),this._view}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t}var t,n,r;return t=e,(n=[{key:"addCard",value:function(e){this.container.append(e)}},{key:"render",value:function(e){var t=this;e.forEach((function(e){return t.addCard(e)}))}}])&&i(t.prototype,n),r&&i(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u,s,l,f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.form=t,this.button=this.form.querySelector(".popup__button"),this.checkInputValidity=this.checkInputValidity.bind(this),this.inputs=this.form.querySelectorAll(".popup__input")}var t,n,r;return t=e,(n=[{key:"setSubmitButtonState",value:function(e){e?(this.button.classList.remove("popup__button_active"),this.button.disabled=!0,this.button.style.cursor="not-allowed"):(this.button.classList.add("popup__button_active"),this.button.disabled=!1,this.button.style.cursor="pointer")}},{key:"checkFormValidity",value:function(){this.form.checkValidity()?this.setSubmitButtonState(!1):this.setSubmitButtonState(!0)}},{key:"checkInputValidity",value:function(t){var n=t.target,r=n.parentNode.querySelector("#error-".concat(n.id));"url"!==n.type&&0===n.value.length?(n.setCustomValidity(e._errorMessages.empty),this.checkFormValidity()):"url"!==n.type&&(n.validity.tooShort||n.validity.tooLong)?(n.setCustomValidity(e._errorMessages.length),this.checkFormValidity()):"url"==n.type&&n.validity.typeMismatch?(n.setCustomValidity(e._errorMessages.notUrl),this.checkFormValidity()):(n.setCustomValidity(""),this.checkFormValidity()),r.textContent=n.validationMessage}},{key:"setEventListeners",value:function(){var e=this;this.inputs.forEach((function(t){return t.addEventListener("input",e.checkInputValidity)}))}},{key:"resetErrors",value:function(){this.form.querySelectorAll(".error-message").forEach((function(e){e.textContent=""}))}}])&&c(t.prototype,n),r&&c(t,r),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}l={empty:"Это обязательное поле",length:"Должно быть от 2 до 30 символов",notUrl:"Введите ссылку"},(s="_errorMessages")in(u=f)?Object.defineProperty(u,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[s]=l;var d=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.userInfoName=t,this.userInfoJob=n,this.nameInput=r,this.jobInput=o}var t,n,r;return t=e,(n=[{key:"setUserInfo",value:function(e,t){this.name=e,this.job=t}},{key:"updateUserInputs",value:function(){this.nameInput.value=this.userInfoName.textContent,this.jobInput.value=this.userInfoJob.textContent}},{key:"updateUserInfo",value:function(){this.userInfoName.textContent=this.name,this.userInfoJob.textContent=this.job}}])&&h(t.prototype,n),r&&h(t,r),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t;var n=this.element.querySelector(".popup__close");this.close=this.close.bind(this),n.addEventListener("click",this.close)}var t,n,r;return t=e,(n=[{key:"open",value:function(){this.element.classList.add("popup_is-opened")}},{key:"close",value:function(){this.element.classList.remove("popup_is-opened")}}])&&p(t.prototype,n),r&&p(t,r),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n,r;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers})}},{key:"addCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})})}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers})}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})})}}])&&m(t.prototype,n),r&&m(t,r),e}();function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,o=w(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).image=e.querySelector(".popup__image-open"),t}return t=i,(n=[{key:"open",value:function(e){this.image.setAttribute("src",e),k(C(i.prototype),"open",this).call(this)}}])&&_(t.prototype,n),r&&_(t,r),i}(y);n(0);!function(){var e=document.querySelector(".places-list"),t=document.querySelector("#place-template").content,n=document.forms.place,r=document.forms.profile,i=document.querySelector(".user-info__photo"),c=document.querySelector(".user-info__name"),u=document.querySelector(".user-info__job"),s=r.elements.name,l=r.elements.about,h=n.elements.name,p=n.elements.link,m={id:""},b=new y(document.querySelector(".popup_person")),_=new y(document.querySelector(".popup_place")),k=new j(document.querySelector(".popup_image")),g=new d(c,u,s,l),w=new a(e),S=new f(r),C=new f(n);S.setEventListeners(),C.setEventListeners();var I=new v({baseUrl:"https://praktikum.tk/cohort11/",headers:{authorization:"f0b46149-76a0-417e-b09a-86d55af63e4b","Content-Type":"application/json"}});function E(e){k.open(e)}function O(e){return I.deleteCard(e).then((function(e){if(!e.ok)return Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}I.getUserInfo().then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){m.id=e._id,i.setAttribute("style","background-image: url(".concat(e.avatar,")")),g.setUserInfo(e.name,e.about),g.updateUserInfo()})).catch((function(e){console.log(e)})),I.getInitialCards().then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){var n=e.map((function(e){return new o(e,t,E,O,m.id).create()}));w.render(n)})).catch((function(e){console.log(e)})),document.querySelector(".user-info__edit-button").addEventListener("click",(function(e){g.updateUserInputs(),b.open(),S.resetErrors(),S.setSubmitButtonState()})),r.addEventListener("submit",(function(e){e.preventDefault(),I.editUserInfo(s.value,l.value).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){g.setUserInfo(e.name,e.about),g.updateUserInfo(),r.reset(),b.close()})).catch((function(e){console.log(e)}))})),document.querySelector(".user-info__button").addEventListener("click",(function(e){_.open(),n.reset(),C.resetErrors(),C.setSubmitButtonState(!0)})),n.addEventListener("submit",(function(e){e.preventDefault(),I.addCard(h.value,p.value).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).then((function(e){console.log(e),w.addCard(new o(e,t,E,O,m.id).create()),_.close()})).catch((function(e){console.log(e)}))}))}()}]);