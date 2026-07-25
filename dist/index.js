"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var o=v(function(x,f){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-cos/dist'),I=require('@stdlib/constants-float64-pi/dist'),c=I/4;function P(t,r,e){var n;return a(t)||a(r)||a(e)||e<=0?NaN:(n=(t-r)/e,n<-c||n>c?0:p(2*n)/e)}f.exports=P
});var y=v(function(F,s){
var _=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-cos/dist'),O=require('@stdlib/constants-float64-pi/dist'),q=O/4;function R(t,r){if(i(t)||i(r)||r<=0)return _(NaN);return e;function e(n){var u;return i(n)?NaN:(u=(n-t)/r,u<-q||u>q?0:d(2*u)/r)}}s.exports=R
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=o(),V=y();E(N,"factory",V);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
