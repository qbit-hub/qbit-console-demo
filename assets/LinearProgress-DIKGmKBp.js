import{a as N,r as T,t as A}from"./jsx-runtime-XwvX9Bbv.js";import{A as S,B as $,Q as P,et as U,g,j as D,m as u,p as X,t as c,tt as E,z as h}from"./createSimplePaletteValueFilter-DtO_3UcJ.js";import{a as p,n as j}from"./Stack-CVqVI3eH.js";import{n as K}from"./RtlProvider-CEUVf_PI.js";var w=N(T(),1);function Y(a){return D("MuiLinearProgress",a)}var nr=S("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","bar","bar1","bar2"]),b=A(),C=4,F={},x=$`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,Q=typeof x!="string"?h`
        animation: ${x} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,k=$`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,V=typeof k!="string"?h`
        animation: ${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,L=$`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,G=typeof L!="string"?h`
        animation: ${L} 3s infinite linear;
      `:null,H=a=>{const{classes:e,variant:r,color:n}=a;return U({root:["root",`color${P(n)}`,r],dashed:["dashed"],bar1:["bar","bar1"],bar2:["bar","bar2",r==="buffer"&&`color${P(n)}`]},Y,e)},M=(a,e)=>a.vars?a.vars.palette.LinearProgress[`${e}Bg`]:a.palette.mode==="light"?a.lighten(a.palette[e].main,.62):a.darken(a.palette[e].main,.5),J=g("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:r}=a;return[e.root,e[`color${P(r.color)}`],e[r.variant]]}})(u(({theme:a})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(a.palette).filter(c()).map(([e])=>({props:{color:e},style:{backgroundColor:M(a,e)}})),{props:({ownerState:e})=>e.color==="inherit"&&e.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),W=g("span",{name:"MuiLinearProgress",slot:"Dashed"})(u(({theme:a})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(a.palette).filter(c()).map(([e])=>{const r=M(a,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`}}})]})),G||{animation:`${L} 3s infinite linear`},u(({theme:a})=>j(a,{animation:"none"})||F)),Z=g("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(a,e)=>[e.bar,e.bar1]})(u(({theme:a})=>{const e=j(a,{animation:"none",left:"30%",right:"auto",width:"40%"});return{width:"100%",position:"absolute",left:0,bottom:0,top:0,...p(a,"transform",{duration:"0.2s",easing:"linear"}),transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(a.palette).filter(c()).map(([r])=>({props:{color:r},style:{backgroundColor:(a.vars||a).palette[r].main}})),{props:{variant:"determinate"},style:{...p(a,"transform",{duration:`.${C}s`,easing:"linear"})}},{props:{variant:"buffer"},style:{zIndex:1,...p(a,"transform",{duration:`.${C}s`,easing:"linear"})}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:Q||{animation:`${x} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}},...e?[{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:e}]:[]]}})),rr=g("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(a,e)=>[e.bar,e.bar2]})(u(({theme:a})=>{const e=j(a,{animation:"none",display:"none"});return{width:"100%",position:"absolute",left:0,bottom:0,top:0,...p(a,"transform",{duration:"0.2s",easing:"linear"}),transformOrigin:"left",variants:[...Object.entries(a.palette).filter(c()).map(([r])=>({props:{color:r},style:{"--LinearProgressBar2-barColor":(a.vars||a).palette[r].main}})),{props:({ownerState:r})=>r.variant!=="buffer"&&r.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>r.variant!=="buffer"&&r.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(a.palette).filter(c()).map(([r])=>({props:{color:r,variant:"buffer"},style:{backgroundColor:M(a,r),...p(a,"transform",{duration:`.${C}s`,easing:"linear"})}})),{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:{width:"auto"}},{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:V||{animation:`${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}},...e?[{props:({ownerState:r})=>r.variant==="indeterminate"||r.variant==="query",style:e}]:[]]}})),or=w.forwardRef(function(e,r){const n=X({props:e,name:"MuiLinearProgress"}),{className:q,color:z="primary",max:B,min:I,value:v,valueBuffer:R,variant:i="indeterminate",...O}=n,o={...n,color:z,variant:i},s=I??0,y=B??100,f=H(o),_=K(),d={},m={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){const l=y-s;let t=(v-s)/l*100-100;_&&(t=-t),m.bar1.transform=l>0?`translateX(${t}%)`:"translateX(-100%)",d["aria-valuenow"]=v,d["aria-valuemin"]=s,d["aria-valuemax"]=y}if(i==="buffer"&&R!==void 0){const l=y-s;let t=(R-s)/l*100-100;_&&(t=-t),m.bar2.transform=l>0?`translateX(${t}%)`:"translateX(-100%)"}return(0,b.jsxs)(J,{className:E(f.root,q),ownerState:o,role:"progressbar",...d,ref:r,...O,children:[i==="buffer"?(0,b.jsx)(W,{className:f.dashed,ownerState:o}):null,(0,b.jsx)(Z,{className:f.bar1,ownerState:o,style:m.bar1}),i==="determinate"?null:(0,b.jsx)(rr,{className:f.bar2,ownerState:o,style:m.bar2})]})});export{or as t};
