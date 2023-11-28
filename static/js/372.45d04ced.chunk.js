/*! For license information please see 372.45d04ced.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunke_business_application_prototype=self.webpackChunke_business_application_prototype||[]).push([[372],{372:(t,e,o)=>{o.r(e),o.d(e,{iosTransitionAnimation:()=>f,shadow:()=>c});var n=o(883),a=o(909);const r=t=>document.querySelector("".concat(t,".ion-cloned-element")),c=t=>t.shadowRoot||t,l=t=>{const e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){const t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},s=(t,e)=>{const o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs");let n=[];if(null!=o){const t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=t.querySelectorAll("ion-buttons");for(const a of n){const t=a.closest("ion-header"),o=t&&!t.classList.contains("header-collapse-condense-inactive"),n=a.querySelector("ion-back-button"),r=a.classList.contains("buttons-collapse"),c="start"===a.slot||""===a.slot;if(null!==n&&c&&(r&&o&&e||!r))return n}return null},i=(t,e,o,a,l,s,i,d,f)=>{var y,p;const u=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),b=e?"right":"left",g=e?"left":"right",S=e?"right":"left",h=(null===(y=s.textContent)||void 0===y?void 0:y.trim())===(null===(p=d.textContent)||void 0===p?void 0:p.trim()),q=f.width/i.width,T=(f.height-m)/i.height,x=h?"scale(".concat(q,", ").concat(T,")"):"scale(".concat(T,")"),X="scale(1)",v=c(a).querySelector("ion-icon").getBoundingClientRect(),E="".concat(e?v.width/2-(v.right-l.right):l.left-v.width/2,"px"),A=e?"-".concat(window.innerWidth-l.right,"px"):"".concat(l.left,"px"),C="".concat(f.top,"px"),w="".concat(l.top,"px"),k=[{offset:0,transform:"translate3d(".concat(E,", ").concat(C,", 0)")},{offset:1,transform:"translate3d(".concat(A,", ").concat(w,", 0)")}],B=[{offset:0,transform:"translate3d(".concat(A,", ").concat(w,", 0)")},{offset:1,transform:"translate3d(".concat(E,", ").concat(C,", 0)")}],P=o?B:k,R=o?[{offset:0,opacity:1,transform:X},{offset:1,opacity:0,transform:x}]:[{offset:0,opacity:0,transform:x},{offset:1,opacity:1,transform:X}],L=o?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],W=(0,n.c)(),_=(0,n.c)(),N=(0,n.c)(),z=r("ion-back-button"),D=c(z).querySelector(".button-text"),I=c(z).querySelector("ion-icon");z.text=a.text,z.mode=a.mode,z.icon=a.icon,z.color=a.color,z.disabled=a.disabled,z.style.setProperty("display","block"),z.style.setProperty("position","fixed"),_.addElement(I),W.addElement(D),N.addElement(z),N.beforeStyles({position:"absolute",top:"0px",[S]:"0px"}).keyframes(P),W.beforeStyles({"transform-origin":"".concat(b," top")}).beforeAddWrite((()=>{a.style.setProperty("display","none"),z.style.setProperty(b,u)})).afterAddWrite((()=>{a.style.setProperty("display",""),z.style.setProperty("display","none"),z.style.removeProperty(b)})).keyframes(R),_.beforeStyles({"transform-origin":"".concat(g," center")}).keyframes(L),t.addAnimation([W,_,N])},d=(t,e,o,a,c,l,s,i)=>{var d,f;const y=e?"right":"left",p=e?"calc(100% - ".concat(c.right,"px)"):"".concat(c.left,"px"),u="".concat(c.top,"px"),b=e?"-".concat(window.innerWidth-i.right-8,"px"):"".concat(i.x-8,"px"),g="".concat(i.y-2,"px"),S=(null===(d=s.textContent)||void 0===d?void 0:d.trim())===(null===(f=a.textContent)||void 0===f?void 0:f.trim()),h=i.width/l.width,q=i.height/(l.height-m),T="scale(1)",x=S?"scale(".concat(h,", ").concat(q,")"):"scale(".concat(q,")"),X=[{offset:0,opacity:0,transform:"translate3d(".concat(b,", ").concat(g,", 0) ").concat(x)},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(".concat("0px",", ").concat(u,", 0) ").concat(T)}],v=[{offset:0,opacity:.99,transform:"translate3d(".concat("0px",", ").concat(u,", 0) ").concat(T)},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(b,", ").concat(g,", 0) ").concat(x)}],E=o?X:v,A=r("ion-title"),C=(0,n.c)();A.innerText=a.innerText,A.size=a.size,A.color=a.color,C.addElement(A),C.beforeStyles({"transform-origin":"".concat(y," top"),height:"".concat(c.height,"px"),display:"",position:"relative",[y]:p}).beforeAddWrite((()=>{a.style.setProperty("opacity","0")})).afterAddWrite((()=>{a.style.setProperty("opacity",""),A.style.setProperty("display","none")})).keyframes(E),t.addAnimation(C)},f=(t,e)=>{var o;try{const r="cubic-bezier(0.32,0.72,0,1)",f="opacity",m="transform",y="0%",p=.8,u="rtl"===t.ownerDocument.dir,b=u?"-99.5%":"99.5%",g=u?"33%":"-33%",S=e.enteringEl,h=e.leavingEl,q="back"===e.direction,T=S.querySelector(":scope > ion-content"),x=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),X=S.querySelectorAll(":scope > ion-header > ion-toolbar"),v=(0,n.c)(),E=(0,n.c)();if(v.addElement(S).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||r).fill("both").beforeRemoveClass("ion-page-invisible"),h&&null!==t&&void 0!==t){const e=(0,n.c)();e.addElement(t),v.addAnimation(e)}if(T||0!==X.length||0!==x.length?(E.addElement(T),E.addElement(x)):E.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(E),q?E.beforeClearStyles([f]).fromTo("transform","translateX(".concat(g,")"),"translateX(".concat(y,")")).fromTo(f,p,1):E.beforeClearStyles([f]).fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")),T){const t=c(T).querySelector(".transition-effect");if(t){const e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),a=(0,n.c)(),r=(0,n.c)(),c=(0,n.c)();a.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),r.addElement(e).beforeClearStyles([f]).fromTo(f,0,.1),c.addElement(o).beforeClearStyles([f]).fromTo(f,.03,.7),a.addAnimation([r,c]),E.addAnimation([a])}}const A=S.querySelector("ion-header.header-collapse-condense"),{forward:C,backward:w}=((t,e,o,n,a)=>{const r=s(n,o),f=l(a),m=l(n),y=s(a,o),p=null!==r&&null!==f&&!o,u=null!==m&&null!==y&&o;if(p){const n=f.getBoundingClientRect(),a=r.getBoundingClientRect(),l=c(r).querySelector(".button-text"),s=l.getBoundingClientRect(),m=c(f).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,f,n,m,l,s),i(t,e,o,r,a,l,s,f,m)}else if(u){const n=m.getBoundingClientRect(),a=y.getBoundingClientRect(),r=c(y).querySelector(".button-text"),l=r.getBoundingClientRect(),s=c(m).querySelector(".toolbar-title").getBoundingClientRect();d(t,e,o,m,n,s,r,l),i(t,e,o,y,a,r,l,m,s)}return{forward:p,backward:u}})(v,u,q,S,h);if(X.forEach((t=>{const e=(0,n.c)();e.addElement(t),v.addAnimation(e);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const a=(0,n.c)(),r=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),l=t.closest("ion-header"),s=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive");let i;i=q?r.filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!s||!e})):r.filter((t=>!t.classList.contains("buttons-collapse"))),a.addElement(i);const d=(0,n.c)();d.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const m=(0,n.c)();m.addElement(c(t).querySelector(".toolbar-background"));const p=(0,n.c)(),S=t.querySelector("ion-back-button");if(S&&p.addElement(S),e.addAnimation([o,a,d,m,p]),a.fromTo(f,.01,1),d.fromTo(f,.01,1),q)s||o.fromTo("transform","translateX(".concat(g,")"),"translateX(".concat(y,")")).fromTo(f,.01,1),d.fromTo("transform","translateX(".concat(g,")"),"translateX(".concat(y,")")),p.fromTo(f,.01,1);else{A||o.fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")).fromTo(f,.01,1),d.fromTo("transform","translateX(".concat(b,")"),"translateX(".concat(y,")")),m.beforeClearStyles([f,"transform"]);if((null===l||void 0===l?void 0:l.translucent)?m.fromTo("transform",u?"translateX(-100%)":"translateX(100%)","translateX(0px)"):m.fromTo(f,.01,"var(--opacity)"),C||p.fromTo(f,.01,1),S&&!C){const t=(0,n.c)();t.addElement(c(S).querySelector(".button-text")).fromTo("transform",u?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(t)}}})),h){const t=(0,n.c)(),e=h.querySelector(":scope > ion-content"),o=h.querySelectorAll(":scope > ion-header > ion-toolbar"),r=h.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==r.length?(t.addElement(e),t.addElement(r)):t.addElement(h.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),v.addAnimation(t),q){t.beforeClearStyles([f]).fromTo("transform","translateX(".concat(y,")"),u?"translateX(-100%)":"translateX(100%)");const e=(0,a.g)(h);v.afterAddWrite((()=>{"normal"===v.getDirection()&&e.style.setProperty("display","none")}))}else t.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(g,")")).fromTo(f,1,p);if(e){const o=c(e).querySelector(".transition-effect");if(o){const e=o.querySelector(".transition-cover"),a=o.querySelector(".transition-shadow"),r=(0,n.c)(),c=(0,n.c)(),l=(0,n.c)();r.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),c.addElement(e).beforeClearStyles([f]).fromTo(f,.1,0),l.addElement(a).beforeClearStyles([f]).fromTo(f,.7,.03),r.addAnimation([c,l]),t.addAnimation([r])}}o.forEach((t=>{const e=(0,n.c)();e.addElement(t);const o=(0,n.c)();o.addElement(t.querySelector("ion-title"));const a=(0,n.c)(),r=t.querySelectorAll("ion-buttons,[menuToggle]"),l=t.closest("ion-header"),s=null===l||void 0===l?void 0:l.classList.contains("header-collapse-condense-inactive"),i=Array.from(r).filter((t=>{const e=t.classList.contains("buttons-collapse");return e&&!s||!e}));a.addElement(i);const d=(0,n.c)(),p=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");p.length>0&&d.addElement(p);const b=(0,n.c)();b.addElement(c(t).querySelector(".toolbar-background"));const S=(0,n.c)(),h=t.querySelector("ion-back-button");if(h&&S.addElement(h),e.addAnimation([o,a,d,S,b]),v.addAnimation(e),S.fromTo(f,.99,0),a.fromTo(f,.99,0),d.fromTo(f,.99,0),q){s||o.fromTo("transform","translateX(".concat(y,")"),u?"translateX(-100%)":"translateX(100%)").fromTo(f,.99,0),d.fromTo("transform","translateX(".concat(y,")"),u?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([f,"transform"]);if((null===l||void 0===l?void 0:l.translucent)?b.fromTo("transform","translateX(0px)",u?"translateX(-100%)":"translateX(100%)"):b.fromTo(f,"var(--opacity)",0),h&&!w){const t=(0,n.c)();t.addElement(c(h).querySelector(".button-text")).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat((u?-124:124)+"px",")")),e.addAnimation(t)}}else s||o.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(g,")")).fromTo(f,.99,0).afterClearStyles([m,f]),d.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(g,")")).afterClearStyles([m,f]),S.afterClearStyles([f]),o.afterClearStyles([f]),a.afterClearStyles([f])}))}return v}catch(r){throw r}},m=10}}]);
//# sourceMappingURL=372.45d04ced.chunk.js.map