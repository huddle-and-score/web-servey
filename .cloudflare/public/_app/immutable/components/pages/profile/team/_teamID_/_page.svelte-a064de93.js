import{S as ge,i as ve,s as $e,k as $,q,a as V,v as K,e as Q,l as b,m as k,r as z,h as d,c as I,w as U,n as h,p as H,N as pe,b as T,D as u,x as W,u as Z,f as F,g as Ve,t as O,d as Ie,M as fe,y as B,J as te,o as je,E as _e,K as Me,R as We,T as Be}from"../../../../../chunks/index-2288207f.js";import{S as Je}from"../../../../../chunks/Seo-aba2adc6.js";import{p as be}from"../../../../../chunks/stores-83358fdb.js";import{e as we,s as oe,b as ne}from"../../../../../chunks/state-2107352d.js";import{C as ke,A as He,a as Ke}from"../../../../../chunks/Card-33f40cce.js";import{A as Ue}from"../../../../../chunks/AppDrawer-03a7fc0d.js";import"../../../../../chunks/singletons-c0295a0c.js";import"../../../../../chunks/db-06457d1e.js";import"../../../../../chunks/News-9ed2f5fd.js";import"../../../../../chunks/Ads-15616d52.js";import"../../../../../chunks/Video-4c69a625.js";import"../../../../../chunks/Share-9deee359.js";function Te(o,t,a){const e=o.slice();return e[19]=t[a],e}function Ae(o,t,a){const e=o.slice();return e[22]=t[a],e}function Ce(o,t,a){const e=o.slice();return e[25]=t[a].title,e[26]=t[a].val,e}function Pe(o){let t,a,e=o[25]+"",l,s,r,n=(Number.isNaN(o[26])?"--":o[26]<10?"0"+o[26].toFixed(0):o[26].toFixed(0))+"",i,f;return{c(){t=$("div"),a=$("span"),l=q(e),s=V(),r=$("span"),i=q(n),f=V(),this.h()},l(p){t=b(p,"DIV",{class:!0});var _=k(t);a=b(_,"SPAN",{class:!0});var w=k(a);l=z(w,e),w.forEach(d),s=I(_),r=b(_,"SPAN",{class:!0});var g=k(r);i=z(g,n),g.forEach(d),f=I(_),_.forEach(d),this.h()},h(){h(a,"class","font-medium text-xs block text-base1"),h(r,"class","font-bold text-4xl text-base1"),h(t,"class","rounded-xl bg-base1light p-3")},m(p,_){T(p,t,_),u(t,a),u(a,l),u(t,s),u(t,r),u(r,i),u(t,f)},p(p,_){_&1&&e!==(e=p[25]+"")&&Z(l,e),_&1&&n!==(n=(Number.isNaN(p[26])?"--":p[26]<10?"0"+p[26].toFixed(0):p[26].toFixed(0))+"")&&Z(i,n)},d(p){p&&d(t)}}}function Fe(o){let t,a,e=o[22].title+"",l,s,r,n=(Number.isNaN(o[22].val)?"--":o[22].val.toFixed(0))+"",i;return{c(){t=$("div"),a=$("span"),l=q(e),s=V(),r=$("span"),i=q(n),this.h()},l(f){t=b(f,"DIV",{class:!0});var p=k(t);a=b(p,"SPAN",{class:!0});var _=k(a);l=z(_,e),_.forEach(d),s=I(p),r=b(p,"SPAN",{class:!0});var w=k(r);i=z(w,n),w.forEach(d),p.forEach(d),this.h()},h(){h(a,"class","font-medium text-xs block"),h(r,"class","font-bold block mt-3 text-4xl"),h(t,"class","rounded-xl bg-base1 text-center w-36 h-24 p-3")},m(f,p){T(f,t,p),u(t,a),u(a,l),u(t,s),u(t,r),u(r,i)},p(f,p){p&32&&e!==(e=f[22].title+"")&&Z(l,e),p&32&&n!==(n=(Number.isNaN(f[22].val)?"--":f[22].val.toFixed(0))+"")&&Z(i,n)},d(f){f&&d(t)}}}function Se(o){let t,a,e=o[19],l=[];for(let s=0;s<e.length;s+=1)l[s]=Fe(Ae(o,e,s));return{c(){t=$("div");for(let s=0;s<l.length;s+=1)l[s].c();a=V(),this.h()},l(s){t=b(s,"DIV",{class:!0});var r=k(t);for(let n=0;n<l.length;n+=1)l[n].l(r);a=I(r),r.forEach(d),this.h()},h(){h(t,"class","flex justify-around mt-2")},m(s,r){T(s,t,r);for(let n=0;n<l.length;n+=1)l[n].m(t,null);u(t,a)},p(s,r){if(r&32){e=s[19];let n;for(n=0;n<e.length;n+=1){const i=Ae(s,e,n);l[n]?l[n].p(i,r):(l[n]=Fe(i),l[n].c(),l[n].m(t,a))}for(;n<l.length;n+=1)l[n].d(1);l.length=e.length}},d(s){s&&d(t),fe(l,s)}}}function Re(o){let t,a=o[5],e=[];for(let l=0;l<a.length;l+=1)e[l]=Se(Te(o,a,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=Q()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);t=Q()},m(l,s){for(let r=0;r<e.length;r+=1)e[r].m(l,s);T(l,t,s)},p(l,s){if(s&32){a=l[5];let r;for(r=0;r<a.length;r+=1){const n=Te(l,a,r);e[r]?e[r].p(n,s):(e[r]=Se(n),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=a.length}},d(l){fe(e,l),l&&d(t)}}}function Le(o){let t,a;return t=new ke({props:{title:"Latest News",viewMore:{placeholder:"All News",onClick:o[15]},$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){K(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){W(t,e,l),a=!0},p(e,l){const s={};l&8&&(s.viewMore={placeholder:"All News",onClick:e[15]}),l&536870986&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){a||(F(t.$$.fragment,e),a=!0)},o(e){O(t.$$.fragment,e),a=!1},d(e){B(t,e)}}}function Qe(o){let t,a;return t=new He({props:{onNavigateToOtherPage:o[13],loading:o[6].loading,allNews:o[6].data,seeMore:o[6].askedFor===o[6].data.length?o[1].seeMore:void 0}}),{c(){K(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){W(t,e,l),a=!0},p(e,l){const s={};l&8&&(s.onNavigateToOtherPage=e[13]),l&64&&(s.loading=e[6].loading),l&64&&(s.allNews=e[6].data),l&66&&(s.seeMore=e[6].askedFor===e[6].data.length?e[1].seeMore:void 0),t.$set(s)},i(e){a||(F(t.$$.fragment,e),a=!0)},o(e){O(t.$$.fragment,e),a=!1},d(e){B(t,e)}}}function Xe(o){let t,a,e,l;return t=new He({props:{loading:o[6].loading,allNews:o[6].data.slice(0,2)}}),e=new Ue({props:{close:o[14],open:o[3],title:"News",$$slots:{default:[Qe]},$$scope:{ctx:o}}}),{c(){K(t.$$.fragment),a=V(),K(e.$$.fragment)},l(s){U(t.$$.fragment,s),a=I(s),U(e.$$.fragment,s)},m(s,r){W(t,s,r),T(s,a,r),W(e,s,r),l=!0},p(s,r){const n={};r&64&&(n.loading=s[6].loading),r&64&&(n.allNews=s[6].data.slice(0,2)),t.$set(n);const i={};r&8&&(i.close=s[14]),r&8&&(i.open=s[3]),r&536870986&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){l||(F(t.$$.fragment,s),F(e.$$.fragment,s),l=!0)},o(s){O(t.$$.fragment,s),O(e.$$.fragment,s),l=!1},d(s){B(t,s),s&&d(a),B(e,s)}}}function Oe(o){let t,a;return t=new ke({props:{viewMore:{placeholder:"All Videos",onClick:o[18]},title:"Latest Videos",$$slots:{default:[Ze]},$$scope:{ctx:o}}}),{c(){K(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){W(t,e,l),a=!0},p(e,l){const s={};l&16&&(s.viewMore={placeholder:"All Videos",onClick:e[18]}),l&536871060&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){a||(F(t.$$.fragment,e),a=!0)},o(e){O(t.$$.fragment,e),a=!1},d(e){B(t,e)}}}function Ye(o){let t,a;return t=new Ke({props:{onNavigateToOtherPage:o[16],loading:o[7].loading,allVideos:o[7].data,seeMore:o[7].askedFor===o[7].data.length?o[2].seeMore:void 0}}),{c(){K(t.$$.fragment)},l(e){U(t.$$.fragment,e)},m(e,l){W(t,e,l),a=!0},p(e,l){const s={};l&16&&(s.onNavigateToOtherPage=e[16]),l&128&&(s.loading=e[7].loading),l&128&&(s.allVideos=e[7].data),l&132&&(s.seeMore=e[7].askedFor===e[7].data.length?e[2].seeMore:void 0),t.$set(s)},i(e){a||(F(t.$$.fragment,e),a=!0)},o(e){O(t.$$.fragment,e),a=!1},d(e){B(t,e)}}}function Ze(o){let t,a,e,l;return t=new Ke({props:{loading:o[7].loading,allVideos:o[7].data.slice(0,2)}}),e=new Ue({props:{close:o[17],open:o[4],title:"Videos",$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){K(t.$$.fragment),a=V(),K(e.$$.fragment)},l(s){U(t.$$.fragment,s),a=I(s),U(e.$$.fragment,s)},m(s,r){W(t,s,r),T(s,a,r),W(e,s,r),l=!0},p(s,r){const n={};r&128&&(n.loading=s[7].loading),r&128&&(n.allVideos=s[7].data.slice(0,2)),t.$set(n);const i={};r&16&&(i.close=s[17]),r&16&&(i.open=s[4]),r&536871060&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){l||(F(t.$$.fragment,s),F(e.$$.fragment,s),l=!0)},o(s){O(t.$$.fragment,s),O(e.$$.fragment,s),l=!1},d(s){B(t,s),s&&d(a),B(e,s)}}}function xe(o){let t,a,e,l=(Number.isNaN(o[0].score)?"00":o[0].score<10?"0"+o[0].score.toFixed(0):o[0].score.toFixed(0))+"",s,r,n,i,f,p,_,w,g,A,j,N,D,L,S,E,m,M,G,x=o[0].teamChemistry+"",X,se,le,ee,ce,ae,re,Y,de=[{title:"Attack",val:o[0].attack},{title:"Possession",val:o[0].possession},{title:"Defence",val:o[0].defence}],J=[];for(let c=0;c<3;c+=1)J[c]=Pe(Ce(o,de,c));ee=new ke({props:{$$slots:{default:[Re]},$$scope:{ctx:o}}});let C=o[6].data.length&&Le(o),P=o[7].data.length&&Oe(o);return{c(){t=$("div"),a=$("div"),e=$("div"),s=q(l),r=V(),n=$("img"),p=V(),_=$("h2"),w=q("Overview"),g=V(),A=$("div");for(let c=0;c<3;c+=1)J[c].c();j=V(),N=$("h2"),D=q("Team Chemistry"),L=V(),S=$("div"),E=$("div"),m=$("div"),M=V(),G=$("span"),X=q(x),se=q("%"),le=V(),K(ee.$$.fragment),ce=V(),C&&C.c(),ae=V(),P&&P.c(),re=Q(),this.h()},l(c){t=b(c,"DIV",{});var v=k(t);a=b(v,"DIV",{class:!0});var R=k(a);e=b(R,"DIV",{class:!0,style:!0});var y=k(e);s=z(y,l),y.forEach(d),r=I(R),n=b(R,"IMG",{src:!0,alt:!0,class:!0}),R.forEach(d),p=I(v),_=b(v,"H2",{class:!0});var ie=k(_);w=z(ie,"Overview"),ie.forEach(d),g=I(v),A=b(v,"DIV",{class:!0});var Ne=k(A);for(let he=0;he<3;he+=1)J[he].l(Ne);Ne.forEach(d),j=I(v),N=b(v,"H2",{class:!0});var De=k(N);D=z(De,"Team Chemistry"),De.forEach(d),L=I(v),S=b(v,"DIV",{class:!0});var ue=k(S);E=b(ue,"DIV",{class:!0});var Ee=k(E);m=b(Ee,"DIV",{class:!0,style:!0}),k(m).forEach(d),Ee.forEach(d),M=I(ue),G=b(ue,"SPAN",{class:!0});var me=k(G);X=z(me,x),se=z(me,"%"),me.forEach(d),ue.forEach(d),v.forEach(d),le=I(c),U(ee.$$.fragment,c),ce=I(c),C&&C.l(c),ae=I(c),P&&P.l(c),re=Q(),this.h()},h(){h(e,"class","w-full text-center"),H(e,"position","absolute"),H(e,"top","-45px"),H(e,"font-weight","900"),H(e,"font-size","214.431px"),H(e,"line-height","137.4%"),H(e,"background","linear-gradient(129.49deg, rgba(255, 255, 255, 0.28) 0.67%, rgba(0, 255, 28, 0.28) 54.08%, rgba(1, 51, 1, 0.28) 109.66%)"),H(e,"-webkit-background-clip","text"),H(e,"-webkit-text-fill-color","transparent"),H(e,"background-clip","text"),H(e,"text-fill-color","transparent"),pe(n.src,i=o[0].logo)||h(n,"src",i),h(n,"alt",f=o[0].name),h(n,"class","mx-auto pt-32 relative z-10 w-[50%]"),h(a,"class","relative"),h(_,"class","text-xl mt-5 page-margin"),h(A,"class","grid grid-cols-3 mt-5 page-margin gap-3"),h(N,"class","text-xl mt-5 page-margin font-bold"),h(m,"class","bg-danger h-1 rounded-full"),H(m,"width",o[0].teamChemistry+"%"),h(E,"class","bg-base2 h-1 w-[35%] rounded-full"),h(G,"class","ml-2"),h(S,"class","mt-1 page-margin flex items-center")},m(c,v){T(c,t,v),u(t,a),u(a,e),u(e,s),u(a,r),u(a,n),u(t,p),u(t,_),u(_,w),u(t,g),u(t,A);for(let R=0;R<3;R+=1)J[R].m(A,null);u(t,j),u(t,N),u(N,D),u(t,L),u(t,S),u(S,E),u(E,m),u(S,M),u(S,G),u(G,X),u(G,se),T(c,le,v),W(ee,c,v),T(c,ce,v),C&&C.m(c,v),T(c,ae,v),P&&P.m(c,v),T(c,re,v),Y=!0},p(c,[v]){if((!Y||v&1)&&l!==(l=(Number.isNaN(c[0].score)?"00":c[0].score<10?"0"+c[0].score.toFixed(0):c[0].score.toFixed(0))+"")&&Z(s,l),(!Y||v&1&&!pe(n.src,i=c[0].logo))&&h(n,"src",i),(!Y||v&1&&f!==(f=c[0].name))&&h(n,"alt",f),v&1){de=[{title:"Attack",val:c[0].attack},{title:"Possession",val:c[0].possession},{title:"Defence",val:c[0].defence}];let y;for(y=0;y<3;y+=1){const ie=Ce(c,de,y);J[y]?J[y].p(ie,v):(J[y]=Pe(ie),J[y].c(),J[y].m(A,null))}for(;y<3;y+=1)J[y].d(1)}(!Y||v&1)&&H(m,"width",c[0].teamChemistry+"%"),(!Y||v&1)&&x!==(x=c[0].teamChemistry+"")&&Z(X,x);const R={};v&536870944&&(R.$$scope={dirty:v,ctx:c}),ee.$set(R),c[6].data.length?C?(C.p(c,v),v&64&&F(C,1)):(C=Le(c),C.c(),F(C,1),C.m(ae.parentNode,ae)):C&&(Ve(),O(C,1,1,()=>{C=null}),Ie()),c[7].data.length?P?(P.p(c,v),v&128&&F(P,1)):(P=Oe(c),P.c(),F(P,1),P.m(re.parentNode,re)):P&&(Ve(),O(P,1,1,()=>{P=null}),Ie())},i(c){Y||(F(ee.$$.fragment,c),F(C),F(P),Y=!0)},o(c){O(ee.$$.fragment,c),O(C),O(P),Y=!1},d(c){c&&d(t),fe(J,c),c&&d(le),B(ee,c),c&&d(ce),C&&C.d(c),c&&d(ae),P&&P.d(c),c&&d(re)}}}function et(o,t,a){let e,l,s,r,n,i,f;te(o,we,E=>a(11,r=E)),te(o,be,E=>a(12,n=E));let p=!1,_=!1;const w=oe.store;te(o,w,E=>a(6,i=E));const g=ne.store;te(o,g,E=>a(7,f=E)),je(function(){return a(1,oe.connectTo=e,oe),a(2,ne.connectTo=e,ne),function(){a(1,oe.connectTo=void 0,oe),a(2,ne.connectTo=void 0,ne)}});const A=()=>a(3,p=!1),j=()=>a(3,p=!1),N=()=>a(3,p=!0),D=()=>a(4,_=!1),L=()=>a(4,_=!1),S=()=>a(4,_=!0);return o.$$.update=()=>{o.$$.dirty&4096&&a(10,e=n.params.teamID),o.$$.dirty&3072&&a(0,l=r.teams[e]),o.$$.dirty&1&&a(5,s=[{title:"Matches Played",val:l.matchesPlayed},{title:"Goals Scored",val:l.goalScored},{title:"Wins",val:l.won},{title:"Losses",val:l.loss},{title:"Goals Conceived",val:l.goalConceived},{title:"Goal Difference",val:l.goalDifference},{title:"Points",val:l.points}].reduce(function(E,m,M){return M%2?E[E.length-1].push(m):E.push([m]),E},[]))},[l,oe,ne,p,_,s,i,f,w,g,e,r,n,A,j,N,D,L,S]}class tt extends ge{constructor(t){super(),ve(this,t,et,xe,$e,{})}}function Ge(o,t,a){const e=o.slice();return e[5]=t[a].title,e[6]=t[a].players,e}function ye(o,t,a){const e=o.slice();return e[9]=t[a],e}function lt(o){let t,a;return{c(){t=$("span"),a=q("No Player "),this.h()},l(e){t=b(e,"SPAN",{class:!0});var l=k(t);a=z(l,"No Player "),l.forEach(d),this.h()},h(){h(t,"class","mx-10")},m(e,l){T(e,t,l),u(t,a)},p:_e,d(e){e&&d(t)}}}function st(o){let t,a=o[6],e=[];for(let l=0;l<a.length;l+=1)e[l]=qe(ye(o,a,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=Q()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);t=Q()},m(l,s){for(let r=0;r<e.length;r+=1)e[r].m(l,s);T(l,t,s)},p(l,s){if(s&1){a=l[6];let r;for(r=0;r<a.length;r+=1){const n=ye(l,a,r);e[r]?e[r].p(n,s):(e[r]=qe(n),e[r].c(),e[r].m(t.parentNode,t))}for(;r<e.length;r+=1)e[r].d(1);e.length=a.length}},d(l){fe(e,l),l&&d(t)}}}function qe(o){let t,a,e,l,s,r,n,i=o[9].name+"",f,p,_,w=o[9].place+"",g,A,j;return{c(){t=$("a"),a=$("img"),s=V(),r=$("div"),n=$("div"),f=q(i),p=V(),_=$("div"),g=q(w),A=V(),this.h()},l(N){t=b(N,"A",{href:!0,class:!0});var D=k(t);a=b(D,"IMG",{src:!0,alt:!0,class:!0}),s=I(D),r=b(D,"DIV",{class:!0});var L=k(r);n=b(L,"DIV",{class:!0});var S=k(n);f=z(S,i),S.forEach(d),p=I(L),_=b(L,"DIV",{class:!0});var E=k(_);g=z(E,w),E.forEach(d),L.forEach(d),A=I(D),D.forEach(d),this.h()},h(){pe(a.src,e=o[9].displayImage)||h(a,"src",e),h(a,"alt",l=o[9].name),h(a,"class","rounded-full bg-base2 h-16"),h(n,"class","font-bold"),h(_,"class","mt-1"),h(r,"class","ml-3"),h(t,"href",j="/profile/player/"+o[9].id),h(t,"class","flex mt-5 page-margin")},m(N,D){T(N,t,D),u(t,a),u(t,s),u(t,r),u(r,n),u(n,f),u(r,p),u(r,_),u(_,g),u(t,A)},p(N,D){D&1&&!pe(a.src,e=N[9].displayImage)&&h(a,"src",e),D&1&&l!==(l=N[9].name)&&h(a,"alt",l),D&1&&i!==(i=N[9].name+"")&&Z(f,i),D&1&&w!==(w=N[9].place+"")&&Z(g,w),D&1&&j!==(j="/profile/player/"+N[9].id)&&h(t,"href",j)},d(N){N&&d(t)}}}function ze(o){let t,a=o[5]+"",e,l,s;function r(f,p){return f[6].length?st:lt}let n=r(o),i=n(o);return{c(){t=$("h2"),e=q(a),l=V(),i.c(),s=Q(),this.h()},l(f){t=b(f,"H2",{class:!0});var p=k(t);e=z(p,a),p.forEach(d),l=I(f),i.l(f),s=Q(),this.h()},h(){h(t,"class","mt-8 capitalize font-bold text-xl page-margin")},m(f,p){T(f,t,p),u(t,e),T(f,l,p),i.m(f,p),T(f,s,p)},p(f,p){p&1&&a!==(a=f[5]+"")&&Z(e,a),n===(n=r(f))&&i?i.p(f,p):(i.d(1),i=n(f),i&&(i.c(),i.m(s.parentNode,s)))},d(f){f&&d(t),f&&d(l),i.d(f),f&&d(s)}}}function at(o){let t,a=[{title:"Goal Keeper",players:o[0].Goalkeeper},{title:"Defender",players:o[0].Defence},{title:"Midfielders",players:o[0].Midfield},{title:"Attackers",players:o[0].Forward}],e=[];for(let l=0;l<4;l+=1)e[l]=ze(Ge(o,a,l));return{c(){for(let l=0;l<4;l+=1)e[l].c();t=Q()},l(l){for(let s=0;s<4;s+=1)e[s].l(l);t=Q()},m(l,s){for(let r=0;r<4;r+=1)e[r].m(l,s);T(l,t,s)},p(l,[s]){if(s&1){a=[{title:"Goal Keeper",players:l[0].Goalkeeper},{title:"Defender",players:l[0].Defence},{title:"Midfielders",players:l[0].Midfield},{title:"Attackers",players:l[0].Forward}];let r;for(r=0;r<4;r+=1){const n=Ge(l,a,r);e[r]?e[r].p(n,s):(e[r]=ze(n),e[r].c(),e[r].m(t.parentNode,t))}for(;r<4;r+=1)e[r].d(1)}},i:_e,o:_e,d(l){fe(e,l),l&&d(t)}}}function rt(o,t,a){let e,l,s,r,n;return te(o,we,i=>a(3,r=i)),te(o,be,i=>a(4,n=i)),o.$$.update=()=>{o.$$.dirty&16&&a(2,e=n.params.teamID),o.$$.dirty&12&&a(1,l=r.teams[e]),o.$$.dirty&2&&a(0,s=l.players.reduce(function(i,f){return i[f.position].push(f),i},{Forward:[],Midfield:[],Defence:[],Goalkeeper:[]}))},[s,l,e,r,n]}class ot extends ge{constructor(t){super(),ve(this,t,rt,at,$e,{})}}function nt(o){let t,a,e,l,s,r,n,i,f,p,_,w,g,A,j,N,D,L,S,E;return t=new Je({props:{discription:"Team Chemistry of "+o[2].teamChemistry+"%, (with score of "+o[2].score+")",poster:o[2].logo,title:o[2].name}}),A=new tt({}),D=new ot({}),{c(){K(t.$$.fragment),a=V(),e=$("div"),l=$("div"),s=V(),r=$("button"),n=q("Overview"),i=V(),f=$("button"),p=q("Squad"),_=V(),w=$("ul"),g=$("li"),K(A.$$.fragment),j=V(),N=$("li"),K(D.$$.fragment),this.h()},l(m){U(t.$$.fragment,m),a=I(m),e=b(m,"DIV",{class:!0});var M=k(e);l=b(M,"DIV",{class:!0,style:!0}),k(l).forEach(d),s=I(M),r=b(M,"BUTTON",{class:!0});var G=k(r);n=z(G,"Overview"),G.forEach(d),i=I(M),f=b(M,"BUTTON",{class:!0});var x=k(f);p=z(x,"Squad"),x.forEach(d),M.forEach(d),_=I(m),w=b(m,"UL",{class:!0});var X=k(w);g=b(X,"LI",{class:!0});var se=k(g);U(A.$$.fragment,se),se.forEach(d),j=I(X),N=b(X,"LI",{class:!0});var le=k(N);U(D.$$.fragment,le),le.forEach(d),X.forEach(d),this.h()},h(){h(l,"class","absolute bg-base2 rounded-lg h-full w-32"),H(l,"left",o[0]*100+"%"),h(r,"class","relative pl-9 z-10 pr-8 py-2"),h(f,"class","relative pr-9 z-10 pl-8 py-2"),h(e,"class","relative flex text-base1 w-64 text-center mt-5 rounded-lg bg-base1light mx-auto"),h(g,"class","screen-width object-cover relative shrink-0 snap-center"),h(N,"class","screen-width object-cover relative shrink-0 snap-center"),h(w,"class","flex w-full snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-none hide-scroll-bar")},m(m,M){W(t,m,M),T(m,a,M),T(m,e,M),u(e,l),u(e,s),u(e,r),u(r,n),u(e,i),u(e,f),u(f,p),T(m,_,M),T(m,w,M),u(w,g),W(A,g,null),u(w,j),u(w,N),W(D,N,null),o[8](w),L=!0,S||(E=[Me(r,"click",o[6]),Me(f,"click",o[7])],S=!0)},p(m,[M]){const G={};M&4&&(G.discription="Team Chemistry of "+m[2].teamChemistry+"%, (with score of "+m[2].score+")"),M&4&&(G.poster=m[2].logo),M&4&&(G.title=m[2].name),t.$set(G),(!L||M&1)&&H(l,"left",m[0]*100+"%")},i(m){L||(F(t.$$.fragment,m),F(A.$$.fragment,m),F(D.$$.fragment,m),L=!0)},o(m){O(t.$$.fragment,m),O(A.$$.fragment,m),O(D.$$.fragment,m),L=!1},d(m){B(t,m),m&&d(a),m&&d(e),m&&d(_),m&&d(w),B(A),B(D),o[8](null),S=!1,We(E)}}}function it(o,t,a){let e,l,s,r;te(o,we,g=>a(4,s=g)),te(o,be,g=>a(5,r=g));let n=0,i;function f(){let g=i.scrollLeft/i.scrollWidth;g<.05?g=0:g>.45&&(g=.5),a(0,n=g)}je(function(){return i.addEventListener("scroll",f),()=>i.removeEventListener("scroll",f)});const p=()=>i.scrollTo({behavior:"smooth",left:0}),_=()=>i.scrollTo({behavior:"smooth",left:i.scrollWidth/2});function w(g){Be[g?"unshift":"push"](()=>{i=g,a(1,i)})}return o.$$.update=()=>{o.$$.dirty&32&&a(3,e=r.params.teamID),o.$$.dirty&24&&a(2,l=s.teams[e])},[n,i,l,e,s,r,p,_,w]}class wt extends ge{constructor(t){super(),ve(this,t,it,nt,$e,{})}}export{wt as default};
