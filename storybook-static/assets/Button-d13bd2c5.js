import{j as t,F as v}from"./jsx-runtime-3b31f461.js";/* empty css             */const b=a=>{const{style:r,className:l,onClick:y,children:u,color:i="primary",disabled:s=!1,size:d="medium",variant:o="contained",href:c}=a,m=e=>{switch(e){case"primary":return"ldn-btn-primary";case"secondary":return"ldn-btn-secondary";case"success":return"ldn-btn-success";case"error":return"ldn-btn-error";case"info":return"ldn-btn-info";case"warning":return"ldn-btn-warning";case"inherit":return"ldn-btn-default";default:return"ldn-btn-default"}},f=(e,n)=>{switch(e){case"contained":return n===!0?"ldn-btn-contained-disable":"ldn-btn-contained";case"outlined":return n===!0?"ldn-btn-outlined-disable":"ldn-btn-outlined";case"text":return n===!0?"ldn-btn-text-disable":"ldn-btn-text";default:return"ldn-btn-default"}},p=e=>{switch(e){case"small":return"btn-small";case"medium":return"btn-medium";case"large":return"btn-large";default:return""}};return t(v,{children:c?t("a",{style:r,className:[`ldn-btn ${m(i)??""}`,`${l??""}`,`${f(o,s)??""}`,`${p(d)}`].filter(e=>e!=="").join(" "),href:c,children:u}):t("button",{style:r,className:[`ldn-btn ${m(i)??""}`,`${l??""}`,`${f(o,s)??""}`,`${p(d)}`].filter(e=>e!=="").join(" "),onClick:y,children:u})})};try{b.displayName="Button",b.__docgenInfo={description:"",displayName:"Button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"error"'},{value:'"info"'},{value:'"warning"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}}}catch{}export{b as B};
//# sourceMappingURL=Button-d13bd2c5.js.map