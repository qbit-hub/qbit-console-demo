import{a as y,r as C,t as b}from"./jsx-runtime-XwvX9Bbv.js";import{A as k,B as h,et as w,g as S,j as x,m as R,p as M,tt as $,z as c}from"./createSimplePaletteValueFilter-DtO_3UcJ.js";import{n as u}from"./Stack-CVqVI3eH.js";function _(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function U(t){return parseFloat(t)}var A=y(C(),1);function j(t){return x("MuiSkeleton",t)}var z=k("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),X=b(),B=t=>{const{classes:e,variant:a,animation:r,hasChildren:i,width:n,height:o}=t;return w({root:["root",a,r,i&&"withChildren",i&&!n&&"fitContent",i&&!o&&"heightAuto"]},j,e)},s=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,l=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,W=typeof s!="string"?c`
        animation: ${s} 2s ease-in-out 0.5s infinite;
      `:null,q=typeof l!="string"?c`
        &::after {
          animation: ${l} 2s linear 0.5s infinite;
        }
      `:null,K=S("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(R(({theme:t})=>{const e=_(t.shape.borderRadius)||"px",a=U(t.shape.borderRadius),r=u(t,{animation:"none"}),i=u(t,{"&::after":{animation:"none",display:"none"}});return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:W||{animation:`${s} 2s ease-in-out 0.5s infinite`}},...r?[{props:{animation:"pulse"},style:r}]:[],{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:q||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}},...i?[{props:{animation:"wave"},style:i}]:[]]}})),D=A.forwardRef(function(e,a){const r=M({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:n,component:o="span",height:m,style:f,variant:v="text",width:g,...p}=r,d={...r,animation:i,component:o,variant:v,hasChildren:!!p.children};return(0,X.jsx)(K,{as:o,ref:a,className:$(B(d).root,n),ownerState:d,...p,style:{width:g,height:m,...f}})});export{D as t};
