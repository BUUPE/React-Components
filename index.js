require("source-map-support").install(),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("upe-react-components",[],t):"object"==typeof exports?exports["upe-react-components"]=t():e["upe-react-components"]=t()}(this,(function(){return function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&s.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(a&&a(t);s.length;)s.shift()()}var r={},n={0:0};function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var i=this.webpackJsonpupe_react_components=this.webpackJsonpupe_react_components||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var a=u;return o(o.s=20)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("core-js/modules/es.symbol")},function(e,t){e.exports=require("core-js/modules/es.object.to-string")},function(e,t){e.exports=require("core-js/modules/es.symbol.description")},function(e,t){e.exports=require("core-js/modules/es.symbol.iterator")},function(e,t){e.exports=require("core-js/modules/es.array.concat")},function(e,t){e.exports=require("core-js/modules/es.array.iterator")},function(e,t){e.exports=require("core-js/modules/es.object.get-prototype-of")},function(e,t){e.exports=require("core-js/modules/es.object.set-prototype-of")},function(e,t){e.exports=require("core-js/modules/es.reflect.construct")},function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},function(e,t){e.exports=require("core-js/modules/es.string.iterator")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.iterator")},function(e,t){e.exports=require("core-js/modules/es.array.filter")},function(e,t){e.exports=require("core-js/modules/es.array.for-each")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},function(e,t){e.exports=require("core-js/modules/es.object.keys")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")},function(e,t){e.exports=require("core-js/modules/es.promise")},function(e,t,r){e.exports=r(22)},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t,r){"use strict";r.r(t),r.d(t,"Layout",(function(){return ce})),r.d(t,"setLayoutBase",(function(){return ue})),r.d(t,"AuthUserContext",(function(){return w})),r.d(t,"withAuthentication",(function(){return U})),r.d(t,"withAuthorization",(function(){return H})),r.d(t,"WithAuthorizationClass",(function(){return V})),r.d(t,"setWithAuthorizationWrapper",(function(){return G})),r.d(t,"Firebase",(function(){return j})),r.d(t,"FirebaseContext",(function(){return f})),r.d(t,"withFirebase",(function(){return s})),r.d(t,"getFirebase",(function(){return v})),r.d(t,"setFirebaseClass",(function(){return O}));r(1),r(3),r(4),r(5),r(6),r(7),r(8),r(2),r(19),r(9),r(10),r(11),r(12);var n=r(0),o=r.n(n);r(13),r(14),r(15),r(16),r(17),r(18);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=o.a.createContext(null);a.displayName="FirebaseContext";var s=function(e){return function(t){return o.a.createElement(a.Consumer,null,(function(r){return o.a.createElement(e,u(u({},t),{},{firebase:r}))}))}},f=a;r(21);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r,n,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void r(e)}c.done?t(a):Promise.resolve(a).then(n,o)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h,m=function e(t,r){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"doSignInWithToken",(function(e){return n.auth.signInWithCustomToken(e)})),y(this,"doSignOut",(function(){return n.auth.signOut().then((function(){return localStorage.removeItem("authUser")}))})),y(this,"getIdToken",(function(){return n.auth.currentUser?n.auth.currentUser.getIdToken():new Promise((function(e){return e(null)}))})),y(this,"onAuthUserListener",(function(e,t){return n.auth.onAuthStateChanged((function(r){r?n.user(r.uid).get().then(function(){var t,o=(t=regeneratorRuntime.mark((function t(o){var i,u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.exists){t.next=10;break}if((i=o.data()).hasOwnProperty("roles")){t.next=6;break}return i.roles={guest:!0},t.next=6,n.user(r.uid).update(i);case 6:r=p({uid:r.uid,email:r.email,emailVerified:r.emailVerified,providerData:r.providerData},i),e(r),t.next=12;break;case 10:u={roles:{guest:!0}},n.user(r.uid).set(u).then((function(){r=p({uid:r.uid,email:r.email,emailVerified:r.emailVerified,providerData:r.providerData},u),e(r)}));case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(e){b(i,n,o,u,c,"next",e)}function c(e){b(i,n,o,u,c,"throw",e)}u(void 0)}))});return function(e){return o.apply(this,arguments)}}()).catch(console.error):t()}))})),y(this,"user",(function(e){return n.firestore.doc("users/".concat(e))})),y(this,"users",(function(){return n.firestore.collection("users")})),!r)throw new Error("No Firebase config given!");t.initializeApp(r),this.auth=t.auth(),this.firestore=t.firestore()},d=m,v=function(e){return h||(h=new d(e)),h},O=function(e){d=e},j=m,g=o.a.createContext(null);g.displayName="AuthUserContext";var w=g;function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=q(e);if(t){var o=q(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return k(this,r)}}function k(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(c,t);var r,n,i,u=E(c);function c(){var e;x(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(D(e=u.call.apply(u,[this].concat(r))),"_initFirebase",!1),C(D(e),"_isMounted",!1),C(D(e),"state",{authUser:null}),C(D(e),"safeSetState",(function(t){return e._isMounted&&e.setState(t)})),C(D(e),"firebaseInit",(function(){e.props.firebase&&!e._initFirebase&&(e._initFirebase=!0,e.listener=e.props.firebase.onAuthUserListener((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.safeSetState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.safeSetState({authUser:null})})))})),e}return r=c,(n=[{key:"componentDidMount",value:function(){this._isMounted=!0,this.safeSetState({authUser:JSON.parse(localStorage.getItem("authUser"))}),this.firebaseInit()}},{key:"componentDidUpdate",value:function(){this.firebaseInit()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.listener&&this.listener()}},{key:"render",value:function(){return o.a.createElement(w.Provider,{value:this.state.authUser},o.a.createElement(e,null,this.props.children))}}])&&S(r.prototype,n),i&&S(r,i),c}(o.a.Component);return t.displayName="WithAuthentication",s(t)};function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){J(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=L(e);if(t){var o=L(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return W(this,r)}}function W(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?z(e):t}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(u,e);var t,r,o,i=N(u);function u(){var e;F(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return J(z(e=i.call.apply(i,[this].concat(r))),"_initFirebase",!1),J(z(e),"firebaseInit",(function(){e.props.firebase&&!e._initFirebase&&(e._initFirebase=!0,e.listener=e.props.firebase.onAuthUserListener(e.props.firebaseAuthNext,e.props.firebaseAuthFallback))})),e}return t=u,(r=[{key:"componentDidMount",value:function(){this.firebaseInit()}},{key:"componentDidUpdate",value:function(){this.firebaseInit()}},{key:"componentWillUnmount",value:function(){this.listener&&this.listener()}},{key:"render",value:function(){var e=this.context;return this.props.condition(e)?Object(n.createElement)(this.props.authorizationPassed,I({},this.props)):this.props.authorizationFailed}}])&&T(t.prototype,r),o&&T(t,o),u}(n.Component);J(V,"contextType",w);var B=function(e){return o.a.createElement(V,I({},e))},G=function(e){B=e},H=function(e){return function(t){return s((function(){return o.a.createElement(B,{condition:e,authorizationPassed:t})}))}};function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=te(e);if(t){var o=te(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return $(this,r)}}function $(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?ee(e):t}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ne=function(e){var t=e.children;return o.a.createElement(n.Fragment,null,t)};ne.displayName="LayoutBase";var oe=U((function(e){var t=e.children;return o.a.createElement(ne,null,t)}));oe.displayName="AppWithAuthentication";var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(a,e);var t,i,u,c=Z(a);function a(){var e;Q(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return re(ee(e=c.call.apply(c,[this].concat(r))),"state",{firebase:null,error:null,errorInfo:null}),e}return t=a,(i=[{key:"componentDidMount",value:function(){var e=this,t=Promise.resolve().then(r.t.bind(null,23,7)),n=Promise.resolve().then(r.t.bind(null,24,7)),o=Promise.resolve().then(r.t.bind(null,25,7)),i=Promise.resolve().then(r.t.bind(null,26,7)),u=Promise.resolve().then(r.t.bind(null,27,7));Promise.all([t,n,o,i,u]).then((function(t){var r=v(t[0]);e.setState({firebase:r})}))}},{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.error?o.a.createElement(ne,null,Object(n.createElement)(this.props.errorComponent,{error:this.state.error,errorInfo:this.state.errorInfo})):o.a.createElement(f.Provider,{value:this.state.firebase},o.a.createElement(oe,null,this.props.children))}}])&&X(t.prototype,i),u&&X(t,u),a}(n.Component);ie.displayName="Layout",ie.defaultProps={errorComponent:function(e){var t=e.error,r=e.errorInfo;return o.a.createElement("div",null,o.a.createElement("h1",null,"Uh oh!"),o.a.createElement("p",null,"Something went wrong!"),o.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},t&&t.toString(),o.a.createElement("br",null),r.componentStack))}};var ue=function(e){ne=e},ce=ie},function(e,t){e.exports=require("firebase/app")},function(e,t){e.exports=require("firebase/auth")},function(e,t){e.exports=require("firebase/firestore")},function(e,t){e.exports=require("firebase/storage")},function(e,t){e.exports=require("firebase/functions")}])}));
//# sourceMappingURL=index.js.map