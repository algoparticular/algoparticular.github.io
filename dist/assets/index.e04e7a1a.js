const ol=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};ol();function Ki(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ll=Ki(cl);function Ja(t){return!!t||t===""}function Ur(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ye(r)?fl(r):Ur(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ye(t))return t;if(_e(t))return t}}const ul=/;(?![^(]*\))/g,dl=/:(.+)/;function fl(t){const e={};return t.split(ul).forEach(n=>{if(n){const r=n.split(dl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function en(t){let e="";if(ye(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=en(t[n]);r&&(e+=r+" ")}else if(_e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xt=t=>ye(t)?t:t==null?"":$(t)||_e(t)&&(t.toString===Xa||!H(t.toString))?JSON.stringify(t,Ya,2):String(t),Ya=(t,e)=>e&&e.__v_isRef?Ya(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Qa(e)?{[`Set(${e.size})`]:[...e.values()]}:_e(e)&&!$(e)&&!Za(e)?String(e):e,ce={},tn=[],je=()=>{},hl=()=>!1,pl=/^on[^a-z]/,Br=t=>pl.test(t),Gi=t=>t.startsWith("onUpdate:"),Ee=Object.assign,Ji=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ml=Object.prototype.hasOwnProperty,Q=(t,e)=>ml.call(t,e),$=Array.isArray,nn=t=>Fr(t)==="[object Map]",Qa=t=>Fr(t)==="[object Set]",H=t=>typeof t=="function",ye=t=>typeof t=="string",Yi=t=>typeof t=="symbol",_e=t=>t!==null&&typeof t=="object",Qi=t=>_e(t)&&H(t.then)&&H(t.catch),Xa=Object.prototype.toString,Fr=t=>Xa.call(t),gl=t=>Fr(t).slice(8,-1),Za=t=>Fr(t)==="[object Object]",Xi=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ur=Ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vl=/-(\w)/g,Xe=$r(t=>t.replace(vl,(e,n)=>n?n.toUpperCase():"")),_l=/\B([A-Z])/g,pn=$r(t=>t.replace(_l,"-$1").toLowerCase()),jr=$r(t=>t.charAt(0).toUpperCase()+t.slice(1)),ai=$r(t=>t?`on${jr(t)}`:""),Mn=(t,e)=>!Object.is(t,e),dr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ir=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ps;const yl=()=>Ps||(Ps=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ge;class bl{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Ge&&(this.parent=Ge,this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ge;try{return Ge=this,e()}finally{Ge=n}}}on(){Ge=this}off(){Ge=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function El(t,e=Ge){e&&e.active&&e.effects.push(t)}const Zi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},eo=t=>(t.w&Tt)>0,to=t=>(t.n&Tt)>0,Il=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tt},wl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];eo(i)&&!to(i)?i.delete(t):e[n++]=i,i.w&=~Tt,i.n&=~Tt}e.length=n}},Ei=new WeakMap;let Cn=0,Tt=1;const Ii=30;let $e;const qt=Symbol(""),wi=Symbol("");class es{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,El(this,r)}run(){if(!this.active)return this.fn();let e=$e,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,Et=!0,Tt=1<<++Cn,Cn<=Ii?Il(this):Os(this),this.fn()}finally{Cn<=Ii&&wl(this),Tt=1<<--Cn,$e=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Os(this),this.onStop&&this.onStop(),this.active=!1)}}function Os(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const no=[];function mn(){no.push(Et),Et=!1}function gn(){const t=no.pop();Et=t===void 0?!0:t}function xe(t,e,n){if(Et&&$e){let r=Ei.get(t);r||Ei.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Zi()),ro(i)}}function ro(t,e){let n=!1;Cn<=Ii?to(t)||(t.n|=Tt,n=!eo(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function at(t,e,n,r,i,s){const a=Ei.get(t);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(n==="length"&&$(t))a.forEach((c,l)=>{(l==="length"||l>=r)&&o.push(c)});else switch(n!==void 0&&o.push(a.get(n)),e){case"add":$(t)?Xi(n)&&o.push(a.get("length")):(o.push(a.get(qt)),nn(t)&&o.push(a.get(wi)));break;case"delete":$(t)||(o.push(a.get(qt)),nn(t)&&o.push(a.get(wi)));break;case"set":nn(t)&&o.push(a.get(qt));break}if(o.length===1)o[0]&&Ci(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);Ci(Zi(c))}}function Ci(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&xs(r);for(const r of n)r.computed||xs(r)}function xs(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Cl=Ki("__proto__,__v_isRef,__isVue"),io=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yi)),Tl=ts(),Sl=ts(!1,!0),Al=ts(!0),Ds=kl();function kl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Z(this);for(let s=0,a=this.length;s<a;s++)xe(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mn();const r=Z(this)[e].apply(this,n);return gn(),r}}),t}function ts(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?Hl:lo:e?co:oo).get(r))return r;const a=$(r);if(!t&&a&&Q(Ds,i))return Reflect.get(Ds,i,s);const o=Reflect.get(r,i,s);return(Yi(i)?io.has(i):Cl(i))||(t||xe(r,"get",i),e)?o:Ie(o)?a&&Xi(i)?o:o.value:_e(o)?t?uo(o):Kn(o):o}}const Rl=so(),Pl=so(!0);function so(t=!1){return function(n,r,i,s){let a=n[r];if(Ln(a)&&Ie(a)&&!Ie(i))return!1;if(!t&&!Ln(i)&&(Ti(i)||(i=Z(i),a=Z(a)),!$(n)&&Ie(a)&&!Ie(i)))return a.value=i,!0;const o=$(n)&&Xi(r)?Number(r)<n.length:Q(n,r),c=Reflect.set(n,r,i,s);return n===Z(s)&&(o?Mn(i,a)&&at(n,"set",r,i):at(n,"add",r,i)),c}}function Ol(t,e){const n=Q(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&at(t,"delete",e,void 0),r}function xl(t,e){const n=Reflect.has(t,e);return(!Yi(e)||!io.has(e))&&xe(t,"has",e),n}function Dl(t){return xe(t,"iterate",$(t)?"length":qt),Reflect.ownKeys(t)}const ao={get:Tl,set:Rl,deleteProperty:Ol,has:xl,ownKeys:Dl},Ml={get:Al,set(t,e){return!0},deleteProperty(t,e){return!0}},Nl=Ee({},ao,{get:Sl,set:Pl}),ns=t=>t,zr=t=>Reflect.getPrototypeOf(t);function ir(t,e,n=!1,r=!1){t=t.__v_raw;const i=Z(t),s=Z(e);n||(e!==s&&xe(i,"get",e),xe(i,"get",s));const{has:a}=zr(i),o=r?ns:n?ss:qn;if(a.call(i,e))return o(t.get(e));if(a.call(i,s))return o(t.get(s));t!==i&&t.get(e)}function sr(t,e=!1){const n=this.__v_raw,r=Z(n),i=Z(t);return e||(t!==i&&xe(r,"has",t),xe(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ar(t,e=!1){return t=t.__v_raw,!e&&xe(Z(t),"iterate",qt),Reflect.get(t,"size",t)}function Ms(t){t=Z(t);const e=Z(this);return zr(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function Ns(t,e){e=Z(e);const n=Z(this),{has:r,get:i}=zr(n);let s=r.call(n,t);s||(t=Z(t),s=r.call(n,t));const a=i.call(n,t);return n.set(t,e),s?Mn(e,a)&&at(n,"set",t,e):at(n,"add",t,e),this}function Ls(t){const e=Z(this),{has:n,get:r}=zr(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&at(e,"delete",t,void 0),s}function qs(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function or(t,e){return function(r,i){const s=this,a=s.__v_raw,o=Z(a),c=e?ns:t?ss:qn;return!t&&xe(o,"iterate",qt),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function cr(t,e,n){return function(...r){const i=this.__v_raw,s=Z(i),a=nn(s),o=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,l=i[t](...r),u=n?ns:e?ss:qn;return!e&&xe(s,"iterate",c?wi:qt),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function lt(t){return function(...e){return t==="delete"?!1:this}}function Ll(){const t={get(s){return ir(this,s)},get size(){return ar(this)},has:sr,add:Ms,set:Ns,delete:Ls,clear:qs,forEach:or(!1,!1)},e={get(s){return ir(this,s,!1,!0)},get size(){return ar(this)},has:sr,add:Ms,set:Ns,delete:Ls,clear:qs,forEach:or(!1,!0)},n={get(s){return ir(this,s,!0)},get size(){return ar(this,!0)},has(s){return sr.call(this,s,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:or(!0,!1)},r={get(s){return ir(this,s,!0,!0)},get size(){return ar(this,!0)},has(s){return sr.call(this,s,!0)},add:lt("add"),set:lt("set"),delete:lt("delete"),clear:lt("clear"),forEach:or(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=cr(s,!1,!1),n[s]=cr(s,!0,!1),e[s]=cr(s,!1,!0),r[s]=cr(s,!0,!0)}),[t,n,e,r]}const[ql,Ul,Bl,Fl]=Ll();function rs(t,e){const n=e?t?Fl:Bl:t?Ul:ql;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const $l={get:rs(!1,!1)},jl={get:rs(!1,!0)},zl={get:rs(!0,!1)},oo=new WeakMap,co=new WeakMap,lo=new WeakMap,Hl=new WeakMap;function Wl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vl(t){return t.__v_skip||!Object.isExtensible(t)?0:Wl(gl(t))}function Kn(t){return Ln(t)?t:is(t,!1,ao,$l,oo)}function Kl(t){return is(t,!1,Nl,jl,co)}function uo(t){return is(t,!0,Ml,zl,lo)}function is(t,e,n,r,i){if(!_e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const a=Vl(t);if(a===0)return t;const o=new Proxy(t,a===2?r:n);return i.set(t,o),o}function rn(t){return Ln(t)?rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ln(t){return!!(t&&t.__v_isReadonly)}function Ti(t){return!!(t&&t.__v_isShallow)}function fo(t){return rn(t)||Ln(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function ho(t){return Ir(t,"__v_skip",!0),t}const qn=t=>_e(t)?Kn(t):t,ss=t=>_e(t)?uo(t):t;function po(t){Et&&$e&&(t=Z(t),ro(t.dep||(t.dep=Zi())))}function mo(t,e){t=Z(t),t.dep&&Ci(t.dep)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function Pe(t){return go(t,!1)}function Gl(t){return go(t,!0)}function go(t,e){return Ie(t)?t:new Jl(t,e)}class Jl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:qn(e)}get value(){return po(this),this._value}set value(e){e=this.__v_isShallow?e:Z(e),Mn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:qn(e),mo(this))}}function Ut(t){return Ie(t)?t.value:t}const Yl={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ie(i)&&!Ie(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function vo(t){return rn(t)?t:new Proxy(t,Yl)}class Ql{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new es(e,()=>{this._dirty||(this._dirty=!0,mo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Z(this);return po(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Xl(t,e,n=!1){let r,i;const s=H(t);return s?(r=t,i=je):(r=t.get,i=t.set),new Ql(r,i,s||!i,n)}function It(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Gn(s,e,n)}return i}function Ue(t,e,n,r){if(H(t)){const s=It(t,e,n,r);return s&&Qi(s)&&s.catch(a=>{Gn(a,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ue(t[s],e,n,r));return i}function Gn(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,a,o)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,a,o]);return}}Zl(t,n,i,r)}function Zl(t,e,n,r=!0){console.error(t)}let wr=!1,Si=!1;const Re=[];let nt=0;const kn=[];let Tn=null,Gt=0;const Rn=[];let pt=null,Jt=0;const _o=Promise.resolve();let as=null,Ai=null;function yo(t){const e=as||_o;return t?e.then(this?t.bind(this):t):e}function eu(t){let e=nt+1,n=Re.length;for(;e<n;){const r=e+n>>>1;Un(Re[r])<t?e=r+1:n=r}return e}function bo(t){(!Re.length||!Re.includes(t,wr&&t.allowRecurse?nt+1:nt))&&t!==Ai&&(t.id==null?Re.push(t):Re.splice(eu(t.id),0,t),Eo())}function Eo(){!wr&&!Si&&(Si=!0,as=_o.then(To))}function tu(t){const e=Re.indexOf(t);e>nt&&Re.splice(e,1)}function Io(t,e,n,r){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Eo()}function nu(t){Io(t,Tn,kn,Gt)}function wo(t){Io(t,pt,Rn,Jt)}function Hr(t,e=null){if(kn.length){for(Ai=e,Tn=[...new Set(kn)],kn.length=0,Gt=0;Gt<Tn.length;Gt++)Tn[Gt]();Tn=null,Gt=0,Ai=null,Hr(t,e)}}function Co(t){if(Hr(),Rn.length){const e=[...new Set(Rn)];if(Rn.length=0,pt){pt.push(...e);return}for(pt=e,pt.sort((n,r)=>Un(n)-Un(r)),Jt=0;Jt<pt.length;Jt++)pt[Jt]();pt=null,Jt=0}}const Un=t=>t.id==null?1/0:t.id;function To(t){Si=!1,wr=!0,Hr(t),Re.sort((n,r)=>Un(n)-Un(r));const e=je;try{for(nt=0;nt<Re.length;nt++){const n=Re[nt];n&&n.active!==!1&&It(n,null,14)}}finally{nt=0,Re.length=0,Co(),wr=!1,as=null,(Re.length||kn.length||Rn.length)&&To(t)}}function ru(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ce;let i=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:h}=r[u]||ce;h&&(i=n.map(m=>m.trim())),d&&(i=n.map(Nn))}let o,c=r[o=ai(e)]||r[o=ai(Xe(e))];!c&&s&&(c=r[o=ai(pn(e))]),c&&Ue(c,t,6,i);const l=r[o+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Ue(l,t,6,i)}}function So(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let a={},o=!1;if(!H(t)){const c=l=>{const u=So(l,e,!0);u&&(o=!0,Ee(a,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!o?(r.set(t,null),null):($(s)?s.forEach(c=>a[c]=null):Ee(a,s),r.set(t,a),a)}function Wr(t,e){return!t||!Br(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,pn(e))||Q(t,e))}let Le=null,Vr=null;function Cr(t){const e=Le;return Le=t,Vr=t&&t.type.__scopeId||null,e}function Ao(t){Vr=t}function ko(){Vr=null}function St(t,e=Le,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Js(-1);const s=Cr(e),a=t(...i);return Cr(s),r._d&&Js(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function oi(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:d,data:h,setupState:m,ctx:y,inheritAttrs:O}=t;let k,A;const I=Cr(t);try{if(n.shapeFlag&4){const B=i||r;k=Fe(u.call(B,B,d,s,m,h,y)),A=c}else{const B=e;k=Fe(B.length>1?B(s,{attrs:c,slots:o,emit:l}):B(s,null)),A=e.props?c:su(c)}}catch(B){Pn.length=0,Gn(B,t,1),k=me(Oe)}let R=k;if(A&&O!==!1){const B=Object.keys(A),{shapeFlag:W}=R;B.length&&W&7&&(a&&B.some(Gi)&&(A=au(A,a)),R=At(R,A))}return n.dirs&&(R=At(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),k=R,Cr(I),k}function iu(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(kr(r)){if(r.type!==Oe||r.children==="v-if"){if(e)return;e=r}}else return}return e}const su=t=>{let e;for(const n in t)(n==="class"||n==="style"||Br(n))&&((e||(e={}))[n]=t[n]);return e},au=(t,e)=>{const n={};for(const r in t)(!Gi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ou(t,e,n){const{props:r,children:i,component:s}=t,{props:a,children:o,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Us(r,a,l):!!a;if(c&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(a[h]!==r[h]&&!Wr(l,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Us(r,a,l):!0:!!a;return!1}function Us(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Wr(n,s))return!0}return!1}function os({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cu=t=>t.__isSuspense,lu={name:"Suspense",__isSuspense:!0,process(t,e,n,r,i,s,a,o,c,l){t==null?uu(e,n,r,i,s,a,o,c,l):du(t,e,n,r,i,a,o,c,l)},hydrate:fu,create:cs,normalize:hu},Ro=lu;function Bn(t,e){const n=t.props&&t.props[e];H(n)&&n()}function uu(t,e,n,r,i,s,a,o,c){const{p:l,o:{createElement:u}}=c,d=u("div"),h=t.suspense=cs(t,i,r,e,d,n,s,a,o,c);l(null,h.pendingBranch=t.ssContent,d,null,r,h,s,a),h.deps>0?(Bn(t,"onPending"),Bn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,s,a),sn(h,t.ssFallback)):h.resolve()}function du(t,e,n,r,i,s,a,o,{p:c,um:l,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const h=e.ssContent,m=e.ssFallback,{activeBranch:y,pendingBranch:O,isInFallback:k,isHydrating:A}=d;if(O)d.pendingBranch=h,Je(h,O)?(c(O,h,d.hiddenContainer,null,i,d,s,a,o),d.deps<=0?d.resolve():k&&(c(y,m,n,r,i,null,s,a,o),sn(d,m))):(d.pendingId++,A?(d.isHydrating=!1,d.activeBranch=O):l(O,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),k?(c(null,h,d.hiddenContainer,null,i,d,s,a,o),d.deps<=0?d.resolve():(c(y,m,n,r,i,null,s,a,o),sn(d,m))):y&&Je(h,y)?(c(y,h,n,r,i,d,s,a,o),d.resolve(!0)):(c(null,h,d.hiddenContainer,null,i,d,s,a,o),d.deps<=0&&d.resolve()));else if(y&&Je(h,y))c(y,h,n,r,i,d,s,a,o),sn(d,h);else if(Bn(e,"onPending"),d.pendingBranch=h,d.pendingId++,c(null,h,d.hiddenContainer,null,i,d,s,a,o),d.deps<=0)d.resolve();else{const{timeout:I,pendingId:R}=d;I>0?setTimeout(()=>{d.pendingId===R&&d.fallback(m)},I):I===0&&d.fallback(m)}}function cs(t,e,n,r,i,s,a,o,c,l,u=!1){const{p:d,m:h,um:m,n:y,o:{parentNode:O,remove:k}}=l,A=Nn(t.props&&t.props.timeout),I={vnode:t,parent:e,parentComponent:n,isSVG:a,container:r,hiddenContainer:i,anchor:s,deps:0,pendingId:0,timeout:typeof A=="number"?A:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1){const{vnode:B,activeBranch:W,pendingBranch:J,pendingId:le,effects:F,parentComponent:V,container:Y}=I;if(I.isHydrating)I.isHydrating=!1;else if(!R){const ne=W&&J.transition&&J.transition.mode==="out-in";ne&&(W.transition.afterLeave=()=>{le===I.pendingId&&h(J,Y,ve,0)});let{anchor:ve}=I;W&&(ve=y(W),m(W,V,I,!0)),ne||h(J,Y,ve,0)}sn(I,J),I.pendingBranch=null,I.isInFallback=!1;let te=I.parent,x=!1;for(;te;){if(te.pendingBranch){te.effects.push(...F),x=!0;break}te=te.parent}x||wo(F),I.effects=[],Bn(B,"onResolve")},fallback(R){if(!I.pendingBranch)return;const{vnode:B,activeBranch:W,parentComponent:J,container:le,isSVG:F}=I;Bn(B,"onFallback");const V=y(W),Y=()=>{!I.isInFallback||(d(null,R,le,V,J,null,F,o,c),sn(I,R))},te=R.transition&&R.transition.mode==="out-in";te&&(W.transition.afterLeave=Y),I.isInFallback=!0,m(W,J,null,!0),te||Y()},move(R,B,W){I.activeBranch&&h(I.activeBranch,R,B,W),I.container=R},next(){return I.activeBranch&&y(I.activeBranch)},registerDep(R,B){const W=!!I.pendingBranch;W&&I.deps++;const J=R.vnode.el;R.asyncDep.catch(le=>{Gn(le,R,0)}).then(le=>{if(R.isUnmounted||I.isUnmounted||I.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:F}=R;Ni(R,le,!1),J&&(F.el=J);const V=!J&&R.subTree.el;B(R,F,O(J||R.subTree.el),J?null:y(R.subTree),I,a,c),V&&k(V),os(R,F.el),W&&--I.deps===0&&I.resolve()})},unmount(R,B){I.isUnmounted=!0,I.activeBranch&&m(I.activeBranch,n,R,B),I.pendingBranch&&m(I.pendingBranch,n,R,B)}};return I}function fu(t,e,n,r,i,s,a,o,c){const l=e.suspense=cs(e,r,n,t.parentNode,document.createElement("div"),null,i,s,a,o,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,s,a);return l.deps===0&&l.resolve(),u}function hu(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Bs(r?n.default:n),t.ssFallback=r?Bs(n.fallback):me(Oe)}function Bs(t){let e;if(H(t)){const n=ln&&t._c;n&&(t._d=!1,ee()),t=t(),n&&(t._d=!0,e=qe,Zo())}return $(t)&&(t=iu(t)),t=Fe(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function pu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):wo(t)}function sn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,i=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=i,os(r,i))}function fr(t,e){if(be){let n=be.provides;const r=be.parent&&be.parent.provides;r===n&&(n=be.provides=Object.create(r)),n[t]=e}}function st(t,e,n=!1){const r=be||Le;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&H(e)?e.call(r.proxy):e}}const Fs={};function hr(t,e,n){return Po(t,e,n)}function Po(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ce){const o=be;let c,l=!1,u=!1;if(Ie(t)?(c=()=>t.value,l=Ti(t)):rn(t)?(c=()=>t,r=!0):$(t)?(u=!0,l=t.some(A=>rn(A)||Ti(A)),c=()=>t.map(A=>{if(Ie(A))return A.value;if(rn(A))return Lt(A);if(H(A))return It(A,o,2)})):H(t)?e?c=()=>It(t,o,2):c=()=>{if(!(o&&o.isUnmounted))return d&&d(),Ue(t,o,3,[h])}:c=je,e&&r){const A=c;c=()=>Lt(A())}let d,h=A=>{d=k.onStop=()=>{It(A,o,4)}};if(Fn)return h=je,e?n&&Ue(e,o,3,[c(),u?[]:void 0,h]):c(),je;let m=u?[]:Fs;const y=()=>{if(!!k.active)if(e){const A=k.run();(r||l||(u?A.some((I,R)=>Mn(I,m[R])):Mn(A,m)))&&(d&&d(),Ue(e,o,3,[A,m===Fs?void 0:m,h]),m=A)}else k.run()};y.allowRecurse=!!e;let O;i==="sync"?O=y:i==="post"?O=()=>Te(y,o&&o.suspense):O=()=>nu(y);const k=new es(c,O);return e?n?y():m=k.run():i==="post"?Te(k.run.bind(k),o&&o.suspense):k.run(),()=>{k.stop(),o&&o.scope&&Ji(o.scope.effects,k)}}function mu(t,e,n){const r=this.proxy,i=ye(t)?t.includes(".")?Oo(r,t):()=>r[t]:t.bind(r,r);let s;H(e)?s=e:(s=e.handler,n=e);const a=be;kt(this);const o=Po(i,s.bind(r),n);return a?kt(a):wt(),o}function Oo(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Lt(t,e){if(!_e(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))Lt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Lt(t[n],e);else if(Qa(t)||nn(t))t.forEach(n=>{Lt(n,e)});else if(Za(t))for(const n in t)Lt(t[n],e);return t}function gu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jr(()=>{t.isMounted=!0}),ls(()=>{t.isUnmounting=!0}),t}const Me=[Function,Array],vu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},setup(t,{slots:e}){const n=nc(),r=gu();let i;return()=>{const s=e.default&&Mo(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const O of s)if(O.type!==Oe){a=O;break}}const o=Z(t),{mode:c}=o;if(r.isLeaving)return ci(a);const l=$s(a);if(!l)return ci(a);const u=ki(l,o,r,n);Ri(l,u);const d=n.subTree,h=d&&$s(d);let m=!1;const{getTransitionKey:y}=l.type;if(y){const O=y();i===void 0?i=O:O!==i&&(i=O,m=!0)}if(h&&h.type!==Oe&&(!Je(l,h)||m)){const O=ki(h,o,r,n);if(Ri(h,O),c==="out-in")return r.isLeaving=!0,O.afterLeave=()=>{r.isLeaving=!1,n.update()},ci(a);c==="in-out"&&l.type!==Oe&&(O.delayLeave=(k,A,I)=>{const R=Do(r,h);R[String(h.key)]=h,k._leaveCb=()=>{A(),k._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=I})}return a}}},xo=vu;function Do(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ki(t,e,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:O,onAppear:k,onAfterAppear:A,onAppearCancelled:I}=e,R=String(t.key),B=Do(n,t),W=(F,V)=>{F&&Ue(F,r,9,V)},J=(F,V)=>{const Y=V[1];W(F,V),$(F)?F.every(te=>te.length<=1)&&Y():F.length<=1&&Y()},le={mode:s,persisted:a,beforeEnter(F){let V=o;if(!n.isMounted)if(i)V=O||o;else return;F._leaveCb&&F._leaveCb(!0);const Y=B[R];Y&&Je(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),W(V,[F])},enter(F){let V=c,Y=l,te=u;if(!n.isMounted)if(i)V=k||c,Y=A||l,te=I||u;else return;let x=!1;const ne=F._enterCb=ve=>{x||(x=!0,ve?W(te,[F]):W(Y,[F]),le.delayedLeave&&le.delayedLeave(),F._enterCb=void 0)};V?J(V,[F,ne]):ne()},leave(F,V){const Y=String(t.key);if(F._enterCb&&F._enterCb(!0),n.isUnmounting)return V();W(d,[F]);let te=!1;const x=F._leaveCb=ne=>{te||(te=!0,V(),ne?W(y,[F]):W(m,[F]),F._leaveCb=void 0,B[Y]===t&&delete B[Y])};B[Y]=t,h?J(h,[F,x]):x()},clone(F){return ki(F,e,n,r)}};return le}function ci(t){if(Kr(t))return t=At(t),t.children=null,t}function $s(t){return Kr(t)?t.children?t.children[0]:void 0:t}function Ri(t,e){t.shapeFlag&6&&t.component?Ri(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Mo(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Se?(a.patchFlag&128&&i++,r=r.concat(Mo(a.children,e,o))):(e||a.type!==Oe)&&r.push(o!=null?At(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function No(t){return H(t)?{setup:t,name:t.name}:t}const pr=t=>!!t.type.__asyncLoader,Kr=t=>t.type.__isKeepAlive;function _u(t,e){Lo(t,"a",e)}function yu(t,e){Lo(t,"da",e)}function Lo(t,e,n=be){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Gr(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Kr(i.parent.vnode)&&bu(r,e,n,i),i=i.parent}}function bu(t,e,n,r){const i=Gr(e,t,r,!0);Bo(()=>{Ji(r[e],i)},n)}function Gr(t,e,n=be,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{if(n.isUnmounted)return;mn(),kt(n);const o=Ue(e,n,t,a);return wt(),gn(),o});return r?i.unshift(s):i.push(s),s}}const ct=t=>(e,n=be)=>(!Fn||t==="sp")&&Gr(t,e,n),qo=ct("bm"),Jr=ct("m"),Eu=ct("bu"),Uo=ct("u"),ls=ct("bum"),Bo=ct("um"),Iu=ct("sp"),wu=ct("rtg"),Cu=ct("rtc");function Tu(t,e=be){Gr("ec",t,e)}function Tr(t,e){const n=Le;if(n===null)return t;const r=Qr(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[a,o,c,l=ce]=e[s];H(a)&&(a={mounted:a,updated:a}),a.deep&&Lt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l})}return t}function Rt(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(mn(),Ue(c,n,8,[t.el,o,t,e]),gn())}}const us="components";function Fo(t,e){return jo(us,t,!0,e)||t}const $o=Symbol();function Su(t){return ye(t)?jo(us,t,!1)||t:t||$o}function jo(t,e,n=!0,r=!1){const i=Le||be;if(i){const s=i.type;if(t===us){const o=td(s,!1);if(o&&(o===e||o===Xe(e)||o===jr(Xe(e))))return s}const a=js(i[t]||s[t],e)||js(i.appContext[t],e);return!a&&r?s:a}}function js(t,e){return t&&(t[e]||t[Xe(e)]||t[jr(Xe(e))])}function zo(t,e,n,r){let i;const s=n&&n[r];if($(t)||ye(t)){i=new Array(t.length);for(let a=0,o=t.length;a<o;a++)i[a]=e(t[a],a,void 0,s&&s[a])}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s&&s[a])}else if(_e(t))if(t[Symbol.iterator])i=Array.from(t,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(t);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=e(t[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const Pi=t=>t?rc(t)?Qr(t)||t.proxy:Pi(t.parent):null,Sr=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pi(t.parent),$root:t=>Pi(t.root),$emit:t=>t.emit,$options:t=>Wo(t),$forceUpdate:t=>t.f||(t.f=()=>bo(t.update)),$nextTick:t=>t.n||(t.n=yo.bind(t.proxy)),$watch:t=>mu.bind(t)}),Au={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=t;let l;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(r!==ce&&Q(r,e))return a[e]=1,r[e];if(i!==ce&&Q(i,e))return a[e]=2,i[e];if((l=t.propsOptions[0])&&Q(l,e))return a[e]=3,s[e];if(n!==ce&&Q(n,e))return a[e]=4,n[e];Oi&&(a[e]=0)}}const u=Sr[e];let d,h;if(u)return e==="$attrs"&&xe(t,"get",e),u(t);if((d=o.__cssModules)&&(d=d[e]))return d;if(n!==ce&&Q(n,e))return a[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return i!==ce&&Q(i,e)?(i[e]=n,!0):r!==ce&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||t!==ce&&Q(t,a)||e!==ce&&Q(e,a)||(o=s[0])&&Q(o,a)||Q(r,a)||Q(Sr,a)||Q(i.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Oi=!0;function ku(t){const e=Wo(t),n=t.proxy,r=t.ctx;Oi=!1,e.beforeCreate&&zs(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:y,activated:O,deactivated:k,beforeDestroy:A,beforeUnmount:I,destroyed:R,unmounted:B,render:W,renderTracked:J,renderTriggered:le,errorCaptured:F,serverPrefetch:V,expose:Y,inheritAttrs:te,components:x,directives:ne,filters:ve}=e;if(l&&Ru(l,r,null,t.appContext.config.unwrapInjectedRef),a)for(const ue in a){const re=a[ue];H(re)&&(r[ue]=re.bind(n))}if(i){const ue=i.call(n,n);_e(ue)&&(t.data=Kn(ue))}if(Oi=!0,s)for(const ue in s){const re=s[ue],Ae=H(re)?re.bind(n,n):H(re.get)?re.get.bind(n,n):je,Wt=!H(re)&&H(re.set)?re.set.bind(n):je,et=Ne({get:Ae,set:Wt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>et.value,set:We=>et.value=We})}if(o)for(const ue in o)Ho(o[ue],r,n,ue);if(c){const ue=H(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(re=>{fr(re,ue[re])})}u&&zs(u,t,"c");function ge(ue,re){$(re)?re.forEach(Ae=>ue(Ae.bind(n))):re&&ue(re.bind(n))}if(ge(qo,d),ge(Jr,h),ge(Eu,m),ge(Uo,y),ge(_u,O),ge(yu,k),ge(Tu,F),ge(Cu,J),ge(wu,le),ge(ls,I),ge(Bo,B),ge(Iu,V),$(Y))if(Y.length){const ue=t.exposed||(t.exposed={});Y.forEach(re=>{Object.defineProperty(ue,re,{get:()=>n[re],set:Ae=>n[re]=Ae})})}else t.exposed||(t.exposed={});W&&t.render===je&&(t.render=W),te!=null&&(t.inheritAttrs=te),x&&(t.components=x),ne&&(t.directives=ne)}function Ru(t,e,n=je,r=!1){$(t)&&(t=xi(t));for(const i in t){const s=t[i];let a;_e(s)?"default"in s?a=st(s.from||i,s.default,!0):a=st(s.from||i):a=st(s),Ie(a)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function zs(t,e,n){Ue($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ho(t,e,n,r){const i=r.includes(".")?Oo(n,r):()=>n[r];if(ye(t)){const s=e[t];H(s)&&hr(i,s)}else if(H(t))hr(i,t.bind(n));else if(_e(t))if($(t))t.forEach(s=>Ho(s,e,n,r));else{const s=H(t.handler)?t.handler.bind(n):e[t.handler];H(s)&&hr(i,s,t)}}function Wo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let c;return o?c=o:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Ar(c,l,a,!0)),Ar(c,e,a)),s.set(e,c),c}function Ar(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ar(t,s,n,!0),i&&i.forEach(a=>Ar(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const o=Pu[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Pu={data:Hs,props:Dt,emits:Dt,methods:Dt,computed:Dt,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Dt,directives:Dt,watch:xu,provide:Hs,inject:Ou};function Hs(t,e){return e?t?function(){return Ee(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function Ou(t,e){return Dt(xi(t),xi(e))}function xi(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function Dt(t,e){return t?Ee(Ee(Object.create(null),t),e):e}function xu(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const r in e)n[r]=Ce(t[r],e[r]);return n}function Du(t,e,n,r=!1){const i={},s={};Ir(s,Yr,1),t.propsDefaults=Object.create(null),Vo(t,e,i,s);for(const a in t.propsOptions[0])a in i||(i[a]=void 0);n?t.props=r?i:Kl(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Mu(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=t,o=Z(i),[c]=t.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Wr(t.emitsOptions,h))continue;const m=e[h];if(c)if(Q(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const y=Xe(h);i[y]=Di(c,o,y,m,t,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{Vo(t,e,i,s)&&(l=!0);let u;for(const d in o)(!e||!Q(e,d)&&((u=pn(d))===d||!Q(e,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Di(c,o,d,void 0,t,!0)):delete i[d]);if(s!==o)for(const d in s)(!e||!Q(e,d)&&!0)&&(delete s[d],l=!0)}l&&at(t,"set","$attrs")}function Vo(t,e,n,r){const[i,s]=t.propsOptions;let a=!1,o;if(e)for(let c in e){if(ur(c))continue;const l=e[c];let u;i&&Q(i,u=Xe(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Wr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=Z(n),l=o||ce;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Di(i,c,d,l[d],t,!Q(l,d))}}return a}function Di(t,e,n,r,i,s){const a=t[n];if(a!=null){const o=Q(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&H(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(kt(i),r=l[n]=c.call(null,e),wt())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===pn(n))&&(r=!0))}return r}function Ko(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,a={},o=[];let c=!1;if(!H(t)){const u=d=>{c=!0;const[h,m]=Ko(d,e,!0);Ee(a,h),m&&o.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,tn),tn;if($(s))for(let u=0;u<s.length;u++){const d=Xe(s[u]);Ws(d)&&(a[d]=ce)}else if(s)for(const u in s){const d=Xe(u);if(Ws(d)){const h=s[u],m=a[d]=$(h)||H(h)?{type:h}:h;if(m){const y=Gs(Boolean,m.type),O=Gs(String,m.type);m[0]=y>-1,m[1]=O<0||y<O,(y>-1||Q(m,"default"))&&o.push(d)}}}const l=[a,o];return r.set(t,l),l}function Ws(t){return t[0]!=="$"}function Vs(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ks(t,e){return Vs(t)===Vs(e)}function Gs(t,e){return $(e)?e.findIndex(n=>Ks(n,t)):H(e)&&Ks(e,t)?0:-1}const Go=t=>t[0]==="_"||t==="$stable",ds=t=>$(t)?t.map(Fe):[Fe(t)],Nu=(t,e,n)=>{if(e._n)return e;const r=St((...i)=>ds(e(...i)),n);return r._c=!1,r},Jo=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Go(i))continue;const s=t[i];if(H(s))e[i]=Nu(i,s,r);else if(s!=null){const a=ds(s);e[i]=()=>a}}},Yo=(t,e)=>{const n=ds(e);t.slots.default=()=>n},Lu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Ir(e,"_",n)):Jo(e,t.slots={})}else t.slots={},e&&Yo(t,e);Ir(t.slots,Yr,1)},qu=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,a=ce;if(r.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:(Ee(i,e),!n&&o===1&&delete i._):(s=!e.$stable,Jo(e,i)),a=e}else e&&(Yo(t,e),a={default:1});if(s)for(const o in i)!Go(o)&&!(o in a)&&delete i[o]};function Qo(){return{app:null,config:{isNativeTag:hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uu=0;function Bu(t,e){return function(r,i=null){H(r)||(r=Object.assign({},r)),i!=null&&!_e(i)&&(i=null);const s=Qo(),a=new Set;let o=!1;const c=s.app={_uid:Uu++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:id,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&H(l.install)?(a.add(l),l.install(c,...u)):H(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,d){if(!o){const h=me(r,i);return h.appContext=s,u&&e?e(h,l):t(h,l,d),o=!0,c._container=l,l.__vue_app__=c,Qr(h.component)||h.component.proxy}},unmount(){o&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Mi(t,e,n,r,i=!1){if($(t)){t.forEach((h,m)=>Mi(h,e&&($(e)?e[m]:e),n,r,i));return}if(pr(r)&&!i)return;const s=r.shapeFlag&4?Qr(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=t,l=e&&e.r,u=o.refs===ce?o.refs={}:o.refs,d=o.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,Q(d,l)&&(d[l]=null)):Ie(l)&&(l.value=null)),H(c))It(c,o,12,[a,u]);else{const h=ye(c),m=Ie(c);if(h||m){const y=()=>{if(t.f){const O=h?u[c]:c.value;i?$(O)&&Ji(O,s):$(O)?O.includes(s)||O.push(s):h?(u[c]=[s],Q(d,c)&&(d[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else h?(u[c]=a,Q(d,c)&&(d[c]=a)):m&&(c.value=a,t.k&&(u[t.k]=a))};a?(y.id=-1,Te(y,n)):y()}}}const Te=pu;function Fu(t){return $u(t)}function $u(t,e){const n=yl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=je,cloneNode:y,insertStaticContent:O}=t,k=(f,p,g,b=null,_=null,C=null,P=!1,w=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Je(f,p)&&(b=L(f),De(f,_,C,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:E,ref:q,shapeFlag:M}=p;switch(E){case fs:A(f,p,g,b);break;case Oe:I(f,p,g,b);break;case mr:f==null&&R(p,g,b,P);break;case Se:ne(f,p,g,b,_,C,P,w,T);break;default:M&1?J(f,p,g,b,_,C,P,w,T):M&6?ve(f,p,g,b,_,C,P,w,T):(M&64||M&128)&&E.process(f,p,g,b,_,C,P,w,T,de)}q!=null&&_&&Mi(q,f&&f.ref,C,p||f,!p)},A=(f,p,g,b)=>{if(f==null)r(p.el=o(p.children),g,b);else{const _=p.el=f.el;p.children!==f.children&&l(_,p.children)}},I=(f,p,g,b)=>{f==null?r(p.el=c(p.children||""),g,b):p.el=f.el},R=(f,p,g,b)=>{[f.el,f.anchor]=O(f.children,p,g,b,f.el,f.anchor)},B=({el:f,anchor:p},g,b)=>{let _;for(;f&&f!==p;)_=h(f),r(f,g,b),f=_;r(p,g,b)},W=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},J=(f,p,g,b,_,C,P,w,T)=>{P=P||p.type==="svg",f==null?le(p,g,b,_,C,P,w,T):Y(f,p,_,C,P,w,T)},le=(f,p,g,b,_,C,P,w)=>{let T,E;const{type:q,props:M,shapeFlag:U,transition:z,patchFlag:X,dirs:se}=f;if(f.el&&y!==void 0&&X===-1)T=f.el=y(f.el);else{if(T=f.el=a(f.type,C,M&&M.is,M),U&8?u(T,f.children):U&16&&V(f.children,T,null,b,_,C&&q!=="foreignObject",P,w),se&&Rt(f,null,b,"created"),M){for(const he in M)he!=="value"&&!ur(he)&&s(T,he,null,M[he],C,f.children,b,_,S);"value"in M&&s(T,"value",null,M.value),(E=M.onVnodeBeforeMount)&&Ke(E,b,f)}F(T,f,f.scopeId,P,b)}se&&Rt(f,null,b,"beforeMount");const ae=(!_||_&&!_.pendingBranch)&&z&&!z.persisted;ae&&z.beforeEnter(T),r(T,p,g),((E=M&&M.onVnodeMounted)||ae||se)&&Te(()=>{E&&Ke(E,b,f),ae&&z.enter(T),se&&Rt(f,null,b,"mounted")},_)},F=(f,p,g,b,_)=>{if(g&&m(f,g),b)for(let C=0;C<b.length;C++)m(f,b[C]);if(_){let C=_.subTree;if(p===C){const P=_.vnode;F(f,P,P.scopeId,P.slotScopeIds,_.parent)}}},V=(f,p,g,b,_,C,P,w,T=0)=>{for(let E=T;E<f.length;E++){const q=f[E]=w?mt(f[E]):Fe(f[E]);k(null,q,p,g,b,_,C,P,w)}},Y=(f,p,g,b,_,C,P)=>{const w=p.el=f.el;let{patchFlag:T,dynamicChildren:E,dirs:q}=p;T|=f.patchFlag&16;const M=f.props||ce,U=p.props||ce;let z;g&&Pt(g,!1),(z=U.onVnodeBeforeUpdate)&&Ke(z,g,p,f),q&&Rt(p,f,g,"beforeUpdate"),g&&Pt(g,!0);const X=_&&p.type!=="foreignObject";if(E?te(f.dynamicChildren,E,w,g,b,X,C):P||Ae(f,p,w,null,g,b,X,C,!1),T>0){if(T&16)x(w,p,M,U,g,b,_);else if(T&2&&M.class!==U.class&&s(w,"class",null,U.class,_),T&4&&s(w,"style",M.style,U.style,_),T&8){const se=p.dynamicProps;for(let ae=0;ae<se.length;ae++){const he=se[ae],Be=M[he],Vt=U[he];(Vt!==Be||he==="value")&&s(w,he,Be,Vt,_,f.children,g,b,S)}}T&1&&f.children!==p.children&&u(w,p.children)}else!P&&E==null&&x(w,p,M,U,g,b,_);((z=U.onVnodeUpdated)||q)&&Te(()=>{z&&Ke(z,g,p,f),q&&Rt(p,f,g,"updated")},b)},te=(f,p,g,b,_,C,P)=>{for(let w=0;w<p.length;w++){const T=f[w],E=p[w],q=T.el&&(T.type===Se||!Je(T,E)||T.shapeFlag&70)?d(T.el):g;k(T,E,q,null,b,_,C,P,!0)}},x=(f,p,g,b,_,C,P)=>{if(g!==b){for(const w in b){if(ur(w))continue;const T=b[w],E=g[w];T!==E&&w!=="value"&&s(f,w,E,T,P,p.children,_,C,S)}if(g!==ce)for(const w in g)!ur(w)&&!(w in b)&&s(f,w,g[w],null,P,p.children,_,C,S);"value"in b&&s(f,"value",g.value,b.value)}},ne=(f,p,g,b,_,C,P,w,T)=>{const E=p.el=f?f.el:o(""),q=p.anchor=f?f.anchor:o("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:z}=p;z&&(w=w?w.concat(z):z),f==null?(r(E,g,b),r(q,g,b),V(p.children,g,q,_,C,P,w,T)):M>0&&M&64&&U&&f.dynamicChildren?(te(f.dynamicChildren,U,g,_,C,P,w),(p.key!=null||_&&p===_.subTree)&&Xo(f,p,!0)):Ae(f,p,g,q,_,C,P,w,T)},ve=(f,p,g,b,_,C,P,w,T)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?_.ctx.activate(p,g,b,P,T):Ze(p,g,b,_,C,P,T):ge(f,p,T)},Ze=(f,p,g,b,_,C,P)=>{const w=f.component=Yu(f,b,_);if(Kr(f)&&(w.ctx.renderer=de),Qu(w),w.asyncDep){if(_&&_.registerDep(w,ue),!f.el){const T=w.subTree=me(Oe);I(null,T,p,g)}return}ue(w,f,p,g,_,C,P)},ge=(f,p,g)=>{const b=p.component=f.component;if(ou(f,p,g))if(b.asyncDep&&!b.asyncResolved){re(b,p,g);return}else b.next=p,tu(b.update),b.update();else p.el=f.el,b.vnode=p},ue=(f,p,g,b,_,C,P)=>{const w=()=>{if(f.isMounted){let{next:q,bu:M,u:U,parent:z,vnode:X}=f,se=q,ae;Pt(f,!1),q?(q.el=X.el,re(f,q,P)):q=X,M&&dr(M),(ae=q.props&&q.props.onVnodeBeforeUpdate)&&Ke(ae,z,q,X),Pt(f,!0);const he=oi(f),Be=f.subTree;f.subTree=he,k(Be,he,d(Be.el),L(Be),f,_,C),q.el=he.el,se===null&&os(f,he.el),U&&Te(U,_),(ae=q.props&&q.props.onVnodeUpdated)&&Te(()=>Ke(ae,z,q,X),_)}else{let q;const{el:M,props:U}=p,{bm:z,m:X,parent:se}=f,ae=pr(p);if(Pt(f,!1),z&&dr(z),!ae&&(q=U&&U.onVnodeBeforeMount)&&Ke(q,se,p),Pt(f,!0),M&&K){const he=()=>{f.subTree=oi(f),K(M,f.subTree,f,_,null)};ae?p.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=oi(f);k(null,he,g,b,f,_,C),p.el=he.el}if(X&&Te(X,_),!ae&&(q=U&&U.onVnodeMounted)){const he=p;Te(()=>Ke(q,se,he),_)}(p.shapeFlag&256||se&&pr(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Te(f.a,_),f.isMounted=!0,p=g=b=null}},T=f.effect=new es(w,()=>bo(E),f.scope),E=f.update=()=>T.run();E.id=f.uid,Pt(f,!0),E()},re=(f,p,g)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,Mu(f,p.props,b,g),qu(f,p.children,g),mn(),Hr(void 0,f.update),gn()},Ae=(f,p,g,b,_,C,P,w,T=!1)=>{const E=f&&f.children,q=f?f.shapeFlag:0,M=p.children,{patchFlag:U,shapeFlag:z}=p;if(U>0){if(U&128){et(E,M,g,b,_,C,P,w,T);return}else if(U&256){Wt(E,M,g,b,_,C,P,w,T);return}}z&8?(q&16&&S(E,_,C),M!==E&&u(g,M)):q&16?z&16?et(E,M,g,b,_,C,P,w,T):S(E,_,C,!0):(q&8&&u(g,""),z&16&&V(M,g,b,_,C,P,w,T))},Wt=(f,p,g,b,_,C,P,w,T)=>{f=f||tn,p=p||tn;const E=f.length,q=p.length,M=Math.min(E,q);let U;for(U=0;U<M;U++){const z=p[U]=T?mt(p[U]):Fe(p[U]);k(f[U],z,g,null,_,C,P,w,T)}E>q?S(f,_,C,!0,!1,M):V(p,g,b,_,C,P,w,T,M)},et=(f,p,g,b,_,C,P,w,T)=>{let E=0;const q=p.length;let M=f.length-1,U=q-1;for(;E<=M&&E<=U;){const z=f[E],X=p[E]=T?mt(p[E]):Fe(p[E]);if(Je(z,X))k(z,X,g,null,_,C,P,w,T);else break;E++}for(;E<=M&&E<=U;){const z=f[M],X=p[U]=T?mt(p[U]):Fe(p[U]);if(Je(z,X))k(z,X,g,null,_,C,P,w,T);else break;M--,U--}if(E>M){if(E<=U){const z=U+1,X=z<q?p[z].el:b;for(;E<=U;)k(null,p[E]=T?mt(p[E]):Fe(p[E]),g,X,_,C,P,w,T),E++}}else if(E>U)for(;E<=M;)De(f[E],_,C,!0),E++;else{const z=E,X=E,se=new Map;for(E=X;E<=U;E++){const ke=p[E]=T?mt(p[E]):Fe(p[E]);ke.key!=null&&se.set(ke.key,E)}let ae,he=0;const Be=U-X+1;let Vt=!1,As=0;const En=new Array(Be);for(E=0;E<Be;E++)En[E]=0;for(E=z;E<=M;E++){const ke=f[E];if(he>=Be){De(ke,_,C,!0);continue}let Ve;if(ke.key!=null)Ve=se.get(ke.key);else for(ae=X;ae<=U;ae++)if(En[ae-X]===0&&Je(ke,p[ae])){Ve=ae;break}Ve===void 0?De(ke,_,C,!0):(En[Ve-X]=E+1,Ve>=As?As=Ve:Vt=!0,k(ke,p[Ve],g,null,_,C,P,w,T),he++)}const ks=Vt?ju(En):tn;for(ae=ks.length-1,E=Be-1;E>=0;E--){const ke=X+E,Ve=p[ke],Rs=ke+1<q?p[ke+1].el:b;En[E]===0?k(null,Ve,g,Rs,_,C,P,w,T):Vt&&(ae<0||E!==ks[ae]?We(Ve,g,Rs,2):ae--)}}},We=(f,p,g,b,_=null)=>{const{el:C,type:P,transition:w,children:T,shapeFlag:E}=f;if(E&6){We(f.component.subTree,p,g,b);return}if(E&128){f.suspense.move(p,g,b);return}if(E&64){P.move(f,p,g,de);return}if(P===Se){r(C,p,g);for(let M=0;M<T.length;M++)We(T[M],p,g,b);r(f.anchor,p,g);return}if(P===mr){B(f,p,g);return}if(b!==2&&E&1&&w)if(b===0)w.beforeEnter(C),r(C,p,g),Te(()=>w.enter(C),_);else{const{leave:M,delayLeave:U,afterLeave:z}=w,X=()=>r(C,p,g),se=()=>{M(C,()=>{X(),z&&z()})};U?U(C,X,se):se()}else r(C,p,g)},De=(f,p,g,b=!1,_=!1)=>{const{type:C,props:P,ref:w,children:T,dynamicChildren:E,shapeFlag:q,patchFlag:M,dirs:U}=f;if(w!=null&&Mi(w,null,g,f,!0),q&256){p.ctx.deactivate(f);return}const z=q&1&&U,X=!pr(f);let se;if(X&&(se=P&&P.onVnodeBeforeUnmount)&&Ke(se,p,f),q&6)N(f.component,g,b);else{if(q&128){f.suspense.unmount(g,b);return}z&&Rt(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,g,_,de,b):E&&(C!==Se||M>0&&M&64)?S(E,p,g,!1,!0):(C===Se&&M&384||!_&&q&16)&&S(T,p,g),b&&bn(f)}(X&&(se=P&&P.onVnodeUnmounted)||z)&&Te(()=>{se&&Ke(se,p,f),z&&Rt(f,null,p,"unmounted")},g)},bn=f=>{const{type:p,el:g,anchor:b,transition:_}=f;if(p===Se){v(g,b);return}if(p===mr){W(f);return}const C=()=>{i(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:P,delayLeave:w}=_,T=()=>P(g,C);w?w(f.el,C,T):T()}else C()},v=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},N=(f,p,g)=>{const{bum:b,scope:_,update:C,subTree:P,um:w}=f;b&&dr(b),_.stop(),C&&(C.active=!1,De(P,f,p,g)),w&&Te(w,p),Te(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},S=(f,p,g,b=!1,_=!1,C=0)=>{for(let P=C;P<f.length;P++)De(f[P],p,g,b,_)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ie=(f,p,g)=>{f==null?p._vnode&&De(p._vnode,null,null,!0):k(p._vnode||null,f,p,null,null,null,g),Co(),p._vnode=f},de={p:k,um:De,m:We,r:bn,mt:Ze,mc:V,pc:Ae,pbc:te,n:L,o:t};let G,K;return e&&([G,K]=e(de)),{render:ie,hydrate:G,createApp:Bu(ie,G)}}function Pt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xo(t,e,n=!1){const r=t.children,i=e.children;if($(r)&&$(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=mt(i[s]),o.el=a.el),n||Xo(a,o))}}function ju(t){const e=t.slice(),n=[0];let r,i,s,a,o;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<l?s=o+1:a=o;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}const zu=t=>t.__isTeleport,Se=Symbol(void 0),fs=Symbol(void 0),Oe=Symbol(void 0),mr=Symbol(void 0),Pn=[];let qe=null;function ee(t=!1){Pn.push(qe=t?null:[])}function Zo(){Pn.pop(),qe=Pn[Pn.length-1]||null}let ln=1;function Js(t){ln+=t}function ec(t){return t.dynamicChildren=ln>0?qe||tn:null,Zo(),ln>0&&qe&&qe.push(t),t}function pe(t,e,n,r,i,s){return ec(D(t,e,n,r,i,s,!0))}function un(t,e,n,r,i){return ec(me(t,e,n,r,i,!0))}function kr(t){return t?t.__v_isVNode===!0:!1}function Je(t,e){return t.type===e.type&&t.key===e.key}const Yr="__vInternal",tc=({key:t})=>t!=null?t:null,gr=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||Ie(t)||H(t)?{i:Le,r:t,k:e,f:!!n}:t:null;function D(t,e=null,n=null,r=0,i=null,s=t===Se?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tc(e),ref:e&&gr(e),scopeId:Vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return o?(hs(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),ln>0&&!a&&qe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&qe.push(c),c}const me=Hu;function Hu(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===$o)&&(t=Oe),kr(t)){const o=At(t,e,!0);return n&&hs(o,n),ln>0&&!s&&qe&&(o.shapeFlag&6?qe[qe.indexOf(t)]=o:qe.push(o)),o.patchFlag|=-2,o}if(nd(t)&&(t=t.__vccOpts),e){e=Wu(e);let{class:o,style:c}=e;o&&!ye(o)&&(e.class=en(o)),_e(c)&&(fo(c)&&!$(c)&&(c=Ee({},c)),e.style=Ur(c))}const a=ye(t)?1:cu(t)?128:zu(t)?64:_e(t)?4:H(t)?2:0;return D(t,e,n,r,i,a,s,!0)}function Wu(t){return t?fo(t)||Yr in t?Ee({},t):t:null}function At(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=t,o=e?Ku(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:o,key:o&&tc(o),ref:e&&e.ref?n&&i?$(i)?i.concat(gr(e)):[i,gr(e)]:gr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&At(t.ssContent),ssFallback:t.ssFallback&&At(t.ssFallback),el:t.el,anchor:t.anchor}}function vr(t=" ",e=0){return me(fs,null,t,e)}function Vu(t,e){const n=me(mr,null,t);return n.staticCount=e,n}function Rr(t="",e=!1){return e?(ee(),un(Oe,null,t)):me(Oe,null,t)}function Fe(t){return t==null||typeof t=="boolean"?me(Oe):$(t)?me(Se,null,t.slice()):typeof t=="object"?mt(t):me(fs,null,String(t))}function mt(t){return t.el===null||t.memo?t:At(t)}function hs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),hs(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Yr in e)?e._ctx=Le:i===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[vr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ku(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=en([e.class,r.class]));else if(i==="style")e.style=Ur([e.style,r.style]);else if(Br(i)){const s=e[i],a=r[i];a&&s!==a&&!($(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=r[i])}return e}function Ke(t,e,n,r=null){Ue(t,e,7,[n,r])}const Gu=Qo();let Ju=0;function Yu(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Gu,s={uid:Ju++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ko(r,i),emitsOptions:So(r,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ru.bind(null,s),t.ce&&t.ce(s),s}let be=null;const nc=()=>be||Le,kt=t=>{be=t,t.scope.on()},wt=()=>{be&&be.scope.off(),be=null};function rc(t){return t.vnode.shapeFlag&4}let Fn=!1;function Qu(t,e=!1){Fn=e;const{props:n,children:r}=t.vnode,i=rc(t);Du(t,n,i,e),Lu(t,r);const s=i?Xu(t,e):void 0;return Fn=!1,s}function Xu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ho(new Proxy(t.ctx,Au));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?ed(t):null;kt(t),mn();const s=It(r,t,0,[t.props,i]);if(gn(),wt(),Qi(s)){if(s.then(wt,wt),e)return s.then(a=>{Ni(t,a,e)}).catch(a=>{Gn(a,t,0)});t.asyncDep=s}else Ni(t,s,e)}else ic(t,e)}function Ni(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:_e(e)&&(t.setupState=vo(e)),ic(t,n)}let Ys;function ic(t,e,n){const r=t.type;if(!t.render){if(!e&&Ys&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:a}=t.appContext.config,{delimiters:o,compilerOptions:c}=r,l=Ee(Ee({isCustomElement:s,delimiters:o},a),c);r.render=Ys(i,l)}}t.render=r.render||je}kt(t),mn(),ku(t),gn(),wt()}function Zu(t){return new Proxy(t.attrs,{get(e,n){return xe(t,"get","$attrs"),e[n]}})}function ed(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Zu(t))},slots:t.slots,emit:t.emit,expose:e}}function Qr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(vo(ho(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Sr)return Sr[n](t)}}))}function td(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function nd(t){return H(t)&&"__vccOpts"in t}const Ne=(t,e)=>Xl(t,e,Fn);function rd(t){const e=nc();let n=t();return wt(),Qi(n)&&(n=n.catch(r=>{throw kt(e),r})),[n,()=>kt(e)]}function ps(t,e,n){const r=arguments.length;return r===2?_e(e)&&!$(e)?kr(e)?me(t,null,[e]):me(t,e):me(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kr(n)&&(n=[n]),me(t,e,n))}const id="3.2.37",sd="http://www.w3.org/2000/svg",Nt=typeof document<"u"?document:null,Qs=Nt&&Nt.createElement("template"),ad={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Nt.createElementNS(sd,t):Nt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Nt.createTextNode(t),createComment:t=>Nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const a=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Qs.innerHTML=r?`<svg>${t}</svg>`:t;const o=Qs.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function od(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cd(t,e,n){const r=t.style,i=ye(n);if(n&&!i){for(const s in n)Li(r,s,n[s]);if(e&&!ye(e))for(const s in e)n[s]==null&&Li(r,s,"")}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const Xs=/\s*!important$/;function Li(t,e,n){if($(n))n.forEach(r=>Li(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ld(t,e);Xs.test(n)?t.setProperty(pn(r),n.replace(Xs,""),"important"):t[r]=n}}const Zs=["Webkit","Moz","ms"],li={};function ld(t,e){const n=li[e];if(n)return n;let r=Xe(e);if(r!=="filter"&&r in t)return li[e]=r;r=jr(r);for(let i=0;i<Zs.length;i++){const s=Zs[i]+r;if(s in t)return li[e]=s}return e}const ea="http://www.w3.org/1999/xlink";function ud(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ea,e.slice(6,e.length)):t.setAttributeNS(ea,e,n);else{const s=ll(e);n==null||s&&!Ja(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function dd(t,e,n,r,i,s,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ja(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}const[sc,fd]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let qi=0;const hd=Promise.resolve(),pd=()=>{qi=0},md=()=>qi||(hd.then(pd),qi=sc());function Yt(t,e,n,r){t.addEventListener(e,n,r)}function gd(t,e,n,r){t.removeEventListener(e,n,r)}function vd(t,e,n,r,i=null){const s=t._vei||(t._vei={}),a=s[e];if(r&&a)a.value=r;else{const[o,c]=_d(e);if(r){const l=s[e]=yd(r,i);Yt(t,o,l,c)}else a&&(gd(t,o,a,c),s[e]=void 0)}}const ta=/(?:Once|Passive|Capture)$/;function _d(t){let e;if(ta.test(t)){e={};let n;for(;n=t.match(ta);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[pn(t.slice(2)),e]}function yd(t,e){const n=r=>{const i=r.timeStamp||sc();(fd||i>=n.attached-1)&&Ue(bd(r,n.value),e,5,[r])};return n.value=t,n.attached=md(),n}function bd(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const na=/^on[a-z]/,Ed=(t,e,n,r,i=!1,s,a,o,c)=>{e==="class"?od(t,r,i):e==="style"?cd(t,n,r):Br(e)?Gi(e)||vd(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Id(t,e,r,i))?dd(t,e,r,s,a,o,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ud(t,e,r,i))};function Id(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&na.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||na.test(e)&&ye(n)?!1:e in t}const ut="transition",In="animation",Xr=(t,{slots:e})=>ps(xo,wd(t),e);Xr.displayName="Transition";const ac={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Xr.props=Ee({},xo.props,ac);const Ot=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},ra=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function wd(t){const e={};for(const x in t)x in ac||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=a,appearToClass:u=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,y=Cd(i),O=y&&y[0],k=y&&y[1],{onBeforeEnter:A,onEnter:I,onEnterCancelled:R,onLeave:B,onLeaveCancelled:W,onBeforeAppear:J=A,onAppear:le=I,onAppearCancelled:F=R}=e,V=(x,ne,ve)=>{xt(x,ne?u:o),xt(x,ne?l:a),ve&&ve()},Y=(x,ne)=>{x._isLeaving=!1,xt(x,d),xt(x,m),xt(x,h),ne&&ne()},te=x=>(ne,ve)=>{const Ze=x?le:I,ge=()=>V(ne,x,ve);Ot(Ze,[ne,ge]),ia(()=>{xt(ne,x?c:s),dt(ne,x?u:o),ra(Ze)||sa(ne,r,O,ge)})};return Ee(e,{onBeforeEnter(x){Ot(A,[x]),dt(x,s),dt(x,a)},onBeforeAppear(x){Ot(J,[x]),dt(x,c),dt(x,l)},onEnter:te(!1),onAppear:te(!0),onLeave(x,ne){x._isLeaving=!0;const ve=()=>Y(x,ne);dt(x,d),Ad(),dt(x,h),ia(()=>{!x._isLeaving||(xt(x,d),dt(x,m),ra(B)||sa(x,r,k,ve))}),Ot(B,[x,ve])},onEnterCancelled(x){V(x,!1),Ot(R,[x])},onAppearCancelled(x){V(x,!0),Ot(F,[x])},onLeaveCancelled(x){Y(x),Ot(W,[x])}})}function Cd(t){if(t==null)return null;if(_e(t))return[ui(t.enter),ui(t.leave)];{const e=ui(t);return[e,e]}}function ui(t){return Nn(t)}function dt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function xt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ia(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Td=0;function sa(t,e,n,r){const i=t._endId=++Td,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:c}=Sd(t,e);if(!a)return r();const l=a+"end";let u=0;const d=()=>{t.removeEventListener(l,h),s()},h=m=>{m.target===t&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},o+1),t.addEventListener(l,h)}function Sd(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),i=r(ut+"Delay"),s=r(ut+"Duration"),a=aa(i,s),o=r(In+"Delay"),c=r(In+"Duration"),l=aa(o,c);let u=null,d=0,h=0;e===ut?a>0&&(u=ut,d=a,h=s.length):e===In?l>0&&(u=In,d=l,h=c.length):(d=Math.max(a,l),u=d>0?a>l?ut:In:null,h=u?u===ut?s.length:c.length:0);const m=u===ut&&/\b(transform|all)(,|$)/.test(n[ut+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:m}}function aa(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>oa(n)+oa(t[r])))}function oa(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Ad(){return document.body.offsetHeight}const ca=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>dr(e,n):e};function kd(t){t.target.composing=!0}function la(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pr={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=ca(i);const s=r||i.props&&i.props.type==="number";Yt(t,e?"change":"input",a=>{if(a.target.composing)return;let o=t.value;n&&(o=o.trim()),s&&(o=Nn(o)),t._assign(o)}),n&&Yt(t,"change",()=>{t.value=t.value.trim()}),e||(Yt(t,"compositionstart",kd),Yt(t,"compositionend",la),Yt(t,"change",la))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=ca(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Nn(t.value)===e))return;const a=e==null?"":e;t.value!==a&&(t.value=a)}},Rd=Ee({patchProp:Ed},ad);let ua;function Pd(){return ua||(ua=Fu(Rd))}const Od=(...t)=>{const e=Pd().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=xd(r);if(!i)return;const s=e._component;!H(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function xd(t){return ye(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qt=typeof window<"u";function Dd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const oe=Object.assign;function di(t,e){const n={};for(const r in e){const i=e[r];n[r]=ze(i)?i.map(t):t(i)}return n}const On=()=>{},ze=Array.isArray,Md=/\/$/,Nd=t=>t.replace(Md,"");function fi(t,e,n="/"){let r,i={},s="",a="";const o=e.indexOf("#");let c=e.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,o>-1?o:e.length),i=t(s)),o>-1&&(r=r||e.slice(0,o),a=e.slice(o,e.length)),r=Bd(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function Ld(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function da(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qd(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&dn(e.matched[r],n.matched[i])&&oc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function dn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function oc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ud(t[n],e[n]))return!1;return!0}function Ud(t,e){return ze(t)?fa(t,e):ze(e)?fa(e,t):t===e}function fa(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Bd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var $n;(function(t){t.pop="pop",t.push="push"})($n||($n={}));var xn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xn||(xn={}));function Fd(t){if(!t)if(Qt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Nd(t)}const $d=/^[^#]+#/;function jd(t,e){return t.replace($d,"#")+e}function zd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zd(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ha(t,e){return(history.state?history.state.position-e:-1)+t}const Ui=new Map;function Wd(t,e){Ui.set(t,e)}function Vd(t){const e=Ui.get(t);return Ui.delete(t),e}let Kd=()=>location.protocol+"//"+location.host;function cc(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let o=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),da(c,"")}return da(n,t)+r+i}function Gd(t,e,n,r){let i=[],s=[],a=null;const o=({state:h})=>{const m=cc(t,location),y=n.value,O=e.value;let k=0;if(h){if(n.value=m,e.value=h,a&&a===y){a=null;return}k=O?h.position-O.position:0}else r(m);i.forEach(A=>{A(n.value,y,{delta:k,type:$n.pop,direction:k?k>0?xn.forward:xn.back:xn.unknown})})};function c(){a=n.value}function l(h){i.push(h);const m=()=>{const y=i.indexOf(h);y>-1&&i.splice(y,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(oe({},h.state,{scroll:Zr()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function pa(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Zr():null}}function Jd(t){const{history:e,location:n}=window,r={value:cc(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Kd()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function a(c,l){const u=oe({},e.state,pa(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=oe({},i.value,e.state,{forward:c,scroll:Zr()});s(u.current,u,!0);const d=oe({},pa(r.value,c,null),{position:u.position+1},l);s(c,d,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function Yd(t){t=Fd(t);const e=Jd(t),n=Gd(t,e.state,e.location,e.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=oe({location:"",base:t,go:r,createHref:jd.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Qd(t){return typeof t=="string"||t&&typeof t=="object"}function lc(t){return typeof t=="string"||typeof t=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uc=Symbol("");var ma;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ma||(ma={}));function fn(t,e){return oe(new Error,{type:t,[uc]:!0},e)}function tt(t,e){return t instanceof Error&&uc in t&&(e==null||!!(t.type&e))}const ga="[^/]+?",Xd={sensitive:!1,strict:!1,start:!0,end:!0},Zd=/[.+*?^${}()[\]/\\]/g;function ef(t,e){const n=oe({},Xd,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let d=0;d<l.length;d++){const h=l[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(Zd,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:O,optional:k,regexp:A}=h;s.push({name:y,repeatable:O,optional:k});const I=A||ga;if(I!==ga){m+=10;try{new RegExp(`(${I})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${y}" (${I}): `+B.message)}}let R=O?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;d||(R=k&&l.length<2?`(?:/${R})`:"/"+R),k&&(R+="?"),i+=R,m+=20,k&&(m+=-8),O&&(m+=-20),I===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",y=s[h-1];d[y.name]=m&&y.repeatable?m.split("/"):m}return d}function c(l){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:O,optional:k}=m,A=y in l?l[y]:"";if(ze(A)&&!O)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const I=ze(A)?A.join("/"):A;if(!I)if(k)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);u+=I}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function tf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nf(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=tf(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(va(r))return 1;if(va(i))return-1}return i.length-r.length}function va(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rf={type:0,value:""},sf=/[a-zA-Z0-9_]/;function af(t){if(!t)return[[]];if(t==="/")return[[rf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function d(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;o<t.length;){if(c=t[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),a()):c===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:sf.test(c)?h():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),d(),a(),i}function of(t,e,n){const r=ef(af(t.path),n),i=oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cf(t,e){const n=[],r=new Map;e=ya({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,d,h){const m=!h,y=uf(u);y.aliasOf=h&&h.record;const O=ya(e,u),k=[y];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of R)k.push(oe({},y,{components:h?h.record.components:y.components,path:B,aliasOf:h?h.record:y}))}let A,I;for(const R of k){const{path:B}=R;if(d&&B[0]!=="/"){const W=d.record.path,J=W[W.length-1]==="/"?"":"/";R.path=d.record.path+(B&&J+B)}if(A=of(R,d,O),h?h.alias.push(A):(I=I||A,I!==A&&I.alias.push(A),m&&u.name&&!_a(A)&&a(u.name)),y.children){const W=y.children;for(let J=0;J<W.length;J++)s(W[J],A,h&&h.children[J])}h=h||A,c(A)}return I?()=>{a(I)}:On}function a(u){if(lc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let d=0;for(;d<n.length&&nf(u,n[d])>=0&&(u.record.path!==n[d].record.path||!dc(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!_a(u)&&r.set(u.record.name,u)}function l(u,d){let h,m={},y,O;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw fn(1,{location:u});O=h.record.name,m=oe(lf(d.params,h.keys.filter(I=>!I.optional).map(I=>I.name)),u.params),y=h.stringify(m)}else if("path"in u)y=u.path,h=n.find(I=>I.re.test(y)),h&&(m=h.parse(y),O=h.record.name);else{if(h=d.name?r.get(d.name):n.find(I=>I.re.test(d.path)),!h)throw fn(1,{location:u,currentLocation:d});O=h.record.name,m=oe({},d.params,u.params),y=h.stringify(m)}const k=[];let A=h;for(;A;)k.unshift(A.record),A=A.parent;return{name:O,path:y,params:m,matched:k,meta:ff(k)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function lf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:df(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function df(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function _a(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ff(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function ya(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dc(t,e){return e.children.some(n=>n===t||dc(t,n))}const fc=/#/g,hf=/&/g,pf=/\//g,mf=/=/g,gf=/\?/g,hc=/\+/g,vf=/%5B/g,_f=/%5D/g,pc=/%5E/g,yf=/%60/g,mc=/%7B/g,bf=/%7C/g,gc=/%7D/g,Ef=/%20/g;function ms(t){return encodeURI(""+t).replace(bf,"|").replace(vf,"[").replace(_f,"]")}function If(t){return ms(t).replace(mc,"{").replace(gc,"}").replace(pc,"^")}function Bi(t){return ms(t).replace(hc,"%2B").replace(Ef,"+").replace(fc,"%23").replace(hf,"%26").replace(yf,"`").replace(mc,"{").replace(gc,"}").replace(pc,"^")}function wf(t){return Bi(t).replace(mf,"%3D")}function Cf(t){return ms(t).replace(fc,"%23").replace(gf,"%3F")}function Tf(t){return t==null?"":Cf(t).replace(pf,"%2F")}function Or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(hc," "),a=s.indexOf("="),o=Or(a<0?s:s.slice(0,a)),c=a<0?null:Or(s.slice(a+1));if(o in e){let l=e[o];ze(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function ba(t){let e="";for(let n in t){const r=t[n];if(n=wf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(s=>s&&Bi(s)):[r&&Bi(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Af(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const kf=Symbol(""),Ea=Symbol(""),ei=Symbol(""),vc=Symbol(""),Fi=Symbol("");function wn(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=d=>{d===!1?o(fn(4,{from:n,to:e})):d instanceof Error?o(d):Qd(d)?o(fn(2,{from:e,to:d})):(s&&r.enterCallbacks[i]===s&&typeof d=="function"&&s.push(d),a())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(d=>o(d))})}function hi(t,e,n,r){const i=[];for(const s of t)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(Rf(o)){const l=(o.__vccOpts||o)[e];l&&i.push(gt(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Dd(l)?l.default:l;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&gt(h,n,r,s,a)()}))}}return i}function Rf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ia(t){const e=st(ei),n=st(vc),r=Ne(()=>e.resolve(Ut(t.to))),i=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(dn.bind(null,u));if(h>-1)return h;const m=wa(c[l-2]);return l>1&&wa(u)===m&&d[d.length-1].path!==m?d.findIndex(dn.bind(null,c[l-2])):h}),s=Ne(()=>i.value>-1&&Df(n.params,r.value.params)),a=Ne(()=>i.value>-1&&i.value===n.matched.length-1&&oc(n.params,r.value.params));function o(c={}){return xf(c)?e[Ut(t.replace)?"replace":"push"](Ut(t.to)).catch(On):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const Pf=No({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ia,setup(t,{slots:e}){const n=Kn(Ia(t)),{options:r}=st(ei),i=Ne(()=>({[Ca(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ca(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ps("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Of=Pf;function xf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Df(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!ze(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function wa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ca=(t,e,n)=>t!=null?t:e!=null?e:n,Mf=No({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=st(Fi),i=Ne(()=>t.route||r.value),s=st(Ea,0),a=Ne(()=>{let l=Ut(s);const{matched:u}=i.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),o=Ne(()=>i.value.matched[a.value]);fr(Ea,Ne(()=>a.value+1)),fr(kf,o),fr(Fi,i);const c=Pe();return hr(()=>[c.value,o.value,t.name],([l,u,d],[h,m,y])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!dn(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(O=>O(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,d=o.value,h=d&&d.components[u];if(!h)return Ta(n.default,{Component:h,route:l});const m=d.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,k=ps(h,oe({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ta(n.default,{Component:k,route:l})||k}}});function Ta(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Nf=Mf;function Lf(t){const e=cf(t.routes,t),n=t.parseQuery||Sf,r=t.stringifyQuery||ba,i=t.history,s=wn(),a=wn(),o=wn(),c=Gl(ft);let l=ft;Qt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=di.bind(null,v=>""+v),d=di.bind(null,Tf),h=di.bind(null,Or);function m(v,N){let S,L;return lc(v)?(S=e.getRecordMatcher(v),L=N):L=v,e.addRoute(L,S)}function y(v){const N=e.getRecordMatcher(v);N&&e.removeRoute(N)}function O(){return e.getRoutes().map(v=>v.record)}function k(v){return!!e.getRecordMatcher(v)}function A(v,N){if(N=oe({},N||c.value),typeof v=="string"){const K=fi(n,v,N.path),f=e.resolve({path:K.path},N),p=i.createHref(K.fullPath);return oe(K,f,{params:h(f.params),hash:Or(K.hash),redirectedFrom:void 0,href:p})}let S;if("path"in v)S=oe({},v,{path:fi(n,v.path,N.path).path});else{const K=oe({},v.params);for(const f in K)K[f]==null&&delete K[f];S=oe({},v,{params:d(v.params)}),N.params=d(N.params)}const L=e.resolve(S,N),ie=v.hash||"";L.params=u(h(L.params));const de=Ld(r,oe({},v,{hash:If(ie),path:L.path})),G=i.createHref(de);return oe({fullPath:de,hash:ie,query:r===ba?Af(v.query):v.query||{}},L,{redirectedFrom:void 0,href:G})}function I(v){return typeof v=="string"?fi(n,v,c.value.path):oe({},v)}function R(v,N){if(l!==v)return fn(8,{from:N,to:v})}function B(v){return le(v)}function W(v){return B(oe(I(v),{replace:!0}))}function J(v){const N=v.matched[v.matched.length-1];if(N&&N.redirect){const{redirect:S}=N;let L=typeof S=="function"?S(v):S;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=I(L):{path:L},L.params={}),oe({query:v.query,hash:v.hash,params:"path"in L?{}:v.params},L)}}function le(v,N){const S=l=A(v),L=c.value,ie=v.state,de=v.force,G=v.replace===!0,K=J(S);if(K)return le(oe(I(K),{state:ie,force:de,replace:G}),N||S);const f=S;f.redirectedFrom=N;let p;return!de&&qd(r,L,S)&&(p=fn(16,{to:f,from:L}),Wt(L,L,!0,!1)),(p?Promise.resolve(p):V(f,L)).catch(g=>tt(g)?tt(g,2)?g:Ae(g):ue(g,f,L)).then(g=>{if(g){if(tt(g,2))return le(oe({replace:G},I(g.to),{state:ie,force:de}),N||f)}else g=te(f,L,!0,G,ie);return Y(f,L,g),g})}function F(v,N){const S=R(v,N);return S?Promise.reject(S):Promise.resolve()}function V(v,N){let S;const[L,ie,de]=qf(v,N);S=hi(L.reverse(),"beforeRouteLeave",v,N);for(const K of L)K.leaveGuards.forEach(f=>{S.push(gt(f,v,N))});const G=F.bind(null,v,N);return S.push(G),Kt(S).then(()=>{S=[];for(const K of s.list())S.push(gt(K,v,N));return S.push(G),Kt(S)}).then(()=>{S=hi(ie,"beforeRouteUpdate",v,N);for(const K of ie)K.updateGuards.forEach(f=>{S.push(gt(f,v,N))});return S.push(G),Kt(S)}).then(()=>{S=[];for(const K of v.matched)if(K.beforeEnter&&!N.matched.includes(K))if(ze(K.beforeEnter))for(const f of K.beforeEnter)S.push(gt(f,v,N));else S.push(gt(K.beforeEnter,v,N));return S.push(G),Kt(S)}).then(()=>(v.matched.forEach(K=>K.enterCallbacks={}),S=hi(de,"beforeRouteEnter",v,N),S.push(G),Kt(S))).then(()=>{S=[];for(const K of a.list())S.push(gt(K,v,N));return S.push(G),Kt(S)}).catch(K=>tt(K,8)?K:Promise.reject(K))}function Y(v,N,S){for(const L of o.list())L(v,N,S)}function te(v,N,S,L,ie){const de=R(v,N);if(de)return de;const G=N===ft,K=Qt?history.state:{};S&&(L||G?i.replace(v.fullPath,oe({scroll:G&&K&&K.scroll},ie)):i.push(v.fullPath,ie)),c.value=v,Wt(v,N,S,G),Ae()}let x;function ne(){x||(x=i.listen((v,N,S)=>{if(!bn.listening)return;const L=A(v),ie=J(L);if(ie){le(oe(ie,{replace:!0}),L).catch(On);return}l=L;const de=c.value;Qt&&Wd(ha(de.fullPath,S.delta),Zr()),V(L,de).catch(G=>tt(G,12)?G:tt(G,2)?(le(G.to,L).then(K=>{tt(K,20)&&!S.delta&&S.type===$n.pop&&i.go(-1,!1)}).catch(On),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ue(G,L,de))).then(G=>{G=G||te(L,de,!1),G&&(S.delta&&!tt(G,8)?i.go(-S.delta,!1):S.type===$n.pop&&tt(G,20)&&i.go(-1,!1)),Y(L,de,G)}).catch(On)}))}let ve=wn(),Ze=wn(),ge;function ue(v,N,S){Ae(v);const L=Ze.list();return L.length?L.forEach(ie=>ie(v,N,S)):console.error(v),Promise.reject(v)}function re(){return ge&&c.value!==ft?Promise.resolve():new Promise((v,N)=>{ve.add([v,N])})}function Ae(v){return ge||(ge=!v,ne(),ve.list().forEach(([N,S])=>v?S(v):N()),ve.reset()),v}function Wt(v,N,S,L){const{scrollBehavior:ie}=t;if(!Qt||!ie)return Promise.resolve();const de=!S&&Vd(ha(v.fullPath,0))||(L||!S)&&history.state&&history.state.scroll||null;return yo().then(()=>ie(v,N,de)).then(G=>G&&Hd(G)).catch(G=>ue(G,v,N))}const et=v=>i.go(v);let We;const De=new Set,bn={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,hasRoute:k,getRoutes:O,resolve:A,options:t,push:B,replace:W,go:et,back:()=>et(-1),forward:()=>et(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Ze.add,isReady:re,install(v){const N=this;v.component("RouterLink",Of),v.component("RouterView",Nf),v.config.globalProperties.$router=N,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ut(c)}),Qt&&!We&&c.value===ft&&(We=!0,B(i.location).catch(ie=>{}));const S={};for(const ie in ft)S[ie]=Ne(()=>c.value[ie]);v.provide(ei,N),v.provide(vc,Kn(S)),v.provide(Fi,c);const L=v.unmount;De.add(v),v.unmount=function(){De.delete(v),De.size<1&&(l=ft,x&&x(),x=null,c.value=ft,We=!1,ge=!1),L()}}};return bn}function Kt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function qf(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(l=>dn(l,o))?r.push(o):n.push(o));const c=t.matched[a];c&&(e.matched.find(l=>dn(l,c))||i.push(c))}return[n,r,i]}function zt(){return st(ei)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Uf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,d=(s&3)<<4|o>>4;let h=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(h=64)),r.push(n[u],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_c(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||l==null||d==null)throw Error();const h=s<<2|o>>4;if(r.push(h),l!==64){const m=o<<4&240|l>>2;if(r.push(m),d!==64){const y=l<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Bf=function(t){const e=_c(t);return yc.encodeByteArray(e,!0)},bc=function(t){return Bf(t).replace(/\./g,"")},Ff=function(t){try{return yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function zf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wf(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Vf(){return typeof indexedDB=="object"}function Kf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gf,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Jf(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new vn(i,o,r)}}function Jf(t,e){return t.replace(Yf,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yf=/\{\$([^}]+)}/g;function Qf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Sa(s)&&Sa(a)){if(!xr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sa(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Sn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function An(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xf(t,e){const n=new Zf(t,e);return n.subscribe.bind(n)}class Zf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eh(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pi),i.error===void 0&&(i.error=pi),i.complete===void 0&&(i.complete=pi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $f;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rh(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nh(t){return t===Mt?void 0:t}function rh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new th(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const sh={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},ah=fe.INFO,oh={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},ch=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=ah,this._logHandler=ch,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const lh=(t,e)=>e.some(n=>t instanceof n);let Aa,ka;function uh(){return Aa||(Aa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dh(){return ka||(ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ic=new WeakMap,$i=new WeakMap,wc=new WeakMap,mi=new WeakMap,gs=new WeakMap;function fh(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Ct(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ic.set(n,t)}).catch(()=>{}),gs.set(e,t),e}function hh(t){if($i.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});$i.set(t,e)}let ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $i.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ph(t){ji=t(ji)}function mh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gi(this),e,...n);return wc.set(r,e.sort?e.sort():[e]),Ct(r)}:dh().includes(t)?function(...e){return t.apply(gi(this),e),Ct(Ic.get(this))}:function(...e){return Ct(t.apply(gi(this),e))}}function gh(t){return typeof t=="function"?mh(t):(t instanceof IDBTransaction&&hh(t),lh(t,uh())?new Proxy(t,ji):t)}function Ct(t){if(t instanceof IDBRequest)return fh(t);if(mi.has(t))return mi.get(t);const e=gh(t);return e!==t&&(mi.set(t,e),gs.set(e,t)),e}const gi=t=>gs.get(t);function vh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=Ct(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Ct(a.result),c.oldVersion,c.newVersion,Ct(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const _h=["get","getKey","getAll","getAllKeys","count"],yh=["put","add","delete","clear"],vi=new Map;function Ra(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vi.get(e))return vi.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_h.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return vi.set(e,s),s}ph(t=>({...t,get:(e,n,r)=>Ra(e,n)||t.get(e,n,r),has:(e,n)=>!!Ra(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Eh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zi="@firebase/app",Pa="0.7.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Ec("@firebase/app"),Ih="@firebase/app-compat",wh="@firebase/analytics-compat",Ch="@firebase/analytics",Th="@firebase/app-check-compat",Sh="@firebase/app-check",Ah="@firebase/auth",kh="@firebase/auth-compat",Rh="@firebase/database",Ph="@firebase/database-compat",Oh="@firebase/functions",xh="@firebase/functions-compat",Dh="@firebase/installations",Mh="@firebase/installations-compat",Nh="@firebase/messaging",Lh="@firebase/messaging-compat",qh="@firebase/performance",Uh="@firebase/performance-compat",Bh="@firebase/remote-config",Fh="@firebase/remote-config-compat",$h="@firebase/storage",jh="@firebase/storage-compat",zh="@firebase/firestore",Hh="@firebase/firestore-compat",Wh="firebase",Vh="9.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="[DEFAULT]",Kh={[zi]:"fire-core",[Ih]:"fire-core-compat",[Ch]:"fire-analytics",[wh]:"fire-analytics-compat",[Sh]:"fire-app-check",[Th]:"fire-app-check-compat",[Ah]:"fire-auth",[kh]:"fire-auth-compat",[Rh]:"fire-rtdb",[Ph]:"fire-rtdb-compat",[Oh]:"fire-fn",[xh]:"fire-fn-compat",[Dh]:"fire-iid",[Mh]:"fire-iid-compat",[Nh]:"fire-fcm",[Lh]:"fire-fcm-compat",[qh]:"fire-perf",[Uh]:"fire-perf-compat",[Bh]:"fire-rc",[Fh]:"fire-rc-compat",[$h]:"fire-gcs",[jh]:"fire-gcs-compat",[zh]:"fire-fst",[Hh]:"fire-fst-compat","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,Hi=new Map;function Gh(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jn(t){const e=t.name;if(Hi.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,t);for(const n of Dr.values())Gh(n,t);return!0}function Tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ft=new Jn("app","Firebase",Jh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=Vh;function Qh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ft.create("bad-app-name",{appName:String(r)});const i=Dr.get(r);if(i){if(xr(t,i.options)&&xr(n,i.config))return i;throw Ft.create("duplicate-app",{appName:r})}const s=new ih(r);for(const o of Hi.values())s.addComponent(o);const a=new Yh(t,n,s);return Dr.set(r,a),a}function Xh(t=Cc){const e=Dr.get(t);if(!e)throw Ft.create("no-app",{appName:t});return e}function an(t,e,n){var r;let i=(r=Kh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(o.join(" "));return}jn(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="firebase-heartbeat-database",ep=1,zn="firebase-heartbeat-store";let _i=null;function Sc(){return _i||(_i=vh(Zh,ep,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zn)}}}).catch(t=>{throw Ft.create("storage-open",{originalErrorMessage:t.message})})),_i}async function tp(t){var e;try{return(await Sc()).transaction(zn).objectStore(zn).get(Ac(t))}catch(n){throw Ft.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Oa(t,e){var n;try{const i=(await Sc()).transaction(zn,"readwrite");return await i.objectStore(zn).put(e,Ac(t)),i.done}catch(r){throw Ft.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Ac(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=1024,rp=30*24*60*60*1e3;class ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ap(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xa(),{heartbeatsToSend:n,unsentEntries:r}=sp(this._heartbeatsCache.heartbeats),i=bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xa(){return new Date().toISOString().substring(0,10)}function sp(t,e=np){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Da(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Da(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vf()?Kf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Da(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){jn(new hn("platform-logger",e=>new bh(e),"PRIVATE")),jn(new hn("heartbeat",e=>new ip(e),"PRIVATE")),an(zi,Pa,t),an(zi,Pa,"esm2017"),an("fire-js","")}op("");function _s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cp=kc,Rc=new Jn("auth","Firebase",kc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Ec("@firebase/auth");function _r(t,...e){Ma.logLevel<=fe.ERROR&&Ma.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,...e){throw ys(t,...e)}function Ye(t,...e){return ys(t,...e)}function lp(t,e,n){const r=Object.assign(Object.assign({},cp()),{[e]:n});return new Jn("auth","Firebase",r).create(e,{appName:t.name})}function ys(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rc.create(t,...e)}function j(t,e,...n){if(!t)throw ys(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function ot(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;function it(t){ot(t instanceof Function,"Expected a class definition");let e=Na.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Na.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){const n=Tc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xr(s,e!=null?e:{}))return i;He(i,"already-initialized")}return n.initialize({options:e})}function dp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fp(){return La()==="http:"||La()==="https:"}function La(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fp()||zf()||"connection"in navigator)?navigator.onLine:!0}function pp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=jf()||Hf()}get(){return hp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=new Qn(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return Oc(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=Yn(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Pc.fetch()(xc(t,t.config.apiHost,n,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Oc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mp),e);try{const i=new vp(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw lr(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw lr(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw lr(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw lr(t,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw lp(t,u,l);He(t,u)}}catch(i){if(i instanceof vn)throw i;He(t,"network-request-failed")}}async function er(t,e,n,r,i={}){const s=await Zn(t,e,n,r,i);return"mfaPendingCredential"in s&&He(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xc(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bs(t.config,i):`${t.config.apiScheme}://${i}`}class vp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),gp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function lr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ye(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function yp(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bp(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=Es(r);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dn(yi(i.auth_time)),issuedAtTime:Dn(yi(i.iat)),expirationTime:Dn(yi(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yi(t){return Number(t)*1e3}function Es(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ff(r);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Ep(t){const e=Es(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&Ip(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ip({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hn(t,yp(n,{idToken:r}));j(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sp(s.providerUserInfo):[],o=Tp(t.providerData,a),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Cp(t){const e=Ht(t);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tp(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sp(t){return t.map(e=>{var{providerId:n}=e,r=_s(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ap(t,e){const n=await Oc(t,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=xc(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Pc.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ap(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Wn;return r&&(j(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(j(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(j(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bp(this,e)}reload(){return Cp(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,_p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,c,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(o=n.tenantId)!==null&&o!==void 0?o:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:B,isAnonymous:W,providerData:J,stsTokenManager:le}=n;j(R&&le,e,"internal-error");const F=Wn.fromJSON(this.name,le);j(typeof R=="string",e,"internal-error"),ht(d,e.name),ht(h,e.name),j(typeof B=="boolean",e,"internal-error"),j(typeof W=="boolean",e,"internal-error"),ht(m,e.name),ht(y,e.name),ht(O,e.name),ht(k,e.name),ht(A,e.name),ht(I,e.name);const V=new Bt({uid:R,auth:e,email:h,emailVerified:B,displayName:d,isAnonymous:W,photoURL:y,phoneNumber:m,tenantId:O,stsTokenManager:F,createdAt:A,lastLoginAt:I});return J&&Array.isArray(J)&&(V.providerData=J.map(Y=>Object.assign({},Y))),k&&(V._redirectEventId=k),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wn;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mr(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mc.type="NONE";const qa=Mc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yr(this.userKey,i.apiKey,s),this.fullPersistenceKey=yr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(it(qa),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||it(qa);const a=yr(r,e.config.apiKey,e.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const d=Bt._fromJSON(e,u);l!==s&&(o=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new on(s,e,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new on(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bc(e))return"Blackberry";if(Fc(e))return"Webos";if(Is(e))return"Safari";if((e.includes("chrome/")||Lc(e))&&!e.includes("edge/"))return"Chrome";if(Uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nc(t=we()){return/firefox\//i.test(t)}function Is(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lc(t=we()){return/crios\//i.test(t)}function qc(t=we()){return/iemobile/i.test(t)}function Uc(t=we()){return/android/i.test(t)}function Bc(t=we()){return/blackberry/i.test(t)}function Fc(t=we()){return/webos/i.test(t)}function ni(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kp(t=we()){var e;return ni(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rp(){return Wf()&&document.documentMode===10}function $c(t=we()){return ni(t)||Uc(t)||Fc(t)||Bc(t)||/windows phone/i.test(t)||qc(t)}function Pp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t,e=[]){let n;switch(t){case"Browser":n=Ua(we());break;case"Worker":n=`${Ua(we())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const c=e(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ba(this),this.idTokenSubscription=new Ba(this),this.beforeStateQueue=new Op(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c==null?void 0:c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Mr(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return j(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ri(t){return Ht(t)}class Ba{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xf(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}async function Dp(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function Lp(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ws{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Mp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Np(e,{email:this._email,oobCode:this._password});default:He(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Dp(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Lp(e,{idToken:n,email:this._email,oobCode:this._password});default:He(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp="http://localhost";class $t extends ws{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):He("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_s(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new $t(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:qp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bp(t){const e=Sn(An(t)).link,n=e?Sn(An(e)).deep_link_id:null,r=Sn(An(t)).deep_link_id;return(r?Sn(An(r)).link:null)||r||n||e||t}class Cs{constructor(e){var n,r,i,s,a,o;const c=Sn(An(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Up((i=c.mode)!==null&&i!==void 0?i:null);j(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=Bp(e);try{return new Cs(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.providerId=_n.PROVIDER_ID}static credential(e,n){return Vn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cs.parseLink(n);return j(r,"argument-error"),Vn._fromEmailAndCode(e,r.code,r.tenantId)}}_n.PROVIDER_ID="password";_n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends zc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends tr{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends tr{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends tr{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(t,e){return er(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),a=Fa(r);return new jt({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Fa(r);return new jt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Fa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends vn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Nr(e,n,r,i)}}function Hc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(t,s,e,r):s})}async function $p(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const a=await Hn(t,Hc(i,s,e,t),n);j(a.idToken,i,"internal-error");const o=Es(a.idToken);j(o,i,"internal-error");const{sub:c}=o;return j(t.uid===c,i,"user-mismatch"),jt._forOperation(t,s,a)}catch(a){throw((r=a)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&He(i,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t,e,n=!1){const r="signIn",i=await Hc(t,r,e),s=await jt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zp(t,e){return Wc(ri(t),e)}async function Hp(t,e,n){const r=ri(t),i=await Fp(r,{returnSecureToken:!0,email:e,password:n}),s=await jt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Wp(t,e,n){return zp(Ht(t),_n.credential(e,n))}function Vc(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}function Vp(t){return Ht(t).signOut()}const Lr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lr,"1"),this.storage.removeItem(Lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(){const t=we();return Is(t)||ni(t)}const Gp=1e3,Jp=10;class Gc extends Kc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Kp()&&Pp(),this.fallbackToPolling=$c(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Rp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jp):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const Yp=Gc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Kc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jc.type="SESSION";const Yc=Jc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ii(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await Qp(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ii.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=Ts("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function Zp(t){Qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function em(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nm(){return Qc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="firebaseLocalStorageDb",rm=1,qr="firebaseLocalStorage",Zc="fbase_key";class nr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function si(t,e){return t.transaction([qr],e?"readwrite":"readonly").objectStore(qr)}function im(){const t=indexedDB.deleteDatabase(Xc);return new nr(t).toPromise()}function Vi(){const t=indexedDB.open(Xc,rm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(qr,{keyPath:Zc})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(qr)?e(r):(r.close(),await im(),e(await Vi()))})})}async function $a(t,e,n){const r=si(t,!0).put({[Zc]:e,value:n});return new nr(r).toPromise()}async function sm(t,e){const n=si(t,!1).get(e),r=await new nr(n).toPromise();return r===void 0?null:r.value}function ja(t,e){const n=si(t,!0).delete(e);return new nr(n).toPromise()}const am=800,om=3;class el{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>om)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ii._getInstance(nm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await em(),!this.activeServiceWorker)return;this.sender=new Xp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vi();return await $a(e,Lr,"1"),await ja(e,Lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$a(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ja(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=si(i,!1).getAll();return new nr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}el.type="LOCAL";const cm=el;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function um(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ye("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lm().appendChild(r)})}function dm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Qn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){return e?it(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends ws{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hm(t){return Wc(t.auth,new Ss(t),t.bypassAuthState)}function pm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),jp(n,new Ss(t),t.bypassAuthState)}async function mm(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),$p(n,new Ss(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hm;case"linkViaPopup":case"linkViaRedirect":return mm;case"reauthViaPopup":case"reauthViaRedirect":return pm;default:He(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=new Qn(2e3,1e4);class Zt extends tl{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,gm.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="pendingRedirect",br=new Map;class _m extends tl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=br.get(this.auth._key());if(!e){try{const r=await ym(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}br.set(this.auth._key(),e)}return this.bypassAuthState||br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ym(t,e){const n=Im(e),r=Em(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bm(t,e){br.set(t._key(),e)}function Em(t){return it(t._redirectPersistence)}function Im(t){return yr(vm,t.config.apiKey,t.name)}async function wm(t,e,n=!1){const r=ri(t),i=fm(r,e),a=await new _m(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=10*60*1e3;class Tm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nl(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cm&&this.cachedEventUids.clear(),this.cachedEventUids.has(za(e))}saveEventToCache(e){this.cachedEventUids.add(za(e)),this.lastProcessedEventTime=Date.now()}}function za(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Am(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rm=/^https?/;async function Pm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Am(t);for(const n of e)try{if(Om(n))return}catch{}He(t,"unauthorized-domain")}function Om(t){const e=Wi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Rm.test(n))return!1;if(km.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new Qn(3e4,6e4);function Ha(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dm(t){return new Promise((e,n)=>{var r,i,s;function a(){Ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ha(),n(Ye(t,"network-request-failed"))},timeout:xm.get()})}if(!((i=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qe().gapi)===null||s===void 0)&&s.load)a();else{const o=dm("iframefcb");return Qe()[o]=()=>{gapi.load?a():n(Ye(t,"network-request-failed"))},um(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(e=>{throw Er=null,e})}let Er=null;function Mm(t){return Er=Er||Dm(t),Er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Qn(5e3,15e3),Lm="__/auth/iframe",qm="emulator/auth/iframe",Um={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fm(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bs(e,qm):`https://${t.config.authDomain}/${Lm}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=Bm.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yn(r).slice(1)}`}async function $m(t){const e=await Mm(t),n=Qe().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Fm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Um,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ye(t,"network-request-failed"),o=Qe().setTimeout(()=>{s(a)},Nm.get());function c(){Qe().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zm=500,Hm=600,Wm="_blank",Vm="http://localhost";class Wa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Km(t,e,n,r=zm,i=Hm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},jm),{width:r.toString(),height:i.toString(),top:s,left:a}),l=we().toLowerCase();n&&(o=Lc(l)?Wm:n),Nc(l)&&(e=e||Vm,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(kp(l)&&o!=="_self")return Gm(e||"",o),new Wa(null);const d=window.open(e||"",o,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new Wa(d)}function Gm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="__/auth/handler",Ym="emulator/auth/handler";function Va(t,e,n,r,i,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof zc){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Qf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))a[c]=l}if(e instanceof tr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(a.scopes=c.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];return`${Qm(t)}?${Yn(o).slice(1)}`}function Qm({config:t}){return t.emulator?bs(t,Ym):`https://${t.authDomain}/${Jm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="webStorageSupport";class Xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yc,this._completeRedirectFn=wm,this._overrideRedirectResult=bm}async _openPopup(e,n,r,i){var s;ot((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=Va(e,n,r,Wi(),i);return Km(e,a,Ts())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Zp(Va(e,n,r,Wi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ot(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $m(e),r=new Tm(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bi,{type:bi},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bi];a!==void 0&&n(!!a),He(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $c()||Is()||ni()}}const Zm=Xm;var Ka="@firebase/auth",Ga="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ng(t){jn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=r.options;return((o,c)=>{j(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),j(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jc(t)},u=new xp(o,c,l);return dp(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jn(new hn("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(r=>new eg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Ka,Ga,tg(t)),an(Ka,Ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t=Xh()){const e=Tc(t,"auth");return e.isInitialized()?e.getImmediate():up(t,{popupRedirectResolver:Zm,persistence:[cm,Yp,Yc]})}ng("Browser");const yn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},rg=t=>(Ao("data-v-ff0d331c"),t=t(),ko(),t),ig={class:"buttons"},sg={key:0},ag=rg(()=>D("a",{target:"_blank",href:"https://cafecito.app/algoparticular"},"Buy us a tee",-1)),og={key:0},cg={key:1},lg={__name:"Toolbar",props:{path:String,language:String},setup(t){const e=t,n=Pe(!1),r=Pe(!1),i=Pe(!1),s=Pe(!1),a=zt();let o;function c(){console.log("collected"),a.push("/deck")}const l=()=>{Vp(o).then(()=>{a.push("/")})},u=()=>{r.value=!r.value},d=h=>{a.push({path:h,replace:!0}),r.value=!1};return Uo(()=>{switch(e.path){case"/card":s.value=!0;break;case"/collection":i.value=!0;break;default:s.value=!1,i.value=!1}o=rr(),Vc(o,h=>{h?n.value=!0:n.value=!1})}),(h,m)=>(ee(),pe("div",{id:"toolbar",class:en({active:r.value})},[D("div",ig,[D("button",{class:en(["secondary collection",{active:i.value}]),onClick:m[0]||(m[0]=y=>d("/collection"))},null,2),s.value?(ee(),pe("button",{key:0,class:"main collect",onClick:m[1]||(m[1]=y=>c())})):(ee(),pe("button",{key:1,class:"main",onClick:m[2]||(m[2]=y=>d("/deck"))})),D("button",{class:en(["secondary menu",{active:r.value}]),onClick:m[3]||(m[3]=y=>u())},null,2)]),me(Xr,{name:"fade",mode:"out-in"},{default:St(()=>[r.value?(ee(),pe("nav",sg,[D("a",{onClick:m[4]||(m[4]=y=>d("/"))},"Info"),ag,n.value?(ee(),pe("div",og,[n.value?(ee(),pe("a",{key:0,class:"logout",onClick:l},"Take me out of here")):Rr("",!0)])):(ee(),pe("div",cg,[D("a",{onClick:m[5]||(m[5]=y=>d("/register"))},"I want an account"),D("a",{onClick:m[6]||(m[6]=y=>d("/sign-in"))},"Log me in")]))])):Rr("",!0)]),_:1})],2))}},ug=yn(lg,[["__scopeId","data-v-ff0d331c"]]);const dg={__name:"App",setup(t){const e=zt();return Jr(()=>{console.log("language: "+localStorage.lang),localStorage.lang==null&&localStorage.setItem("lang","es"),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/src/plugins/serviceWorker.js").then(function(n){console.log("Service Worker registered")}).catch(n=>console.log("Service Worker not registered",n))})}),(n,r)=>{const i=Fo("router-view");return ee(),un(i,null,{default:St(({Component:s})=>[me(Xr,{name:"fade",mode:"out-in"},{default:St(()=>[(ee(),un(Su(s),{key:n.$router.path}))]),_:2},1024),me(ug,{path:Ut(e).currentRoute.value.path},null,8,["path"])]),_:1})}}},fg=yn(dg,[["__scopeId","data-v-f0c24cd4"]]),rl="/assets/Logo_praxis.abf6fded.svg";const hg={},pg={class:"content"},mg=D("main",{id:"home"},[D("img",{class:"title",alt:"Praxis, by Algo Particular",src:rl}),D("section",{class:"intro"},[D("p",null,[vr("Una parte de nuestros \xE1tomos, y los de todo lo que existe, vienen navegando el Universo desde el principio de los tiempos. Esas part\xEDculas cargan con cientos de miles de historias, y cada una de ellas nos comparte un aprendizaje. "),D("br"),D("br"),vr(" Cierra tus ojos e intenciona el mensaje que estas part\xEDculas tienen para vos. "),D("br"),D("br"),vr(" Cuando est\xE9s listx, elije una carta del maso.")])])],-1),gg=[mg];function vg(t,e){return ee(),pe("div",pg,gg)}const _g=yn(hg,[["render",vg]]),yg={class:"content"},bg={class:"formWrapper"},Eg=D("div",{class:"heading"},[D("h2",null,"Crea una cuenta"),D("p",null,"Bienvenido, crea tu cuenta con tu email y contrase\xF1a")],-1),Ig={class:"form"},wg={key:0},Cg={__name:"Register",setup(t){const e=Pe(""),n=Pe(""),r=zt(),i=rr(),s=Pe(""),a=()=>{Hp(i,e.value,n.value).then(o=>{console.log("succesful sign up!"),console.log(i.currentUser),r.push("/collection")}).catch(o=>{console.log(o.code),s.value=o.message})};return(o,c)=>(ee(),pe("div",yg,[D("main",bg,[Eg,D("div",Ig,[Tr(D("input",{type:"text",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[Pr,e.value]]),Tr(D("input",{type:"password",placeholder:"Contrase\xF1a","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[Pr,n.value]]),s.value?(ee(),pe("span",wg,Xt(s.value),1)):Rr("",!0)]),D("div",{class:"actions"},[D("button",{onClick:a},"Quiero sumergirme")])])]))}},Tg={class:"content"},Sg={class:"formWrapper"},Ag=D("div",{class:"heading"},[D("h2",null,"Ingresa"),D("p",null,"Bienvenido, ingresa con tu email y contrase\xF1a")],-1),kg={class:"form"},Rg={key:0},Pg={__name:"SignIn",setup(t){const e=Pe(""),n=Pe(""),r=zt(),i=rr(),s=Pe(""),a=()=>{Wp(i,e.value,n.value).then(o=>{console.log("succesful sign in!"),console.log(i.currentUser),r.push("/collection")}).catch(o=>{switch(console.log(o.code),o.code){case"auth/invalid-email":s.value="Invalid email";break;case"auth/user-not-found":s.value="No account with this email was found";break;case"auth/wrong-password":s.value="Incorrect password";break;default:s.value="Email or Password was incorrect";break}})};return(o,c)=>(ee(),pe("div",Tg,[D("main",Sg,[Ag,D("div",kg,[Tr(D("input",{type:"text",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[Pr,e.value]]),Tr(D("input",{type:"password",placeholder:"Contrase\xF1a","onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l)},null,512),[[Pr,n.value]]),s.value?(ee(),pe("span",Rg,Xt(s.value),1)):Rr("",!0)]),D("div",{class:"actions"},[D("button",{onClick:a},"Quiero sumergirme")])])]))}},Og={es:[{id:0,name:"Nekkhamma",description:`Nekkhamma te invita al desapego, llamando a tu capacidad de soltar los deseos de un ego que te hace creer que sos lo que posees.\xA0
Un ego identificado con lo limitado y separado del otro. Practicando la renunciaci\xF3n logramos la liviandad necesaria para encarar el Camino y reconocer que nuestro ser es ilimitado y en uni\xF3n con todo lo que existe. Recuerda que abrazar tu materialidad no es identificarte con ella, es reconocer su sacralidad.`,image:"",afirmation:"Reconozco que soy mucho m\xE1s que este cuerpo f\xEDsico y sus posesiones.",invitation:"Practica la renunciaci\xF3n, suelta alguna de esas cosas que ya no necesitas y anda liviana.",category:"parami",rarity:1},{id:1,name:"Sila",description:"Sila es una invitaci\xF3n a la moralidad, a hacer el bien en resonancia con una corriente de vida interconectada. La voz del coraz\xF3n es la gu\xEDa frente a las distracciones que se presentan ante nuestros sentidos. As\xED el cuerpo, mente y alma se integran para descansar en una paz que inspira a no irrumpir el camino de ning\xFAn otro. ",image:"",afirmation:"Encuentro paz e integridad al ser honesto en nuestros pensamientos, palabras y actos.",invitation:"En secreto, sin que nadie lo sepa, busco hacer una acci\xF3n beneficiosa para otros.",category:"parami",rarity:1},{id:2,name:"Dana",description:"",image:"",afirmation:"Soy feliz al dar sin esperar nada a cambio.",invitation:"Hoy pr\xE1ctica tu altruismo y regala algo de tu tiempo y energ\xEDa aquel que lo necesite.",category:"parami",rarity:1},{id:3,name:"Pa\xF1\xF1a",description:"Al practicar Pa\xF1\xF1a est\xE1s trabajando la sabidur\xEDa,\xA0 esa certeza innata que todos llevamos dentro. Por ser una virtud divina que nos habita dista del conocimiento que se aprende. Reconoce y acciona desde esa sabidur\xEDa que habita en ti, esa que fluye de la Fuente de toda creaci\xF3n y nos recuerda la gracia y belleza que nos rodea, pudiendo observar la vida desde una perspectiva m\xE1s amplia.",image:"",afirmation:"Mi centro calmo y silencio escucha la instancia Divina dentro de m\xED.",invitation:"Preguntale a tu sabiduria Divina, \xBFQu\xE9 debo hacer frente a esta situaci\xF3n o persona que me esta inquietando? Escucha en silencio.",category:"parami",rarity:1},{id:4,name:"Viriya",description:"Al practicar Viriya est\xE1s trabajando la diligencia. Ser fiel a tu propio Camino requiere determinaci\xF3n, perseverancia en la b\xFAsqueda de tu mejor versi\xF3n. Viriya te invita a ser responsable recordando que cada d\xEDa es una nueva oportunidad. Una nueva posibilidad para ser fiel a tu verdad y encontrar paso a paso una mejor versi\xF3n de vos misma. Un d\xEDa a la vez, una cosa a la vez. El cambio y la transformaci\xF3n son posibles si la determinaci\xF3n y el compromiso con tu verdad gu\xEDan tus pasos.",image:"",afirmation:"Escucho mi coraz\xF3n y sigo su verdad con determinaci\xF2n.",invitation:"Hoy disfruto de mi compromiso con ese cambio que estoy buscando.",category:"parami",rarity:1},{id:5,name:"Kshanti",description:"Al practicar Kshanti est\xE1s trabajando la tolerancia. Ser tolerante es aceptar a todos exactamente como son sin juzgar, culpar o querer cambiarlos.\xA0 La tolerancia es una virtud que se relaciona con la fortaleza y la amplitud de tu consciencia. Te permite encontrarte profundamente con los otros reconociendo la\xA0verdad que te conecta con todo lo que Es.\xA0 Ser paciente con vos mismo y los dem\xE1s es reconocer que cada uno avanza en su propio camino espiritual. De este modo la irritaci\xF3n se esfuma y el amor asoma.",image:"",afirmation:"Mi divinidad se expande al ser tolerante con mi camino espiritual y el de los otros.",invitation:"Hoy sere tolerante y paciente conmigo. Respeto mis tiempos sin exigencias.",category:"parami",rarity:1},{id:6,name:"Sacca",description:"Al practicar Sacca est\xE1s abri\xE9ndole la puerta a la verdad. La verdad es tu prop\xF3sito, aquello a lo que est\xE1s invitado a ser. Buscar ese prop\xF3sito es el primer paso para dejar de lado una vida en autom\xE1tico y volverte m\xE1s consciente del milagro que est\xE1s experimentando cada d\xEDa. Al caminar desde tu verdad le dar\xE1s lugar a la sincronicidad, descubriendo que no sos el \xFAnico en nada, todos somos parte de un plan mayor. Hoy practica compartir tu verdad e inspirar a otros a hacerlo tambi\xE9n, descubriendo que en lo m\xE1s intimo la verdad es una sola.",image:"",afirmation:"Me comprometo con mi verdad y le abro la puerta a mi pr\xF3posito.",invitation:"Estate atento a las sincronicidades que te rodean cuando sigues tu verdad.",category:"parami",rarity:1},{id:7,name:"Addhitthana",description:"Al practicar Addhitthana estas trabajando tu determinaci\xF3n, esa que es necesaria para sostener en el tiempo h\xE1bitos y decisiones que te ayuden a ser cada d\xEDa m\xE1s feliz. Debes saber que aun atravesando toda vicisitud mereces ser feliz. Para construir una vida plena y feliz es necesario alimentar tu autoridad interior, ordenando tu voluntad y desarrollando tu individualidad. Ser determinada es abandonar el \xE1mbito de la comodidad y despertar tu poder personal. Al desarrollar Addhitthana estar\xE1s nutriendo la certeza de que la fortaleza se enciende en vos al enfrentar cualquier desaf\xEDo, eso es madurar \xE1lmicamente, es abrirle la puerta a la transformaci\xF3n hacia tu evoluci\xF3n y prop\xF3sito.",image:"",afirmation:"Soy determinanda en nutrir h\xE1bitos que hagan a mi felicidad y plenitud.",invitation:"Por 21 d\xEDas me comprometo a implementar ese h\xE1bito que hace tiempo deseo.",category:"parami",rarity:1},{id:8,name:"Metta",description:"",image:"",afirmation:"",invitation:"",category:"parami",rarity:1},{id:9,name:"Upekkha",description:"",image:"",afirmation:"",invitation:"",category:"parami",rarity:1},{id:10,name:"...",description:"",image:"",afirmation:"",invitation:"",category:"parami",rarity:1},{id:11,name:"Aceptaci\xF3n",description:"La aceptaci\xF3n es la capacidad para asumir la vida y a los otros tal como son, sin intentar cambiar o luchar contra aquello que no podemos controlar. Aceptar que hay realidades que exceden tu control, no es una actitud est\xE1tica, es una decisi\xF3n activa, que te invita a no cargar\xA0ninguna malicia hacia nada o nadie. Al reconocer la diversidad, somos capaces de transformarnos. Al aceptar aquello que te hace \xFAnico, eso particular que habita en vos, te vuelves m\xE1s confiado y tu ser divino se revela.",image:"",afirmation:"Acepto y honro qui\xE9n soy.",invitation:"Hoy suelto el exceso de control y acepto lo que me rodea aqu\xED y ahora.",category:"regular",rarity:3},{id:12,name:"Amor",description:"Al nacer el amor es lo \xFAnico que prima, los beb\xE9s y los ni\xF1os no conocen m\xE1s que ese amor. Ese estado de amor en abundancia es lo que somos. Quiz\xE1s el prop\xF3sito de esta experiencia es recordar que el amor es lo que somos, que nadie puede alterar ese amor eterno. Aprendes todo lo que ense\xF1as. Ense\xF1a solamente amor, y aprende que el amor es tuyo y que t\xFA eres amor. Ense\xF1a solamente amor, pues eso es lo que eres.",image:"",afirmation:"Soy una expresi\xF3n de amor. ",invitation:"Reconozco el amor que me rodea y lo agradezco.",category:"regular",rarity:3},{id:13,name:"Armon\xEDa",description:`La armon\xEDa en la m\xFAsica se encuentra cuando existe un equilibrio entre la variedad y proporci\xF3n de sonidos y pausas. Buscar la armon\xEDa en tu vida es una invitaci\xF3n al balance ya sea en la quietud o en el movimiento. Para poder hacerlo el primer paso es regalarte un tiempo de silencio interior. Un momento de pausa para discernir y encontrar el equilibrio. Entonces, toda relaci\xF3n, ambiente y tarea devendr\xE1 en una melod\xEDa armoniosa.
Claro que a veces el camino es inverso, un ambiente o persona en armon\xEDa puede ayudarte a redescubrir el equilibrio en tu interior. Por lo que siempre busca rodearte de gente de hermosa vibraci\xF3n, porque todos somos influenciados por lo que nos rodea.`,image:"",afirmation:"Vibro en armon\xEDa en mi aqu\xED y ahora.",invitation:"Creo un espacio armonioso y me regalo un tiempo de encuentro interior.",category:"regular",rarity:3},{id:14,name:"Belleza",description:`Creer que existe una sola clase de belleza equivale a no prestar atenci\xF3n a la vida y sus multiples expresiones. Poder ver lo bello a\xFAn en la apariencia m\xE1s desafiante es un alimento para el alma.
A medida que sintonizas con la particular belleza de tu ser, de los otros y de la naturaleza, tu resonancia se convierte en la de la belleza, y se irradia hacia todo lo que te rodea, volvi\xE9ndote una expresi\xF3n de luz que invita a los otros a ver lo bello tambi\xE9n.`,image:"",afirmation:"Reconozco mi belleza y la de los otros.",invitation:"Hoy encuentro 3 aspectos bellos en m\xED.",category:"regular",rarity:2},{id:15,name:"Bondad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:16,name:"Celebraci\xF3n",description:"Celebrar cada experiencia que la vida te regala despierta una actitud de gratitud que alimenta la vision de nuevas celebraciones. Siempre hay un motivo para celebrar y cuando lo haces con otros, una gran energ\xEDa se libera atrayendo el goce, la felicidad y las ganas compartidas de honrar la vida.",image:"",afirmation:"Celebro la vida, sus tr\xE1nsitos y este instante particular.",invitation:"Descubro la liviandad y la alegr\xEDa que se despierta al celebrar.",category:"regular",rarity:3},{id:17,name:"Ciclos",description:`Al contemplar la impermanencia somos capaces de reconocer los ciclos de la vida. Todo cierre de ciclo es tambi\xE9n una bienvenida al nuevo comienzo. Cada d\xEDa nacemos de nuevo. Cada d\xEDa es una nueva oportunidad para dar inicio a h\xE1bitos sanos que quieras emprender.
Si este mensaje ha llegado a ti es para invitarte a preguntarte, si est\xE1s en un tiempo oportuno para dar cierre a cierta etapa, relaci\xF3n o h\xE1bito. Deja que el coraz\xF3n gu\xEDe, \xBFQu\xE9 es tiempo de soltar? \xBFQu\xE9 nuevo inicio te esta llamando? 
Que la gratitud prime al cerrar ciclos, para solo entonces comenzar nuevos cap\xEDtulos con frescura y liviandad.`,image:"",afirmation:"Agradezco quien fui, honro quien soy y proyecto quien quiero ser. ",invitation:"\xBFQu\xE9 es tiempo de dejar ir? \xBFQu\xE9 nuevo comienzo anhela mi coraz\xF3n?",category:"regular",rarity:3},{id:18,name:"Claridad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:19,name:"Compasi\xF3n",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:20,name:"Compromiso",description:"Al comprometerte con tu visi\xF3n alineando tus pensamientos e intenciones por alcanzar aquello que anhelas, encuentras la paz de saber que estas avanzando en la direcci\xF3n correcta. Tu camino se ilumina por el solo hecho de comprometerte con tu b\xFAsqueda, cualquiera ella sea. Si a\xFAn no hay claridad en la visi\xF3n de tu deseo, lleva tu intenci\xF3n a iluminar tu b\xFAsqueda. Mientras la b\xFAsqueda hacia el anhelo del alma este activa habr\xE1 paz.",image:"",afirmation:"Estoy comprometida con mi b\xFAsqueda y visi\xF3n.",invitation:"Hoy me comprometo a seguir el camino de mi coraz\xF3n.",category:"regular",rarity:3},{id:21,name:"Comunicaci\xF3n",description:`El primer paso para comunicarte con honestidad es escucharte a vos mismo. La comunicaci\xF3n con el interior es una invitaci\xF3n a ahondar en la quietud, templando la mente y dejando que el o\xEDdo del alma escuche respuestas en el silencio.
La pr\xE1ctica de la meditaci\xF3n es una puerta sagrada para comunicarte con el ser sabio y divino que habita en vos.
Comun\xEDcate con claridad a trav\xE9s de la palabra, la acci\xF3n y la intenci\xF3n. Todos percibir\xE1n la resonancia de la verdad y confiar\xE1n en ti.`,image:"",afirmation:"Me comunico con claridad y honestidad.",invitation:"En el silencio meditativo escucho y confio en mi verdad interior.",category:"regular",rarity:2},{id:22,name:"Confianza",description:"Cuando conf\xEDas en ti mismo eres capaz de volver consciente la sabidur\xEDa y fuerza que llevas dentro.   Para nutrir la confianza en ti es importante dejar a un lado la b\xFAsqueda de aprobaci\xF3n y expectativas ajenas. Conf\xEDa en tu intuici\xF3n y en tu propia experiencia. Si la mente esta muy atareada y es dif\xEDcil escuchar, conf\xEDa en las se\xF1ales de tu cuerpo. Al cultivar la confianza, tu esp\xEDritu se ilumina y tu luz te gu\xEDa con determinaci\xF3n.",image:"",afirmation:"Conf\xEDo en mi y dejo que mi sabiduria guie mis pasos.",invitation:"Recuerda las veces que superaste adversidades.",category:"regular",rarity:3},{id:23,name:"Coraje",description:"En el silencio somos capaces de escuchar nuestra voz interior que como un faro en medio del oceano nos gu\xEDa. La voz interna te invita a elegir en funci\xF3n a tu deseo, te invita acallar voces y patrones externos y de ese modo crear y hacerle lugar a tu magia. Pero solo es posible escuchar esa voz si te vistes de coraje. Para amar hay que ser valiente. Para soltar viejos puertos y adentrarse en la mar hay que ser valiente. Si este mensaje ha llegado a ti es porque es tiempo de ver y darle lugar al coraje que llevas dentro. Respira, siempre se puede comenzar de nuevo. ",image:"",afirmation:"Reconozco mi valentia, mi fuerza interior gu\xEDa mis pasos.",invitation:"Inhalo coraje. Exhalo miedo. Inhalo coraje. Exhalo miedo.",category:"regular",rarity:3},{id:24,name:"Creatividad",description:`A medida que permitimos que el poder creativo fluya dentro nuestro alimentamos la energ\xEDa del cambio. Al canalizar tu fuerza, das y recibes vida, ya que la creatividad no es un movimiento solitario. All\xED donde pasa, atrae a quien sepa o\xEDr, ver y percibir.
Dejando de lado los juicios y exigencias, nos reconocemos co creadores de lo Divino, explorando as\xED nuestro inmenso y particular potencial. Usa tu poder creativo para crear la vida que sue\xF1as.`,image:"",afirmation:"Dej\xF3 que mi poder creativo se exprese pleno de alegr\xEDa.",invitation:"Pongo en practica mi creatividad y creo la vida que sue\xF1o.",category:"regular",rarity:3},{id:25,name:"Desaf\xEDo",description:"El desaf\xEDo m\xE1s enriquecedor de todos es encontrar cada d\xEDa una mejor versi\xF3n de ti mismo. Los desaf\xEDos pueden ser vistos como dificultades insuperables o como oportunidades para la transformaci\xF3n y el crecimiento personal.\xA0 Si no existiera cierta cuota de resistencia no podr\xEDas descubrir tu propia fuerza. Cada vicisitud de la vida se presenta solo cuando uno est\xE1 listo para enfrentarla. Por eso, si un desaf\xEDo ha llegado a tu puerta, alza la mirada y avanza con confianza, descubriendo talentos y fuerzas que hasta entonces manten\xEDas silenciadas.",image:"",afirmation:"Respondo a mis desafios con confianza y descubro nuevos talentos. ",invitation:"Transformo cada desaf\xEDo en una sagrada oportunidad.",category:"regular",rarity:3},{id:26,name:"Discernimiento",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:27,name:"Esperanza",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:28,name:"Evoluci\xF3n Espiritual",description:`Tu misi\xF3n particular en esta tierra es tu puerta para el mayor de los prop\xF3sitos, evolucionar espiritualmente. La evoluci\xF3n espiritual es el encuentro con la presencia de un alma ensanchada, capaz de ver, sentir, y aceptar al otro y a uno mismo. Un alma que sabe de honestidad e integridad.
El camino espiritual es \xFAnico y personal, por lo que no lo busques en los dem\xE1s, cada uno est\xE1 haciendo su propio recorrido. Puedes preguntarte a t\xED mismo, \xBFeste camino tiene coraz\xF3n? Si la respuesta es s\xED, vas por el sendero correcto.
Recuerda siempre que una alma iluminada es capaz de transformar cada atm\xF3sfera que habita, siendo faro para otros.`,image:"",afirmation:"Mi alma evoluciona cada dia. ",invitation:"Preg\xFAntate, \xBFMi camino tiene coraz\xF3n? ",category:"regular",rarity:2},{id:29,name:"F\xE9",description:`Son dos las clases de fuerza que habitan en vos, la fuerza de tus m\xFAsculos y la fuerza inconmovible de tu alma. La fe es reconocer la existencia de esa fuerza en tu interior, dejando de lado la duda y el miedo.
A\xFAn en los momentos de mayor incertidumbre, recuerda nutrir la fe en ti mismo, el universo te apoyar\xE1 removiendo barreras y permitiendo que la luminosidad de tu ser se manifieste. 
Reg\xE1late una pausa de silencio, percibe la calma, rep\xEDtete, \u2018Todo est\xE1 bien. Todo estar\xE1 bien.\u2019 Escucha dentro incrementando tu fe en el poder infinito que te habita.`,image:"",afirmation:"Tengo f\xE9 en la fuerza inconmovible de mi alma.",invitation:"Confio en mi mismo y en la asistencia del universo. ",category:"regular",rarity:3},{id:30,name:"Felicidad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:31,name:"Flexibilidad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:32,name:"Generosidad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:33,name:"Gratitud",description:`El solo hecho de despertar cada ma\xF1ana es una raz\xF3n para agradecer. La gratitud es la madre de todas las virtudes porque te invita a valorar los peque\xF1os y grandes milagros que te rodean.
Al dar las gracias tu coraz\xF3n se ilumina y una actitud positiva se despierta en el interior. Hoy reg\xE1late una pausa y agradece tu proceso, tus b\xFAsquedas, tus seres queridos, tus errores e intentos\u2026 Da las gracias por quien sos y desde all\xED sue\xF1a y proyecta qui\xE9n quieres ser.`,image:"",afirmation:"Agradezco quien soy y todo lo que me rodea.",invitation:"Hoy agradecele a ese ser querido especial.",category:"regular",rarity:3},{id:34,name:"Hogar",description:`El hogar es ese lugar tuyo, \xFAnico y especial, que viaja con vos vayas donde vayas. Al dedicar cada d\xEDa un momento para nutrir tu mundo interior, estas creando tu hogar, dando lugar a escuchar respuestas y recordar qui\xE9n eres.
Los lugares f\xEDsicos a los que usualmente llamamos hogar, son tan s\xF3lo el veh\xEDculo. El silencio, la contemplaci\xF3n, el movimiento consciente, la m\xFAsica, el arte, detenerte a o\xEDr y ver el mar, son algunas de las puertas que invitan a viajar dentro y pausar el tiempo en vos. Al hacerlo estas volviendo al \u2018Hogar\u2019. Recuerda que siempre puedes regresar a \xE9l, porque tu Hogar viaja con vos, tu interior es tu Hogar. \xA1Feliz reencuentro!`,image:"",afirmation:"Cada d\xEDa regreso a mi hogar y nutro mi mundo interior.",invitation:"Reivindico tiempo para m\xED y disfruto de estar en contacto conmigo.",category:"regular",rarity:3},{id:35,name:"Honestidad",description:`La honestidad es poner en pr\xE1ctica la integridad de quienes somos, pudiendo compartir nuestra verdad a trav\xE9s de nuestras acciones y palabras.
Para poder ser honestos con otros primero debemos ser honestos con nosotros mismos. La transparencia en los v\xEDnculos da lugar a relaciones sanas y plenas.
Has una pausa para escuchar tu verdad, eso que te hace particularmente \xFAnico en este universo, y luego comp\xE1rtela con otros, invit\xE1ndolos a hacer lo mismo tambi\xE9n.`,image:"",afirmation:"Soy honesta conmigo misma y la Verdad gu\xEDa mis pasos.",invitation:"En silencio, escucho la Verdad que habita en m\xED.",category:"regular",rarity:2},{id:36,name:"Iluminaci\xF3n",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:2},{id:37,name:"Integridad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:38,name:"Luz",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:39,name:"Oportunidad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:40,name:"Paciencia",description:`La maestra naturaleza nos ense\xF1a que la paciencia amorosa trae grandes recompensas y que cada etapa del camino tiene un valor \xFAnico y necesario en el ciclo de la vida.
Ser pacientes ante los cambios, las transiciones, lo nuevo, te regalara paz y confianza. Como una madre que espera a su bebe, recuerda que cada acontecimiento sucede en el momento perfecto y que no.
El universo sabe escucharte, muchas veces tus tiempos no coinciden con los tiempos divinos, descansa en la espera. M\xE1s adelante entender\xE1s por qu\xE9 las cosas sucedieron de ese modo. Estate atento para descubrir se\xF1ales y sugerencias divinas durante tu periodo de espera. Que est\xE9s leyendo este mensaje ya es una se\xF1al, rec\xEDbela con gratitud.`,image:"",afirmation:"Soy paciente conmigo misma y descubro milagros a cada instante.",invitation:"Observo la naturaleza y sus ciclos, aprendo de su paciente sabidur\xEDa en cada transici\xF3n.",category:"regular",rarity:3},{id:41,name:"Paz",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:42,name:"Perd\xF3n",description:`Al perdonar sanamos y nos volvemos m\xE1s compasivos. Saber perdonar a otros y a uno mismo es dejar a un lado la idea de perfeccionismo, pudiendo entender que equivocarnos es parte del camino y reconocer el error es una gran oportunidad para el aprendizaje.
El perd\xF3n nos invita a andar livianos sin culpas ni rencores, dejando atr\xE1s el pasado y abri\xE9ndole la puerta al presente consciente.
Recuerda que al perdonar no solo estas sanando los v\xEDnculos con los otros sino tambi\xE9n es un regalo de paz que te haces a ti mismo.`,image:"",afirmation:"Me perdono a mi mismo y a los otros. ",invitation:"Inhalo amor. Exhalo perd\xF3n.",category:"regular",rarity:2},{id:43,name:"Prop\xF3sito",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:44,name:"Rendici\xF3n",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:45,name:"Sabidur\xEDa",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:46,name:"Serenidad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:47,name:"Silencio",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:48,name:"Simplicidad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:49,name:"Sincronicidad",description:`Las sincronicidades suceden cuando somos capaces de estar en armon\xEDa con todo lo que nos rodea. Si este mensaje ha llegado a ti, al\xE9grate porque es una se\xF1al de que te encuentras en el lugar indicado para tu crecimiento. Abre tus ojos para poder ver el fluir de la sincronicidad en tu vida.
Recuerda que nadie est\xE1 donde est\xE1 por casualidad y nada en el plan Divino es al azar, cada acontecimiento sucede en el momento y lugar indicado para tu beneficio.
Advertir o buscar las se\xF1ales es una invitaci\xF3n a reconocer la interconexi\xF3n que existe en este maravilloso universo, pudiendo contemplar que detr\xE1s de cada acontecimiento hay una raz\xF3n Divina de ser.`,image:"",afirmation:"Estoy en el momento y lugar indicado para mi crecimiento. ",invitation:"Reconozco el constante fluir de las sincronicidades en mi vida.",category:"regular",rarity:2},{id:50,name:"Transformaci\xF3n",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:51,name:"Verdad",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:52,name:"Visi\xF3n",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:3},{id:53,name:"Primer Chakra",description:`No basta con que algo est\xE9 servido tambi\xE9n hay que tomarlo. Al igual que las ra\xEDces de las plantas absorben los nutrientes de la tierra, el primer chakra, situado en la base de la columna, te invita a tomar lo que est\xE1 disponible para vos y sentirte merecedora de hacerlo.
La tarea de este chakra, es la conservaci\xF3n personal, invit\xE1ndonos a recordar nuestro derecho a existir, fortaleciendo tu confianza y seguridad.
Solo as\xED es posible alcanzar el prop\xF3sito de reconocer la expresi\xF3n de tu alma en tu templo f\xEDsico y sentar las bases para tu crecimiento espiritual.`,image:"",afirmation:"Honro mi templo sagrado, cuido de \xE9l y dej\xF3 que la vida cuide de mi.",invitation:"Hoy nutre la conexi\xF3n din\xE1mica con la \xFAnica presencia viva que tenes garantizada durante toda tu vida: tu cuerpo.",category:"regular",rarity:2},{id:54,name:"Segundo Chakra",description:`Este chakra situado en tu plexo sacro te invita a fluir a trav\xE9s de tu intuici\xF3n, navegando en el mar de tus sentidos.
Los Samas est\xE1n presentes en el instante y sienten infinito placer. Tal como ellos al sentir placer nos integramos permitiendo una conexi\xF3n sincera con el otro, con uno mismo y el exterior. Por eso el placer es el que te invita a escuchar el anhelo de tu alma y seguir avanzando.
Al desear tus sentidos como los de los Samas se encienden y la voluntad se nutre, el deseo es tu combustible para la acci\xF3n. Cuando no nos apegamos al objeto del deseo nos dejamos guiar por la br\xFAjula interior, el anhelo del alma.`,image:"",afirmation:"Siento placer por ser quien soy.",invitation:"Hoy me permito sentir, expresar y experimentar placer.",category:"regular",rarity:2},{id:55,name:"Tercer Chakra",description:`Este chakra situado en el plexo solar,\xA0 te invita a encender la confianza en el poder que te habita para solo entonces reconocer quien realmente sos y podes llegar a ser.
Nuestro cuerpo es el veh\xEDculo, nuestras emociones el combustible y tercer chakra\xA0 el motor de tu viaje espiritual.\xA0 As\xED como los gatos son determinantes y aut\xF3nomos el poder del tercer chakra es tu via para la transformaci\xF3n y evoluci\xF3n. Tu capacidad de determinar tu destino.
El poder de esta chakra no es un objeto sino es tu via para el desarrollo de tu individualidad.`,image:"",afirmation:"Reconozco mi poder personal desarrollando mi individualidad.",invitation:"Al reconocer tu poder, preg\xFAntate \xBFqu\xE9 cambios necesitas hacer para avanzar en tu evoluci\xF3n?",category:"regular",rarity:2},{id:56,name:"Cuarto Chakra",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:2},{id:57,name:"Quinto Chakra",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:2},{id:58,name:"Sexto Chakra",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:2},{id:59,name:"S\xE9ptimo Chakra",description:"",image:"",afirmation:"",invitation:"",category:"regular",rarity:2},{id:60,name:"...",description:"...",image:"",afirmation:"Afirmo lo que ya mi ser interior sabe.",invitation:"",category:"regular",rarity:0}],en:[{id:0,name:"Acceptance",description:"La aceptaci\xF3n es la capacidad para asumir la vida y a los otros tal como son, sin intentar cambiar o luchar contra aquello que no podemos controlar. Aceptar que hay realidades que exceden tu control, no es una actitud est\xE1tica, es una decisi\xF3n activa, que te invita a no cargar\xA0ninguna malicia hacia nada o nadie. Al reconocer la diversidad, somos capaces de transformarnos. Al aceptar aquello que te hace \xFAnico, eso particular que habita en vos, te vuelves m\xE1s confiado y tu ser divino se revela.",image:"/assets/gallery/parami_8.jpg",afirmation:"Acepto y honro qui\xE9n soy.",invitation:"Hoy suelto el exceso de control y acepto lo que me rodea aqu\xED y ahora.",category:"regular",rarity:3},{id:1,name:"Beauty",description:`Creer que existe una sola clase de belleza equivale a no prestar atenci\xF3n a la vida y sus multiples expresiones. Poder ver lo bello a\xFAn en la apariencia m\xE1s desafiante es un alimento para el alma.
A medida que sintonizas con la particular belleza de tu ser, de los otros y de la naturaleza, tu resonancia se convierte en la de la belleza, y se irradia hacia todo lo que te rodea, volvi\xE9ndote en una expresi\xF3n de luz que invita a los otros a ver lo bello tambi\xE9n.`,image:"/assets/gallery/parami_9.jpg",afirmation:"Reconozco mi belleza y la de los otros.",invitation:"Hoy encuentro 3 aspectos bellos en m\xED.",category:"regular",rarity:3},{id:2,name:"Celebration",description:"Celebrar cada experiencia que la vida te regala despierta una actitud de gratitud que alimenta la vision de nuevas celebraciones. Siempre hay un motivo para celebrar y cuando lo haces con otros, una gran energ\xEDa se libera atrayendo el goce, la felicidad y las ganas compartidas de honrar la vida.",image:"/assets/gallery/parami_3.jpg",afirmation:"Celebro la vida, sus tr\xE1nsitos y este instante particular.",invitation:"Descubro la liviandad y la alegr\xEDa que se despierta al celebrar.",category:"regular",rarity:3},{id:3,name:"Commitment",description:"As you commit to your vision by aligning your thoughts and intentions to achieve what you long for, you find the peace of knowing that you are moving in the right direction. Your path is illuminated by the very act of committing to your quest, whatever it may be. If there is not yet clarity in the vision of your desire, bring your intention to illuminate your quest. As long as the search for the soul's yearning is active there will be peace.",image:"/assets/gallery/parami_4.jpg",afirmation:"I am committed to my quest and vision.",invitation:"Today I commit to follow the path of my heart.",category:"regular",rarity:3},{id:4,name:"Communication",description:`El primer paso para comunicarte con honestidad es escucharte a vos mismo. La comunicaci\xF3n con el interior es una invitaci\xF3n a ahondar en la quietud, templando la mente y dejando que el o\xEDdo del alma escuche respuestas en el silencio.
La pr\xE1ctica de la meditaci\xF3n es una puerta sagrada para comunicarte con el ser sabio y divino que habita en vos.
Comun\xEDcate con claridad a trav\xE9s de la palabra, la acci\xF3n y la intenci\xF3n. Todos percibir\xE1n la resonancia de la verdad y confiar\xE1n en ti.`,image:"/assets/gallery/parami_7.jpg",afirmation:"Me comunico con claridad y honestidad.",invitation:"En el silencio meditativo escucho y confio en mi verdad interior.",category:"regular",rarity:3},{id:5,name:"Confidence",description:"Cuando conf\xEDas en ti mismo eres capaz de volver consciente la sabidur\xEDa y fuerza que llevas dentro.   Para nutrir la confianza en ti es importante dejar a un lado la b\xFAsqueda de aprobaci\xF3n y expectativas ajenas. Conf\xEDa en tu intuici\xF3n y en tu propia experiencia. Si la mente esta muy atareada y es dif\xEDcil escuchar, conf\xEDa en las se\xF1ales de tu cuerpo. Al cultivar la confianza, tu esp\xEDritu se ilumina y tu luz te gu\xEDa con determinaci\xF3n.",image:"/assets/gallery/parami_2.jpg",afirmation:"Conf\xEDo en mi y dejo que mi sabiduria guie mis pasos.",invitation:"Recuerda las veces que superaste adversidades, pon valor en esas experiencia.",category:"regular",rarity:3},{id:6,name:"Creativity",description:`A medida que permitimos que el poder creativo fluya dentro nuestro alimentamos la energ\xEDa del cambio. Al canalizar tu fuerza, das y recibes vida, ya que la creatividad no es un movimiento solitario. All\xED donde pasa, atrae a quien sepa o\xEDr, ver y percibir.
Dejando de lado los juicios y exigencias, nos reconocemos co creadores de lo Divino, explorando as\xED nuestro inmenso y particular potencial. Usa tu poder creativo para crear la vida que sue\xF1as.`,image:"/assets/gallery/parami_6.jpg",afirmation:"Dej\xF3 que mi poder creativo se exprese pleno de alegr\xEDa.",invitation:"Pongo en practica mi creatividad y creo la vida que sue\xF1o.",category:"regular",rarity:3},{id:7,name:"Challenge",description:"El desaf\xEDo m\xE1s enriquecedor de todos es encontrar cada d\xEDa una mejor versi\xF3n de ti mismo. Los desaf\xEDos pueden ser vistos como dificultades insuperables o como oportunidades para la transformaci\xF3n y el crecimiento personal.\xA0 Si no existiera cierta cuota de resistencia no podr\xEDas descubrir tu propia fuerza. Cada vicisitud de la vida se presenta solo cuando uno est\xE1 listo para enfrentarla. Por eso, si un desaf\xEDo ha llegado a tu puerta, alza la mirada y avanza con confianza, descubriendo talentos y fuerzas que hasta entonces manten\xEDas silenciadas.",image:"/assets/gallery/parami_7.jpg",afirmation:"Respondo a mis desafios con confianza y descubro nuevos talentos. ",invitation:"Transformo cada desaf\xEDo en una sagrada oportunidad.",category:"regular",rarity:3}]};const xg={key:0,class:"deckItem loading"},Dg=D("svg",{class:"icon",width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[D("path",{d:"M25.6483 20.7714C25.1717 19.9268 25.0208 18.9369 25.2243 17.9887C25.6388 15.7775 25.8215 13.5291 25.7695 11.28C25.8673 8.74686 25.6047 6.21269 24.9896 3.75346C24.751 2.64178 24.2499 1.60329 23.5282 0.724687C23.1988 0.34609 22.8429 -0.187728 22.2713 0.065932C21.6276 0.34988 21.9457 0.95563 22.0744 1.4213C22.6182 3.40181 22.8167 5.46123 22.6612 7.50915C22.4985 10.2339 22.1761 12.9468 21.6958 15.6338C21.3361 17.4776 21.1544 17.7161 19.3409 17.86C16.4711 18.0947 14.5252 19.753 13.4272 22.3691C12.8215 23.8191 12.7647 25.2843 13.8853 26.5337C14.3912 27.1158 15.0465 27.5487 15.7804 27.7856C16.5144 28.0225 17.2992 28.0543 18.0499 27.8777C19.1747 27.6705 20.2293 27.1836 21.1165 26.4617C21.3702 26.2535 21.639 25.9355 22.01 26.102C22.4719 26.3103 22.3545 26.7797 22.3356 27.1583C22.2276 28.2907 22.0224 29.4117 21.7223 30.5089C21.1771 32.9244 20.0451 35.0899 18.985 37.2934C18.4701 38.3648 18.7011 39.2659 19.4242 39.7429C20.0754 40.1745 20.9689 40.0647 21.7791 39.3984C22.5635 38.7363 23.216 37.9323 23.7023 37.0284C25.6976 33.4658 26.5078 29.5889 26.6819 25.572C26.8083 23.9056 26.4493 22.2382 25.6483 20.7714ZM17.6259 24.0084C17.5666 24.0124 17.5072 24.0124 17.4479 24.0084C17.0693 23.9289 17.0466 23.6677 17.1602 23.3724C17.4593 22.5887 18.7768 21.6232 19.3712 21.7444C19.4556 21.7566 19.532 21.8008 19.5848 21.8677C19.6376 21.9346 19.6628 22.0192 19.6551 22.1041C19.6362 22.6492 18.296 23.891 17.6259 24.0084Z"})],-1),Mg=[Dg],il={__name:"DeckItem",props:{card:Object,loading:Boolean},setup(t){const e=t,n=zt();function r(){n.push({name:"card",params:{id:e.card.id,name:e.card.name,description:e.card.description,afirmation:e.card.afirmation,invitation:e.card.invitation,category:e.card.category,rarity:e.card.rarity}})}return(i,s)=>t.loading?(ee(),pe("div",xg)):(ee(),pe("div",{key:1,class:"deckItem untap",onClick:s[0]||(s[0]=a=>r())},Mg))}};function Ng(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}const Lg=async()=>new Promise(t=>{setTimeout(()=>{t(Ng(Og.es))},2500)}),qg={async setup(){return{deckData:Pe(await Lg())}},mounted(){},components:{DeckItem:il}},Ug=t=>(Ao("data-v-8e318833"),t=t(),ko(),t),Bg=Ug(()=>D("p",null,"Elige una carta",-1)),Fg={class:"deckWrapper"};function $g(t,e,n,r,i,s){const a=Fo("DeckItem");return ee(),pe(Se,null,[Bg,D("div",Fg,[(ee(!0),pe(Se,null,zo(r.deckData,o=>(ee(),un(a,{card:o,loading:!1},null,8,["card"]))),256))])],64)}const jg=yn(qg,[["render",$g],["__scopeId","data-v-8e318833"]]);const zg=D("p",null,"Mezclando cartas...",-1),Hg={class:"deckWrapper"},Wg={__name:"DeckTemplateSkeleton",setup(t){return(e,n)=>(ee(),pe(Se,null,[zg,D("div",Hg,[(ee(),pe(Se,null,zo(60,r=>me(il,{loading:!0})),64))])],64))}},Vg={class:"content"},Kg={id:"cardDeck"},Gg={__name:"Deck",setup(t){return(e,n)=>(ee(),pe("div",Vg,[D("main",Kg,[(ee(),un(Ro,null,{default:St(()=>[me(jg)]),fallback:St(()=>[me(Wg)]),_:1}))])]))}};const Jg={class:"cardWrapper"},Yg={class:"textWrapper"},Qg={class:""},Xg={class:"bottom"},Zg=D("h5",null,"Afirmaci\xF3n",-1),ev=D("h5",null,"Invitaci\xF3n",-1),tv={__name:"CardTemplate",props:{cardData:Object},async setup(t){let e,n;const r=t,i=async()=>new Promise(s=>{setTimeout(()=>{s()},3200)});return console.log(r.cardData),Pe(([e,n]=rd(()=>i()),e=await e,n(),e)),(s,a)=>(ee(),pe("main",Jg,[D("div",{class:"imgWrapper",style:Ur({backgroundImage:"url(/src/assets/cards/"+r.cardData.id+".jpg)"})},null,4),D("div",Yg,[D("h4",null,Xt(r.cardData.name),1),D("p",Qg,Xt(r.cardData.description),1),D("div",Xg,[D("div",null,[Zg,D("p",null,Xt(r.cardData.afirmation),1)]),D("div",null,[ev,D("p",null,Xt(r.cardData.invitation),1)])])])]))}};const nv=Vu('<div class="overlay" data-v-f57b853b><svg id="cardLoader" width="283" height="264" viewBox="0 0 283 264" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f57b853b><path d="M160.8 218.6C160.8 218.6 237.9 226.6 237.9 141.5C237.9 88.2 194.7 45.1 141.5 45.1C88.3 45.1 45.1 88.3 45.1 141.5C45.1 162.8 62.4 180.1 83.7 180.1H160.8C182.1 180.1 199.4 162.8 199.4 141.5C199.4 109.5 173.5 83.6 141.5 83.6C109.5 83.6 83.6 109.5 83.6 141.5" stroke="#10100F" stroke-width="13" stroke-miterlimit="10" stroke-linecap="round" style="stroke-dashoffset:0px;" data-v-f57b853b></path><path d="M83.6 218.6C41 218.6 6.5 184.1 6.5 141.5C6.5 66.9 66.9 6.5 141.5 6.5C216.1 6.5 276.5 66.9 276.5 141.5C276.5 263.1 160.8 257.4 160.8 257.4C139.5 257.4 122.2 240.1 122.2 218.8V218.6V141.5C122.2 130.8 130.9 122.2 141.5 122.2C152.2 122.2 160.8 130.8 160.8 141.5" stroke="#10100F" stroke-width="13" stroke-miterlimit="10" stroke-linecap="round" style="stroke-dashoffset:0px;" data-v-f57b853b></path></svg></div><main class="cardWrapper" data-v-f57b853b><div class="imgWrapper" data-v-f57b853b></div><div class="textWrapper" data-v-f57b853b><h4 data-v-f57b853b> Skeleton </h4><p class="" data-v-f57b853b> Esta es una carta skeleton, guardala para la buena vibra huesitica. Estoy escribiendo para rellenar con texto y que de fondo parezca que se est\xE1 cargando la carta. Esta es una carta skeleton, guardala para la buena vibra huesitica. Estoy escribiendo para rellenar con texto y que de fondo parezca que se est\xE1 cargando la carta. Esta es una carta skeleton, guardala para la buena vibra huesitica. </p><div class="bottom" data-v-f57b853b><div data-v-f57b853b><h5 data-v-f57b853b>Afirmaci\xF3n</h5><p data-v-f57b853b>Yo soy un texto re placeholder</p></div><div data-v-f57b853b><h5 data-v-f57b853b>Invitaci\xF3n</h5><p data-v-f57b853b>Yo soy un texto re placeholder</p></div></div></div></main>',2),rv={__name:"CardTemplateSkeleton",setup(t){return Jr(()=>{anime({targets:"#cardLoader path",strokeDashoffset:[0,anime.setDashoffset],easing:"easeInQuint",duration:2700,delay:500,complete:function(){}})}),(e,n)=>nv}},iv=yn(rv,[["__scopeId","data-v-f57b853b"]]);const sv={class:"content"},av={__name:"Card",props:{id:String,name:String,description:String,afirmation:String,invitation:String,category:String,rarity:String},setup(t){const e=t,n=zt(),r={id:e.id,name:e.name,description:e.description,afirmation:e.afirmation,invitation:e.invitation,category:e.category,rarity:e.rarity};return qo(()=>{(e.name==null||e.description=="")&&n.push("/deck")}),(i,s)=>(ee(),pe("div",sv,[(ee(),un(Ro,null,{default:St(()=>[me(tv,{cardData:r})]),fallback:St(()=>[me(iv)]),_:1}))]))}},ov={class:"content"},cv=D("main",{id:"deck"},[D("h2",null,"Mi colecci\xF3n"),D("p",null,"you can do it")],-1),lv=[cv],uv={__name:"Collection",setup(t){const e=zt(),r=rr().onAuthStateChanged(function(i){i||e.push("/")});return ls(()=>{r()}),(i,s)=>(ee(),pe("div",ov,lv))}};const dv={},fv={class:"content"},hv=D("main",{id:"home"},[D("img",{class:"title",alt:"Praxis, by Algo Particular",src:rl}),D("section",{class:"intro"},[D("p",null,"Un espacio vac\xEDo..."),D("p",null,"Ve y elige una carta! clickea debajo")])],-1),pv=[hv];function mv(t,e){return ee(),pe("div",fv,pv)}const gv=yn(dv,[["render",mv]]),sl=Lf({history:Yd(),routes:[{path:"/",component:_g},{path:"/register",component:Cg},{path:"/sign-in",component:Pg},{path:"/deck",component:Gg},{name:"card",path:"/card",component:av,props:!0},{path:"/collection",component:uv,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)",component:gv}]}),vv=()=>new Promise((t,e)=>{const n=Vc(rr(),r=>{n(),t(r)},e)});sl.beforeEach(async(t,e,n)=>{t.matched.some(r=>r.meta.requiresAuth)?await vv()?n():n("/"):n()});var _v="firebase",yv="9.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(_v,yv,"app");const bv={apiKey:"AIzaSyCiuSoJrYIzNaZCANvuYeHftgOfSUhbAAw",authDomain:"algo-particular-app-c3d88.firebaseapp.com",projectId:"algo-particular-app-c3d88",storageBucket:"algo-particular-app-c3d88.appspot.com",messagingSenderId:"975873740508",appId:"1:975873740508:web:3f819422d1fdddacccee19"};Qh(bv);const al=Od(fg);al.use(sl);al.mount("#app");
