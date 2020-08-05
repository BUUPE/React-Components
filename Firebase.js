require("source-map-support").install(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Firebase",[],t):"object"==typeof exports?exports.Firebase=t():e.Firebase=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=3)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t),r.d(t,"FirebaseContext",(function(){return s})),r.d(t,"withFirebase",(function(){return f})),r.d(t,"getFirebase",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=o.a.createContext(null),f=function(e){return function(t){return o.a.createElement(a.Consumer,null,(function(r){return o.a.createElement(e,u(u({},t),{},{firebase:r}))}))}},s=a;function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r,n,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h,O=function e(t,r){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"doSignInWithToken",(function(e){return n.auth.signInWithCustomToken(e)})),d(this,"doSignOut",(function(){return n.auth.signOut().then((function(){return localStorage.removeItem("authUser")}))})),d(this,"getIdToken",(function(){return n.auth.currentUser?n.auth.currentUser.getIdToken():new Promise((function(e){return e(null)}))})),d(this,"onAuthUserListener",(function(e,t){return n.auth.onAuthStateChanged((function(r){r?n.user(r.uid).get().then(function(){var t,o=(t=regeneratorRuntime.mark((function t(o){var i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.exists){t.next=10;break}if((i=o.data()).hasOwnProperty("roles")){t.next=6;break}return i.roles={guest:!0},t.next=6,n.user(r.uid).update(i);case 6:r=p({uid:r.uid,email:r.email,emailVerified:r.emailVerified,providerData:r.providerData},i),e(r),t.next=12;break;case 10:u={roles:{guest:!0}},n.user(r.uid).set(u).then((function(){r=p({uid:r.uid,email:r.email,emailVerified:r.emailVerified,providerData:r.providerData},u),e(r)}));case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(e){b(i,n,o,u,c,"next",e)}function c(e){b(i,n,o,u,c,"throw",e)}u(void 0)}))});return function(e){return o.apply(this,arguments)}}()).catch(console.error):t()}))})),d(this,"user",(function(e){return n.firestore.doc("users/".concat(e))})),d(this,"users",(function(){return n.firestore.collection("users")})),!r)throw new Error("No Firebase config given!");t.initializeApp(r),this.auth=t.auth(),this.firestore=t.firestore()},y=function(e,t){return h||(h=new O(e,t)),h},g=O;t.default=g},,function(e,t,r){e.exports=r(1)}])}));
//# sourceMappingURL=Firebase.js.map