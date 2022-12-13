/*! For license information please see main.fc2b4a2e.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{105:function(t,e,r){},106:function(t,e,r){},162:function(t,e,r){},167:function(t,e,r){},168:function(t,e,r){},169:function(t,e,r){},184:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(83),i=r.n(a),c=r(50),u=Object(c.b)({name:"user",initialState:{user:null},reducers:{login:function(t,e){t.user=e.payload},logout:function(t){t.user=null}}}),l=u.actions,s=l.login,f=l.logout,h=function(t){return t.user},p=Object(c.a)({reducer:u.reducer}),v=(r(99),r(27)),d=r(8),m=(r(105),r(38)),g=r.n(m),y=(r(106),r(20)),b=r.n(y),w=r(49);Object(w.initializeApp)({apiKey:"AIzaSyD3GgBOjaVGy8exAIZJZtH5C9Tg4HURz_o",authDomain:"netflix-clone-fbe76.firebaseapp.com",projectId:"netflix-clone-fbe76",storageBucket:"netflix-clone-fbe76.appspot.com",messagingSenderId:"1074561489337",appId:"1:1074561489337:web:6e53c3be2e149bbc82be68"}),b.a.auth();var E=function(){var t=Object(n.useState)(!0),e=Object(d.a)(t,2),r=e[0],a=e[1],i=Object(n.useState)(!1),c=Object(d.a)(i,2),u=c[0],l=c[1],s=Object(n.useRef)(null),f=Object(n.useRef)(null);return o.a.createElement("div",{className:"SignupScreen"},o.a.createElement("form",null,o.a.createElement("h1",null,r?"Sign up":"Login In"),o.a.createElement("input",{type:"text",placeholder:"Enter Your Email",ref:s}),o.a.createElement("input",{type:"password",placeholder:"Enter Your Password",ref:f}),u&&o.a.createElement("p",null,"Loading a content...."),!u&&r&&o.a.createElement("button",{onClick:function(t){t.preventDefault();var e=s.current.value,r=f.current.value;l(!0),b.a.auth().createUserWithEmailAndPassword(e,r).then((function(t){console.log(t),l(!1)})).catch((function(t){console.log(t.message)}))}},"Sign Up"),!u&&!r&&o.a.createElement("button",{onClick:function(t){t.preventDefault();var e=s.current.value,r=f.current.value;l(!0),b.a.auth().signInWithEmailAndPassword(e,r).then((function(t){console.log(t),l(!1)})).catch((function(t){console.log(t.message)}))}},"Login in"),o.a.createElement("h2",null,o.a.createElement("span",{onClick:function(){a((function(t){return!t}))}},r?"Login In":"Sign up"))))};var x=function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),r=e[0],a=e[1];return o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"login_header"},o.a.createElement("img",{src:g.a,alt:"li"}),o.a.createElement("button",null,"SIGN IN")),r?o.a.createElement(E,null):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"login_body"},o.a.createElement("h1",null,"Watch Unlimited Movies,TV Shows & More"),o.a.createElement("h2",null,"Watch Your Movie & Enjoy"),o.a.createElement("h3",null,"Lets start to Watch! but You need to login"),o.a.createElement("form",{className:"login_form",onSubmit:function(t){t.preventDefault(),a(!0)}},o.a.createElement("input",{type:"text",placeholder:"Enter your Email Address"}),o.a.createElement("button",null,"Get started")))))},L=r(26),_=r(186),O=(r(162),"32ce6adcd8f4737faa4cf686afa6b000"),j={fetchTrending:"/trending/all/week?api_key=".concat(O,"&language=en-US"),fetchMTOriginals:"/discover/tv?api_key=".concat(O,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(O,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(O,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(O,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(O,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(O,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(O,"&with_genres=99")};function k(){k=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f={};function h(){}function p(){}function v(){}var d={};u(d,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,a)&&(d=g);var y=v.prototype=h.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=v,n(y,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),u(y,c,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var N=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),r=e[0],a=e[1];return Object(n.useEffect)((function(){function t(){return(t=Object(L.a)(k().mark((function t(){var e,r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("https://api.themoviedb.org/3/discover/tv?api_key=32ce6adcd8f4737faa4cf686afa6b000&language=en-US");case 3:e=t.sent,r=Math.floor(Math.random()*e.data.results.length)-1,console.log(e.data.results[r]),a(e.data.results[r]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),o.a.createElement("div",{className:"banner",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(r.backdrop_path,")"),backgroundPosition:"center",backgroundSize:"cover"}},o.a.createElement("div",{className:"banner_content"},o.a.createElement("h1",null,r.original_title||r.name),o.a.createElement("div",{className:"btn"},o.a.createElement("button",null,"Play"),o.a.createElement("button",null,"My List")),o.a.createElement("div",{className:"description"},o.a.createElement("p",null,r.overview))))},S=(r(167),r(168),r(88)),G=r.n(S);var M=function(){return o.a.createElement("div",{className:"navbar"},o.a.createElement("div",{className:"navbar_content"},o.a.createElement("img",{src:g.a,alt:"li"}),o.a.createElement("img",{src:G.a,alt:"si"})))},P=(r(169),r(91));function I(){I=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f={};function h(){}function p(){}function v(){}var d={};u(d,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,a)&&(d=g);var y=v.prototype=h.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=v,n(y,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),u(y,c,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var T=function(t){var e=t.title,r=t.isLargeRow,a=t.fetchurl,i=Object(n.useState)([]),c=Object(d.a)(i,2),u=c[0],l=c[1],s=Object(n.useState)(""),f=Object(d.a)(s,2),h=f[0],p=f[1];Object(n.useEffect)((function(){function t(){return(t=Object(L.a)(I().mark((function t(){var e;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.a.get("https://api.themoviedb.org/3".concat(a));case 3:e=t.sent,console.log(e.data.results),l(e.data.results),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]);var v=function(){var t=Object(L.a)(I().mark((function t(e){var r,n;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=4;break}p(""),t.next=8;break;case 4:return t.next=6,_.a.get("https://api.themoviedb.org/3/movie/".concat(e.id,"/videos?api_key=32ce6adcd8f4737faa4cf686afa6b000"));case 6:n=t.sent,p(null===(r=n.data.results[0])||void 0===r?void 0:r.key);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"row"},o.a.createElement("h1",null,e),o.a.createElement("div",{className:"row_posters"},u.map((function(t){return o.a.createElement("img",{src:"".concat("https://image.tmdb.org/t/p/original/").concat(t.poster_path),className:"ri ".concat(r&&"large-image"),alt:t.name,key:t.id,onClick:function(){return v(t)}})}))),h&&o.a.createElement(P.a,{videoId:h,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"homescreen"},o.a.createElement(M,null),o.a.createElement(N,null),o.a.createElement(T,{title:"Trending Now",isLargeRow:!0,fetchurl:j.fetchTrending}),o.a.createElement(T,{title:"Top Rated Movie",fetchurl:j.fetchTopRated}),o.a.createElement(T,{title:"Comedy Movie",fetchurl:j.fetchComedyMovies}),o.a.createElement(T,{title:"Horror Movie",fetchurl:j.fetchHorrorMovies}),o.a.createElement(T,{title:"Action Movie",fetchurl:j.fetchActionMovies}),o.a.createElement(T,{title:"Romance Movie",fetchurl:j.fetchRomanceMovies})))},F=function(){var t=Object(v.c)(h),e=Object(v.b)();return Object(n.useEffect)((function(){b.a.auth().onAuthStateChanged((function(t){e(t?s({uid:t.id,email:t.email}):f)}))}),[]),o.a.createElement("div",null,t?o.a.createElement(A,null):o.a.createElement(x,null))};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(v.a,{store:p},o.a.createElement(F,null)))},38:function(t,e,r){t.exports=r.p+"static/media/Netflix_logo_PNG1.05c96bba.png"},88:function(t,e,r){t.exports=r.p+"static/media/smily.29ad315f.png"},93:function(t,e,r){t.exports=r(184)},99:function(t,e,r){}},[[93,1,2]]]);
//# sourceMappingURL=main.fc2b4a2e.chunk.js.map