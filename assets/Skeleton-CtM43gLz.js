import{a as y,r as C,t as b}from"./jsx-runtime-XwvX9Bbv.js";import{H as h,M as k,N as w,V as c,g as S,h as x,nt as M,rt as R,v as $}from"./Typography-Rn6f7_wN.js";import{n as u}from"./Stack-Vxfahexl.js";function _(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function U(t){return parseFloat(t)}var A=y(C(),1);function X(t){return w("MuiSkeleton",t)}var V=k("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),j=b(),N=t=>{const{classes:e,variant:a,animation:i,hasChildren:r,width:n,height:o}=t;return M({root:["root",a,i,r&&"withChildren",r&&!n&&"fitContent",r&&!o&&"heightAuto"]},X,e)},s=h`
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
      `:null,B=$("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(S(({theme:t})=>{const e=_(t.shape.borderRadius)||"px",a=U(t.shape.borderRadius),i=u(t,{animation:"none"}),r=u(t,{"&::after":{animation:"none",display:"none"}});return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:t.alpha(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:W||{animation:`${s} 2s ease-in-out 0.5s infinite`}},...i?[{props:{animation:"pulse"},style:i}]:[],{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:q||{"&::after":{animation:`${l} 2s linear 0.5s infinite`}}},...r?[{props:{animation:"wave"},style:r}]:[]]}})),D=A.forwardRef(function(e,a){const i=x({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:n,component:o="span",height:m,style:f,variant:v="text",width:g,...p}=i,d={...i,animation:r,component:o,variant:v,hasChildren:!!p.children};return(0,j.jsx)(B,{as:o,ref:a,className:R(N(d).root,n),ownerState:d,...p,style:{width:g,height:m,...f}})});export{D as t};
