import{S as We,i as Be,s as Qe,y as ge,a as B,k as V,q as w,N as j,e as ie,z as ye,c as Q,l as q,m as b,r as k,h as _,O as W,n as l,P as Xe,A as be,b as R,C as f,Q as Ge,g as we,d as ke,B as Ee,M as Me,E as De,o as Je,u as oe,p as z}from"../chunks/index.a4677e45.js";import{H as Ke}from"../chunks/global.8eab2eb4.js";import{S as Le,a as Ue}from"../chunks/SelectRegions.ab710cf1.js";import{c as Ye,a as Ze,b as et,r as tt}from"../chunks/csv.a309fd1d.js";const lt=!0,ht=Object.freeze(Object.defineProperty({__proto__:null,prerender:lt},Symbol.toStringTag,{value:"Module"}));function Ce(e,t,s){const n=e.slice();return n[17]=t[s],n[19]=s,n}function Fe(e,t,s){const n=e.slice();return n[20]=t[s],n[19]=s,n}function ze(e,t,s){const n=e.slice();return n[17]=t[s],n[19]=s,n}function Te(e){let t,s,n,a,h,u,c,g=(100*e[17]).toFixed(0)+"",d,A,E;return{c(){t=j("line"),a=j("line"),c=j("text"),d=w(g),A=w("%"),this.h()},l(p){t=W(p,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(t).forEach(_),a=W(p,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(a).forEach(_),c=W(p,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var v=b(c);d=k(v,g),A=k(v,"%"),v.forEach(_),this.h()},h(){l(t,"class","grid svelte-1r8269s"),l(t,"x1",s=29+e[19]*e[4]),l(t,"y1","34"),l(t,"x2",n=29+e[19]*e[4]),l(t,"y2",e[3]),l(a,"class","grid-white svelte-1r8269s"),l(a,"x1",h=29+e[19]*e[4]),l(a,"y1","34"),l(a,"x2",u=29+e[19]*e[4]),l(a,"y2","38"),l(c,"class","axis-label svelte-1r8269s"),l(c,"x",E=35+e[19]*e[4]),l(c,"y","30"),l(c,"text-anchor","end")},m(p,v){R(p,t,v),R(p,a,v),R(p,c,v),f(c,d),f(c,A)},p(p,v){v&16&&s!==(s=29+p[19]*p[4])&&l(t,"x1",s),v&16&&n!==(n=29+p[19]*p[4])&&l(t,"x2",n),v&8&&l(t,"y2",p[3]),v&16&&h!==(h=29+p[19]*p[4])&&l(a,"x1",h),v&16&&u!==(u=29+p[19]*p[4])&&l(a,"x2",u),v&4&&g!==(g=(100*p[17]).toFixed(0)+"")&&oe(d,g),v&16&&E!==(E=35+p[19]*p[4])&&l(c,"x",E)},d(p){p&&_(t),p&&_(a),p&&_(c)}}}function He(e){let t,s=e[20].display_title+"",n,a,h=Math.round(100*e[20].seasonal_average)+"",u,c;return{c(){t=j("text"),n=w(s),a=w(" - "),u=w(h),c=w("%"),this.h()},l(g){t=W(g,"text",{class:!0,x:!0,y:!0,style:!0});var d=b(t);n=k(d,s),a=k(d," - "),u=k(d,h),c=k(d,"%"),d.forEach(_),this.h()},h(){l(t,"class","bar-label svelte-1r8269s"),l(t,"x","32"),l(t,"y",56+e[19]*24),z(t,"fill","#000"),z(t,"fill-opacity","0"),z(t,"stroke","white"),z(t,"stroke-width","3px"),z(t,"stroke-opacity","0.62")},m(g,d){R(g,t,d),f(t,n),f(t,a),f(t,u),f(t,c)},p(g,d){d&1&&s!==(s=g[20].display_title+"")&&oe(n,s),d&1&&h!==(h=Math.round(100*g[20].seasonal_average)+"")&&oe(u,h)},d(g){g&&_(t)}}}function Ne(e){let t=e[5].find(X).text==="#000",s,n,a,h,u,c=e[19]+1+"",g,d,A=e[20].display_title+"",E,p,v=Math.round(100*e[20].seasonal_average)+"",O,C;function X(...o){return e[10](e[20],...o)}let y=t&&He(e);function G(...o){return e[11](e[20],...o)}function T(...o){return e[12](e[20],...o)}return{c(){y&&y.c(),s=j("line"),a=j("line"),u=j("text"),g=w(c),d=j("text"),E=w(A),p=w(" - "),O=w(v),C=w("%"),this.h()},l(o){y&&y.l(o),s=W(o,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),b(s).forEach(_),a=W(o,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),b(a).forEach(_),u=W(o,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var m=b(u);g=k(m,c),m.forEach(_),d=W(o,"text",{class:!0,x:!0,y:!0,style:!0});var P=b(d);E=k(P,A),p=k(P," - "),O=k(P,v),C=k(P,"%"),P.forEach(_),this.h()},h(){l(s,"class","bar"),l(s,"x1",29),l(s,"y1",52+e[19]*24),l(s,"x2",n=29+(e[1]-50)*e[20].seasonal_average/Math.max(...e[2])),l(s,"y2",52+e[19]*24),z(s,"stroke","white"),z(s,"stroke-width","20 "),l(a,"class","bar"),l(a,"x1",30),l(a,"y1",52+e[19]*24),l(a,"x2",h=29+(e[1]-50)*e[20].seasonal_average/Math.max(...e[2])-1),l(a,"y2",52+e[19]*24),z(a,"stroke",e[5].find(G).colour),z(a,"stroke-width","18"),l(u,"class","axis-label svelte-1r8269s"),l(u,"x","25"),l(u,"y",57+e[19]*24),l(u,"text-anchor","end"),l(d,"class","bar-label svelte-1r8269s"),l(d,"x","32"),l(d,"y",56+e[19]*24),z(d,"fill",e[5].find(T).text)},m(o,m){y&&y.m(o,m),R(o,s,m),R(o,a,m),R(o,u,m),f(u,g),R(o,d,m),f(d,E),f(d,p),f(d,O),f(d,C)},p(o,m){e=o,m&1&&(t=e[5].find(X).text==="#000"),t?y?y.p(e,m):(y=He(e),y.c(),y.m(s.parentNode,s)):y&&(y.d(1),y=null),m&7&&n!==(n=29+(e[1]-50)*e[20].seasonal_average/Math.max(...e[2]))&&l(s,"x2",n),m&7&&h!==(h=29+(e[1]-50)*e[20].seasonal_average/Math.max(...e[2])-1)&&l(a,"x2",h),m&1&&z(a,"stroke",e[5].find(G).colour),m&1&&A!==(A=e[20].display_title+"")&&oe(E,A),m&1&&v!==(v=Math.round(100*e[20].seasonal_average)+"")&&oe(O,v),m&1&&z(d,"fill",e[5].find(T).text)},d(o){y&&y.d(o),o&&_(s),o&&_(a),o&&_(u),o&&_(d)}}}function $e(e){let t,s,n;return{c(){t=j("line"),this.h()},l(a){t=W(a,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-opacity":!0,"stroke-dasharray":!0}),b(t).forEach(_),this.h()},h(){l(t,"class","grid-white svelte-1r8269s"),l(t,"x1",s=29+e[19]*e[4]),l(t,"y1","34"),l(t,"x2",n=29+e[19]*e[4]),l(t,"y2",e[3]),l(t,"stroke-opacity","0.75"),l(t,"stroke-dasharray","2 2")},m(a,h){R(a,t,h)},p(a,h){h&16&&s!==(s=29+a[19]*a[4])&&l(t,"x1",s),h&16&&n!==(n=29+a[19]*a[4])&&l(t,"x2",n),h&8&&l(t,"y2",a[3])},d(a){a&&_(t)}}}function je(e){let t,s,n,a,h=e[17]===1&&$e(e);return{c(){t=j("line"),h&&h.c(),a=ie(),this.h()},l(u){t=W(u,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"stroke-opacity":!0}),b(t).forEach(_),h&&h.l(u),a=ie(),this.h()},h(){l(t,"class","grid svelte-1r8269s"),l(t,"x1",s=29+e[19]*e[4]),l(t,"y1","34"),l(t,"x2",n=29+e[19]*e[4]),l(t,"y2",e[3]),l(t,"stroke-opacity","0.21")},m(u,c){R(u,t,c),h&&h.m(u,c),R(u,a,c)},p(u,c){c&16&&s!==(s=29+u[19]*u[4])&&l(t,"x1",s),c&16&&n!==(n=29+u[19]*u[4])&&l(t,"x2",n),c&8&&l(t,"y2",u[3]),u[17]===1?h?h.p(u,c):(h=$e(u),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},d(u){u&&_(t),h&&h.d(u),u&&_(a)}}}function at(e){let t,s,n,a,h,u,c,g,d,A,E,p,v,O,C,X,y,G,T,o,m,P,J,_e,ce,F,H,K,L,de,U,Y,pe,Z,ve,me,M,ne,he,Se,ee;t=new Ke({}),L=new Le({}),Y=new Ue({props:{europe:"yes"}});let te=e[2],D=[];for(let i=0;i<te.length;i+=1)D[i]=Te(ze(e,te,i));let le=e[0],S=[];for(let i=0;i<le.length;i+=1)S[i]=Ne(Fe(e,le,i));let ae=e[2],x=[];for(let i=0;i<ae.length;i+=1)x[i]=je(Ce(e,ae,i));return{c(){ge(t.$$.fragment),s=B(),n=V("main"),a=V("div"),h=V("h1"),u=w("Downtown Recovery Rankings"),c=B(),g=V("p"),d=w("The recovery metrics on these charts are based on a sample of mobile phone data."),A=B(),E=V("p"),p=w("They are computed by counting the number of unique mobile phones in a city's downtown area in the specified time period, and then dividing it by the number of unique visitors during the equivalent time period in 2019. For example, the March 2023 - May 2023 time period is compared to the March 2019 - May 2019 time period."),v=B(),O=V("p"),C=w("A recovery metric greater than 100% means that for the selected inputs, the mobile device activity increased relative to the comparison period. A value less than 100% means the opposite, that the city's downtown has not recovered to pre-COVID activity levels."),X=B(),y=V("p"),G=w("For more information, read our "),T=V("a"),o=w("Methodology"),m=w(" page. Or click "),P=V("a"),J=w("here"),_e=w(" to download the data shown on this chart."),ce=B(),F=V("div"),H=V("div"),K=V("div"),ge(L.$$.fragment),de=B(),U=V("div"),ge(Y.$$.fragment),pe=B(),Z=V("p"),ve=w("*Data for Europe is only available from 12/2021 to 02/2023"),me=B(),M=j("svg");for(let i=0;i<D.length;i+=1)D[i].c();ne=ie();for(let i=0;i<S.length;i+=1)S[i].c();he=ie();for(let i=0;i<x.length;i+=1)x[i].c();this.h()},l(i){ye(t.$$.fragment,i),s=Q(i),n=q(i,"MAIN",{class:!0});var I=b(n);a=q(I,"DIV",{class:!0});var r=b(a);h=q(r,"H1",{});var N=b(h);u=k(N,"Downtown Recovery Rankings"),N.forEach(_),c=Q(r),g=q(r,"P",{});var xe=b(g);d=k(xe,"The recovery metrics on these charts are based on a sample of mobile phone data."),xe.forEach(_),A=Q(r),E=q(r,"P",{});var Ie=b(E);p=k(Ie,"They are computed by counting the number of unique mobile phones in a city's downtown area in the specified time period, and then dividing it by the number of unique visitors during the equivalent time period in 2019. For example, the March 2023 - May 2023 time period is compared to the March 2019 - May 2019 time period."),Ie.forEach(_),v=Q(r),O=q(r,"P",{});var Ae=b(O);C=k(Ae,"A recovery metric greater than 100% means that for the selected inputs, the mobile device activity increased relative to the comparison period. A value less than 100% means the opposite, that the city's downtown has not recovered to pre-COVID activity levels."),Ae.forEach(_),X=Q(r),y=q(r,"P",{});var re=b(y);G=k(re,"For more information, read our "),T=q(re,"A",{href:!0});var Pe=b(T);o=k(Pe,"Methodology"),Pe.forEach(_),m=k(re," page. Or click "),P=q(re,"A",{href:!0});var Ve=b(P);J=k(Ve,"here"),Ve.forEach(_),_e=k(re," to download the data shown on this chart."),re.forEach(_),r.forEach(_),ce=Q(I),F=q(I,"DIV",{id:!0,class:!0});var ue=b(F);H=q(ue,"DIV",{id:!0,class:!0});var se=b(H);K=q(se,"DIV",{id:!0,class:!0});var qe=b(K);ye(L.$$.fragment,qe),qe.forEach(_),de=Q(se),U=q(se,"DIV",{id:!0,class:!0});var Oe=b(U);ye(Y.$$.fragment,Oe),Oe.forEach(_),pe=Q(se),Z=q(se,"P",{id:!0,class:!0});var Re=b(Z);ve=k(Re,"*Data for Europe is only available from 12/2021 to 02/2023"),Re.forEach(_),se.forEach(_),me=Q(ue),M=W(ue,"svg",{height:!0,width:!0,id:!0,class:!0});var fe=b(M);for(let $=0;$<D.length;$+=1)D[$].l(fe);ne=ie();for(let $=0;$<S.length;$+=1)S[$].l(fe);he=ie();for(let $=0;$<x.length;$+=1)x[$].l(fe);fe.forEach(_),ue.forEach(_),I.forEach(_),this.h()},h(){l(T,"href","/methodology"),l(P,"href","/ranking_data.csv"),l(a,"class","text"),l(K,"id","options-season"),l(K,"class","svelte-1r8269s"),l(U,"id","options-region"),l(U,"class","svelte-1r8269s"),l(Z,"id","note"),l(Z,"class","svelte-1r8269s"),l(H,"id","options"),l(H,"class","svelte-1r8269s"),l(M,"height",e[3]),l(M,"width",e[1]),l(M,"id","chart"),l(M,"class","svelte-1r8269s"),l(F,"id","chart-wrapper"),l(F,"class","svelte-1r8269s"),Xe(()=>e[13].call(F)),l(n,"class","svelte-1r8269s")},m(i,I){be(t,i,I),R(i,s,I),R(i,n,I),f(n,a),f(a,h),f(h,u),f(a,c),f(a,g),f(g,d),f(a,A),f(a,E),f(E,p),f(a,v),f(a,O),f(O,C),f(a,X),f(a,y),f(y,G),f(y,T),f(T,o),f(y,m),f(y,P),f(P,J),f(y,_e),f(n,ce),f(n,F),f(F,H),f(H,K),be(L,K,null),f(H,de),f(H,U),be(Y,U,null),f(H,pe),f(H,Z),f(Z,ve),f(F,me),f(F,M);for(let r=0;r<D.length;r+=1)D[r]&&D[r].m(M,null);f(M,ne);for(let r=0;r<S.length;r+=1)S[r]&&S[r].m(M,null);f(M,he);for(let r=0;r<x.length;r+=1)x[r]&&x[r].m(M,null);Se=Ge(F,e[13].bind(F)),ee=!0},p(i,[I]){if(I&28){te=i[2];let r;for(r=0;r<te.length;r+=1){const N=ze(i,te,r);D[r]?D[r].p(N,I):(D[r]=Te(N),D[r].c(),D[r].m(M,ne))}for(;r<D.length;r+=1)D[r].d(1);D.length=te.length}if(I&39){le=i[0];let r;for(r=0;r<le.length;r+=1){const N=Fe(i,le,r);S[r]?S[r].p(N,I):(S[r]=Ne(N),S[r].c(),S[r].m(M,he))}for(;r<S.length;r+=1)S[r].d(1);S.length=le.length}if(I&28){ae=i[2];let r;for(r=0;r<ae.length;r+=1){const N=Ce(i,ae,r);x[r]?x[r].p(N,I):(x[r]=je(N),x[r].c(),x[r].m(M,null))}for(;r<x.length;r+=1)x[r].d(1);x.length=ae.length}(!ee||I&8)&&l(M,"height",i[3]),(!ee||I&2)&&l(M,"width",i[1])},i(i){ee||(we(t.$$.fragment,i),we(L.$$.fragment,i),we(Y.$$.fragment,i),ee=!0)},o(i){ke(t.$$.fragment,i),ke(L.$$.fragment,i),ke(Y.$$.fragment,i),ee=!1},d(i){Ee(t,i),i&&_(s),i&&_(n),Ee(L),Ee(Y),Me(D,i),Me(S,i),Me(x,i),Se()}}}function rt(e,t,s){let n,a,h,u;De(e,Ze,o=>s(8,a=o)),De(e,et,o=>s(9,h=o)),De(e,tt,o=>s(14,u=o));let c=[],g=[];const d=u;async function A(){try{const m=await(await fetch("../ranking_data.csv")).text();s(6,c=Ye(m))}catch(o){console.error("Error loading CSV data:",o)}}Je(()=>{A()});let E,p=100,v=1;function O(o,m){let P=[];for(let J=0;J<=Math.ceil(o/m);J++)P.push(J*m);return P}let C=[];const X=(o,m)=>m.name===o.region,y=(o,m)=>m.name===o.region,G=(o,m)=>m.name===o.region;function T(){E=this.offsetWidth,s(1,E)}return e.$$.update=()=>{e.$$.dirty&832&&s(0,g=c.filter(o=>o.metric==="downtown").filter(o=>o.Season===`Season_${h}`).filter(o=>a.includes(o.region)).sort((o,m)=>m.seasonal_average-o.seasonal_average)),e.$$.dirty&1&&s(3,p=24*g.length+50),e.$$.dirty&1&&s(7,v=g.length!==0?g[0].seasonal_average:1),e.$$.dirty&128&&s(7,v=v<1?1:v),e.$$.dirty&128&&(v<2?s(2,C=O(v,.2)):s(2,C=O(v,.5))),e.$$.dirty&6&&s(4,n=(E-50)/(C.length-1))},[g,E,C,p,n,d,c,v,a,h,X,y,G,T]}class ut extends We{constructor(t){super(),Be(this,t,rt,at,Qe,{})}}export{ut as component,ht as universal};
