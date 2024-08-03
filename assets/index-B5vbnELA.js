import{jsx as $,jsxs as et}from"react/jsx-runtime";import lt,{useRef as P,useEffect as L,useMemo as _,useState as V,useLayoutEffect as O,useCallback as I,memo as yt}from"react";import{Rnd as St}from"react-rnd";import j,{useTheme as Rt,css as Et}from"styled-components";import{a as D,p as f,v as K,j as Z,W as wt,k as J,u as Q,m as q,n as $t,o as Ct,q as N,r as It,F as pt,h as ct,P as X,s as ot,B as nt,c as Mt,L as Bt,I as Tt,l as rt,T as Ot,t as Wt,d as ft}from"./index-CWDlX6LS.js";import{m as _t}from"framer-motion";import{M as Dt,a as Pt,b as Nt,C as Lt}from"./WindowActionIcons-BqLpjiuN.js";import{b as Ht,a as Vt}from"./useTitlebarContextMenu-02_sHBKy.js";import"react-dom";import"path-browserify";import"uuid";import"@hello-pangea/dnd";const Ft={bottom:!1,bottomLeft:!1,bottomRight:!1,left:!1,right:!1,top:!1,topLeft:!1,topRight:!1},Gt={bottom:!0,bottomLeft:!0,bottomRight:!0,left:!0,right:!0,top:!0,topLeft:!0,topRight:!0},mt=30,xt=166,vt={cancel:".cancel",dragHandleClassName:"handle",enableUserSelectHack:!1,minHeight:`${mt}px`,minWidth:`${xt}px`,resizeHandleStyles:{bottom:{bottom:"-3px",cursor:"ns-resize",height:"6px"},bottomLeft:{bottom:"-3px",cursor:"nesw-resize",height:"12px",left:"-3px",width:"12px"},bottomRight:{bottom:"-3px",cursor:"nwse-resize",height:"12px",right:"-3px",width:"12px"},left:{cursor:"ew-resize",left:"-3px",width:"6px"},right:{cursor:"ew-resize",right:"-3px",width:"6px"},top:{cursor:"ns-resize",height:"6px",top:"-3px"},topLeft:{cursor:"nwse-resize",height:"12px",left:"-3px",top:"-3px",width:"12px"},topRight:{cursor:"nesw-resize",height:"12px",right:"-3px",top:"-3px",width:"12px"}}},At=t=>{const{windows:e}=D(),{maximized:s=!1,minimized:o=!1}=e[t]||{},n=P(!1);return L(()=>{n.current=!!(s||o)},[s,o]),n},Ut=(t,e,s=[],o=0,n)=>{const l=s.find(p=>p!==t)||"",{componentWindow:r}=(e==null?void 0:e[l])||{},{x:i=0,y:a=0,width:c=0,height:u=0}=(r==null?void 0:r.getBoundingClientRect())||{},g=n!=null&&n.width?f(n.width):K(),v=n!=null&&n.height?f(n.height):Z();return!(i+o+c>g||a+o+u>v)&&(i||a)?{x:i+o,y:a+o}:void 0},ut=({height:t,width:e},s)=>{const o=s?f(s.height):Z()-wt,n=s?f(s.width):K();return{x:Math.floor(n/2-f(e)/2),y:Math.floor(o/2-f(t)/2)}},U={BOTTOM:15,LEFT:150,RIGHT:50,TOP:15},at=(t,e,s=!1)=>{const{position:o,size:n}=t||{},{x:l=0,y:r=0}=o||{},{height:i=0,width:a=0}=n||{};return s?l+U.RIGHT>e.x||l+f(a)-U.LEFT<0||r+U.BOTTOM>e.y||r+U.TOP<0:l<0||r<0||l+f(a)>e.x||r+f(i)>e.y},dt=(t,e)=>{const s=Number(t.height),o=Number(t.width),[n,l]=[Z(),K()],r=n-wt,i=Math.max(mt,Math.min(s,r)),a=Math.max(xt,Math.min(o,l));if(!e)return{height:i,width:a};const c=s===i,u=o===a;return!c&&!u?s>o?{height:i,width:Math.round(a/(r/i))}:{height:Math.round(i/(l/a)),width:a}:c?u?{height:i,width:a}:{height:Math.round(i/(o/a)),width:a}:{height:i,width:Math.round(a/(s/i))}},it=(t,e)=>{const{type:s,index:o,widthPercent:n=100,heightPercent:l=100}=t,r=f(e.width),i=f(e.height);let a=0,c=0,u=n/100*r,g=l/100*i;switch(s){case"twoColumns":a=o===0?0:r-u;break;case"threeColumns":a=(r-u)*o;break;case"fourGrid":a=o%2*(r/2),c=Math.floor(o/2)*(i/2);break;case"threeLeftOneRight":a=o===3?r/2:r/3*o,c=o===3?0:i/3*o;break;case"threeRightOneLeft":a=o===0?0:r/3*(o-1)+r/2,c=o===0?0:i/3*(o-1);break;case"fiveLeftGridRight":a=o===0?0:r/2+(o-1)%2*(r/4),c=o===0?0:Math.floor((o-1)/2)*(i/2);break;case"fiveRightGridLeft":a=o===4?r/2:o%2*(r/4),c=o===4?0:Math.floor(o/2)*(i/2);break}return u=n/100*r,g=l/100*i,{width:u,height:g,x:a,y:c}},jt=(t,e)=>{const{sizes:{window:{cascadeOffset:s}}}=Rt(),{windows:o}=D(),{autoSizing:n,closing:l,componentWindow:r,initialRelativePosition:i}=o[t]||{},{events:a}=J(),{stackOrder:c,windowStates:{[t]:u}={}}=Q(),{position:g,size:v}=u||{},{WindowsViewAreaSize:b}=q(),p=_(()=>at(u,{x:f(b==null?void 0:b.width)||K(),y:f(b==null?void 0:b.height)||Z()}),[u,b]),[A,m]=V(()=>!p&&g||Ut(t,o,c,s,b)||ut(e,b)),h=At(t),x=P(A);return L(()=>{x.current=A},[A]),L(()=>{const C=$t(R=>{const k={x:f(R.width)||K(),y:f(R.height)||Z()};at({position:x.current,size:e},k,!0)&&m(({x:S,y:B})=>{const E=k.x-U.RIGHT,z=k.y-U.BOTTOM,w=S>E?E:S,d=B>z?z:B;return console.log({newX:w,newY:d}),w!==S||d!==B?{x:w,y:d}:{x:S,y:B}})},100),y=[a.on("event:elements/resize/windowsview",C)];return()=>{y.forEach(a.removeListenerByID),C.cancel()}},[e,a]),O(()=>{n&&!l&&v&&!g&&!h.current&&m(ut(v))},[n,h,l,g,v]),O(()=>{i&&r&&e&&m(Ct(r,i,e))},[r,i,e]),[A,m]},Qt=t=>{const{windows:{[t]:e}={}}=D(),{defaultSize:s,snap:o=!1}=e||{},{WindowsViewArea:n,WindowsViewAreaSize:l}=q(),r=_(()=>o&&typeof o=="object",[o]),i=_(()=>{if(r){const a=n?N(n):l;return it(o,a)}return null},[r,o,n]);return _(()=>r&&i?{height:i.height,width:i.width}:s?{height:s.height,width:s.width}:It,[r,i,s])},Yt=(t,e=!1)=>{const s=Qt(t),{events:o}=J(),{windowStates:{[t]:{size:n=s}={}}={}}=Q(),{windows:{[t]:{lockAspectRatio:l=!1,snap:r=!1,closing:i=!1}={},...a},setSnap:c}=D(),{WindowsViewArea:u,WindowsViewAreaSize:g}=q(),[v,b]=V(()=>dt(n,l)),p=At(t),A=_(()=>!i&&r&&typeof r=="object",[r,i]),m=I(h=>{if(A){const x=u?N(u):g,C=f(h.width)/f(x.width),y=f(h.height)/f(x.height),R=y*100,k=C*100;console.log("Size changed + it is snap :: ",t,{newSize:h,newWidthPercent:C,newHeightPercent:y});const S=100-k;let B=100;r.type!=="twoColumns"&&(B-=R),Object.entries(a).filter(([z,{snap:w,closing:d}])=>!d&&w&&typeof w=="object"&&w.type===r.type).forEach(([z,{snap:w}])=>{console.log({someWindowID:z,availableWidthPercent:S,availableHeightPercent:B}),r.type==="twoColumns"&&(c(z,{...w,widthPercent:S,heightPercent:B}),o.emit("event:elements/resize/windowsview",x))}),c(t,{...r,widthPercent:C*100,heightPercent:y*100})}},[A,u,g,t,a,c,r]);return L(()=>{const h=u?N(u):g,x=it(r,h);console.log({parsedSnap:x}),b({width:x.width||0,height:x.height||0})},[u,r]),L(()=>{const h=[o.on(`event:windows/resize:${t}`,({size:x})=>m(x))];return console.log("onResize, change!"),()=>{h.forEach(o.removeListenerByID)}},[m,o,t]),O(()=>{console.log("emitting size change"),o.emit(["event:windows/resize",`event:windows/resize:${t}`],{size:v,id:t})},[v,t,o]),O(()=>{e&&!p.current&&b(dt(n,l))},[e,p,l,n]),[v,b]},st=(t=!0)=>document.querySelectorAll("iframe").forEach(e=>{e.style.pointerEvents=t?"initial":"none"}),Kt=t=>{const{windows:{[t]:{snap:e=!1,allowResizing:s=!0,autoSizing:o=!1,lockAspectRatio:n=!1,maximized:l=!1}={}},setSnap:r}=D(),{events:i}=J(),{setWindowStates:a}=Q(),{WindowsViewAreaSize:c,WindowsViewArea:u}=q(),[g,v]=Yt(t,o),[b,p]=jt(t,g),A=e&&typeof e=="object";O(()=>{l||i.emit(["event:windows/resize",`event:windows/resize:${t}`],{maximized:!1,size:g})},[l,g,t,i]),O(()=>{const E=d=>{if(A){const M=it(e,d);v({width:M.width||0,height:M.height||0}),p({x:M.x||0,y:M.y||0})}},z=u?N(u):c;E(z);const w=[i.on("event:elements/resize/windowsview",E)];return()=>{w.forEach(i.removeListenerByID)}},[e,u]);const m=I((E,z)=>{a(w=>({...w,[t]:{...w[t],position:E,size:z}}))},[t,a]),h=I(()=>st(!1),[]),x=I((E,{x:z,y:w})=>{h();const d={x:z,y:w};i.emit(["event:windows/drag_start",`event:windows/drag_start:${t}`],{position:d,id:t})},[h,i,t]),C=I((E,{x:z,y:w})=>{st();const d={x:z,y:w},M=u?N(u):c;if(!at({position:d,size:g},{x:f(M.width),y:f(M.height)},!0)){const Y=e&&typeof e=="object";p(F=>{const H={x:Math.abs(d.x-F.x),y:Math.abs(d.y-F.y)};if((H.x>=5||H.y>=5)&&Y){const G=u?N(u):c,W=it(e,G);v({width:W.width||0,height:W.height||0}),p({x:W.x||0,y:W.y||0}),r(t,!1)}return d}),m(d,g),i.emit(["event:windows/drag_stop",`event:windows/drag_stop:${t}`],{position:d,id:t})}},[u,g,e,p,m,i,t,v,r]),y=I((E,z,w)=>{h();const d={width:f(w.style.width),height:f(w.style.height)};i.emit(["event:windows/resize_start",`event:windows/resize_start:${t}`],{size:d,id:t})},[i,t,h]),R=I((E,z,{style:{height:w,width:d,transform:M}},Y,F)=>{const[,H,G]=M.match(/translate\((-?\d+)px, (-?\d+)px\)/)||[],W=typeof H=="string"&&typeof G=="string"?{x:f(H),y:f(G)}:F;st();const tt={height:f(w),width:f(d)};W.y<0&&(tt.height+=W.y,W.y=0),p(W),v(tt),m(W,tt),i.emit(["event:windows/resize_stop",`event:windows/resize_stop:${t}`],{position:W,size:tt,id:t})},[t,p,v,i,m]),k=_(()=>s&&!l?Gt:Ft,[s,l]),S=I((E,{x:z,y:w})=>{const d={x:z,y:w};i.emit(["event:windows/drag",`event:windows/drag:${t}`],{position:d,id:t})},[i,t]),B=I((E,z,{style:{height:w,width:d,transform:M}},Y,F)=>{const H=F,G={height:f(w),width:f(d)};i.emit(["event:windows/resize",`event:windows/resize:${t}`],{position:H,size:G,id:t})},[i,t]);return{disableDragging:l,enableResizing:k,lockAspectRatio:n,onDrag:S,onDragStart:x,onDragStop:C,onResize:B,onResizeStart:y,onResizeStop:R,position:b,size:g,...vt}},Zt=t=>e=>{e==null||e.setAttribute("tabindex",pt.tabIndex.toString()),e==null||e.addEventListener("contextmenu",ct),e==null||e.addEventListener("mousedown",s=>{s.preventDefault(),t==null||t.focus(X)})},Xt=({children:t,id:e,zIndex:s})=>{const{linkElement:o,windows:{[e]:n}}=D(),{Component:l,componentWindow:r,maximized:i,minimized:a}=n||{},c=P(null),u=Kt(e),g=_(()=>({pointerEvents:a?"none":void 0,zIndex:s,willChange:"transform"}),[a,s]),v=I(b=>{var m,h;c.current=b;const p=((h=(m=b==null?void 0:b.resizableElement)==null?void 0:m.current)==null?void 0:h.children)||[],[A]=p;l&&!r&&A&&o(e,"componentWindow",A)},[l,r,e,o]);return L(()=>{var b,p;if(!i){const{current:A}=c,m=((p=(b=A==null?void 0:A.resizableElement)==null?void 0:b.current)==null?void 0:p.children)||[],[h,x]=m;[...(x==null?void 0:x.children)||[]].forEach(Zt(h))}},[i]),$(St,{ref:v,style:g,...u,children:t})},Jt=j(_t.section)`
  background-color: ${({$backgroundColor:t,theme:e})=>t||e.colors.window.background};
  box-shadow: ${({$showShadows:t,$isForeground:e,theme:s})=>t?e?s.colors.window.shadow:s.colors.window.shadowInactive:"0"};
  contain: strict;
  height: 100%;
  outline: ${({$isForeground:t,theme:e})=>`${e.sizes.window.outline} solid ${t?e.colors.window.outline:e.colors.window.outlineInactive}`};
  overflow: hidden;
  position: relative;
  width: 100%;
`,ht=({$foreground:t,theme:e})=>t?`1px solid ${e.colors.titleBar.background}`:`1px solid ${e.colors.titleBar.backgroundInactive}`,qt=j.header`
  background-color: ${({$foreground:t,theme:e})=>t?e.colors.titleBar.background:e.colors.titleBar.backgroundInactive};
  border-bottom: ${ht};
  display: flex;
  height: ${({theme:t})=>t.sizes.titleBar.height}px;
  position: relative;
  top: 0;
  z-index: 2;
  user-select: none;
  pointer-events: all;
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  text-rendering: optimizelegibility;
  
  > button {
    align-items: center;
    color: ${({$foreground:t,theme:e})=>t?e.colors.titleBar.text:e.colors.titleBar.textInactive};
    display: flex;
    flex-grow: 1;
    font-size: ${({theme:t})=>t.sizes.titleBar.fontSize};
    font-weight: 400;
    min-width: 0;

    figure {
      align-items: center;
      display: flex;
      margin-left: 8px;
      min-width: inherit;
      pointer-events: none;
      position: relative;
      top: -1px;

      picture {
        height: ${({theme:t})=>t.sizes.titleBar.iconSize};
        margin-right: ${({theme:t})=>t.sizes.titleBar.iconMarginRight};
        width: ${({theme:t})=>t.sizes.titleBar.iconSize};
      }

      img,
      picture {
        pointer-events: all;
      }

      figcaption {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  nav {
    display: flex;

    button {
      border-left: ${ht};
      box-sizing: content-box;
      display: flex;
      place-content: center;
      place-items: center;
      width: ${({theme:t})=>t.sizes.titleBar.buttonWidth};

      svg {
        fill: ${({$foreground:t,theme:e})=>t?e.colors.titleBar.text:e.colors.titleBar.buttonInactive};
        margin: 0 1px 2px 0;
        width: ${({theme:t})=>t.sizes.titleBar.buttonIconWidth};
      }

      &.minimize {
        svg {
          margin-bottom: 1px;
          margin-right: 0;
        }
      }

      &:hover {
        background-color: ${({theme:t})=>t.colors.titleBar.backgroundHover};

        svg {
          fill: ${({theme:t})=>t.colors.titleBar.text};
        }

        &.close {
          background-color: ${({theme:t})=>t.colors.titleBar.closeHover};
          transition: background-color 0.25s ease;
        }
      }

      &:active {
        background-color: rgb(51, 51, 51);

        &.close {
          background-color: rgb(139, 10, 20);
        }
      }

      &:disabled {
        svg {
          fill: ${({$foreground:t})=>t?"rgb(50, 50, 50)":"rgb(60, 60, 60)"};
        }

        &:hover {
          background-color: inherit;
        }
      }
    }
  }
`,te=12,gt=(t,e=!1)=>{const s=P(),o=P(0);return{onClick:I(l=>{const r=()=>{l.stopPropagation(),t(l)},i=()=>{s.current&&(clearTimeout(s.current),s.current=void 0)},a=()=>{o.current>=te&&i(),s.current===void 0?(l.target.removeEventListener("pointermove",a),o.current=0):o.current+=1};e?r():s.current===void 0?(s.current=window.setTimeout(i,ot.DOUBLE_CLICK),l.target.addEventListener("pointermove",a,{passive:!0})):(i(),r())},[t,e])}},ee=j(nt)`
  user-select: none;
`,oe=({id:t})=>{const{windows:{[t]:e}}=D(),{allowResizing:s=!0,closing:o,componentWindow:n,hideMaximizeButton:l,hideMinimizeButton:r,hideTitlebarIcon:i,icon:a,titlebarIcon:c,title:u,maximized:g}=e||{},{foregroundId:v}=Q(),b=t===v,{onClose:p,onMaximize:A,onMinimize:m}=Ht(t),h=gt(p),x=gt(A),{menu:C,setMenu:y}=Mt(),R=Vt(t),k=P(0),S=P(),B=P(),E=I(d=>{const{x:M,y:Y}=(n==null?void 0:n.getBoundingClientRect())||{};Date.now()-k.current>=Bt&&S.current&&S.current.x===M&&S.current.y===Y&&R.onContextMenuCapture(Object.assign(d,{touches:B.current}))},[n,R]),z=I(({touches:d})=>{n&&(n.blur(),n.focus(X),k.current=Date.now(),S.current=n.getBoundingClientRect(),B.current=d)},[n]),w=_(()=>{if(!a&&!c)return!1;const d=c||a;if(typeof d=="string")return $(Tt,{alt:u,imgSize:16,src:d,...h});if(lt.isValidElement(d))return lt.cloneElement(d,{...h});if(typeof d=="function")return $(d,{...h})},[a,c,h,u]);return et(qt,{$foreground:b,className:vt.dragHandleClassName,onDragOver:ct,onDrop:ct,...R,children:[$(ee,{...!l&&s&&!o?x:{},onMouseDownCapture:({button:d})=>{d===0&&Object.keys(C).length>0&&y(Object.create(null))},onMouseUpCapture:()=>{n&&n!==document.activeElement&&n.focus(X)},onTouchEndCapture:E,onTouchStartCapture:z,children:et("figure",{children:[!i&&w!==!1&&$("picture",{children:w}),$("figcaption",{children:u})]})}),et("nav",{className:"cancel",children:[!r&&$(nt,{className:"minimize",onClick:()=>m(),...rt("Minimize"),children:$(Dt,{})}),!l&&$(nt,{className:"maximize",disabled:!s,onClick:A,...rt(g?"Restore Down":"Maximize"),children:g?$(Pt,{}):$(Nt,{})}),$(nt,{$short:l&&r,className:"close",onClick:p,...rt("Close"),children:$(Lt,{})})]})]})},ne=yt(oe),ie=(t,e)=>{const{foregroundId:s,prependToStack:o,setForegroundId:n,stackOrder:l=[]}=Q(),{events:r}=J(),{windows:{[t]:i}}=D(),{closing:a,componentWindow:c,minimized:u,taskbarEntry:g}=i||{},v=_(()=>l.length+(u?1:-l.indexOf(t))+1,[t,u,l]),b=I(A=>{var R;const{relatedTarget:m}=A,h=m,x=m===g,C=h&&((R=g==null?void 0:g.previousSibling)==null?void 0:R.contains(h)),y=h&&(c==null?void 0:c.contains(h));n(k=>k===t&&!x&&!y?(C?c==null||c.focus(X):r.emit(["event:windows/unfocus",`event:windows/unfocus:${t}`],t,A),C?k:""):k)},[e,c,t,n,g,r]),p=I(A=>{const{relatedTarget:m}=A||{};c!=null&&c.contains(document.activeElement)?(o(t),n(t)):(!m||document.activeElement===g)&&(c==null||c.focus(X))},[e,c,t,o,n,g]);return O(()=>{t===s&&r.emit(["event:windows/focus",`event:windows/focus:${t}`],t)},[s,t,r]),O(()=>{t===s&&p()},[s,t,p]),O(()=>{c&&!a&&!u&&n(t)},[a,c,t,u,n]),O(()=>{o(t),n(t)},[t,o,n]),_(()=>({onBlurCapture:b,onClickCapture:p,onFocusCapture:p,zIndex:v,...pt}),[p,b,v])},bt={height:"inherit",opacity:1,scale:1,width:"inherit"},zt={opacity:0,scale:.95},kt={...zt,height:"inherit",width:"inherit"},re={...kt,scale:1},se={opacity:1,scale:1},ce={opacity:0,scale:.3},ae=(t,e=!1)=>{const{windows:{[t]:s}={}}=D(),{closing:o,componentWindow:n,maximized:l,minimized:r,taskbarEntry:i,snap:a}=s||{},{WindowsViewArea:c,WindowsViewAreaSize:u}=q(),[g,v]=V(Object.create(null)),[b,p]=V(Object.create(null));V(Object.create(bt)),V({x:0,y:0});const[A,m]=V(!0),{events:h}=J(),x=P(null),C=I(()=>{if(!n||o)return{x:0,y:0};const{x:y=0,y:R=0}=n.getBoundingClientRect(),{x:k=0,y:S=0}=c?c.getBoundingClientRect():{x:0,y:0};return{x:-y+k,y:-R+S}},[c,o,n]);return O(()=>{if(!n||o)return;const y=C();v({...se,...c?N(c):u,x:y.x,y:y.y})},[o,C,n,l,c]),O(()=>{if(!i||!n||o)return;const{height:y=0,width:R=0,x:k=0,y:S=0}=i.getBoundingClientRect(),{height:B=0,width:E=0,x:z=0,y:w=0}=n.getBoundingClientRect(),d=Math.round(k-z-E/2+R/2),M=Math.round(S-w-B/2+y/2);d===0&&M===0||p({...ce,x:d,y:M})},[o,n,r,i]),L(()=>{l&&setTimeout(()=>{h.emit(["event:windows/resize",`event:windows/resize:${t}`],{maximized:!0,size:N(c)})},ot.WINDOW+150);const y=k=>{l&&(v(S=>({...S,...k})),setTimeout(()=>{h.emit(["event:windows/resize",`event:windows/resize:${t}`],{maximized:!0,size:k})},ot.WINDOW+150))},R=[h.on("event:elements/resize/windowsview",y)];return()=>{R.forEach(h.removeListenerByID)}},[t,l,c,h]),L(()=>(x.current&&clearTimeout(x.current),r?x.current=setTimeout(()=>{m(!1)},ot.WINDOW+150):m(!0),()=>{x.current&&clearTimeout(x.current)}),[r]),{animate:(r?"minimize":"")||(!o&&l?"maximize":"")||"active",exit:"exit",initial:"initial",transition:{duration:Ot.WINDOW,ease:[.05,.1,.7,.3]},variants:{active:bt,exit:zt,initial:e?re:kt,maximize:g,minimize:b}}},le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVR42mOgMRgF6enp/ynSDMMUaEZgsjST5RJsikk2AKc4bcAoAADI7y5FsB5j/QAAAABJRU5ErkJggg==",ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mOgARgF6enp/0kRZ8KvGMEnyQUwjMwn0xBMzWQZQlmA0h6MAgAuqCnfdOk/ZQAAAABJRU5ErkJggg==",de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPAD0ZBenr6fxge4ppHuiGEwSgAAGJiLkXUVlYDAAAAAElFTkSuQmCC",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAG0lEQVR42mPADkZBenr6fxgeZoYMV82Ug1EAAPiTLkWjutmQAAAAAElFTkSuQmCC",T={dark:{active:"rgb(166, 166, 166)",blendMode:"color-burn",buttonHover:"rgb(55, 55, 55)",thumb:"rgb(77, 77, 77)",thumbHover:"rgb(122, 122, 122)",track:"rgb(23, 23, 23)"},light:{active:"rgb(96, 96, 96)",blendMode:"color-dodge",buttonHover:"rgb(218, 218, 218)",thumb:"rgb(205, 205, 205)",thumbHover:"rgb(166, 166, 166)",track:"rgb(240, 240, 240)"}},ge=({size:t=Wt,verticalX:e=0,verticalY:s=0,scheme:o="dark",scrollbarGutter:n=!0}={})=>Et`
  overflow: auto;
  ${n&&"scrollbar-gutter: stable;"}

  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: ${T[o].thumb} ${T[o].track};
  }

  &::-webkit-scrollbar {
    height: ${t}px;
    width: ${t}px;
  }

  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    background-color: ${T[o].track};
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: ${T[o].thumb};
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-clip: padding-box;
    background-color: ${T[o].thumb};
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${T[o].thumbHover};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${T[o].active};
  }

  &::-webkit-scrollbar-button:single-button {
    background-clip: padding-box;
    background-color: ${T[o].track};
    background-position: center 4px;
    background-repeat: no-repeat;
    background-size: 10px;
    border: 1px solid ${T[o].track};
    display: block;
    height: ${t?`${t}px`:"initial"};

    &:hover {
      background-color: ${T[o].buttonHover};
    }

    &:active {
      background-color: ${T[o].active};
    }
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement,
  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position-x: ${e===0?"center":`${e}px`};
    background-position-y: ${s===0?"center":`${s}px`};
    background-size: 16px;
    border-bottom: 0;
    border-top: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    background-image: url(${le});
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-image: url(${ue});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement,
  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-position: center;
    background-size: 16px;
    border-left: 0;
    border-right: 0;
    image-rendering: pixelated;
  }

  &::-webkit-scrollbar-button:single-button:horizontal:decrement {
    background-image: url(${de});
  }

  &::-webkit-scrollbar-button:single-button:horizontal:increment {
    background-image: url(${he});
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement:active,
  &::-webkit-scrollbar-button:single-button:vertical:increment:active,
  &::-webkit-scrollbar-button:single-button:horizontal:decrement:active,
  &::-webkit-scrollbar-button:single-button:horizontal:increment:active {
    background-blend-mode: ${T[o].blendMode};
  }
`,be=j.div`
  ${ft}
  background-color: inherit;
  height: inherit;
  width: inherit;
`,we=j.div`
  ${ft}
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
`,pe=j.div`
  ${ge({scrollbarGutter:!1})}
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  overflow: auto;
`,Ce=({children:t,id:e})=>{const{linkElement:s,windows:{[e]:o}}=D(),{backgroundColor:n,Component:l,hideTitlebar:r,peekElement:i,maximized:a,snap:c}=o||{},{foregroundId:u}=Q(),g=e===u,{zIndex:v,...b}=ie(e),p=ae(e,a),A=I(h=>{l&&!i&&h&&s(e,"peekElement",h)},[l,e,s,i]);return $(Xt,{id:e,zIndex:v,children:$(Jt,{$showShadows:g&&!a&&!(c&&typeof c=="object"),$backgroundColor:n,$isForeground:g,...b,...p,"data-rd-type":"rd_window",children:$(be,{"data-rd-type":"rd_link_viewport_entry",ref:A,children:et(we,{"data-rd-type":"rd_window_wrapper",children:[!r&&$(ne,{id:e}),$(pe,{"data-rd-type":"rd_window_content",children:t})]})})})})};export{Ce as default};
