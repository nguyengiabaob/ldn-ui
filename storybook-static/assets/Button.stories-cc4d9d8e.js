import{r as y}from"./index-ebeaab24.js";var m={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=y,E=Symbol.for("react.element"),k=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,C=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,o){var r,n={},c=null,i=null;o!==void 0&&(c=""+o),e.key!==void 0&&(c=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)v.call(e,r)&&!O.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:E,type:t,key:c,ref:i,props:n,_owner:C.current}}l.Fragment=k;l.jsx=_;l.jsxs=_;m.exports=l;var N=m.exports;const f=N.jsx,a=t=>{const{style:e,className:o,onClick:r}=t;return f("button",{style:e,className:o,onClick:r})};try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<Element>"}}}}}catch{}const S={title:"Components/Button",component:a},s={render:()=>f(a,{onClick:()=>{console.log("dsadsad")}})};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Button onClick={() => {
    console.log("dsadsad");
  }} />
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const g=["Primary"];export{s as Primary,g as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories-cc4d9d8e.js.map
