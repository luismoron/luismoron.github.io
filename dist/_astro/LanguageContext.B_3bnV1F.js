import{r as c}from"./index.DbEQb2qg.js";var g={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function R(){if(f)return a;f=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function u(o,t,s){var i=null;if(s!==void 0&&(i=""+s),t.key!==void 0&&(i=""+t.key),"key"in t){s={};for(var l in t)l!=="key"&&(s[l]=t[l])}else s=t;return t=s.ref,{$$typeof:e,type:o,key:i,ref:t!==void 0?t:null,props:s}}return a.Fragment=n,a.jsx=u,a.jsxs=u,a}var x;function v(){return x||(x=1,g.exports=R()),g.exports}var m=v();let r="es";const d=new Set,E=()=>{if(typeof window<"u"){const e=localStorage.getItem("language");e?r=e:(r=navigator.language.split("-")[0]==="es"?"es":"en",r!=="es"&&r!=="en"&&(r="es"))}};E();const p=e=>{r=e,typeof window<"u"&&localStorage.setItem("language",e),d.forEach(n=>n(e))},_=()=>{const[e,n]=c.useState(r);return c.useEffect(()=>{n(r);const o=t=>n(t);return d.add(o),()=>{d.delete(o)}},[]),{language:e,toggleLanguage:()=>{p(e==="es"?"en":"es")},setLanguage:p}};export{m as j,_ as u};
