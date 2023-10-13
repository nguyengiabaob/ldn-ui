import{r}from"./index-de62f0e0.js";import{a as I,g as w,s as R,e as $,u as b,c as N,_ as y,d as A,f as B}from"./styled-3f1f3319.js";import{a as F,j as _}from"./jsx-runtime-3b31f461.js";function D({controlled:o,default:e,name:t,state:i="value"}){const{current:n}=r.useRef(o!==void 0),[u,l]=r.useState(e),s=n?o:u,a=r.useCallback(d=>{n||l(d)},[]);return[s,a]}function M(o){return I("MuiSvgIcon",o)}w("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const T=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],U=o=>{const{color:e,fontSize:t,classes:i}=o,n={root:["root",e!=="inherit"&&`color${$(e)}`,`fontSize${$(t)}`]};return B(n,M,i)},V=R("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.color!=="inherit"&&e[`color${$(t.color)}`],e[`fontSize${$(t.fontSize)}`]]}})(({theme:o,ownerState:e})=>{var t,i,n,u,l,s,a,d,p,c,f,S,m,v,h,g,x;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(t=o.transitions)==null||(i=t.create)==null?void 0:i.call(t,"fill",{duration:(n=o.transitions)==null||(u=n.duration)==null?void 0:u.shorter}),fontSize:{inherit:"inherit",small:((l=o.typography)==null||(s=l.pxToRem)==null?void 0:s.call(l,20))||"1.25rem",medium:((a=o.typography)==null||(d=a.pxToRem)==null?void 0:d.call(a,24))||"1.5rem",large:((p=o.typography)==null||(c=p.pxToRem)==null?void 0:c.call(p,35))||"2.1875rem"}[e.fontSize],color:(f=(S=(o.vars||o).palette)==null||(m=S[e.color])==null?void 0:m.main)!=null?f:{action:(v=(o.vars||o).palette)==null||(h=v.action)==null?void 0:h.active,disabled:(g=(o.vars||o).palette)==null||(x=g.action)==null?void 0:x.disabled,inherit:void 0}[e.color]}}),z=r.forwardRef(function(e,t){const i=b({props:e,name:"MuiSvgIcon"}),{children:n,className:u,color:l="inherit",component:s="svg",fontSize:a="medium",htmlColor:d,inheritViewBox:p=!1,titleAccess:c,viewBox:f="0 0 24 24"}=i,S=N(i,T),m=r.isValidElement(n)&&n.type==="svg",v=y({},i,{color:l,component:s,fontSize:a,instanceFontSize:e.fontSize,inheritViewBox:p,viewBox:f,hasSvgAsChild:m}),h={};p||(h.viewBox=f);const g=U(v);return F(V,y({as:s,className:A(g.root,u),focusable:"false",color:d,"aria-hidden":c?void 0:!0,role:c?"img":void 0,ref:t},h,S,m&&n.props,{ownerState:v,children:[m?n.props.children:n,c?_("title",{children:c}):null]}))});z.muiName="SvgIcon";const C=z;function W(o,e){function t(i,n){return _(C,y({"data-testid":`${e}Icon`,ref:n},i,{children:o}))}return t.muiName=C.muiName,r.memo(r.forwardRef(t))}const j=r.createContext(void 0),k=j;function q(){return r.useContext(k)}export{k as F,q as a,W as c,D as u};
//# sourceMappingURL=useFormControl-90ebb926.js.map
