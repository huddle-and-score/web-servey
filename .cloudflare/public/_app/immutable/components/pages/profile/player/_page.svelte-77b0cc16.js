import{S as Q,i as R,s as W,v as A,a as q,k as b,w as N,c as D,l as k,m as S,h,n as _,x as y,b as I,f as V,t as M,y as P,M as K,J as X,q as L,r as O,N as T,D as v,K as U,u as F,e as z}from"../../../../chunks/index-2288207f.js";import{A as Y}from"../../../../chunks/AppDrawer-03a7fc0d.js";import{H as Z}from"../../../../chunks/Header-9cf8977c.js";import{S as x}from"../../../../chunks/Seo-aba2adc6.js";import{e as ee}from"../../../../chunks/state-2107352d.js";import"../../../../chunks/Share-9deee359.js";import"../../../../chunks/stores-83358fdb.js";import"../../../../chunks/singletons-c0295a0c.js";import"../../../../chunks/db-06457d1e.js";function G(n,s,t){const e=n.slice();return e[5]=s[t],e}function H(n,s,t){const e=n.slice();return e[8]=s[t],e}function B(n){let s,t=n[0].players,e=[];for(let a=0;a<t.length;a+=1)e[a]=C(H(n,t,a));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=z()},l(a){for(let f=0;f<e.length;f+=1)e[f].l(a);s=z()},m(a,f){for(let o=0;o<e.length;o+=1)e[o].m(a,f);I(a,s,f)},p(a,f){if(f&1){t=a[0].players;let o;for(o=0;o<t.length;o+=1){const c=H(a,t,o);e[o]?e[o].p(c,f):(e[o]=C(c),e[o].c(),e[o].m(s.parentNode,s))}for(;o<e.length;o+=1)e[o].d(1);e.length=t.length}},d(a){K(e,a),a&&h(s)}}}function C(n){let s,t,e,a,f,o,c,u=n[8].name+"",p,m,$,w,l;return{c(){s=b("a"),t=b("div"),e=b("img"),o=q(),c=b("span"),p=L(u),m=q(),this.h()},l(r){s=k(r,"A",{href:!0,class:!0});var i=S(s);t=k(i,"DIV",{});var d=S(t);e=k(d,"IMG",{class:!0,src:!0,alt:!0}),o=D(d),c=k(d,"SPAN",{class:!0});var E=S(c);p=O(E,u),E.forEach(h),d.forEach(h),m=D(i),i.forEach(h),this.h()},h(){_(e,"class","w-[20vw] rounded-full sm:w-20 mx-auto"),T(e.src,a=n[8].displayImage)||_(e,"src",a),_(e,"alt",f=n[8].name),_(c,"class","block mt-2 sm:mt-5 sm:text-xl capitalize"),_(s,"href",$="/profile/player/"+n[8].id),_(s,"class","w-full font-bold py-5 text-center rounded-lg aspect-square mt-5 flex justify-center items-center bg-base1lighter")},m(r,i){I(r,s,i),v(s,t),v(t,e),v(t,o),v(t,c),v(c,p),v(s,m),w||(l=U(s,"click",n[2]),w=!0)},p(r,i){i&1&&!T(e.src,a=r[8].displayImage)&&_(e,"src",a),i&1&&f!==(f=r[8].name)&&_(e,"alt",f),i&1&&u!==(u=r[8].name+"")&&F(p,u),i&1&&$!==($="/profile/player/"+r[8].id)&&_(s,"href",$)},d(r){r&&h(s),w=!1,l()}}}function te(n){let s,t=n[0]&&B(n);return{c(){s=b("div"),t&&t.c(),this.h()},l(e){s=k(e,"DIV",{class:!0});var a=S(s);t&&t.l(a),a.forEach(h),this.h()},h(){_(s,"class","grid grid-cols-2 mx-4 gap-4")},m(e,a){I(e,s,a),t&&t.m(s,null)},p(e,a){e[0]?t?t.p(e,a):(t=B(e),t.c(),t.m(s,null)):t&&(t.d(1),t=null)},d(e){e&&h(s),t&&t.d()}}}function J(n){let s,t,e,a,f,o,c,u=n[5].name+"",p,m,$,w;function l(){return n[4](n[5])}return{c(){s=b("button"),t=b("div"),e=b("img"),o=q(),c=b("span"),p=L(u),m=q(),this.h()},l(r){s=k(r,"BUTTON",{class:!0});var i=S(s);t=k(i,"DIV",{});var d=S(t);e=k(d,"IMG",{class:!0,src:!0,alt:!0}),o=D(d),c=k(d,"SPAN",{class:!0});var E=S(c);p=O(E,u),E.forEach(h),d.forEach(h),m=D(i),i.forEach(h),this.h()},h(){_(e,"class","w-[20vw] aspect-square sm:w-20 mx-auto"),T(e.src,a=n[5].logo)||_(e,"src",a),_(e,"alt",f=n[5].name),_(c,"class","block mt-2 sm:mt-5 sm:text-xl capitalize"),_(s,"class","w-full font-bold py-5 text-center rounded-lg aspect-square mt-5 flex justify-center items-center bg-base1lighter")},m(r,i){I(r,s,i),v(s,t),v(t,e),v(t,o),v(t,c),v(c,p),v(s,m),$||(w=U(s,"click",l),$=!0)},p(r,i){n=r,i&2&&!T(e.src,a=n[5].logo)&&_(e,"src",a),i&2&&f!==(f=n[5].name)&&_(e,"alt",f),i&2&&u!==(u=n[5].name+"")&&F(p,u)},d(r){r&&h(s),$=!1,w()}}}function le(n){var $,w;let s,t,e,a,f,o,c,u;s=new x({}),e=new Y({props:{bg:"base1",open:n[0]!==void 0,close:n[3],placement:"right",title:(w=($=n[0])==null?void 0:$.name)!=null?w:"",$$slots:{default:[te]},$$scope:{ctx:n}}}),f=new Z({props:{tralingLogo:!0,title:"Select Teams"}});let p=n[1].sortedTeams,m=[];for(let l=0;l<p.length;l+=1)m[l]=J(G(n,p,l));return{c(){A(s.$$.fragment),t=q(),A(e.$$.fragment),a=q(),A(f.$$.fragment),o=q(),c=b("div");for(let l=0;l<m.length;l+=1)m[l].c();this.h()},l(l){N(s.$$.fragment,l),t=D(l),N(e.$$.fragment,l),a=D(l),N(f.$$.fragment,l),o=D(l),c=k(l,"DIV",{class:!0});var r=S(c);for(let i=0;i<m.length;i+=1)m[i].l(r);r.forEach(h),this.h()},h(){_(c,"class","grid grid-cols-2 mx-4 gap-4")},m(l,r){y(s,l,r),I(l,t,r),y(e,l,r),I(l,a,r),y(f,l,r),I(l,o,r),I(l,c,r);for(let i=0;i<m.length;i+=1)m[i].m(c,null);u=!0},p(l,[r]){var d,E;const i={};if(r&1&&(i.open=l[0]!==void 0),r&1&&(i.close=l[3]),r&1&&(i.title=(E=(d=l[0])==null?void 0:d.name)!=null?E:""),r&2049&&(i.$$scope={dirty:r,ctx:l}),e.$set(i),r&3){p=l[1].sortedTeams;let g;for(g=0;g<p.length;g+=1){const j=G(l,p,g);m[g]?m[g].p(j,r):(m[g]=J(j),m[g].c(),m[g].m(c,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=p.length}},i(l){u||(V(s.$$.fragment,l),V(e.$$.fragment,l),V(f.$$.fragment,l),u=!0)},o(l){M(s.$$.fragment,l),M(e.$$.fragment,l),M(f.$$.fragment,l),u=!1},d(l){P(s,l),l&&h(t),P(e,l),l&&h(a),P(f,l),l&&h(o),l&&h(c),K(m,l)}}}function se(n,s,t){let e;X(n,ee,u=>t(1,e=u));let a;return[a,e,()=>t(0,a=void 0),()=>t(0,a=void 0),u=>t(0,a=u)]}class _e extends Q{constructor(s){super(),R(this,s,se,le,W,{})}}export{_e as default};
