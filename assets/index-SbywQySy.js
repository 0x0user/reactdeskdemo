const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PeekWindow-C5iujYKi.js","assets/index-BkeddzzV.js","assets/index-BFrkkQuB.css","assets/WindowActionIcons-bInO6eDg.js","assets/useTitlebarContextMenu-BRWRnbNJ.js"])))=>i.map(i=>d[i]);
import{Z as r,_ as P,$ as T,a0 as j,a1 as I,Y as s,a2 as E,a3 as N,a4 as C,a5 as M,a6 as O,a7 as o,a8 as D,a9 as W,aa as A,ab as F}from"./index-BkeddzzV.js";import{u as R,a as V}from"./useTitlebarContextMenu-BRWRnbNJ.js";const L=e=>{e.target instanceof HTMLTextAreaElement||e.preventDefault()};r("div");const u=r.button.attrs(({as:e})=>({onKeyDown:L,type:!e||e==="button"?"button":void 0}))`
  ${P}
  background-color: transparent;
  font-family: inherit;
  max-width: ${({$short:e})=>e?"31px":void 0};
  width: 100%;
`,B=r(T.li)`
  display: flex;
  min-width: 0;
  overflow: hidden;
  place-content: center;
  position: relative;
  cursor: default;
  width: ${({theme:e})=>e.sizes.taskbar.entry.maxWidth};

  &::before {
    background-color: ${({$foreground:e,$progress:t,theme:a})=>e?t&&t>0&&t<100?a.colors.taskbar.foregroundProgress:a.colors.taskbar.foreground:""};
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

  > ${u} {
    align-items: center;
    display: flex;

    figure {
      width: 100%;
    }
  }
`,H=()=>{const{sizes:{taskbar:e}}=j();return{animate:"active",exit:"initial",initial:"initial",transition:{duration:I.WINDOW},variants:{active:{width:e.entry.maxWidth},initial:{width:0}}}},K=s.lazy(()=>E(()=>import("./PeekWindow-C5iujYKi.js"),__vite__mapDeps([0,1,2,3,4]))),U=({icon:e,id:t,title:a,...f})=>{const b=R(t),{foregroundId:x,setForegroundId:p}=N(),i=t===x,{linkElement:c,minimize:g,windows:{[t]:m}}=C(),{minimized:h,progress:k}=m||{},y=s.useCallback(n=>{n&&c(t,"taskbarEntry",n)},[t,c]),[v,l]=s.useState(!1),d=()=>l(!1),w=()=>l(!0),z=()=>{(h||i)&&g(t),p(i?b:t)},$=s.useMemo(()=>M()?O:{},[]),S=s.useMemo(()=>{if(typeof e=="string")return o.jsx(D,{alt:a,imgSize:24,src:e});if(W.isValidElement(e))return o.jsx("div",{className:"icon",children:e});if(typeof e=="function"){const n=e;return o.jsx("div",{className:"icon",children:o.jsx(n,{})})}},[e,a]),_=n=>{n.stopPropagation()};return o.jsxs(B,{$foreground:i,$progress:k,onClick:d,onMouseEnter:w,onMouseLeave:d,onMouseDown:_,...H(),...V(t),...f,children:[o.jsx(A,{initial:!1,presenceAffectsLayout:!1,children:v&&o.jsx(K,{id:t})}),o.jsx(u,{as:"div",ref:y,onClick:z,...$,...F(a),children:o.jsxs("figure",{children:[S,o.jsx("figcaption",{children:a})]})})]})},Y=s.memo(U),G=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{B as S,G as i};
