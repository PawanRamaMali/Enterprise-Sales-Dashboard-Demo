!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=["time_chart-metric","map-metric","sales-summary_metric","production-summary_metric","users-summary_metric","complaints-summary_metric"],r=function e(){document.body.classList.remove("userTabbed"),window.removeEventListener("mousedown",e),window.addEventListener("keydown",u)},u=function e(n){var t;9===((t=n).which||t.keyCode)&&(document.body.classList.add("userTabbed"),window.removeEventListener("keydown",e),window.addEventListener("mousedown",r))},i=(t(0),function(){var e=function(){try{return localStorage}catch(e){return null}}();return e||console.log("local storage not supported"),e}());window.addEventListener("DOMContentLoaded",(function(){o.forEach((function(e){var n=document.getElementById(e);if(n){var t=(null==i?void 0:i.getItem(e))||n.options[1].value;n.value=t,n.options[0].remove(),i&&n.addEventListener("change",(function(n){i.setItem(e,n.target.value)}))}}))})),window.addEventListener("keydown",u),$(document).on("shiny:busy",(function(e){$("body").addClass("busy")})),$(document).on("shiny:idle",(function(e){$("body").removeClass("busy")}))}]);