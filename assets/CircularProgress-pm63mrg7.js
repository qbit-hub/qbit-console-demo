import{a as I,r as U,t as V}from"./jsx-runtime-XwvX9Bbv.js";import{H as M,M as q,N as z,V as $,et as _,g as x,h as E,nt as K,r as O,rt as W,v as m}from"./Typography-Rn6f7_wN.js";import{a as D,n as j}from"./Stack-Vxfahexl.js";import{t as B}from"./useId-BMxXWm2M.js";var ir=B,G=I(U(),1);function H(r){return z("MuiCircularProgress",r)}var or=q("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","track","circle","circleDisableShrink"]),c=V(),s=44,g=M`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,k=M`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,Z=typeof g!="string"?$`
        animation: ${g} 1.4s linear infinite;
      `:null,J=typeof k!="string"?$`
        animation: ${k} 1.4s ease-in-out infinite;
      `:null,L=r=>{const{classes:a,variant:e,color:i,disableShrink:u}=r;return K({root:["root",e,`color${_(i)}`],svg:["svg"],track:["track"],circle:["circle",u&&"circleDisableShrink"]},H,a)},Q=m("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.root,a[e.variant],a[`color${_(e.color)}`]]}})(x(({theme:r})=>{const a=j(r,{animation:"none"});return{display:"inline-block",variants:[{props:{variant:"determinate"},style:{...D(r,"transform")}},{props:{variant:"indeterminate"},style:Z||{animation:`${g} 1.4s linear infinite`}},...a?[{props:{variant:"indeterminate"},style:a}]:[],...Object.entries(r.palette).filter(O()).map(([e])=>({props:{color:e},style:{color:(r.vars||r).palette[e].main}}))]}})),X=m("svg",{name:"MuiCircularProgress",slot:"Svg"})({display:"block"}),Y=m("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,a)=>{const{ownerState:e}=r;return[a.circle,e.disableShrink&&a.circleDisableShrink]}})(x(({theme:r})=>{const a=j(r,{animation:"none"});return{stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{...D(r,"stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:J||{animation:`${k} 1.4s ease-in-out infinite`}},...a?[{props:({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink,style:a}]:[]]}})),rr=m("circle",{name:"MuiCircularProgress",slot:"Track"})(x(({theme:r})=>({stroke:"currentColor",opacity:(r.vars||r).palette.action.activatedOpacity}))),nr=G.forwardRef(function(a,e){const i=E({props:a,name:"MuiCircularProgress"}),{className:u,color:R="primary",disableShrink:N=!1,enableTrackSlot:h=!1,min:w,max:T,size:p=40,style:A,thickness:t=3.6,value:d=i.min??0,variant:C="indeterminate",...F}=i,P=w??0,v=T??100,o={...i,color:R,disableShrink:N,size:p,thickness:t,value:d,variant:C,enableTrackSlot:h},n=L(o),f={},S={},l={};if(C==="determinate"){const y=2*Math.PI*((s-t)/2),b=v-P;f.strokeDasharray=y.toFixed(3),f.strokeDashoffset=b>0?`${((v-d)/b*y).toFixed(3)}px`:`${y.toFixed(3)}px`,S.transform="rotate(-90deg)",l["aria-valuenow"]=d,l["aria-valuemin"]=P,l["aria-valuemax"]=v}return(0,c.jsx)(Q,{className:W(n.root,u),style:{width:p,height:p,...S,...A},ownerState:o,ref:e,role:"progressbar",...l,...F,children:(0,c.jsxs)(X,{className:n.svg,ownerState:o,viewBox:`${s/2} ${s/2} ${s} ${s}`,children:[h?(0,c.jsx)(rr,{className:n.track,ownerState:o,cx:s,cy:s,r:(s-t)/2,fill:"none",strokeWidth:t,"aria-hidden":"true"}):null,(0,c.jsx)(Y,{className:n.circle,style:f,ownerState:o,cx:s,cy:s,r:(s-t)/2,fill:"none",strokeWidth:t})]})})});export{ir as n,nr as t};
