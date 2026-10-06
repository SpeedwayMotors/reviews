import{r as n,j as t}from"./index-CEam0Orw.js";import{i as f,h as g}from"./imageDelivery-DIsWBznj.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),h=(...e)=>e.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=n.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:i="",children:o,iconNode:c,...d},l)=>n.createElement("svg",{ref:l,...j,width:r,height:r,stroke:e,strokeWidth:a?Number(s)*24/Number(r):s,className:h("lucide",i),...d},[...c.map(([m,p])=>n.createElement(m,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,r)=>{const s=n.forwardRef(({className:a,...i},o)=>n.createElement(A,{ref:o,iconNode:r,className:h(`lucide-${x(e)}`,a),...i}));return s.displayName=`${e}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=u("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=u("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function y({src:e,alt:r,label:s,hero:a=!1,position:i,scale:o}){const[c,d]=n.useState(!1),l=n.useRef(null);return n.useEffect(()=>{var m;(m=l.current)!=null&&m.complete&&l.current.naturalWidth===0&&d(!0)},[e]),e&&!c?t.jsx("img",{ref:l,...f(e,a?g:void 0),alt:r,decoding:"async",loading:a?"eager":"lazy",style:{...i?{objectPosition:i}:{},...o?{transform:`scale(${o})`,transformOrigin:i||"50% 50%"}:{}},onError:()=>d(!0)}):t.jsxs("div",{className:`media-placeholder ${a?"hero-placeholder":""}`,role:"img","aria-label":`${s} — image placeholder`,children:[t.jsx("span",{className:"cross cross-one",children:"+"}),t.jsx("span",{className:"cross cross-two",children:"+"}),t.jsxs("div",{className:"placeholder-center",children:[t.jsx("span",{className:"placeholder-mark",children:t.jsx(w,{size:a?38:28,strokeWidth:1})}),t.jsx("span",{children:s}),t.jsx("small",{children:c?"IMAGE UNAVAILABLE":"IMAGE TO COME"})]}),t.jsx("span",{className:"media-index",children:"SEMA / 26"})]})}export{v as A,y as M,u as c};
