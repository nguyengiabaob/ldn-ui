import{a as ee,j as a}from"./jsx-runtime-3b31f461.js";import{a as M,g as O,s as V,_ as i,c as A,d as U,e as T,f as j,r as oe,b as te,u as ne}from"./styled-3f1f3319.js";import{r as v}from"./index-de62f0e0.js";import{u as ae,a as se,c as _}from"./useFormControl-90ebb926.js";import{B as ce}from"./ButtonBase-68af7123.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./TransitionGroupContext-e4864003.js";function ie(e){return M("PrivateSwitchBase",e)}O("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const re=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],le=e=>{const{classes:o,checked:t,disabled:r,edge:n}=e,s={root:["root",t&&"checked",r&&"disabled",n&&`edge${T(n)}`],input:["input"]};return j(s,ie,o)},de=V(ce)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ue=V("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),pe=v.forwardRef(function(o,t){const{autoFocus:r,checked:n,checkedIcon:s,className:B,defaultChecked:b,disabled:I,disableFocusRipple:d=!1,edge:k=!1,icon:R,id:u,inputProps:P,inputRef:w,name:C,onBlur:p,onChange:h,onFocus:f,readOnly:W,required:G=!1,tabIndex:D,type:y,value:z}=o,J=A(o,re),[$,K]=ae({controlled:n,default:!!b,name:"SwitchBase",state:"checked"}),l=se(),Q=c=>{f&&f(c),l&&l.onFocus&&l.onFocus(c)},X=c=>{p&&p(c),l&&l.onBlur&&l.onBlur(c)},Y=c=>{if(c.nativeEvent.defaultPrevented)return;const E=c.target.checked;K(E),h&&h(c,E)};let m=I;l&&typeof m>"u"&&(m=l.disabled);const Z=y==="checkbox"||y==="radio",F=i({},o,{checked:$,disabled:m,disableFocusRipple:d,edge:k}),q=le(F);return ee(de,i({component:"span",className:U(q.root,B),centerRipple:!0,focusRipple:!d,disabled:m,tabIndex:null,role:void 0,onFocus:Q,onBlur:X,ownerState:F,ref:t},J,{children:[a(ue,i({autoFocus:r,checked:n,defaultChecked:b,className:q.input,disabled:m,id:Z?u:void 0,name:C,onChange:Y,readOnly:W,ref:w,required:G,ownerState:F,tabIndex:D,type:y},y==="checkbox"&&z===void 0?{}:{value:z},P)),$?s:R]}))}),he=pe,fe=_(a("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),me=_(a("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),be=_(a("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ke(e){return M("MuiCheckbox",e)}const Ce=O("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),S=Ce,ye=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ge=e=>{const{classes:o,indeterminate:t,color:r}=e,n={root:["root",t&&"indeterminate",`color${T(r)}`]},s=j(n,ke,o);return i({},o,s)},ve=V(he,{shouldForwardProp:e=>oe(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,t.color!=="default"&&o[`color${T(t.color)}`]]}})(({theme:e,ownerState:o})=>i({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:te(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${S.checked}, &.${S.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${S.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),xe=a(me,{}),Be=a(fe,{}),Ie=a(be,{}),Re=v.forwardRef(function(o,t){var r,n;const s=ne({props:o,name:"MuiCheckbox"}),{checkedIcon:B=xe,color:b="primary",icon:I=Be,indeterminate:d=!1,indeterminateIcon:k=Ie,inputProps:R,size:u="medium",className:P}=s,w=A(s,ye),C=d?k:I,p=d?k:B,h=i({},s,{color:b,indeterminate:d,size:u}),f=ge(h);return a(ve,i({type:"checkbox",inputProps:i({"data-indeterminate":d},R),icon:v.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:u}),checkedIcon:v.cloneElement(p,{fontSize:(n=p.props.fontSize)!=null?n:u}),ownerState:h,ref:t,className:U(f.root,P)},w,{classes:f}))}),Pe=Re,x=e=>a(Pe,{...e});try{x.displayName="CheckBox",x.__docgenInfo={description:"",displayName:"CheckBox",props:{action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:`This prop can help identify which element has keyboard focus.
The class name will be applied when the element gains the focus through keyboard interaction.
It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a \`focus-visible\` class to other components
if needed.`,name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}}}catch{}const $e={title:"Components/CheckBox",component:x},g={render:()=>a(x,{value:!0})};var N,H,L;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <CheckBox value={true} />
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const qe=["Primary"];export{g as Primary,qe as __namedExportsOrder,$e as default};
//# sourceMappingURL=CheckBox.stories-a5fd8504.js.map
