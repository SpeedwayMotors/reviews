import{r as f,j as l,d as y,e as j}from"./index-Zmyn2UOi.js";import{d as v,f as w,C as N}from"./productDescription-SAfCjHCF.js";import{u as b,c as M,P as C}from"./catalogPresentation-BR5KGJ7A.js";import{useProduct as L}from"./index-BKMGz1vJ.js";import{X as S}from"./x-WaUT9VG1.js";import{M as B}from"./Media-CMXH2f4m.js";import{i as P}from"./imageDelivery-BXh5m6YH.js";function A({productId:e,variantId:t,imageFit:o}){const{product:i,isLoading:c,error:n}=L(e,{country:"US",currency:"USD"});if(c)return l.jsx("p",{role:"status",children:"Loading product…"});const s=i&&M(i,t);if(n||!s)return l.jsx("p",{role:"status",children:"Product details unavailable."});const a=v(i.description,e).slice(0,3),d=a.length?"":w(i.description);return l.jsxs("div",{className:"product-feature-content",children:[l.jsxs("div",{className:"product-feature-body",children:[l.jsx("div",{className:`product-feature-image${o==="portrait"?" is-portrait":""}`,children:s.src?l.jsx("img",{src:s.src,alt:s.name}):l.jsx("span",{children:"Image unavailable"})}),l.jsxs("div",{className:"product-feature-copy",children:[l.jsx("h3",{children:y[e]||s.name}),a.length>0&&l.jsx("ul",{className:"product-feature-bullets",children:a.map((p,u)=>l.jsx("li",{children:p},u))}),d&&l.jsx("p",{children:d})]})]}),l.jsxs("div",{className:"product-feature-purchase purchase-hover",children:[l.jsxs("p",{className:"product-feature-price",children:[s.price,s.unit&&l.jsxs("span",{children:["/",s.unit]})]}),l.jsx(C,{href:s.href,name:s.name,variant:"compact"})]})]})}function E({productId:e,variantId:t,imageFit:o,label:i,open:c,onOpenChange:n}){const s=f.useRef(null),{active:a}=b(s),d=f.useRef(null),p=f.useRef(null),u=f.useId();function x(){n(!1),requestAnimationFrame(()=>{var r;return(r=d.current)==null?void 0:r.focus({preventScroll:!0})})}return f.useEffect(()=>{if(!c)return;let r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{var g;return(g=p.current)==null?void 0:g.focus({preventScroll:!0})})});const h=g=>{var m;(m=s.current)!=null&&m.contains(g.target)||n(!1)};return document.addEventListener("pointerdown",h),()=>{cancelAnimationFrame(r),document.removeEventListener("pointerdown",h)}},[c,n]),l.jsxs("div",{className:`product-hotspot${c?" is-open":""}`,ref:s,style:{"--hotspot-play-state":a?"running":"paused"},onBlur:r=>{r.relatedTarget&&!r.currentTarget.contains(r.relatedTarget)&&n(!1)},onKeyDown:r=>{r.key==="Escape"&&c&&(r.stopPropagation(),x())},children:[l.jsx("button",{ref:d,className:"build-hotspot","aria-label":`About ${i}`,"aria-expanded":c,"aria-controls":u,tabIndex:c?-1:0,onClick:()=>n(!0)}),l.jsxs("div",{id:u,className:"product-hotspot-panel",onTransitionEnd:r=>{var h;c&&r.target===r.currentTarget&&r.propertyName==="opacity"&&document.activeElement===document.body&&((h=p.current)==null||h.focus({preventScroll:!0}))},role:"region","aria-label":`${i} product feature`,"aria-hidden":!c,ref:r=>{r&&(r.inert=!c)},children:[l.jsx("button",{ref:p,type:"button",className:"build-close product-hotspot-close","aria-label":"Close product feature",onClick:x,children:l.jsx(S,{size:14})}),l.jsx("div",{className:"product-feature-scroll",children:c&&l.jsx(A,{productId:e,variantId:t,imageFit:o})})]})]})}const I={semaGray:{viewBox:"-140 180 620 190",markup:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-140 180 620 190">

<g>
	<path fill="#98969d" d="M-95.1,312c8.8,2.2,23.3,3.1,43.8,3.1c21,0,36.3-0.9,45.8-2.9c11.7-2.6,18.6-7.1,21-14.1
		c1.6-5,3.4-9.8,4.9-14.8c1.8-4.8,2.6-8.8,2.6-11.9c0-8.6-7-16.7-21.2-24.3l-38-20.8c-1.1-0.7-1.6-1-3.2-2.2c-1.2-1-2.1-1.9-2.3-2.2
		c-0.4-0.6-0.5-1.3,0-2.7c0.8-3.1,1.6-6.5,2.3-9.5c1.6-5,3.6-7.9,6-8.6c3.6-1.2,10.2-2.3,19.6-2.3c-1.8,0,3.2-0.4,12.6,0.2
		c3.1,0.2,3.8,0.9,3.8,1.8c0,0.2-1,3.3-1,3.5l-9.1,27.7h44l8.5-26.7c0.5-1.4,0.8-2.9,0.8-4.1c0-6.4-4.7-11-14.2-13.1
		c-8-1.9-23-3.1-45-3.1c-22.5,0-38.1,1-46.9,2.9c-9.1,1.9-15,5.5-18.4,11.2c-0.8,1.2-2.9,7.4-6.5,18.4c-0.3,0.9-0.5,2.1-0.5,3.1
		c0,6.9,7,14.1,21,22.2l30.5,17.2c9.1,4.1,13.7,8.1,13.7,11.9c0,0.7-0.3,1.4-0.5,2.4c-1,3.8-2.1,7.9-3.1,11.7
		c-1.8,6-3.4,11.2-4.7,12.6c-2.3,2.4-10.4,3.7-22,3c0,0-12.6,0.2-12.6-5.4c0,0,6.1-24.9,6.9-31.3h-44l-9.6,29.8
		c-0.3,1.4-0.5,2.6-0.5,3.8C-110.6,304.9-105.5,309.4-95.1,312"/>
	<polygon fill="#98969d" points="120.5,313.9 125.4,298.7 71,298.7 85.2,254.6 132.6,254.6 137.5,239.3 89.9,239.3 102.1,201.6 
		153.3,201.6 158.2,186.4 63,186.4 22.1,313.9 	"/>
	<polygon fill="#98969d" points="172.3,313.9 191.5,244.3 208.8,298.4 226.7,298.4 275.6,247.6 251.1,313.9 293.7,313.9 334.7,186.4 
		298.9,186.4 228,260.7 204.5,186.4 169.5,186.4 128.6,313.9 	"/>
	<path fill="#98969d" d="M454.1,188.2c-7.8-2-23.1-2.9-45-2.9c-21.5,0-36.5,1.2-45.3,2.9c-11.6,2.4-18.7,7.2-21,14.3l-35.7,111.6h44
		l19.2-59.4h38.1l-18.9,59.4h44l34.7-108.5c0.5-1.4,0.5-2.9,0.5-4C468.6,195.1,464,190.6,454.1,188.2 M413.1,239.3h-38.3l11.4-35.1
		c1.1-3.3,8.5-5,22-5c0,0,12.6-0.3,17.1,1.9L413.1,239.3z"/>
	<polygon fill="#98969d" points="138.1,324.5 124.6,363.6 132.7,363.6 145.8,324.5 	"/>
	<polygon fill="#98969d" points="121.1,324.5 107.5,363.6 115.6,363.6 128.8,324.5 	"/>
	<polygon fill="#98969d" points="104,324.5 90.5,363.6 98.6,363.6 111.7,324.5 	"/>
	<polygon fill="#98969d" points="86.9,324.5 73.4,363.6 81.5,363.6 94.6,324.5 	"/>
	<polygon fill="#98969d" points="69.9,324.5 56.3,363.6 64.4,363.6 77.6,324.5 	"/>
	<polygon fill="#98969d" points="52.8,324.5 39.3,363.6 47.4,363.6 60.5,324.5 	"/>
	<polygon fill="#98969d" points="35.7,324.5 22.2,363.6 30.3,363.6 43.5,324.5 	"/>
	<polygon fill="#98969d" points="18.7,324.5 5.1,363.6 13.2,363.6 26.4,324.5 	"/>
	<polygon fill="#98969d" points="1.6,324.5 -11.9,363.6 -3.8,363.6 9.3,324.5 	"/>
	<polygon fill="#98969d" points="-15.4,324.5 -29,363.6 -20.9,363.6 -7.7,324.5 	"/>
	<polygon fill="#98969d" points="-32.5,324.5 -46,363.6 -38,363.6 -24.8,324.5 	"/>
	<polygon fill="#98969d" points="-49.6,324.5 -63.1,363.6 -55,363.6 -41.9,324.5 	"/>
	<polygon fill="#98969d" points="-66.6,324.5 -80.2,363.6 -72.1,363.6 -58.9,324.5 	"/>
	<polygon fill="#98969d" points="-83.7,324.5 -97.2,363.6 -89.1,363.6 -76,324.5 	"/>
	<polygon fill="#98969d" points="-100.8,324.5 -114.3,363.6 -106.2,363.6 -93.1,324.5 	"/>
	<polygon fill="#98969d" points="-117.8,324.5 -131.4,363.6 -123.3,363.6 -110.1,324.5 	"/>
	<path fill="#98969d" d="M313.5,339.9h-7.9c-8.1,0-11.1,0.6-12.4,4l-1.1,2.8c-1.2,3.3,1.7,3.9,9.6,3.9h7.9c7.9,0,11.1-0.6,12.3-3.9
		l1.1-2.9C324.2,340.5,321.4,339.9,313.5,339.9"/>
	<path fill="#98969d" d="M157.1,324.5l-13.6,39.6h273.7l12.5-39.6H157.1z M215.2,340.3c-0.1,0.3-0.3,0.7-0.5,1.1h-12c0,0,0,0,0-0.1
		c0.5-1.4-0.6-2-3.4-2h-14.3c-3.9,0-5.9,0.2-6.5,1.6c-0.5,1.3,0.9,1.6,4.2,1.7l20.3,0.2c9.3,0.1,12,1.9,10.3,6.7
		c-1,2.6-2.5,4.1-6.5,5.3c-2.8,0.8-7,1-13,1h-16.6c-12.6,0-16.7-1-15.1-5.4c0.1-0.2,0.3-0.8,0.8-1.6h12.2c0,0.1-0.1,0.3-0.1,0.4
		c-0.6,1.7,0.8,2,5.1,2h15.6c3,0,4.4-0.5,4.9-1.7c0.6-1.5-1.3-1.7-5.3-1.8l-19.4-0.3c-9.4-0.1-12-1.4-10.2-6.1
		c0.8-2.2,2.1-3.7,4.6-4.8c3.5-1.4,8-1.6,14.6-1.6h19C213.2,334.8,216.7,336.3,215.2,340.3 M268.8,355.5h-12.5l3-8h-25.5l-2.9,8
		h-12.4L226,335h12.4l-2.7,7.5h25.4l2.8-7.5h12.5L268.8,355.5z M336.1,342.4l-2.1,5.7c-1.1,3-3.1,5-6.6,6.2c-3.8,1.3-9,1.4-16.4,1.4
		h-14.6c-7.3,0-12.3-0.1-15.3-1.4c-2.8-1.2-3.3-3.1-2.2-6.1l2-5.6c1.2-3.2,3-5.2,6.8-6.5c3.8-1.3,8.9-1.5,16.3-1.5h14.6
		c7.4,0,12.5,0.2,15.3,1.5C336.6,337.4,337.2,339.4,336.1,342.4 M395.3,355.5h-14l-4.2-14.1l-14.7,14.1h-14.2l-5.5-20.5H355l3,14.6
		l15.8-14.6h11.4l4.5,14.6L404,335h12.4L395.3,355.5z"/>
</g>
</svg>`},semaWhite:{viewBox:"-140 180 620 190",markup:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-140 180 620 190">

<g>
	<path fill="#ffffff" d="M-95.1,312c8.8,2.2,23.3,3.1,43.8,3.1c21,0,36.3-0.9,45.8-2.9c11.7-2.6,18.6-7.1,21-14.1
		c1.6-5,3.4-9.8,4.9-14.8c1.8-4.8,2.6-8.8,2.6-11.9c0-8.6-7-16.7-21.2-24.3l-38-20.8c-1.1-0.7-1.6-1-3.2-2.2c-1.2-1-2.1-1.9-2.3-2.2
		c-0.4-0.6-0.5-1.3,0-2.7c0.8-3.1,1.6-6.5,2.3-9.5c1.6-5,3.6-7.9,6-8.6c3.6-1.2,10.2-2.3,19.6-2.3c-1.8,0,3.2-0.4,12.6,0.2
		c3.1,0.2,3.8,0.9,3.8,1.8c0,0.2-1,3.3-1,3.5l-9.1,27.7h44l8.5-26.7c0.5-1.4,0.8-2.9,0.8-4.1c0-6.4-4.7-11-14.2-13.1
		c-8-1.9-23-3.1-45-3.1c-22.5,0-38.1,1-46.9,2.9c-9.1,1.9-15,5.5-18.4,11.2c-0.8,1.2-2.9,7.4-6.5,18.4c-0.3,0.9-0.5,2.1-0.5,3.1
		c0,6.9,7,14.1,21,22.2l30.5,17.2c9.1,4.1,13.7,8.1,13.7,11.9c0,0.7-0.3,1.4-0.5,2.4c-1,3.8-2.1,7.9-3.1,11.7
		c-1.8,6-3.4,11.2-4.7,12.6c-2.3,2.4-10.4,3.7-22,3c0,0-12.6,0.2-12.6-5.4c0,0,6.1-24.9,6.9-31.3h-44l-9.6,29.8
		c-0.3,1.4-0.5,2.6-0.5,3.8C-110.6,304.9-105.5,309.4-95.1,312"/>
	<polygon fill="#ffffff" points="120.5,313.9 125.4,298.7 71,298.7 85.2,254.6 132.6,254.6 137.5,239.3 89.9,239.3 102.1,201.6 
		153.3,201.6 158.2,186.4 63,186.4 22.1,313.9 	"/>
	<polygon fill="#ffffff" points="172.3,313.9 191.5,244.3 208.8,298.4 226.7,298.4 275.6,247.6 251.1,313.9 293.7,313.9 334.7,186.4 
		298.9,186.4 228,260.7 204.5,186.4 169.5,186.4 128.6,313.9 	"/>
	<path fill="#ffffff" d="M454.1,188.2c-7.8-2-23.1-2.9-45-2.9c-21.5,0-36.5,1.2-45.3,2.9c-11.6,2.4-18.7,7.2-21,14.3l-35.7,111.6h44
		l19.2-59.4h38.1l-18.9,59.4h44l34.7-108.5c0.5-1.4,0.5-2.9,0.5-4C468.6,195.1,464,190.6,454.1,188.2 M413.1,239.3h-38.3l11.4-35.1
		c1.1-3.3,8.5-5,22-5c0,0,12.6-0.3,17.1,1.9L413.1,239.3z"/>
	<polygon fill="#ffffff" points="138.1,324.5 124.6,363.6 132.7,363.6 145.8,324.5 	"/>
	<polygon fill="#ffffff" points="121.1,324.5 107.5,363.6 115.6,363.6 128.8,324.5 	"/>
	<polygon fill="#ffffff" points="104,324.5 90.5,363.6 98.6,363.6 111.7,324.5 	"/>
	<polygon fill="#ffffff" points="86.9,324.5 73.4,363.6 81.5,363.6 94.6,324.5 	"/>
	<polygon fill="#ffffff" points="69.9,324.5 56.3,363.6 64.4,363.6 77.6,324.5 	"/>
	<polygon fill="#ffffff" points="52.8,324.5 39.3,363.6 47.4,363.6 60.5,324.5 	"/>
	<polygon fill="#ffffff" points="35.7,324.5 22.2,363.6 30.3,363.6 43.5,324.5 	"/>
	<polygon fill="#ffffff" points="18.7,324.5 5.1,363.6 13.2,363.6 26.4,324.5 	"/>
	<polygon fill="#ffffff" points="1.6,324.5 -11.9,363.6 -3.8,363.6 9.3,324.5 	"/>
	<polygon fill="#ffffff" points="-15.4,324.5 -29,363.6 -20.9,363.6 -7.7,324.5 	"/>
	<polygon fill="#ffffff" points="-32.5,324.5 -46,363.6 -38,363.6 -24.8,324.5 	"/>
	<polygon fill="#ffffff" points="-49.6,324.5 -63.1,363.6 -55,363.6 -41.9,324.5 	"/>
	<polygon fill="#ffffff" points="-66.6,324.5 -80.2,363.6 -72.1,363.6 -58.9,324.5 	"/>
	<polygon fill="#ffffff" points="-83.7,324.5 -97.2,363.6 -89.1,363.6 -76,324.5 	"/>
	<polygon fill="#ffffff" points="-100.8,324.5 -114.3,363.6 -106.2,363.6 -93.1,324.5 	"/>
	<polygon fill="#ffffff" points="-117.8,324.5 -131.4,363.6 -123.3,363.6 -110.1,324.5 	"/>
	<path fill="#ffffff" d="M313.5,339.9h-7.9c-8.1,0-11.1,0.6-12.4,4l-1.1,2.8c-1.2,3.3,1.7,3.9,9.6,3.9h7.9c7.9,0,11.1-0.6,12.3-3.9
		l1.1-2.9C324.2,340.5,321.4,339.9,313.5,339.9"/>
	<path fill="#ffffff" d="M157.1,324.5l-13.6,39.6h273.7l12.5-39.6H157.1z M215.2,340.3c-0.1,0.3-0.3,0.7-0.5,1.1h-12c0,0,0,0,0-0.1
		c0.5-1.4-0.6-2-3.4-2h-14.3c-3.9,0-5.9,0.2-6.5,1.6c-0.5,1.3,0.9,1.6,4.2,1.7l20.3,0.2c9.3,0.1,12,1.9,10.3,6.7
		c-1,2.6-2.5,4.1-6.5,5.3c-2.8,0.8-7,1-13,1h-16.6c-12.6,0-16.7-1-15.1-5.4c0.1-0.2,0.3-0.8,0.8-1.6h12.2c0,0.1-0.1,0.3-0.1,0.4
		c-0.6,1.7,0.8,2,5.1,2h15.6c3,0,4.4-0.5,4.9-1.7c0.6-1.5-1.3-1.7-5.3-1.8l-19.4-0.3c-9.4-0.1-12-1.4-10.2-6.1
		c0.8-2.2,2.1-3.7,4.6-4.8c3.5-1.4,8-1.6,14.6-1.6h19C213.2,334.8,216.7,336.3,215.2,340.3 M268.8,355.5h-12.5l3-8h-25.5l-2.9,8
		h-12.4L226,335h12.4l-2.7,7.5h25.4l2.8-7.5h12.5L268.8,355.5z M336.1,342.4l-2.1,5.7c-1.1,3-3.1,5-6.6,6.2c-3.8,1.3-9,1.4-16.4,1.4
		h-14.6c-7.3,0-12.3-0.1-15.3-1.4c-2.8-1.2-3.3-3.1-2.2-6.1l2-5.6c1.2-3.2,3-5.2,6.8-6.5c3.8-1.3,8.9-1.5,16.3-1.5h14.6
		c7.4,0,12.5,0.2,15.3,1.5C336.6,337.4,337.2,339.4,336.1,342.4 M395.3,355.5h-14l-4.2-14.1l-14.7,14.1h-14.2l-5.5-20.5H355l3,14.6
		l15.8-14.6h11.4l4.5,14.6L404,335h12.4L395.3,355.5z"/>
</g>
</svg>`},speedwayWheel:{viewBox:"0 0 500 500",markup:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><defs></defs><g><g><path fill="#460C69" d="M362.75,348.25c-.78-1.81-2-3.19-3.63-4.13-1.62-.91-3.62-1.38-5.97-1.38s-4.41.47-6.03,1.38c-1.63.94-2.84,2.31-3.63,4.13-.34.75-.56,1.5-.72,2.31s-.22,1.78-.22,2.87.06,2,.22,2.81c.12.81.37,1.56.72,2.31.81,1.81,2.03,3.19,3.66,4.13,1.59.94,3.63,1.41,6,1.41s4.34-.47,5.94-1.41c1.59-.94,2.84-2.31,3.66-4.13.34-.75.56-1.53.75-2.34.16-.81.25-1.75.25-2.78s-.06-2.03-.25-2.84c-.16-.81-.41-1.63-.75-2.34ZM358.87,355.25v.06c.34.63.53,1.41.53,2.34v3.59h-2.78v-3.28c0-1.03-.25-1.78-.75-2.22s-1.34-.66-2.53-.66h-3.47v6.12h-2.81v-15.53h6.75c2.03,0,3.5.34,4.47,1.09.94.72,1.44,1.84,1.44,3.38,0,1-.22,1.78-.62,2.41-.41.63-1.03,1.06-1.91,1.34.78.28,1.34.75,1.69,1.34Z"/><path fill="#460C69" d="M353.28,348h-3.41v4.81h3.34c1.25,0,2.16-.22,2.75-.59s.91-1.03.91-1.87-.28-1.44-.84-1.78c-.56-.37-1.47-.56-2.75-.56Z"/><path fill="#460C69" d="M250,0C111.93,0,0,111.93,0,250s111.93,250,250,250,250-111.93,250-250S388.07,0,250,0ZM262.81,474.69h-.63c-1.87.31-3.44.31-5,.31h-5.63c-107.19,0-197.5-75.94-219.69-176.87h33.13c17.5,91.56,94.37,160.62,187.19,160.62h4.69c4.38,0,8.75-.31,12.81-.63h.31c106.56-9.38,190.62-99.37,190.62-208.12,0-58.12-24.37-111.56-63.13-149.37-2.5,5.94-4.69,12.19-7.19,18.44-29.38-30.94-68.44-52.19-112.81-58.12h-.63c-.94,0-1.88-.31-2.81-.31s-1.56-.31-2.5-.31h-.94c-5.63-.63-12.19-.94-18.13-.94h-.62c-105,0-190.62,85.63-190.62,190.62v9.38c0,3.12.31,5.62.31,8.44H27.5c-.31-5.62-.63,10-.63-17.5s4.69-53.44,14.06-77.19c2.5-8.44,6.56-16.88,10.62-25,1.56-3.44,3.12-6.56,5-9.69,3.75-5.94,7.81-12.5,11.87-18.12.94-1.56,2.19-3.12,3.12-4.38,2.19-2.81,4.38-5.62,6.56-8.44,5.63-6.88,11.88-13.75,18.44-19.69,40.31-38.75,94.69-62.19,155-62.19h13.44c.94.31,2.19.31,3.12.31.94.31,1.56.31,2.5.31s1.87.31,2.81.31c.63,0,1.56.31,2.5.31s1.87.31,2.81.31,1.88.31,2.81.31,1.87.31,2.81.31,1.87.31,2.81.31c.94.31,1.88.31,2.5,0,.94.31,1.88.31,2.81.63.94.31,1.56.63,2.5.63.94.31,1.88.31,2.81.62.94.31,1.87.31,2.5.63.94,0,1.88.31,2.81.63s1.56.31,2.81.63c.94,0,1.88.31,2.81.63.94.31,1.56.31,2.19.62,1.25.31,2.19.63,3.12.94.63.31,1.25.31,1.87.62.94.31,2.19.63,3.12.94.63.31,1.25.31,1.88.62.94.31,2.19.63,3.12.94.62.31.94.31,1.56.62,1.25.31,2.19.94,3.44,1.25.31.31.94.31,1.25.63.94.31,2.19.63,3.44,1.25.31,0,.63.31.94.31,1.25.63,2.5.94,3.75,1.56.31,0,.63.31.63.31l1.56.63c80,34.69,135.94,114.37,136.25,205.94,0,120.63-95.31,219.38-214.06,225ZM222.5,339.06c15.94,1.87,25-4.38,32.19-23.13,3.75-8.75,7.19-17.81,10.31-26.56,4.69-13.75,1.87-19.38-10-19.38h-70.62c-3.12,0-5.63,0-8.13-.31-10.94-.94-16.87-10.31-14.06-23.75,1.88-7.81,5-15.62,7.81-23.44,4.69-12.81,15-38.13,20.94-53.12l-36.87-20h219.69c17.19.31,22.81,12.19,16.25,32.19-3.12,10.31-7.5,20.31-11.56,30.31-.63,1.87-3.44,4.38-5.31,4.38h-79.06c2.5-6.56,4.69-13.75,6.88-20,1.25-3.12,2.19-6.25,2.81-9.38.94-5.62-.31-10-4.69-11.56-15-5.31-28.12,2.5-35.31,20.94-3.75,10.31-7.81,20.31-11.56,30.62-4.06,10.94-.94,16.88,8.44,16.88h77.19c15,0,22.5,12.5,16.56,30-7.5,21.56-15,43.75-25,64.38-8.12,17.81-22.19,28.12-38.44,28.12h-146.25c-16.88,0-23.44-13.13-16.56-32.81,3.75-10.31,7.81-20.31,11.87-30.31.94-1.87,2.5-4.69,5.94-4.69h78.19c.08-.21.16-.41.25-.63v.63h-.25c-3.32,8.21-6.09,16.13-9.44,23.75-3.44,10.31-.62,15.94,7.81,16.88ZM365.91,353.44c0,1.25-.09,2.31-.25,3.28-.16.94-.47,1.88-.88,2.72-1,2.13-2.47,3.81-4.47,5-1.97,1.19-4.37,1.81-7.16,1.81s-5.19-.59-7.19-1.81c-2-1.19-3.47-2.87-4.44-5-.41-.91-.72-1.84-.91-2.78-.19-.94-.28-2.03-.28-3.22s.09-2.28.28-3.25.47-1.88.91-2.75c.94-2.16,2.44-3.81,4.44-5,2-1.19,4.41-1.81,7.19-1.81s5.19.59,7.16,1.78c2,1.19,3.47,2.84,4.47,5.03.41.87.69,1.78.88,2.72.16.97.25,2.03.25,3.28Z"/></g></g></svg>'}};function k({name:e,label:t,...o}){const i=I[e],c=i.markup.slice(i.markup.indexOf(">")+1,i.markup.lastIndexOf("</svg>"));return l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:i.viewBox,role:t?"img":void 0,"aria-label":t,"aria-hidden":t?void 0:!0,...o,dangerouslySetInnerHTML:{__html:c}})}function z({award:e}){const t=f.useId(),o=e.type==="runner-up";return l.jsxs("svg",{className:"award-badge",viewBox:"0 0 699 479",role:"img","aria-label":`SEMA Show ${o?"Runner Up — Best New Product":"Winner"} — ${e.category}`,children:[l.jsx("defs",{children:l.jsxs("filter",{id:t,x:"-20%",y:"-30%",width:"140%",height:"160%",children:[l.jsx("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:"3",result:"spread"}),l.jsx("feGaussianBlur",{in:"spread",stdDeviation:"5",result:"blur"}),l.jsx("feFlood",{floodColor:"#00a9d4"}),l.jsx("feComposite",{in2:"blur",operator:"in",result:"halo"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"halo"}),l.jsx("feMergeNode",{in:"halo"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),l.jsx("image",{href:P(j("/sema-award-tread.png")).src,width:"699",height:"479"}),l.jsx(k,{name:"semaWhite",x:"205",y:"59",width:"295",height:"94",filter:`url(#${t})`}),l.jsx("text",{filter:`url(#${t})`,className:"award-badge-title",x:"349.5",y:o?285:310,textAnchor:"middle",fill:o?"#fff":"var(--yellow)",fontSize:o?104:130,children:o?"RUNNER UP":"WINNER"}),o&&l.jsx("text",{filter:`url(#${t})`,className:"award-badge-title",x:"349.5",y:"350",textAnchor:"middle",fill:"var(--yellow)",fontSize:"53",children:"BEST NEW PRODUCT"}),l.jsx("text",{filter:`url(#${t})`,className:"award-badge-category",x:"349.5",y:o?413:389,textAnchor:"middle",fill:"#fff",fontSize:"43",children:e.category})]})}function T(e){const t=e.trim().split(/\s+/);if(t.length<2)return[e,""];let o=1,i=Number.POSITIVE_INFINITY;for(let c=1;c<t.length;c+=1){const n=t.slice(0,c).join(" "),s=t.slice(c).join(" "),a=Math.abs(n.length-s.length);a<i&&(o=c,i=a)}return[t.slice(0,o).join(" "),t.slice(o).join(" ")]}function W({item:e}){const[t,o]=f.useState(!1),i=e.buttonLabel||e.title,c=T(e.title),n=l.jsxs(l.Fragment,{children:[l.jsx(B,{src:e.image,alt:e.alt||e.title,label:e.title,position:e.imagePosition,scale:e.imageScale}),e.award&&l.jsx(z,{award:e.award}),l.jsx(N,{className:"gallery-editorial-action",label:"View Product"}),l.jsx("span",{className:"gallery-editorial-title",children:l.jsx("span",{className:"gallery-editorial-title-copy",children:c.map((s,a)=>l.jsx("span",{children:s||" "},`${s}-${a}`))})})]});return l.jsxs("article",{className:"gallery-card",children:[l.jsxs("div",{className:"gallery-visual",children:[l.jsx("div",{ref:s=>{s&&(s.inert=t)},children:e.href?l.jsx("a",{className:"gallery-media gallery-card-action",href:e.href,"aria-label":i,children:n}):l.jsx("button",{className:"gallery-media gallery-card-action",type:"button","aria-label":i,"aria-disabled":"true",title:"Product link pending",children:n})}),e.hotspot&&l.jsx(E,{...e.hotspot,label:i,open:t,onOpenChange:o})]}),e.supportingDetail&&l.jsx("p",{className:"gallery-supporting-detail",children:e.supportingDetail})]})}export{W as default};
