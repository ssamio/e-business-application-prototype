/*! For license information please see 22.c1c9a2f1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunke_business_application_prototype=self.webpackChunke_business_application_prototype||[]).push([[22],{22:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>o});var s=n(811),r=n(507),i=n(448);const o=(e,t,n,o,a)=>{const c=e.ownerDocument.defaultView;let u=(0,r.i)(e);const l=e=>u?-e.deltaX:e.deltaX;return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:n=>(u=(0,r.i)(e),(e=>{const{startX:t}=e;return u?t>=c.innerWidth-50:t<=50})(n)&&t()),onStart:n,onMove:e=>{const t=l(e)/c.innerWidth;o(t)},onEnd:e=>{const t=l(e),n=c.innerWidth,r=t/n,i=(e=>u?-e.velocityX:e.velocityX)(e),o=i>=0&&(i>.2||t>n/2),p=(o?1-r:r)*n;let h=0;if(p>5){const e=p/Math.abs(i);h=Math.min(e,540)}a(o,r<=0?.01:(0,s.m)(0,r,.9999),h)}})}}}]);
//# sourceMappingURL=22.c1c9a2f1.chunk.js.map