import{Z as st,$ as it,ai as ot,aA as b,a0 as at,a1 as ct,a4 as X,Y as l,aB as K,aC as lt,aD as ut,a7 as h,a3 as ft,ap as k,aE as ht,at as $,ab as P,aq as O,ag as gt}from"./index-BkeddzzV.js";import{S as dt}from"./index-SbywQySy.js";import{C as mt}from"./WindowActionIcons-bInO6eDg.js";import{b as pt}from"./useTitlebarContextMenu-BRWRnbNJ.js";const wt=st(it.div)`
  backdrop-filter: ${({theme:t})=>`blur(${t.sizes.taskbar.blur})`};
  background-color: ${({theme:t})=>t.colors.taskbar.background};
  border: ${({theme:t})=>`1px solid ${t.colors.taskbar.peekBorder}`};
  border-bottom: 0;
  bottom: ${ot}px;
  display: flex;
  overflow: hidden;
  place-content: center;
  place-items: flex-start;
  position: fixed;
  z-index: 1000;
  transform: ${({$offsetX:t})=>t?`translateX(${t}px)`:void 0};

  ${dt}:hover & {
    background-color: hsla(0, 0%, 25%, 85%);

    &:active {
      background-color: ${({theme:t})=>t.colors.taskbar.activeForeground};
    }
  }

  img {
    height: ${({theme:t})=>t.sizes.taskbar.entry.peekImage.height}px;
    margin: ${({theme:t})=>t.sizes.taskbar.entry.peekImage.margin}px;
    max-height: ${b}px;
    max-width: ${b}px;
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
    top: ${({theme:t})=>t.sizes.taskbar.entry.peekImage.height+t.sizes.taskbar.entry.peekImage.margin*2}px;
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
`,yt=(t=!1)=>{const{sizes:{taskbar:e}}=at();let r=e.entry.peekImage.height+e.entry.peekImage.margin*2;return t&&(r+=e.entry.peekControlsHeight),{animate:"active",exit:"initial",initial:"initial",transition:{duration:ct.WINDOW/3,ease:[.42,0,.58,1]},variants:{active:{height:r,opacity:1},initial:{height:0,opacity:0}}}};function bt(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const r=document.implementation.createHTMLDocument(),n=r.createElement("base"),s=r.createElement("a");return r.head.appendChild(n),r.body.appendChild(s),e&&(n.href=e),s.href=t,s.href}const xt=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function m(t){const e=[];for(let r=0,n=t.length;r<n;r++)e.push(t[r]);return e}function E(t,e){const n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function St(t){const e=E(t,"border-left-width"),r=E(t,"border-right-width");return t.clientWidth+e+r}function Et(t){const e=E(t,"border-top-width"),r=E(t,"border-bottom-width");return t.clientHeight+e+r}function Y(t,e={}){const r=e.width||St(t),n=e.height||Et(t);return{width:r,height:n}}function Ct(){let t,e;try{e=process}catch{}const r=e&&e.env?e.env.devicePixelRatio:null;return r&&(t=parseInt(r,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const f=16384;function Rt(t){(t.width>f||t.height>f)&&(t.width>f&&t.height>f?t.width>t.height?(t.height*=f/t.width,t.width=f):(t.width*=f/t.height,t.height=f):t.width>f?(t.height*=f/t.width,t.width=f):(t.width*=f/t.height,t.height=f))}function C(t){return new Promise((e,r)=>{const n=new Image;n.decode=()=>e(n),n.onload=()=>e(n),n.onerror=r,n.crossOrigin="anonymous",n.decoding="async",n.src=t})}async function kt(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function $t(t,e,r){const n="http://www.w3.org/2000/svg",s=document.createElementNS(n,"svg"),i=document.createElementNS(n,"foreignObject");return s.setAttribute("width",`${e}`),s.setAttribute("height",`${r}`),s.setAttribute("viewBox",`0 0 ${e} ${r}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),s.appendChild(i),i.appendChild(t),kt(s)}const u=(t,e)=>{if(t instanceof e)return!0;const r=Object.getPrototypeOf(t);return r===null?!1:r.constructor.name===e.name||u(r,e)};function Pt(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function It(t){return m(t).map(e=>{const r=t.getPropertyValue(e),n=t.getPropertyPriority(e);return`${e}: ${r}${n?" !important":""};`}).join(" ")}function Tt(t,e,r){const n=`.${t}:${e}`,s=r.cssText?Pt(r):It(r);return document.createTextNode(`${n}{${s}}`)}function j(t,e,r){const n=window.getComputedStyle(t,r),s=n.getPropertyValue("content");if(s===""||s==="none")return;const i=xt();try{e.className=`${e.className} ${i}`}catch{return}const o=document.createElement("style");o.appendChild(Tt(i,r,n)),e.appendChild(o)}function vt(t,e){j(t,e,":before"),j(t,e,":after")}const V="application/font-woff",U="image/jpeg",Lt={woff:V,woff2:V,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:U,jpeg:U,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function At(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function v(t){const e=At(t).toLowerCase();return Lt[e]||""}function Ft(t){return t.split(/,/)[1]}function T(t){return t.search(/^(data:)/)!==-1}function Dt(t,e){return`data:${e};base64,${t}`}async function J(t,e,r){const n=await fetch(t,e);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const s=await n.blob();return new Promise((i,o)=>{const a=new FileReader;a.onerror=o,a.onloadend=()=>{try{i(r({res:n,result:a.result}))}catch(c){o(c)}},a.readAsDataURL(s)})}const I={};function Wt(t,e,r){let n=t.replace(/\?.*/,"");return r&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),e?`[${e}]${n}`:n}async function L(t,e,r){const n=Wt(t,e,r.includeQueryParams);if(I[n]!=null)return I[n];r.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let s;try{const i=await J(t,r.fetchRequestInit,({res:o,result:a})=>(e||(e=o.headers.get("Content-Type")||""),Ft(a)));s=Dt(i,e)}catch(i){s=r.imagePlaceholder||"";let o=`Failed to fetch resource: ${t}`;i&&(o=typeof i=="string"?i:i.message),o&&console.warn(o)}return I[n]=s,s}async function Ht(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):C(e)}async function Mt(t,e){if(t.currentSrc){const i=document.createElement("canvas"),o=i.getContext("2d");i.width=t.clientWidth,i.height=t.clientHeight,o==null||o.drawImage(t,0,0,i.width,i.height);const a=i.toDataURL();return C(a)}const r=t.poster,n=v(r),s=await L(r,n,e);return C(s)}async function _t(t){var e;try{if(!((e=t==null?void 0:t.contentDocument)===null||e===void 0)&&e.body)return await R(t.contentDocument.body,{},!0)}catch{}return t.cloneNode(!1)}async function Ot(t,e){return u(t,HTMLCanvasElement)?Ht(t):u(t,HTMLVideoElement)?Mt(t,e):u(t,HTMLIFrameElement)?_t(t):t.cloneNode(!1)}const jt=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT";async function Vt(t,e,r){var n,s;let i=[];return jt(t)&&t.assignedNodes?i=m(t.assignedNodes()):u(t,HTMLIFrameElement)&&(!((n=t.contentDocument)===null||n===void 0)&&n.body)?i=m(t.contentDocument.body.childNodes):i=m(((s=t.shadowRoot)!==null&&s!==void 0?s:t).childNodes),i.length===0||u(t,HTMLVideoElement)||await i.reduce((o,a)=>o.then(()=>R(a,r)).then(c=>{c&&e.appendChild(c)}),Promise.resolve()),e}function Ut(t,e){const r=e.style;if(!r)return;const n=window.getComputedStyle(t);n.cssText?(r.cssText=n.cssText,r.transformOrigin=n.transformOrigin):m(n).forEach(s=>{let i=n.getPropertyValue(s);s==="font-size"&&i.endsWith("px")&&(i=`${Math.floor(parseFloat(i.substring(0,i.length-2)))-.1}px`),u(t,HTMLIFrameElement)&&s==="display"&&i==="inline"&&(i="block"),s==="d"&&e.getAttribute("d")&&(i=`path(${e.getAttribute("d")})`),r.setProperty(s,i,n.getPropertyPriority(s))})}function zt(t,e){u(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),u(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function Bt(t,e){if(u(t,HTMLSelectElement)){const r=e,n=Array.from(r.children).find(s=>t.value===s.getAttribute("value"));n&&n.setAttribute("selected","")}}function qt(t,e){return u(e,Element)&&(Ut(t,e),vt(t,e),zt(t,e),Bt(t,e)),e}async function Gt(t,e){const r=t.querySelectorAll?t.querySelectorAll("use"):[];if(r.length===0)return t;const n={};for(let i=0;i<r.length;i++){const a=r[i].getAttribute("xlink:href");if(a){const c=t.querySelector(a),d=document.querySelector(a);!c&&d&&!n[a]&&(n[a]=await R(d,e,!0))}}const s=Object.values(n);if(s.length){const i="http://www.w3.org/1999/xhtml",o=document.createElementNS(i,"svg");o.setAttribute("xmlns",i),o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.overflow="hidden",o.style.display="none";const a=document.createElementNS(i,"defs");o.appendChild(a);for(let c=0;c<s.length;c++)a.appendChild(s[c]);t.appendChild(o)}return t}async function R(t,e,r){return!r&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(n=>Ot(n,e)).then(n=>Vt(t,n,e)).then(n=>qt(t,n)).then(n=>Gt(n,e))}const Q=/url\((['"]?)([^'"]+?)\1\)/g,Xt=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Kt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Yt(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function Jt(t){const e=[];return t.replace(Q,(r,n,s)=>(e.push(s),r)),e.filter(r=>!T(r))}async function Qt(t,e,r,n,s){try{const i=r?bt(e,r):e,o=v(e);let a;return s||(a=await L(i,o,n)),t.replace(Yt(e),`$1${a}$3`)}catch{}return t}function Zt(t,{preferredFontFormat:e}){return e?t.replace(Kt,r=>{for(;;){const[n,,s]=Xt.exec(r)||[];if(!s)return"";if(s===e)return`src: ${n};`}}):t}function Z(t){return t.search(Q)!==-1}async function N(t,e,r){if(!Z(t))return t;const n=Zt(t,r);return Jt(n).reduce((i,o)=>i.then(a=>Qt(a,o,e,r)),Promise.resolve(n))}async function S(t,e,r){var n;const s=(n=e.style)===null||n===void 0?void 0:n.getPropertyValue(t);if(s){const i=await N(s,null,r);return e.style.setProperty(t,i,e.style.getPropertyPriority(t)),!0}return!1}async function Nt(t,e){await S("background",t,e)||await S("background-image",t,e),await S("mask",t,e)||await S("mask-image",t,e)}async function te(t,e){const r=u(t,HTMLImageElement);if(!(r&&!T(t.src))&&!(u(t,SVGImageElement)&&!T(t.href.baseVal)))return;const n=r?t.src:t.href.baseVal,s=await L(n,v(n),e);await new Promise((i,o)=>{t.onload=i,t.onerror=o;const a=t;a.decode&&(a.decode=i),a.loading==="lazy"&&(a.loading="eager"),r?(t.srcset="",t.src=s):t.href.baseVal=s})}async function ee(t,e){const n=m(t.childNodes).map(s=>tt(s,e));await Promise.all(n).then(()=>t)}async function tt(t,e){u(t,Element)&&(await Nt(t,e),await te(t,e),await ee(t,e))}function ne(t,e){const{style:r}=t;e.backgroundColor&&(r.backgroundColor=e.backgroundColor),e.width&&(r.width=`${e.width}px`),e.height&&(r.height=`${e.height}px`);const n=e.style;return n!=null&&Object.keys(n).forEach(s=>{r[s]=n[s]}),t}const z={};async function B(t){let e=z[t];if(e!=null)return e;const n=await(await fetch(t)).text();return e={url:t,cssText:n},z[t]=e,e}async function q(t,e){let r=t.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,i=(r.match(/url\([^)]+\)/g)||[]).map(async o=>{let a=o.replace(n,"$1");return a.startsWith("https://")||(a=new URL(a,t.url).href),J(a,e.fetchRequestInit,({result:c})=>(r=r.replace(o,`url(${c})`),[o,c]))});return Promise.all(i).then(()=>r)}function G(t){if(t==null)return[];const e=[],r=/(\/\*[\s\S]*?\*\/)/gi;let n=t.replace(r,"");const s=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=s.exec(n);if(c===null)break;e.push(c[0])}n=n.replace(s,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",a=new RegExp(o,"gi");for(;;){let c=i.exec(n);if(c===null){if(c=a.exec(n),c===null)break;i.lastIndex=a.lastIndex}else a.lastIndex=i.lastIndex;e.push(c[0])}return e}async function re(t,e){const r=[],n=[];return t.forEach(s=>{if("cssRules"in s)try{m(s.cssRules||[]).forEach((i,o)=>{if(i.type===CSSRule.IMPORT_RULE){let a=o+1;const c=i.href,d=B(c).then(g=>q(g,e)).then(g=>G(g).forEach(p=>{try{s.insertRule(p,p.startsWith("@import")?a+=1:s.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:p,error:w})}})).catch(g=>{console.error("Error loading remote css",g.toString())});n.push(d)}})}catch(i){const o=t.find(a=>a.href==null)||document.styleSheets[0];s.href!=null&&n.push(B(s.href).then(a=>q(a,e)).then(a=>G(a).forEach(c=>{o.insertRule(c,s.cssRules.length)})).catch(a=>{console.error("Error loading remote stylesheet",a)})),console.error("Error inlining remote css file",i)}}),Promise.all(n).then(()=>(t.forEach(s=>{if("cssRules"in s)try{m(s.cssRules||[]).forEach(i=>{r.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${s.href}`,i)}}),r))}function se(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Z(e.style.getPropertyValue("src")))}async function ie(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const r=m(t.ownerDocument.styleSheets),n=await re(r,e);return se(n)}async function oe(t,e){const r=await ie(t,e);return(await Promise.all(r.map(s=>{const i=s.parentStyleSheet?s.parentStyleSheet.href:null;return N(s.cssText,i,e)}))).join(`
`)}async function ae(t,e){const r=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await oe(t,e);if(r){const n=document.createElement("style"),s=document.createTextNode(r);n.appendChild(s),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}}async function ce(t,e={}){const{width:r,height:n}=Y(t,e),s=await R(t,e,!0);return await ae(s,e),await tt(s,e),ne(s,e),await $t(s,r,n)}async function le(t,e={}){const{width:r,height:n}=Y(t,e),s=await ce(t,e),i=await C(s),o=document.createElement("canvas"),a=o.getContext("2d"),c=e.pixelRatio||Ct(),d=e.canvasWidth||r,g=e.canvasHeight||n;return o.width=d*c,o.height=g*c,e.skipAutoScale||Rt(o),o.style.width=`${d}`,o.style.height=`${g}`,e.backgroundColor&&(a.fillStyle=e.backgroundColor,a.fillRect(0,0,o.width,o.height)),a.drawImage(i,0,0,o.width,o.height),o}const ue=15,et=async(t,e,r)=>{if(!e.current)return;const n=()=>window.requestAnimationFrame(()=>et(t,e,r));let s;try{const i=t.tagName==="VIDEO"?{margin:"0",padding:"0"}:{};s=await le(t,{...t.clientWidth>b&&{canvasHeight:Math.round(b/t.clientWidth*t.clientHeight),canvasWidth:b},filter:o=>!(o instanceof HTMLSourceElement),skipAutoScale:!0,style:{inset:"0",...i}})}catch{}if(s&&s.width>0&&s.height>0)if(lt(s)){const i=new Image,o=s.toDataURL();i.addEventListener("load",()=>{e.current&&(r(o),window.setTimeout(n,K/ue))},ut),i.decoding="async",i.src=o}else n()},fe=t=>{const{windows:{[t]:e}}=X(),{peekElement:r,componentWindow:n}=e||{},s=l.useRef(),[i,o]=l.useState(""),a=l.useRef(!0);return l.useEffect(()=>{const c=r||n;return!s.current&&c&&(s.current=window.setTimeout(()=>window.requestAnimationFrame(()=>et(c,a,o)),document.querySelector(".peekWindow")?0:K/2),a.current=!0),()=>{s.current&&(clearTimeout(s.current),s.current=void 0),a.current=!1}},[n,r]),i},he=l.memo(()=>h.jsx("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M8 29.328V2.672h2.672v26.656H8zM21.328 2.672H24v26.656h-2.672V2.672z"})})),ge=l.memo(()=>h.jsx("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("path",{d:"M28 16 8 30V2z"})})),de=({id:t})=>{const{minimize:e,windows:{[t]:r}}=X(),{pause:n,paused:s,play:i,minimized:o=!1,title:a=t}=r||{},{setForegroundId:c}=ft(),{onClose:d}=pt(t),[g,p]=l.useState(0),w=fe(t),x=l.useMemo(()=>!!(i&&n&&s),[n,s,i]),nt=yt(x),A=l.useRef(null),rt=()=>{o&&e(t),c(t)},[F,D]=l.useState(!1),W=l.useRef(!1);return l.useEffect(()=>{x&&s&&!W.current&&(W.current=!0,D(s(D)))},[s,x]),l.useLayoutEffect(()=>{var y;if(w){const{left:H=0,right:M=0}=((y=A.current)==null?void 0:y.getBoundingClientRect())||{},_=gt();H<0?p(Math.abs(H)):M>_&&p(_-M)}},[w]),w?h.jsxs(wt,{ref:A,$offsetX:g,className:"peekWindow",onClick:rt,...nt,...k,children:[h.jsx("img",{alt:a,decoding:"async",loading:"eager",src:w,...ht}),h.jsx($,{className:"close",onClick:d,...P("Close"),children:h.jsx(mt,{})}),x&&h.jsxs("div",{className:"controls",children:[F&&h.jsx($,{onClick:y=>{O(y),i==null||i()},...P("Play"),...k,children:h.jsx(ge,{})}),!F&&h.jsx($,{onClick:y=>{O(y),n==null||n()},...P("Pause"),...k,children:h.jsx(he,{})})]})]}):null},be=l.memo(de);export{be as default};
