import{S as We,i as Je,s as Ye,k as S,q as A,a as X,K as Q,e as oe,l as M,m as b,r as O,h as d,c as K,L as G,n as l,M as qe,b as x,C as c,N as Ue,u as me,D as be,O as we,E as Ie,o as Xe,p as Ke,P as Ne,Q as Qe,y as ce,z as fe,A as ue,g as he,d as _e,B as de}from"../chunks/index.39d4e449.js";import{H as Ge}from"../chunks/global.4c1183bd.js";import{s as Ze,r as xe,c as et}from"../chunks/csv.16668973.js";/* empty css                                                           */import{S as tt}from"../chunks/SelectRegions.5b01550c.js";import{s as lt,l as rt}from"../chunks/simple-statistics.e05c9671.js";const at=!0,mt=Object.freeze(Object.defineProperty({__proto__:null,prerender:at},Symbol.toStringTag,{value:"Module"}));function $e(e,t,o){const r=e.slice();return r[33]=t[o],r[35]=o,r}function Se(e,t,o){const r=e.slice();return r[33]=t[o],r[35]=o,r}function Me(e,t,o){const r=e.slice();return r[35]=t[o],r}function Ae(e,t,o){const r=e.slice();return r[39]=t[o],r[35]=o,r}function Oe(e){let t,o,r,s,i=(100*e[39]).toFixed(0)+"",R,h,k,f,g,p;return{c(){t=Q("line"),s=Q("text"),R=A(i),h=A("%"),f=Q("line"),this.h()},l(m){t=G(m,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(t).forEach(d),s=G(m,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var v=b(s);R=O(v,i),h=O(v,"%"),v.forEach(d),f=G(m,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(f).forEach(d),this.h()},h(){l(t,"class","grid svelte-zm4pmy"),l(t,"x1","40"),l(t,"y1",o=30+e[35]*e[11]),l(t,"x2",e[2]),l(t,"y2",r=30+e[35]*e[11]),l(s,"class","axis-label svelte-zm4pmy"),l(s,"x","35"),l(s,"y",k=35+e[35]*e[11]),l(s,"text-anchor","end"),l(f,"class","grid-white svelte-zm4pmy"),l(f,"x1","37"),l(f,"y1",g=30+e[35]*e[11]),l(f,"x2","45"),l(f,"y2",p=30+e[35]*e[11])},m(m,v){x(m,t,v),x(m,s,v),c(s,R),c(s,h),x(m,f,v)},p(m,v){v[0]&2048&&o!==(o=30+m[35]*m[11])&&l(t,"y1",o),v[0]&4&&l(t,"x2",m[2]),v[0]&2048&&r!==(r=30+m[35]*m[11])&&l(t,"y2",r),v[0]&16&&i!==(i=(100*m[39]).toFixed(0)+"")&&me(R,i),v[0]&2048&&k!==(k=35+m[35]*m[11])&&l(s,"y",k),v[0]&2048&&g!==(g=30+m[35]*m[11])&&l(f,"y1",g),v[0]&2048&&p!==(p=30+m[35]*m[11])&&l(f,"y2",p)},d(m){m&&d(t),m&&d(s),m&&d(f)}}}function Te(e){let t,o,r,s,i,R=(100*e[35]*e[8]).toLocaleString()+"",h,k,f,g,p,m,v,T,P;return{c(){t=Q("line"),i=Q("text"),h=A(R),k=A("%"),p=Q("line"),this.h()},l(_){t=G(_,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(t).forEach(d),i=G(_,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var y=b(i);h=O(y,R),k=O(y,"%"),y.forEach(d),p=G(_,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),b(p).forEach(d),this.h()},h(){l(t,"class","grid svelte-zm4pmy"),l(t,"x1",o=45+e[35]*e[7]),l(t,"y1","22"),l(t,"x2",r=45+e[35]*e[7]),l(t,"y2",s=e[3]-20),l(i,"class","axis-label svelte-zm4pmy"),l(i,"x",f=47+e[35]*e[7]),l(i,"y",g=e[3]-10),l(i,"text-anchor","end"),l(p,"class","grid-white svelte-zm4pmy"),l(p,"x1",m=45+e[35]*e[7]),l(p,"y1",v=e[3]-25),l(p,"x2",T=45+e[35]*e[7]),l(p,"y2",P=e[3]-30)},m(_,y){x(_,t,y),x(_,i,y),c(i,h),c(i,k),x(_,p,y)},p(_,y){y[0]&128&&o!==(o=45+_[35]*_[7])&&l(t,"x1",o),y[0]&128&&r!==(r=45+_[35]*_[7])&&l(t,"x2",r),y[0]&8&&s!==(s=_[3]-20)&&l(t,"y2",s),y[0]&256&&R!==(R=(100*_[35]*_[8]).toLocaleString()+"")&&me(h,R),y[0]&128&&f!==(f=47+_[35]*_[7])&&l(i,"x",f),y[0]&8&&g!==(g=_[3]-10)&&l(i,"y",g),y[0]&128&&m!==(m=45+_[35]*_[7])&&l(p,"x1",m),y[0]&8&&v!==(v=_[3]-25)&&l(p,"y1",v),y[0]&128&&T!==(T=45+_[35]*_[7])&&l(p,"x2",T),y[0]&8&&P!==(P=_[3]-30)&&l(p,"y2",P)},d(_){_&&d(t),_&&d(i),_&&d(p)}}}function Pe(e){let t,o,r;return{c(){t=Q("circle"),this.h()},l(s){t=G(s,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),b(t).forEach(d),this.h()},h(){l(t,"class","point-white svelte-zm4pmy"),l(t,"cx",o=45+ne([0,Z],e[5],parseFloat(e[33][J]))),l(t,"cy",r=30+se(e[10],e[3]-60,e[33].downtown_recovery)),l(t,"r","6"),l(t,"fill","black"),l(t,"stroke","white"),l(t,"stroke-width","3")},m(s,i){x(s,t,i)},p(s,i){i[0]&33&&o!==(o=45+ne([0,Z],s[5],parseFloat(s[33][J])))&&l(t,"cx",o),i[0]&1033&&r!==(r=30+se(s[10],s[3]-60,s[33].downtown_recovery))&&l(t,"cy",r)},d(s){s&&d(t)}}}function Le(e){let t=e[33][J]>=0&&!isNaN(parseFloat(e[33][J])),o,r=t&&Pe(e);return{c(){r&&r.c(),o=oe()},l(s){r&&r.l(s),o=oe()},m(s,i){r&&r.m(s,i),x(s,o,i)},p(s,i){i[0]&1&&(t=s[33][J]>=0&&!isNaN(parseFloat(s[33][J]))),t?r?r.p(s,i):(r=Pe(s),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},d(s){r&&r.d(s),s&&d(o)}}}function je(e){let t,o,r,s,i,R;function h(...f){return e[20](e[33],...f)}function k(...f){return e[21](e[33],...f)}return{c(){t=Q("circle"),this.h()},l(f){t=G(f,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),b(t).forEach(d),this.h()},h(){l(t,"class","point svelte-zm4pmy"),l(t,"cx",o=45+ne([0,Z],e[5],parseFloat(e[33][J]))),l(t,"cy",r=30+se(e[10],e[3]-60,e[33].downtown_recovery)),l(t,"r","6"),l(t,"fill",s=e[13].find(h).colour),l(t,"stroke","white"),l(t,"stroke-width","0")},m(f,g){x(f,t,g),i||(R=[Ne(t,"mouseover",k),Ne(t,"mouseout",e[22])],i=!0)},p(f,g){e=f,g[0]&33&&o!==(o=45+ne([0,Z],e[5],parseFloat(e[33][J])))&&l(t,"cx",o),g[0]&1033&&r!==(r=30+se(e[10],e[3]-60,e[33].downtown_recovery))&&l(t,"cy",r),g[0]&1&&s!==(s=e[13].find(h).colour)&&l(t,"fill",s)},d(f){f&&d(t),i=!1,Qe(R)}}}function Be(e){let t=e[33][J]>=0&&!isNaN(parseFloat(e[33][J])),o,r=t&&je(e);return{c(){r&&r.c(),o=oe()},l(s){r&&r.l(s),o=oe()},m(s,i){r&&r.m(s,i),x(s,o,i)},p(s,i){i[0]&1&&(t=s[33][J]>=0&&!isNaN(parseFloat(s[33][J]))),t?r?r.p(s,i):(r=je(s),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},d(s){r&&r.d(s),s&&d(o)}}}function He(e){let t,o,r,s,i=e[9].city+"",R,h,k,f,g=Math.round(100*e[9].downtown_recovery)+"",p,m,v,T,P=Math.round((100*e[9].transit_recovery).toString())+"",_,y,L,B,H;return{c(){t=Q("foreignObject"),o=S("div"),r=S("p"),s=S("u"),R=A(i),h=X(),k=S("br"),f=A(` 
                            Downtown Recovery: `),p=A(g),m=A(`%
                            `),v=S("br"),T=A(`
                            Transit Recovery: `),_=A(P),y=A("%"),L=X(),this.h()},l(w){t=G(w,"foreignObject",{x:!0,y:!0,width:!0,height:!0});var j=b(t);o=M(j,"DIV",{id:!0,style:!0,class:!0});var C=b(o);r=M(C,"P",{id:!0,class:!0});var D=b(r);s=M(D,"U",{});var z=b(s);R=O(z,i),z.forEach(d),h=K(D),k=M(D,"BR",{}),f=O(D,` 
                            Downtown Recovery: `),p=O(D,g),m=O(D,`%
                            `),v=M(D,"BR",{}),T=O(D,`
                            Transit Recovery: `),_=O(D,P),y=O(D,"%"),D.forEach(d),L=K(C),C.forEach(d),j.forEach(d),this.h()},h(){l(r,"id","tooltip-p"),l(r,"class","svelte-zm4pmy"),l(o,"id","tooltip"),Ke(o,"background-color","black"),l(o,"class","svelte-zm4pmy"),l(t,"x",B=(parseFloat(e[9][J])<Z/2?0:-175)+55+ne([0,Z],e[5],parseFloat(e[9][J]))),l(t,"y",H=22+se(e[10],e[3]-60,e[9].downtown_recovery)),l(t,"width","155"),l(t,"height","50")},m(w,j){x(w,t,j),c(t,o),c(o,r),c(r,s),c(s,R),c(r,h),c(r,k),c(r,f),c(r,p),c(r,m),c(r,v),c(r,T),c(r,_),c(r,y),c(o,L)},p(w,j){j[0]&512&&i!==(i=w[9].city+"")&&me(R,i),j[0]&512&&g!==(g=Math.round(100*w[9].downtown_recovery)+"")&&me(p,g),j[0]&512&&P!==(P=Math.round((100*w[9].transit_recovery).toString())+"")&&me(_,P),j[0]&544&&B!==(B=(parseFloat(w[9][J])<Z/2?0:-175)+55+ne([0,Z],w[5],parseFloat(w[9][J])))&&l(t,"x",B),j[0]&1544&&H!==(H=22+se(w[10],w[3]-60,w[9].downtown_recovery))&&l(t,"y",H)},d(w){w&&d(t)}}}function ot(e){let t,o,r,s,i,R,h,k,f,g,p,m,v,T,P,_,y,L=e[6].toFixed(3)+"",B,H,w,j,C,D,z,q,te,le,re=e[4].reverse(),u=[];for(let n=0;n<re.length;n+=1)u[n]=Oe(Ae(e,re,n));let W=[0,1,2,3,4,5,6,7],U=[];for(let n=0;n<8;n+=1)U[n]=Te(Me(e,W,n));let ee=e[0],V=[];for(let n=0;n<ee.length;n+=1)V[n]=Le(Se(e,ee,n));let ae=e[0],I=[];for(let n=0;n<ae.length;n+=1)I[n]=Be($e(e,ae,n));let N=e[9]!=null&&He(e);return{c(){t=S("div"),o=S("div"),r=S("h3"),s=A(e[12]),i=A(" Ridership & Downtown Recovery"),R=X(),h=Q("svg");for(let n=0;n<u.length;n+=1)u[n].c();k=oe();for(let n=0;n<8;n+=1)U[n].c();f=Q("line");for(let n=0;n<V.length;n+=1)V[n].c();T=oe();for(let n=0;n<I.length;n+=1)I[n].c();P=oe(),N&&N.c(),_=Q("text"),y=A("Correlation Coefficient: "),B=A(L),w=Q("text"),j=A(e[12]),C=A(" Ridership Recovery"),q=Q("text"),te=A("Downtown Recovery"),this.h()},l(n){t=M(n,"DIV",{class:!0});var E=b(t);o=M(E,"DIV",{id:!0,class:!0});var a=b(o);r=M(a,"H3",{class:!0});var F=b(r);s=O(F,e[12]),i=O(F," Ridership & Downtown Recovery"),F.forEach(d),R=K(a),h=G(a,"svg",{height:!0,width:!0,id:!0,class:!0});var $=b(h);for(let Y=0;Y<u.length;Y+=1)u[Y].l($);k=oe();for(let Y=0;Y<8;Y+=1)U[Y].l($);f=G($,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0,"stroke-dasharray":!0}),b(f).forEach(d);for(let Y=0;Y<V.length;Y+=1)V[Y].l($);T=oe();for(let Y=0;Y<I.length;Y+=1)I[Y].l($);P=oe(),N&&N.l($),_=G($,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var ve=b(_);y=O(ve,"Correlation Coefficient: "),B=O(ve,L),ve.forEach(d),w=G($,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var pe=b(w);j=O(pe,e[12]),C=O(pe," Ridership Recovery"),pe.forEach(d),q=G($,"text",{class:!0,x:!0,y:!0,"text-anchor":!0,transform:!0});var ge=b(q);te=O(ge,"Downtown Recovery"),ge.forEach(d),$.forEach(d),a.forEach(d),E.forEach(d),this.h()},h(){l(r,"class","svelte-zm4pmy"),l(f,"x1",g=45+ne([0,Z],e[5],parseFloat(e[1][0][0]))),l(f,"y1",p=30+se(e[10],e[3]-60,parseFloat(e[1][0][1]))),l(f,"x2",m=45+ne([0,Z],e[5],parseFloat(e[1][1][0]))),l(f,"y2",v=30+se(e[10],e[3]-60,parseFloat(e[1][1][1]))),l(f,"stroke","#D0D1C9"),l(f,"stroke-width","1.5"),l(f,"stroke-dasharray","4 2"),l(_,"class","axis-label svelte-zm4pmy"),l(_,"x",H=e[2]/2),l(_,"y",20),l(_,"text-anchor","middle"),l(w,"class","axis-label svelte-zm4pmy"),l(w,"x",D=e[2]/2+14),l(w,"y",z=e[3]-40),l(w,"text-anchor","middle"),l(q,"class","axis-label svelte-zm4pmy"),l(q,"x","300"),l(q,"y",375),l(q,"text-anchor","middle"),l(q,"transform","rotate(-90, 60, 375)"),l(h,"height",e[3]),l(h,"width",e[2]),l(h,"id","chart"),l(h,"class","svelte-zm4pmy"),l(o,"id","chart-wrapper"),l(o,"class","svelte-zm4pmy"),qe(()=>e[23].call(o)),l(t,"class","text svelte-zm4pmy")},m(n,E){x(n,t,E),c(t,o),c(o,r),c(r,s),c(r,i),c(o,R),c(o,h);for(let a=0;a<u.length;a+=1)u[a]&&u[a].m(h,null);c(h,k);for(let a=0;a<8;a+=1)U[a]&&U[a].m(h,null);c(h,f);for(let a=0;a<V.length;a+=1)V[a]&&V[a].m(h,null);c(h,T);for(let a=0;a<I.length;a+=1)I[a]&&I[a].m(h,null);c(h,P),N&&N.m(h,null),c(h,_),c(_,y),c(_,B),c(h,w),c(w,j),c(w,C),c(h,q),c(q,te),le=Ue(o,e[23].bind(o))},p(n,E){if(E[0]&2068){re=n[4].reverse();let a;for(a=0;a<re.length;a+=1){const F=Ae(n,re,a);u[a]?u[a].p(F,E):(u[a]=Oe(F),u[a].c(),u[a].m(h,k))}for(;a<u.length;a+=1)u[a].d(1);u.length=re.length}if(E[0]&392){W=[0,1,2,3,4,5,6,7];let a;for(a=0;a<8;a+=1){const F=Me(n,W,a);U[a]?U[a].p(F,E):(U[a]=Te(F),U[a].c(),U[a].m(h,f))}for(;a<8;a+=1)U[a].d(1)}if(E[0]&34&&g!==(g=45+ne([0,Z],n[5],parseFloat(n[1][0][0])))&&l(f,"x1",g),E[0]&1034&&p!==(p=30+se(n[10],n[3]-60,parseFloat(n[1][0][1])))&&l(f,"y1",p),E[0]&34&&m!==(m=45+ne([0,Z],n[5],parseFloat(n[1][1][0])))&&l(f,"x2",m),E[0]&1034&&v!==(v=30+se(n[10],n[3]-60,parseFloat(n[1][1][1])))&&l(f,"y2",v),E[0]&1065){ee=n[0];let a;for(a=0;a<ee.length;a+=1){const F=Se(n,ee,a);V[a]?V[a].p(F,E):(V[a]=Le(F),V[a].c(),V[a].m(h,T))}for(;a<V.length;a+=1)V[a].d(1);V.length=ee.length}if(E[0]&26153){ae=n[0];let a;for(a=0;a<ae.length;a+=1){const F=$e(n,ae,a);I[a]?I[a].p(F,E):(I[a]=Be(F),I[a].c(),I[a].m(h,P))}for(;a<I.length;a+=1)I[a].d(1);I.length=ae.length}n[9]!=null?N?N.p(n,E):(N=He(n),N.c(),N.m(h,_)):N&&(N.d(1),N=null),E[0]&64&&L!==(L=n[6].toFixed(3)+"")&&me(B,L),E[0]&4&&H!==(H=n[2]/2)&&l(_,"x",H),E[0]&4&&D!==(D=n[2]/2+14)&&l(w,"x",D),E[0]&8&&z!==(z=n[3]-40)&&l(w,"y",z),E[0]&8&&l(h,"height",n[3]),E[0]&4&&l(h,"width",n[2])},i:be,o:be,d(n){n&&d(t),we(u,n),we(U,n),we(V,n),we(I,n),N&&N.d(),le()}}}let st=1.4,J="transit_recovery",Z=1.4;function nt(e,t){let o=[];for(let r=0;r<=Math.ceil(e/t);r++)o.push(r*t);return o}function se(e,t,o){return t-t*o/(e[1]-e[0])}function ne(e,t,o){return t*o/(e[1]-e[0])}function it(e,t,o,r,s,i){let R,h,k,f,g=e*o+t;g>=r&&g<=i?(R=o,h=g):e>0?(R=(r-t)/e,h=r):(R=(i-t)/e,h=i);let p=e*s+t;return p>=r&&p<=i?(k=s,f=p):e>0?(k=(i-t)/e,f=i):(k=(r-t)/e,f=r),[[R,h],[k,f]]}function ct(e,t,o){let r,s,i,R;Ie(e,Ze,u=>o(19,i=u)),Ie(e,xe,u=>o(28,R=u));let{transitVariable:h}=t;const k=[{id:"MB",name:"Bus",colour:"#6D247A"},{id:"CR",name:"Commuter Rail",colour:"#8DBF2E"},{id:"LR",name:"Light Rail",colour:"#DC4633"},{id:"HR",name:"Subway/Metro",colour:"#6FC7EA"},{id:"Total",name:"Transit",colour:"#6FC7EA"}];let f=k.filter(u=>u.id===h)[0].name;k.filter(u=>u.id===h)[0].colour;let g=[],p=[],m=0,v,T=[[0,0],[1,1]];const P=R;async function _(){try{const W=await(await fetch("../transit-and-downtown-recovery.csv")).text();o(16,g=et(W)),console.log(g)}catch(u){console.error("Error loading CSV data:",u)}}Xe(()=>{_()});let y,L=420,B=[0,1],H=100,w=.1,j=1,C;const D=function(u){u.clientX,u.clientY};let z=[];const q=(u,W)=>W.name===u.region,te=(u,W)=>{o(9,C=u),D(W)},le=()=>{o(9,C=void 0)};function re(){y=this.offsetWidth,o(2,y)}return e.$$set=u=>{"transitVariable"in u&&o(15,h=u.transitVariable)},e.$$.update=()=>{e.$$.dirty[0]&622592&&o(0,p=g.filter(u=>u.mode===h).filter(u=>i.includes(u.region)).sort((u,W)=>W.downtown_recovery-u.downtown_recovery)),e.$$.dirty[0]&4&&o(3,L=y*1+20),e.$$.dirty[0]&24&&o(11,r=(L-60)/(B.length-1)),e.$$.dirty[0]&16&&o(10,s=[Math.min(...B),Math.max(...B)]),e.$$.dirty[0]&4&&o(5,H=y-45-10),e.$$.dirty[0]&32&&o(7,w=H/7),e.$$.dirty[0]&1&&o(18,z=p.filter(u=>!isNaN(parseFloat(u[J])))),e.$$.dirty[0]&262144&&console.log(z),e.$$.dirty[0]&262144&&o(6,m=z.length>0?lt(z.map(u=>parseFloat(u[J])),z.map(u=>parseFloat(u.downtown_recovery))):0),e.$$.dirty[0]&262144&&o(17,v=z.length>0?rt(z.map(u=>[parseFloat(u[J]),parseFloat(u.downtown_recovery)])):null),e.$$.dirty[0]&131088&&o(1,T=v!==null?it(v.m,v.b,0,0,Z,Math.max(...B)):[[0,0],[1.4,1.4]]),e.$$.dirty[0]&2&&console.log(T),e.$$.dirty[0]&131072&&v!==null&&100*v.m,e.$$.dirty[0]&131072&&v!==null&&100*v.b},o(4,B=nt(st,.2)),o(8,j=Z/7),[p,T,y,L,B,H,m,w,j,C,s,r,f,P,D,h,g,v,z,i,q,te,le,re]}class ye extends We{constructor(t){super(),Je(this,t,ct,ot,Ye,{transitVariable:15},null,[-1,-1])}}function ft(e){let t,o,r,s,i,R,h,k,f,g,p,m,v,T,P,_,y,L,B,H,w,j,C,D,z,q,te,le,re,u,W,U,ee,V,ae,I,N,n,E;return t=new Ge({}),p=new ye({props:{transitVariable:"Total"}}),L=new tt({props:{europe:"no"}}),z=new ye({props:{transitVariable:"MB"}}),le=new ye({props:{transitVariable:"LR"}}),W=new ye({props:{transitVariable:"HR"}}),V=new ye({props:{transitVariable:"CR"}}),{c(){ce(t.$$.fragment),o=X(),r=S("main"),s=S("div"),i=S("h3"),R=A("Downtown Recovery & Transit Ridership Recovery"),h=X(),k=S("p"),f=A("In the aftermath of the COVID-19 pandemic, the revival of downtown areas and public transit systems has been a hot topic. As cities all over North America faced pandemic challenges, we decided to explore the connection between downtown recovery and public transit resurgence. Our journey took us across different types of public transport, including Commuter Rail, Heavy Rail, Light Rail, and Buses in cities across North America."),g=X(),ce(p.$$.fragment),m=X(),v=S("p"),T=A("The colours of the dots pertain to the region of the city. Feel free to toggle each region on or off by clicking on each below. You can also hover over each point to view the name of the city and its statistics."),P=X(),_=S("div"),y=S("div"),ce(L.$$.fragment),B=X(),H=S("p"),w=A("We've also created charts for different modes of transit; busses, light rail, heavy rail (i.e. metro and subway), and commuter rail. Check them out below"),j=X(),C=S("div"),D=S("div"),ce(z.$$.fragment),q=X(),te=S("div"),ce(le.$$.fragment),re=X(),u=S("div"),ce(W.$$.fragment),U=X(),ee=S("div"),ce(V.$$.fragment),ae=X(),I=S("div"),N=S("p"),n=A("Note that the data on these charts for downtown recovery are slightly different than elsewhere on this site. This is because they were calculated for Jan 2023 to June 2023 to align with the ridership data that we had access to."),this.h()},l(a){fe(t.$$.fragment,a),o=K(a),r=M(a,"MAIN",{});var F=b(r);s=M(F,"DIV",{class:!0});var $=b(s);i=M($,"H3",{class:!0});var ve=b(i);R=O(ve,"Downtown Recovery & Transit Ridership Recovery"),ve.forEach(d),h=K($),k=M($,"P",{class:!0});var pe=b(k);f=O(pe,"In the aftermath of the COVID-19 pandemic, the revival of downtown areas and public transit systems has been a hot topic. As cities all over North America faced pandemic challenges, we decided to explore the connection between downtown recovery and public transit resurgence. Our journey took us across different types of public transport, including Commuter Rail, Heavy Rail, Light Rail, and Buses in cities across North America."),pe.forEach(d),g=K($),fe(p.$$.fragment,$),m=K($),v=M($,"P",{class:!0});var ge=b(v);T=O(ge,"The colours of the dots pertain to the region of the city. Feel free to toggle each region on or off by clicking on each below. You can also hover over each point to view the name of the city and its statistics."),ge.forEach(d),P=K($),_=M($,"DIV",{id:!0,class:!0});var Y=b(_);y=M(Y,"DIV",{id:!0});var Re=b(y);fe(L.$$.fragment,Re),Re.forEach(d),Y.forEach(d),B=K($),H=M($,"P",{class:!0});var ke=b(H);w=O(ke,"We've also created charts for different modes of transit; busses, light rail, heavy rail (i.e. metro and subway), and commuter rail. Check them out below"),ke.forEach(d),$.forEach(d),j=K(F),C=M(F,"DIV",{class:!0});var ie=b(C);D=M(ie,"DIV",{class:!0});var Ee=b(D);fe(z.$$.fragment,Ee),Ee.forEach(d),q=K(ie),te=M(ie,"DIV",{class:!0});var De=b(te);fe(le.$$.fragment,De),De.forEach(d),re=K(ie),u=M(ie,"DIV",{class:!0});var Fe=b(u);fe(W.$$.fragment,Fe),Fe.forEach(d),U=K(ie),ee=M(ie,"DIV",{class:!0});var Ve=b(ee);fe(V.$$.fragment,Ve),Ve.forEach(d),ie.forEach(d),ae=K(F),I=M(F,"DIV",{class:!0});var Ce=b(I);N=M(Ce,"P",{class:!0});var ze=b(N);n=O(ze,"Note that the data on these charts for downtown recovery are slightly different than elsewhere on this site. This is because they were calculated for Jan 2023 to June 2023 to align with the ridership data that we had access to."),ze.forEach(d),Ce.forEach(d),F.forEach(d),this.h()},h(){l(i,"class","svelte-1eglpgn"),l(k,"class","svelte-1eglpgn"),l(v,"class","svelte-1eglpgn"),l(y,"id","options-region"),l(_,"id","options"),l(_,"class","svelte-1eglpgn"),l(H,"class","svelte-1eglpgn"),l(s,"class","text svelte-1eglpgn"),l(D,"class","grid-cell svelte-1eglpgn"),l(te,"class","grid-cell svelte-1eglpgn"),l(u,"class","grid-cell svelte-1eglpgn"),l(ee,"class","grid-cell svelte-1eglpgn"),l(C,"class","grid svelte-1eglpgn"),l(N,"class","svelte-1eglpgn"),l(I,"class","text svelte-1eglpgn")},m(a,F){ue(t,a,F),x(a,o,F),x(a,r,F),c(r,s),c(s,i),c(i,R),c(s,h),c(s,k),c(k,f),c(s,g),ue(p,s,null),c(s,m),c(s,v),c(v,T),c(s,P),c(s,_),c(_,y),ue(L,y,null),c(s,B),c(s,H),c(H,w),c(r,j),c(r,C),c(C,D),ue(z,D,null),c(C,q),c(C,te),ue(le,te,null),c(C,re),c(C,u),ue(W,u,null),c(C,U),c(C,ee),ue(V,ee,null),c(r,ae),c(r,I),c(I,N),c(N,n),E=!0},p:be,i(a){E||(he(t.$$.fragment,a),he(p.$$.fragment,a),he(L.$$.fragment,a),he(z.$$.fragment,a),he(le.$$.fragment,a),he(W.$$.fragment,a),he(V.$$.fragment,a),E=!0)},o(a){_e(t.$$.fragment,a),_e(p.$$.fragment,a),_e(L.$$.fragment,a),_e(z.$$.fragment,a),_e(le.$$.fragment,a),_e(W.$$.fragment,a),_e(V.$$.fragment,a),E=!1},d(a){de(t,a),a&&d(o),a&&d(r),de(p),de(L),de(z),de(le),de(W),de(V)}}}class gt extends We{constructor(t){super(),Je(this,t,null,ft,Ye,{})}}export{gt as component,mt as universal};
