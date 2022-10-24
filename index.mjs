// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-int32array@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";var u=m-1;function c(){return 0|g(1+u*Math.random())}var E=m-1|0,b=m-1|0;function j(e,t){var n;return n=t?"option":"argument",e.length<6?new RangeError(l("invalid %s. State array has insufficient length.",n)):1!==e[0]?new RangeError(l("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",n,1,e[0])):2!==e[1]?new RangeError(l("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",n,2,e[1])):1!==e[2]?new RangeError(l("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,1,e[2])):e[4]!==e.length-5?new RangeError(l("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,e.length-5,e[4])):null}function v(g){var u,v,y,w,x,T;if(y={},arguments.length){if(!r(g))throw new TypeError(l("invalid argument. Options argument must be an object. Value: `%s`.",g));if(s(g,"copy")&&(y.copy=g.copy,!i(g.copy)))throw new TypeError(l("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",g.copy));if(s(g,"state")){if(v=g.state,y.state=!0,!d(v))throw new TypeError(l("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",v));if(T=j(v,!0))throw T;!1===y.copy?u=v:(u=new f(v.length),h(v.length,v,1,u,1)),v=new f(u.buffer,u.byteOffset+3*u.BYTES_PER_ELEMENT,1),w=new f(u.buffer,u.byteOffset+5*u.BYTES_PER_ELEMENT,v[4])}if(void 0===w)if(s(g,"seed"))if(w=g.seed,y.seed=!0,a(w)){if(w>b)throw new RangeError(l("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",w));w|=0}else{if(!(o(w)&&w.length>0))throw new TypeError(l("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",w));x=w.length,(u=new f(5+x))[0]=1,u[1]=2,u[2]=1,u[4]=x,h.ndarray(x,w,1,0,u,1,5),v=new f(u.buffer,u.byteOffset+3*u.BYTES_PER_ELEMENT,1),w=new f(u.buffer,u.byteOffset+5*u.BYTES_PER_ELEMENT,x),v[0]=w[0]}else w=0|c()}else w=0|c();return void 0===v&&((u=new f(6))[0]=1,u[1]=2,u[2]=1,u[4]=1,u[5]=w,v=new f(u.buffer,u.byteOffset+3*u.BYTES_PER_ELEMENT,1),w=new f(u.buffer,u.byteOffset+5*u.BYTES_PER_ELEMENT,1),v[0]=w[0]),e(A,"NAME","minstd"),t(A,"seed",M),t(A,"seedLength",N),n(A,"state",O,R),t(A,"stateLength",_),t(A,"byteLength",L),e(A,"toJSON",S),e(A,"MIN",1),e(A,"MAX",m-1),e(A,"normalized",P),e(P,"NAME",A.NAME),t(P,"seed",M),t(P,"seedLength",N),n(P,"state",O,R),t(P,"stateLength",_),t(P,"byteLength",L),e(P,"toJSON",S),e(P,"MIN",(A.MIN-1)/E),e(P,"MAX",(A.MAX-1)/E),A;function M(){var e=u[4];return h(e,w,1,new f(e),1)}function N(){return u[4]}function _(){return u.length}function L(){return u.byteLength}function O(){var e=u.length;return h(e,u,1,new f(e),1)}function R(e){var t;if(!d(e))throw new TypeError(l("invalid argument. Must provide an Int32Array. Value: `%s`.",e));if(t=j(e,!1))throw t;!1===y.copy?y.state&&e.length===u.length?h(e.length,e,1,u,1):(u=e,y.state=!0):(e.length!==u.length&&(u=new f(e.length)),h(e.length,e,1,u,1)),v=new f(u.buffer,u.byteOffset+3*u.BYTES_PER_ELEMENT,1),w=new f(u.buffer,u.byteOffset+5*u.BYTES_PER_ELEMENT,u[4])}function S(){var e={type:"PRNG"};return e.name=A.NAME,e.state=p(u),e.params=[],e}function A(){var e=0|v[0];return e=16807*e%m|0,v[0]=e,0|e}function P(){return(A()-1)/E}}var y=v({seed:c()});e(y,"factory",v);export{y as default,v as factory};
//# sourceMappingURL=index.mjs.map
