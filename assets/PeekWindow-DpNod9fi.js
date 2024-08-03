import{jsx as i,jsxs as N}from"react/jsx-runtime";import{useRef as p,useState as k,useEffect as P,memo as x,useMemo as F,useLayoutEffect as L}from"react";import{m as D}from"framer-motion";import R,{useTheme as V}from"styled-components";import{S as X}from"./index-Bo_0AlUO.js";import{W as j,e as d,T as q,a as _,f as H,g as U,O as G,u as K,F as h,H as Y,B as f,l as b,h as $,v as J}from"./index-CWDlX6LS.js";import*as w from"html-to-image";import{C as Q}from"./WindowActionIcons-BqLpjiuN.js";import{b as Z}from"./useTitlebarContextMenu-02_sHBKy.js";import"react-dom";import"path-browserify";import"uuid";import"@hello-pangea/dnd";const ee=R(D.div)`
  backdrop-filter: ${({theme:e})=>`blur(${e.sizes.taskbar.blur})`};
  background-color: ${({theme:e})=>e.colors.taskbar.background};
  border: ${({theme:e})=>`1px solid ${e.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  bottom: ${j}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  z-index: 1000;
  transform: ${({$offsetX:e})=>e?`translateX(${e}px)`:void 0};

  ${X}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${({theme:e})=>e.colors.taskbar.activeForeground};
    }
  }

  img {
    height: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.height}px;
    margin: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.margin}px;
    max-height: ${d}px;
    max-width: ${d}px;
    min-height: 80px;
    min-width: 80px;
    object-fit: contain;
  }

  button.close {
    background-color: rgb(40, 40, 40);
    height: 32px;
    position: absolute;
    right: 0;
    top: 0;
    width: 32px;

    svg {
      fill: rgb(252, 246, 247);
      width: 12px;
    }

    &:active {
      background-color: rgb(139, 10, 20) !important;
    }

    &:hover {
      background-color: rgb(194, 22, 36);
    }
  }

  .controls {
    display: flex;
    place-content: center;
    position: absolute;
    top: ${({theme:e})=>e.sizes.taskbar.entry.peekImage.height+e.sizes.taskbar.entry.peekImage.margin*2}px;
    width: 100%;

    button {
      background-color: rgb(70, 70, 70);
      border: 1px solid rgb(46, 46, 46);
      display: flex;
      height: 27px;
      place-content: center;
      place-items: center;
      width: 27px;

      &:active {
        background-color: rgb(61, 96, 153) !important;
        border: 1px solid rgb(49, 77, 122) !important;
      }

      &:hover {
        background-color: rgb(54, 101, 179);
        border: 1px solid rgb(43, 81, 143);
      }

      svg {
        fill: #fff;
        height: 16px;
        margin-left: 1px;
        pointer-events: none;
        user-select: none;
        width: 16px;
      }
    }
  }
`,te=(e=!1)=>{const{sizes:{taskbar:n}}=V();let s=n.entry.peekImage.height+n.entry.peekImage.margin*2;return e&&(s+=n.entry.peekControlsHeight),{animate:"active",exit:"initial",initial:"initial",transition:{duration:q.WINDOW/3,ease:[.42,0,.58,1]},variants:{active:{height:s,opacity:1},initial:{height:0,opacity:0}}}},oe=15,z=async(e,n,s)=>{if(!n.current)return;const r=()=>window.requestAnimationFrame(()=>z(e,n,s));let t;try{const o=e.tagName==="VIDEO"?{margin:"0",padding:"0"}:{};t=await(w==null?void 0:w.toCanvas(e,{...e.clientWidth>d&&{canvasHeight:Math.round(d/e.clientWidth*e.clientHeight),canvasWidth:d},filter:a=>!(a instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0",...o}}))}catch{}if(t&&t.width>0&&t.height>0)if(U(t)){const o=new Image,a=t.toDataURL();o.addEventListener("load",()=>{n.current&&(s(a),window.setTimeout(r,H/oe))},G),o.decoding="async",o.src=a}else r()},ne=e=>{const{windows:{[e]:n}}=_(),{peekElement:s,componentWindow:r}=n||{},t=p(),[o,a]=k(""),l=p(!0);return P(()=>{const g=s||r;return!t.current&&g&&(t.current=window.setTimeout(()=>window.requestAnimationFrame(()=>z(g,l,a)),document.querySelector(".peekWindow")?0:H/2),l.current=!0),()=>{t.current&&(clearTimeout(t.current),t.current=void 0),l.current=!1}},[r,s]),o},re=x(()=>i("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M8 29.328V2.672h2.672v26.656H8zM21.328 2.672H24v26.656h-2.672V2.672z"})})),ie=x(()=>i("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:i("path",{d:"M28 16 8 30V2z"})})),se=({id:e})=>{const{minimize:n,windows:{[e]:s}}=_(),{pause:r,paused:t,play:o,minimized:a=!1,title:l=e}=s||{},{setForegroundId:g}=K(),{onClose:M}=Z(e),[O,v]=k(0),u=ne(e),m=F(()=>!!(o&&r&&t),[r,t,o]),A=te(m),I=p(null),B=()=>{a&&n(e),g(e)},[y,E]=k(!1),C=p(!1);return P(()=>{m&&t&&!C.current&&(C.current=!0,E(t(E)))},[t,m]),L(()=>{var c;if(u){const{left:S=0,right:T=0}=((c=I.current)==null?void 0:c.getBoundingClientRect())||{},W=J();S<0?v(Math.abs(S)):T>W&&v(W-T)}},[u]),u?N(ee,{ref:I,$offsetX:O,className:"peekWindow",onClick:B,...A,...h,children:[i("img",{alt:l,decoding:"async",loading:"eager",src:u,...Y}),i(f,{className:"close",onClick:M,...b("Close"),children:i(Q,{})}),m&&N("div",{className:"controls",children:[y&&i(f,{onClick:c=>{$(c),o==null||o()},...b("Play"),...h,children:i(ie,{})}),!y&&i(f,{onClick:c=>{$(c),r==null||r()},...b("Pause"),...h,children:i(re,{})})]})]}):null},ke=x(se);export{ke as default};
