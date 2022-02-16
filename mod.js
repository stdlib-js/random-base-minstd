// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var e=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,e.get?e:{enumerable:!0,get:function(){return t[n]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,y=function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t},p=e,v=y,s=(l=n()?p:v,l);var b=function(t,r,n){s(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},d=b,A=l;var m=function(t,r,n){A(t,r,{configurable:!1,enumerable:!1,get:n})},h=m,g=l;var w=function(t,r,n,e){g(t,r,{configurable:!1,enumerable:!1,get:n,set:e})},E=w,j=Object.prototype.hasOwnProperty;var _=function(t,r){return null!=t&&j.call(t,r)};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return O&&"symbol"==typeof Symbol.toStringTag},U=Object.prototype.toString,T=U;var P=function(t){return T.call(t)},N="function"==typeof Symbol?Symbol.toStringTag:"",M=_,S=N,F=U;var L=P,R=function(t){var r,n,e;if(null==t)return F.call(t);n=t[S],r=M(t,S);try{t[S]=void 0}catch(r){return F.call(t)}return e=F.call(t),r?t[S]=n:delete t[S],e},B=I()?R:L,x=B;var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)},V=C;var Y=function(t){return"object"==typeof t&&null!==t&&!V(t)},G=/./;var X=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var z=B,J=function(t){try{return k.call(t),!0}catch(t){return!1}},D=I();var q=function(t){return"object"==typeof t&&(t instanceof Boolean||(D?J(t):"[object Boolean]"===z(t)))},H=X,K=q;var Q=d,W=function(t){return H(t)||K(t)},Z=q;Q(W,"isPrimitive",X),Q(W,"isObject",Z);var $=W;var tt=function(){return new Function("return this;")()},rt="object"==typeof self?self:null,nt="object"==typeof window?window:null,et="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ot="object"==typeof et?et:null;module.exports=ot;var it=$.isPrimitive,at=tt,ut=rt,ft=nt,ct=t(Object.freeze({__proto__:null}));var lt=function(t){if(arguments.length){if(!it(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return at()}if(ut)return ut;if(ft)return ft;if(ct)return ct;throw new Error("unexpected error. Unable to resolve global object.")},yt=lt(),pt=yt.document&&yt.document.childNodes,vt=Int8Array,st=G,bt=pt,dt=vt;var At=function(){return"function"==typeof st||"object"==typeof dt||"function"==typeof bt};var mt=function(){return/^\s*function\s*([^(]*)/i},ht=mt;d(ht,"REGEXP",mt());var gt=ht,wt=C;var Et=function(t){return null!==t&&"object"==typeof t};d(Et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!wt(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(Et));var jt=Et;var _t=B,Ot=gt.REGEXP,It=function(t){return jt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Ut=function(t){var r,n,e;if(("Object"===(n=_t(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=Ot.exec(e.toString()))return r[1]}return It(t)?"Buffer":n},Tt=Ut,Pt=Tt;var Nt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?Pt(t).toLowerCase():r},Mt=Tt;var St=Nt,Ft=function(t){return Mt(t).toLowerCase()},Lt=At()?Ft:St;var Rt=function(t){return"function"===Lt(t)},Bt=Object.getPrototypeOf;var xt=function(t){return t.__proto__},Ct=B,Vt=xt;var Yt=function(t){var r=Vt(t);return r||null===r?r:"[object Function]"===Ct(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Gt=Bt,Xt=Yt,kt=Rt(Object.getPrototypeOf)?Gt:Xt;var zt=function(t){return null==t?null:(t=Object(t),kt(t))},Jt=Y,Dt=Rt,qt=zt,Ht=_,Kt=B,Qt=Object.prototype;var Wt=function(t){var r;return!!Jt(t)&&(!(r=qt(t))||!Ht(t,"constructor")&&Ht(r,"constructor")&&Dt(r.constructor)&&"[object Function]"===Kt(r.constructor)&&Ht(r,"isPrototypeOf")&&Dt(r.isPrototypeOf)&&(r===Qt||function(t){var r;for(r in t)if(!Ht(t,r))return!1;return!0}(t)))},Zt=Wt,$t=Math.floor,tr=$t;var rr=function(t){return tr(t)===t},nr=rr;var er=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&nr(t.length)&&t.length>=0&&t.length<=9007199254740991};var or=function(t){return"number"==typeof t},ir=Number,ar=ir.prototype.toString;var ur=B,fr=ir,cr=function(t){try{return ar.call(t),!0}catch(t){return!1}},lr=I();var yr=function(t){return"object"==typeof t&&(t instanceof fr||(lr?cr(t):"[object Number]"===ur(t)))},pr=or,vr=yr;var sr=d,br=function(t){return pr(t)||vr(t)},dr=yr;sr(br,"isPrimitive",or),sr(br,"isObject",dr);var Ar=br,mr=Number.POSITIVE_INFINITY,hr=ir.NEGATIVE_INFINITY,gr=mr,wr=hr,Er=rr;var jr=function(t){return t<gr&&t>wr&&Er(t)},_r=Ar.isPrimitive,Or=jr;var Ir=function(t){return _r(t)&&Or(t)},Ur=Ar.isObject,Tr=jr;var Pr=function(t){return Ur(t)&&Tr(t.valueOf())},Nr=Ir,Mr=Pr;var Sr=d,Fr=function(t){return Nr(t)||Mr(t)},Lr=Pr;Sr(Fr,"isPrimitive",Ir),Sr(Fr,"isObject",Lr);var Rr=Fr.isPrimitive;var Br=function(t){return Rr(t)&&t>0},xr=Fr.isObject;var Cr=function(t){return xr(t)&&t.valueOf()>0},Vr=Br,Yr=Cr;var Gr=d,Xr=function(t){return Vr(t)||Yr(t)},kr=Cr;Gr(Xr,"isPrimitive",Br),Gr(Xr,"isObject",kr);var zr=Xr,Jr=B,Dr="function"==typeof Int32Array;var qr=function(t){return Dr&&t instanceof Int32Array||"[object Int32Array]"===Jr(t)},Hr="function"==typeof Int32Array?Int32Array:null,Kr=qr,Qr=Hr;var Wr="function"==typeof Int32Array?Int32Array:void 0,Zr=function(){throw new Error("not implemented")},$r=function(){var t,r;if("function"!=typeof Qr)return!1;try{r=new Qr([1,3.14,-3.14,2147483648]),t=Kr(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t}()?Wr:Zr;var tn=function(t,r,n,e,o){var i,a,u,f;if(t<=0)return e;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)e[f]=r[f];if(t<8)return e;for(f=u;f<t;f+=8)e[f]=r[f],e[f+1]=r[f+1],e[f+2]=r[f+2],e[f+3]=r[f+3],e[f+4]=r[f+4],e[f+5]=r[f+5],e[f+6]=r[f+6],e[f+7]=r[f+7];return e}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)e[a]=r[i],i+=n,a+=o;return e};d(tn,"ndarray",(function(t,r,n,e,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=e,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=r[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=r[u],o[f+1]=r[u+1],o[f+2]=r[u+2],o[f+3]=r[u+3],o[f+4]=r[u+4],o[f+5]=r[u+5],o[f+6]=r[u+6],o[f+7]=r[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=r[u],u+=n,f+=i;return o}));var rn=tn;var nn=function(){};var en=Rt,on=gt.REGEXP,an=function(){return"foo"===nn.name}();var un=function(t){if(!1===en(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return an?t.name:on.exec(t.toString())[1]},fn=B,cn="function"==typeof Float64Array;var ln="function"==typeof Float64Array?Float64Array:null,yn=function(t){return cn&&t instanceof Float64Array||"[object Float64Array]"===fn(t)},pn=ln;var vn=function(){var t,r;if("function"!=typeof pn)return!1;try{r=new pn([1,3.14,-3.14,NaN]),t=yn(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var sn="function"==typeof Float64Array?Float64Array:void 0,bn=function(){throw new Error("not implemented")},dn=vn()?sn:bn,An=B,mn="function"==typeof Int8Array;var hn="function"==typeof Int8Array?Int8Array:null,gn=function(t){return mn&&t instanceof Int8Array||"[object Int8Array]"===An(t)},wn=hn;var En="function"==typeof Int8Array?Int8Array:void 0,jn=function(){throw new Error("not implemented")},_n=function(){var t,r;if("function"!=typeof wn)return!1;try{r=new wn([1,3.14,-3.14,128]),t=gn(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t}()?En:jn,On=B,In="function"==typeof Uint8Array;var Un="function"==typeof Uint8Array?Uint8Array:null,Tn=function(t){return In&&t instanceof Uint8Array||"[object Uint8Array]"===On(t)},Pn=Un;var Nn="function"==typeof Uint8Array?Uint8Array:void 0,Mn=function(){throw new Error("not implemented")},Sn=function(){var t,r;if("function"!=typeof Pn)return!1;try{r=new Pn(r=[1,3.14,-3.14,256,257]),t=Tn(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Nn:Mn,Fn=B,Ln="function"==typeof Uint8ClampedArray;var Rn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Bn=function(t){return Ln&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Fn(t)},xn=Rn;var Cn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Vn=function(){throw new Error("not implemented")},Yn=function(){var t,r;if("function"!=typeof xn)return!1;try{r=new xn([-1,0,1,3.14,4.99,255,256]),t=Bn(r)&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t}()?Cn:Vn,Gn=B,Xn="function"==typeof Int16Array;var kn="function"==typeof Int16Array?Int16Array:null,zn=function(t){return Xn&&t instanceof Int16Array||"[object Int16Array]"===Gn(t)},Jn=kn;var Dn="function"==typeof Int16Array?Int16Array:void 0,qn=function(){throw new Error("not implemented")},Hn=function(){var t,r;if("function"!=typeof Jn)return!1;try{r=new Jn([1,3.14,-3.14,32768]),t=zn(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){t=!1}return t}()?Dn:qn,Kn=B,Qn="function"==typeof Uint16Array;var Wn="function"==typeof Uint16Array?Uint16Array:null,Zn=function(t){return Qn&&t instanceof Uint16Array||"[object Uint16Array]"===Kn(t)},$n=Wn;var te="function"==typeof Uint16Array?Uint16Array:void 0,re=function(){throw new Error("not implemented")},ne=function(){var t,r;if("function"!=typeof $n)return!1;try{r=new $n(r=[1,3.14,-3.14,65536,65537]),t=Zn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?te:re,ee=B,oe="function"==typeof Uint32Array;var ie="function"==typeof Uint32Array?Uint32Array:null,ae=function(t){return oe&&t instanceof Uint32Array||"[object Uint32Array]"===ee(t)},ue=ie;var fe="function"==typeof Uint32Array?Uint32Array:void 0,ce=function(){throw new Error("not implemented")},le=function(){var t,r;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,4294967296,4294967297]),t=ae(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?fe:ce,ye=B,pe="function"==typeof Float32Array;var ve="function"==typeof Float32Array?Float32Array:null,se=function(t){return pe&&t instanceof Float32Array||"[object Float32Array]"===ye(t)},be=mr,de=ve;var Ae="function"==typeof Float32Array?Float32Array:void 0,me=function(){throw new Error("not implemented")},he=function(){var t,r;if("function"!=typeof de)return!1;try{r=new de([1,3.14,-3.14,5e40]),t=se(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===be}catch(r){t=!1}return t}()?Ae:me,ge=Tt,we=un,Ee=zt,je=dn,_e=[dn,he,$r,le,Hn,ne,_n,Sn,Yn],Oe=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Ie=vn()?Ee(je):Ue;function Ue(){}Ie="TypedArray"===we(Ie)?Ie:Ue;var Te=function(t,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return t instanceof r},Pe=Tt,Ne=zt,Me=[[dn,"Float64Array"],[he,"Float32Array"],[$r,"Int32Array"],[le,"Uint32Array"],[Hn,"Int16Array"],[ne,"Uint16Array"],[_n,"Int8Array"],[Sn,"Uint8Array"],[Yn,"Uint8ClampedArray"]];var Se=function(t){var r,n;if("object"!=typeof t||null===t)return!1;if(t instanceof Ie)return!0;for(n=0;n<_e.length;n++)if(t instanceof _e[n])return!0;for(;t;){for(r=ge(t),n=0;n<Oe.length;n++)if(Oe[n]===r)return!0;t=Ee(t)}return!1},Fe=function(t){var r,n;for(n=0;n<Me.length;n++)if(Te(t,Me[n][0]))return Me[n][1];for(;t;){for(r=Pe(t),n=0;n<Me.length;n++)if(r===Me[n][1])return Me[n][1];t=Ne(t)}};var Le=$t;var Re=function(){return 0|Le(1+2147483646*Math.random())},Be=d,xe=h,Ce=E,Ve=_,Ye=Zt,Ge=$.isPrimitive,Xe=er,ke=zr.isPrimitive,ze=qr,Je=$r,De=rn,qe=function(t){var r,n;if(!Se(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((r={}).type=Fe(t),r.data=[],n=0;n<t.length;n++)r.data.push(t[n]);return r},He=Re;function Ke(t,r){var n;return n=r?"option":"argument",t.length<6?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):2!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 2. Actual: "+t[1]+"."):1!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+1..toString()+". Actual: "+t[2]+"."):t[4]!==t.length-5?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-5)+". Actual: "+t[4]+"."):null}var Qe=function(t){var r,n,e,o,i,a;if(e={},arguments.length){if(!Ye(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Ve(t,"copy")&&(e.copy=t.copy,!Ge(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Ve(t,"state")){if(n=t.state,e.state=!0,!ze(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=Ke(n,!0))throw a;!1===e.copy?r=n:(r=new Je(n.length),De(n.length,n,1,r,1)),n=new Je(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,1),o=new Je(r.buffer,r.byteOffset+5*r.BYTES_PER_ELEMENT,n[4])}if(void 0===o)if(Ve(t,"seed"))if(o=t.seed,e.seed=!0,ke(o)){if(o>2147483646)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Xe(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(r=new Je(5+i))[0]=1,r[1]=2,r[2]=1,r[4]=i,De.ndarray(i,o,1,0,r,1,5),n=new Je(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,1),o=new Je(r.buffer,r.byteOffset+5*r.BYTES_PER_ELEMENT,i),n[0]=o[0]}else o=0|He()}else o=0|He();return void 0===n&&((r=new Je(6))[0]=1,r[1]=2,r[2]=1,r[4]=1,r[5]=o,n=new Je(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,1),o=new Je(r.buffer,r.byteOffset+5*r.BYTES_PER_ELEMENT,1),n[0]=o[0]),Be(s,"NAME","minstd"),xe(s,"seed",u),xe(s,"seedLength",f),Ce(s,"state",y,p),xe(s,"stateLength",c),xe(s,"byteLength",l),Be(s,"toJSON",v),Be(s,"MIN",1),Be(s,"MAX",2147483646),Be(s,"normalized",b),Be(b,"NAME",s.NAME),xe(b,"seed",u),xe(b,"seedLength",f),Ce(b,"state",y,p),xe(b,"stateLength",c),xe(b,"byteLength",l),Be(b,"toJSON",v),Be(b,"MIN",(s.MIN-1)/2147483646),Be(b,"MAX",(s.MAX-1)/2147483646),s;function u(){var t=r[4];return De(t,o,1,new Je(t),1)}function f(){return r[4]}function c(){return r.length}function l(){return r.byteLength}function y(){var t=r.length;return De(t,r,1,new Je(t),1)}function p(t){var i;if(!ze(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=Ke(t,!1))throw i;!1===e.copy?e.state&&t.length===r.length?De(t.length,t,1,r,1):(r=t,e.state=!0):(t.length!==r.length&&(r=new Je(t.length)),De(t.length,t,1,r,1)),n=new Je(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,1),o=new Je(r.buffer,r.byteOffset+5*r.BYTES_PER_ELEMENT,r[4])}function v(){var t={type:"PRNG"};return t.name=s.NAME,t.state=qe(r),t.params=[],t}function s(){var t=0|n[0];return t=16807*t%2147483647|0,n[0]=t,0|t}function b(){return(s()-1)/2147483646}},We=Qe({seed:Re()}),Ze=Qe;d(We,"factory",Ze);var $e=We;export{$e as default,Ze as factory};
//# sourceMappingURL=mod.js.map