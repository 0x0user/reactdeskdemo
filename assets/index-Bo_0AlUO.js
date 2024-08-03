const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PeekWindow-DpNod9fi.js","assets/index-CWDlX6LS.js","assets/index-BFrkkQuB.css","assets/WindowActionIcons-BqLpjiuN.js","assets/useTitlebarContextMenu-02_sHBKy.js"])))=>i.map(i=>d[i]);
import{d as _,T as I,_ as P,u as E,a as C,i as N,D,I as O,l as M}from"./index-CWDlX6LS.js";import{jsx as o,jsxs as d}from"react/jsx-runtime";import W,{memo as A,lazy as F,useCallback as V,useState as j,useMemo as u}from"react";import{m as L,AnimatePresence as R}from"framer-motion";import a,{useTheme as B}from"styled-components";import{u as H,a as K}from"./useTitlebarContextMenu-02_sHBKy.js";const U=e=>{e.target instanceof HTMLTextAreaElement||e.preventDefault()};a("div");const f=a.button.attrs(({as:e})=>({onKeyDown:U,type:!e||e==="button"?"button":void 0}))`
  ${_}
  background-color: transparent;
  font-family: inherit;
  max-width: ${({$short:e})=>e?"31px":void 0};
  width: 100%;
`,q=a(L.li)`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  cursor: default;
  width: ${({theme:e})=>e.sizes.taskbar.entry.maxWidth};

  &::before {
    background-color: ${({$foreground:e,$progress:t,theme:i})=>e?t&&t>0&&t<100?i.colors.taskbar.foregroundProgress:i.colors.taskbar.foreground:""};
    background-image: ${({$progress:e,theme:t})=>e&&e>0&&e<100?`linear-gradient(to right, ${t.colors.progressBackground} 0% ${e}%, transparent ${e}% 100%)`:""};
    border-bottom: ${({$progress:e,theme:t})=>`
        ${t.sizes.taskbar.entry.borderSize} solid ${e&&e>0&&e<100?t.colors.progress:t.colors.highlight}
      `};
    bottom: 2px;
    content: "";
    height: ${({$foreground:e})=>e?"100%":0};
    margin: ${({$foreground:e})=>e?"":"0 4px"};
    position: absolute;
    transition-duration: 0.1s;
    transition-property: ${({$foreground:e})=>e?"all":"width"};
    width: ${({$foreground:e})=>e?"100%":"calc(100% - 8px)"};
    z-index: -1;
  }

  &:hover {
    &::before {
      background-color: ${({$foreground:e,theme:t})=>e?t.colors.taskbar.foregroundHover:t.colors.taskbar.hover};
      height: 100%;
      margin: 0;
      width: 100%;
    }
  }

  &:active {
    &::before {
      background-color: ${({$foreground:e,theme:t})=>e?t.colors.taskbar.activeForeground:t.colors.taskbar.active};
    }
  }

  figure {
    align-items: center;
    display: flex;
    margin-left: 4px;
    padding: 4px;

    figcaption {
      color: ${({theme:e})=>e.colors.text};
      font-size: ${({theme:e})=>e.sizes.taskbar.entry.fontSize};
      margin: 0 4px;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .icon {
      font-size: ${({theme:e})=>e.sizes.taskbar.entry.iconSize};
    }

    picture, .icon {
      height: ${({theme:e})=>e.sizes.taskbar.entry.iconSize};
      position: relative;
      width: ${({theme:e})=>e.sizes.taskbar.entry.iconSize};
    }
  }

  > ${f} {
    align-items: center;
    display: flex;

    figure {
      width: 100%;
    }
  }
`,G=()=>{const{sizes:{taskbar:e}}=B();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:I.WINDOW},variants:{active:{width:e.entry.maxWidth},initial:{width:0}}}},J=F(()=>P(()=>import("./PeekWindow-DpNod9fi.js"),__vite__mapDeps([0,1,2,3,4]))),Q=({icon:e,id:t,title:i,...b})=>{const p=H(t),{foregroundId:m,setForegroundId:g}=E(),r=t===m,{linkElement:s,minimize:h,windows:{[t]:k}}=C(),{minimized:x,progress:y}=k||{},v=V(n=>{n&&s(t,"taskbarEntry",n)},[t,s]),[w,c]=j(!1),l=()=>c(!1),z=()=>c(!0),$=()=>{(x||r)&&h(t),g(r?p:t)},S=u(()=>N()?D:{},[]),T=u(()=>{if(typeof e=="string")return o(O,{alt:i,imgSize:24,src:e});if(W.isValidElement(e))return o("div",{className:"icon",children:e});if(typeof e=="function")return o("div",{className:"icon",children:o(e,{})})},[e,i]);return d(q,{$foreground:r,$progress:y,onClick:l,onMouseEnter:z,onMouseLeave:l,onMouseDown:n=>{n.stopPropagation()},...G(),...K(t),...b,children:[o(R,{initial:!1,presenceAffectsLayout:!1,children:w&&o(J,{id:t})}),o(f,{as:"div",ref:v,onClick:$,...S,...M(i),children:d("figure",{children:[T,o("figcaption",{children:i})]})})]})},X=A(Q),re=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{q as S,re as i};
