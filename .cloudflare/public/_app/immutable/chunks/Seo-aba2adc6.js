import{S as W,i as q,s as N,k as f,e as M,Q as C,l as s,h as c,n as e,D as p,E as T,J as D,b as S}from"./index-2288207f.js";import{p as H}from"./stores-83358fdb.js";function k(r){let n;return{c(){n=f("meta"),this.h()},l(t){n=s(t,"META",{property:!0,content:!0}),this.h()},h(){e(n,"property","og:image"),e(n,"content",r[3])},m(t,l){S(t,n,l)},p(t,l){l&8&&e(n,"content",t[3])},d(t){t&&c(n)}}}function w(r){let n;return{c(){n=f("meta"),this.h()},l(t){n=s(t,"META",{property:!0,content:!0}),this.h()},h(){e(n,"property","twitter:image"),e(n,"content",r[3])},m(t,l){S(t,n,l)},p(t,l){l&8&&e(n,"content",t[3])},d(t){t&&c(n)}}}function J(r){let n,t,l,y,d,h,_,i,g,E,b,A;document.title=n=r[0];let u=r[3]&&k(r),m=r[3]&&w(r);return{c(){t=f("meta"),l=f("meta"),y=f("meta"),d=f("meta"),h=f("meta"),_=f("meta"),u&&u.c(),i=f("meta"),g=f("meta"),E=f("meta"),b=f("meta"),m&&m.c(),A=M(),this.h()},l(a){const o=C('[data-svelte="svelte-bfami"]',document.head);t=s(o,"META",{name:!0,content:!0}),l=s(o,"META",{name:!0,content:!0}),y=s(o,"META",{property:!0,content:!0}),d=s(o,"META",{property:!0,content:!0}),h=s(o,"META",{property:!0,content:!0}),_=s(o,"META",{property:!0,content:!0}),u&&u.l(o),i=s(o,"META",{property:!0,content:!0}),g=s(o,"META",{property:!0,content:!0}),E=s(o,"META",{property:!0,content:!0}),b=s(o,"META",{property:!0,content:!0}),m&&m.l(o),A=M(),o.forEach(c),this.h()},h(){e(t,"name","title"),e(t,"content",r[0]),e(l,"name","description"),e(l,"content",r[1]),e(y,"property","og:type"),e(y,"content","website"),e(d,"property","og:url"),e(d,"content",r[2]),e(h,"property","og:title"),e(h,"content",r[0]),e(_,"property","og:description"),e(_,"content",r[1]),e(i,"property","twitter:card"),e(i,"content","summary_large_image"),e(g,"property","twitter:url"),e(g,"content",r[2]),e(E,"property","twitter:title"),e(E,"content",r[0]),e(b,"property","twitter:description"),e(b,"content",r[1])},m(a,o){p(document.head,t),p(document.head,l),p(document.head,y),p(document.head,d),p(document.head,h),p(document.head,_),u&&u.m(document.head,null),p(document.head,i),p(document.head,g),p(document.head,E),p(document.head,b),m&&m.m(document.head,null),p(document.head,A)},p(a,[o]){o&1&&n!==(n=a[0])&&(document.title=n),o&1&&e(t,"content",a[0]),o&2&&e(l,"content",a[1]),o&4&&e(d,"content",a[2]),o&1&&e(h,"content",a[0]),o&2&&e(_,"content",a[1]),a[3]?u?u.p(a,o):(u=k(a),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),o&4&&e(g,"content",a[2]),o&1&&e(E,"content",a[0]),o&2&&e(b,"content",a[1]),a[3]?m?m.p(a,o):(m=w(a),m.c(),m.m(A.parentNode,A)):m&&(m.d(1),m=null)},i:T,o:T,d(a){c(t),c(l),c(y),c(d),c(h),c(_),u&&u.d(a),c(i),c(g),c(E),c(b),m&&m.d(a),c(A)}}}function Q(r,n,t){let l;D(r,H,i=>t(4,l=i));let{title:y="Huddle & Score"}=n,{discription:d="We are an all-in-one package deal for our customers. We offer bookings of turfs, for you and your friends. We also take care of your need to participate in tournaments and so, we offer bookings for both physical and online tournaments."}=n,{url:h=l.url.href}=n,{poster:_=void 0}=n;return r.$$set=i=>{"title"in i&&t(0,y=i.title),"discription"in i&&t(1,d=i.discription),"url"in i&&t(2,h=i.url),"poster"in i&&t(3,_=i.poster)},[y,d,h,_]}class z extends W{constructor(n){super(),q(this,n,Q,J,N,{title:0,discription:1,url:2,poster:3})}}export{z as S};
