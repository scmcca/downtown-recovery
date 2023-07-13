import{S as lt,i as it,s as rt,k as R,q as A,a as X,l as P,m as w,r as H,h as v,c as L,n as a,b as B,C as h,K as at,L as Ie,D as Fe,M as me,E as pe,y as be,N as $,e as Q,z as we,O as x,P as ot,A as ke,Q as nt,g as Ce,d as Ee,B as Re,o as st,u as ge,p as Pe,R as ct}from"../chunks/index.a4677e45.js";import{H as ut}from"../chunks/global.a88059fe.js";import{S as ft,a as ht}from"../chunks/SelectRegions.4f58e5cd.js";import{s as Ae,c as Ne,a as _t,b as dt,r as vt}from"../chunks/csv.a309fd1d.js";const mt=!0,St=Object.freeze(Object.defineProperty({__proto__:null,prerender:mt},Symbol.toStringTag,{value:"Module"}));function ze(e,t,l){const i=e.slice();return i[4]=t[l],i}function Ue(e){let t,l=e[4].text+"",i;return{c(){t=R("option"),i=A(l),this.h()},l(r){t=P(r,"OPTION",{class:!0});var _=w(t);i=H(_,l),_.forEach(v),this.h()},h(){t.__value=e[4].value,t.value=t.__value,a(t,"class","svelte-19nzrqx")},m(r,_){B(r,t,_),h(t,i)},p:Fe,d(r){r&&v(t)}}}function pt(e){let t,l,i,r,_,b,y=e[0],f=[];for(let s=0;s<y.length;s+=1)f[s]=Ue(ze(e,y,s));return{c(){t=R("p"),l=A("Select Variable:"),i=X(),r=R("select");for(let s=0;s<f.length;s+=1)f[s].c();this.h()},l(s){t=P(s,"P",{});var m=w(t);l=H(m,"Select Variable:"),m.forEach(v),i=L(s),r=P(s,"SELECT",{class:!0});var c=w(r);for(let u=0;u<f.length;u+=1)f[u].l(c);c.forEach(v),this.h()},h(){a(r,"class","svelte-19nzrqx")},m(s,m){B(s,t,m),h(t,l),B(s,i,m),B(s,r,m);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(r,null);at(r,e[1]),_||(b=Ie(r,"change",e[2]),_=!0)},p(s,[m]){if(m&1){y=s[0];let c;for(c=0;c<y.length;c+=1){const u=ze(s,y,c);f[c]?f[c].p(u,m):(f[c]=Ue(u),f[c].c(),f[c].m(r,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=y.length}},i:Fe,o:Fe,d(s){s&&v(t),s&&v(i),s&&v(r),me(f,s),_=!1,b()}}}function gt(e,t,l){let i;pe(e,Ae,y=>l(3,i=y));const r=[{value:"total_pop_city",text:"Metro population"},{value:"population_density_city",text:"City-wide Population Density"},{value:"housing_units_city",text:"City-wide Total Housing Stock"},{value:"housing_density_city",text:"City-wide Housing Density"},{value:"pct_renter_city",text:"City-wide Percentage of Rented-Occupied Units"},{value:"pct_singlefam_city",text:"City-wide Percentage of Single-Family Homes"},{value:"pct_multifam_city",text:"City-wide Percentage of Multi-Family Homes"},{value:"median_age_city",text:"City-wide Median Age of Residents"},{value:"bachelor_plus_city",text:"City-wide Percentage of Residents with a Bachelor's Degree or Higher"},{value:"pct_vacant_city",text:"City-wide Percentage of Vacant Housing Units"},{value:"median_rent_city",text:"City-wide Median Rent of Housing Units"},{value:"median_hhinc_city",text:"City-wide Median Household Income of Residents"},{value:"pct_nhwhite_city",text:"City-wide Percentage of White Residents"},{value:"pct_nhblack_city",text:"City-wide Percentage of Black Residents"},{value:"pct_hisp_city",text:"City-wide Percentage of Hispanic Residents"},{value:"pct_nhasian_city",text:"City-wide Percentage of Asian Residents"},{value:"pct_commute_auto_city",text:"City-wide Percentage of Residents who Commute to Work by Car"},{value:"pct_commute_public_transit_city",text:"City-wide Percentage of Residents who Commute to Work by Public Transit"},{value:"pct_commute_bicycle_city",text:"City-wide Percentage of Residents who Commute to Work by Bicycle"},{value:"pct_commute_walk_city",text:"City-wide Percentage of Residents who Commute to Work by Walking"},{value:"pct_commute_others_city",text:"City-wide Percentage of Residents who Commute to Work by Other Modes"},{value:"average_commute_time_city",text:"City-wide Average Commute Time"}];let _=i;function b(y){const f=y.target.value;Ae.set(f)}return[r,_,b]}class yt extends lt{constructor(t){super(),it(this,t,gt,pt,rt,{})}}function Xe(e,t,l){const i=e.slice();return i[33]=t[l],i[35]=l,i}function Le(e,t,l){const i=e.slice();return i[33]=t[l],i[35]=l,i}function Ye(e,t,l){const i=e.slice();return i[35]=t[l],i}function Ke(e,t,l){const i=e.slice();return i[39]=t[l],i[35]=l,i}function Qe(e){let t,l,i,r,_=(100*e[39]).toFixed(0)+"",b,y,f,s,m,c;return{c(){t=$("line"),r=$("text"),b=A(_),y=A("%"),s=$("line"),this.h()},l(u){t=x(u,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),w(t).forEach(v),r=x(u,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var C=w(r);b=H(C,_),y=H(C,"%"),C.forEach(v),s=x(u,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),w(s).forEach(v),this.h()},h(){a(t,"class","grid svelte-52hdfh"),a(t,"x1","40"),a(t,"y1",l=30+e[35]*e[11]),a(t,"x2",e[1]),a(t,"y2",i=30+e[35]*e[11]),a(r,"class","axis-label svelte-52hdfh"),a(r,"x","35"),a(r,"y",f=35+e[35]*e[11]),a(r,"text-anchor","end"),a(s,"class","grid-white svelte-52hdfh"),a(s,"x1","37"),a(s,"y1",m=30+e[35]*e[11]),a(s,"x2","45"),a(s,"y2",c=30+e[35]*e[11])},m(u,C){B(u,t,C),B(u,r,C),h(r,b),h(r,y),B(u,s,C)},p(u,C){C[0]&2048&&l!==(l=30+u[35]*u[11])&&a(t,"y1",l),C[0]&2&&a(t,"x2",u[1]),C[0]&2048&&i!==(i=30+u[35]*u[11])&&a(t,"y2",i),C[0]&8&&_!==(_=(100*u[39]).toFixed(0)+"")&&ge(b,_),C[0]&2048&&f!==(f=35+u[35]*u[11])&&a(r,"y",f),C[0]&2048&&m!==(m=30+u[35]*u[11])&&a(s,"y1",m),C[0]&2048&&c!==(c=30+u[35]*u[11])&&a(s,"y2",c)},d(u){u&&v(t),u&&v(r),u&&v(s)}}}function Ge(e){let t,l,i,r,_=(e[35]*e[8]).toLocaleString()+"",b,y,f,s,m;return{c(){t=$("line"),r=$("text"),b=A(_),f=$("line"),this.h()},l(c){t=x(c,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),w(t).forEach(v),r=x(c,"text",{class:!0,x:!0,y:!0,"text-anchor":!0});var u=w(r);b=H(u,_),u.forEach(v),f=x(c,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0}),w(f).forEach(v),this.h()},h(){a(t,"class","grid svelte-52hdfh"),a(t,"x1",l=45+e[35]*e[7]),a(t,"y1","22"),a(t,"x2",i=45+e[35]*e[7]),a(t,"y2",e[2]),a(r,"class","axis-label svelte-52hdfh"),a(r,"x",y=47+e[35]*e[7]),a(r,"y","17"),a(r,"text-anchor","end"),a(f,"class","grid-white svelte-52hdfh"),a(f,"x1",s=45+e[35]*e[7]),a(f,"y1","22"),a(f,"x2",m=45+e[35]*e[7]),a(f,"y2","31")},m(c,u){B(c,t,u),B(c,r,u),h(r,b),B(c,f,u)},p(c,u){u[0]&128&&l!==(l=45+c[35]*c[7])&&a(t,"x1",l),u[0]&128&&i!==(i=45+c[35]*c[7])&&a(t,"x2",i),u[0]&4&&a(t,"y2",c[2]),u[0]&256&&_!==(_=(c[35]*c[8]).toLocaleString()+"")&&ge(b,_),u[0]&128&&y!==(y=47+c[35]*c[7])&&a(r,"x",y),u[0]&128&&s!==(s=45+c[35]*c[7])&&a(f,"x1",s),u[0]&128&&m!==(m=45+c[35]*c[7])&&a(f,"x2",m)},d(c){c&&v(t),c&&v(r),c&&v(f)}}}function Je(e){let t,l,i;return{c(){t=$("circle"),this.h()},l(r){t=x(r,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),w(t).forEach(v),this.h()},h(){a(t,"class","point-white svelte-52hdfh"),a(t,"cx",l=45+_e([0,e[5]],e[4],parseFloat(e[33][e[6]]))),a(t,"cy",i=30+he(e[10],e[2]-40,e[33].seasonal_average)),a(t,"r","6"),a(t,"fill","black"),a(t,"stroke","white"),a(t,"stroke-width","3")},m(r,_){B(r,t,_)},p(r,_){_[0]&113&&l!==(l=45+_e([0,r[5]],r[4],parseFloat(r[33][r[6]])))&&a(t,"cx",l),_[0]&1029&&i!==(i=30+he(r[10],r[2]-40,r[33].seasonal_average))&&a(t,"cy",i)},d(r){r&&v(t)}}}function Ze(e){let t,l=e[33][e[6]]>=0&&Je(e);return{c(){l&&l.c(),t=Q()},l(i){l&&l.l(i),t=Q()},m(i,r){l&&l.m(i,r),B(i,t,r)},p(i,r){i[33][i[6]]>=0?l?l.p(i,r):(l=Je(i),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(i){l&&l.d(i),i&&v(t)}}}function $e(e){let t,l,i,r,_,b;function y(...s){return e[22](e[33],...s)}function f(...s){return e[23](e[33],...s)}return{c(){t=$("circle"),this.h()},l(s){t=x(s,"circle",{class:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),w(t).forEach(v),this.h()},h(){a(t,"class","point svelte-52hdfh"),a(t,"cx",l=45+_e([0,e[5]],e[4],parseFloat(e[33][e[6]]))),a(t,"cy",i=30+he(e[10],e[2]-40,e[33].seasonal_average)),a(t,"r","6"),a(t,"fill",r=e[12].find(y).colour),a(t,"stroke","white"),a(t,"stroke-width","0")},m(s,m){B(s,t,m),_||(b=[Ie(t,"mouseover",f),Ie(t,"mouseout",e[24])],_=!0)},p(s,m){e=s,m[0]&113&&l!==(l=45+_e([0,e[5]],e[4],parseFloat(e[33][e[6]])))&&a(t,"cx",l),m[0]&1029&&i!==(i=30+he(e[10],e[2]-40,e[33].seasonal_average))&&a(t,"cy",i),m[0]&1&&r!==(r=e[12].find(y).colour)&&a(t,"fill",r)},d(s){s&&v(t),_=!1,ct(b)}}}function xe(e){let t,l=e[33][e[6]]>=0&&$e(e);return{c(){l&&l.c(),t=Q()},l(i){l&&l.l(i),t=Q()},m(i,r){l&&l.m(i,r),B(i,t,r)},p(i,r){i[33][i[6]]>=0?l?l.p(i,r):(l=$e(i),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(i){l&&l.d(i),i&&v(t)}}}function et(e){let t,l,i,r,_=e[9].city+"",b,y,f,s,m=Math.round(100*e[9].seasonal_average)+"",c,u,C,z,G=e[9][e[6]].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"",M,Y,D;return{c(){t=$("foreignObject"),l=R("div"),i=R("p"),r=R("u"),b=A(_),y=X(),f=R("br"),s=A(` 
                        Recovery Rate: `),c=A(m),u=A(`%
                        `),C=R("br"),z=A(`
                        X-Value: `),M=A(G),this.h()},l(p){t=x(p,"foreignObject",{x:!0,y:!0,width:!0,height:!0});var g=w(t);l=P(g,"DIV",{id:!0,style:!0,class:!0});var S=w(l);i=P(S,"P",{id:!0,style:!0,class:!0});var E=w(i);r=P(E,"U",{});var T=w(r);b=H(T,_),T.forEach(v),y=L(E),f=P(E,"BR",{}),s=H(E,` 
                        Recovery Rate: `),c=H(E,m),u=H(E,`%
                        `),C=P(E,"BR",{}),z=H(E,`
                        X-Value: `),M=H(E,G),E.forEach(v),S.forEach(v),g.forEach(v),this.h()},h(){a(i,"id","tooltip-p"),Pe(i,"color",e[12].find(e[25]).text),a(i,"class","svelte-52hdfh"),a(l,"id","tooltip"),Pe(l,"background-color",e[12].find(e[26]).colour),a(l,"class","svelte-52hdfh"),a(t,"x",Y=(parseFloat(e[9][e[6]])<e[5]/2?0:-145)+55+_e([0,e[5]],e[4],parseFloat(e[9][e[6]]))),a(t,"y",D=22+he(e[10],e[2]-40,e[9].seasonal_average)),a(t,"width","125"),a(t,"height","50")},m(p,g){B(p,t,g),h(t,l),h(l,i),h(i,r),h(r,b),h(i,y),h(i,f),h(i,s),h(i,c),h(i,u),h(i,C),h(i,z),h(i,M)},p(p,g){g[0]&512&&_!==(_=p[9].city+"")&&ge(b,_),g[0]&512&&m!==(m=Math.round(100*p[9].seasonal_average)+"")&&ge(c,m),g[0]&576&&G!==(G=p[9][p[6]].toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")+"")&&ge(M,G),g[0]&512&&Pe(i,"color",p[12].find(p[25]).text),g[0]&512&&Pe(l,"background-color",p[12].find(p[26]).colour),g[0]&624&&Y!==(Y=(parseFloat(p[9][p[6]])<p[5]/2?0:-145)+55+_e([0,p[5]],p[4],parseFloat(p[9][p[6]])))&&a(t,"x",Y),g[0]&1540&&D!==(D=22+he(p[10],p[2]-40,p[9].seasonal_average))&&a(t,"y",D)},d(p){p&&v(t)}}}function bt(e){let t,l,i,r,_,b,y,f,s,m,c,u,C,z,G,M,Y,D,p,g,S,E,T,te,J,U,le,ee,de,k,ie,re,ae,d,W,ve,Ve,Se,Me,De,He,oe;t=new ut({}),T=new ft({}),U=new ht({props:{europe:"no"}}),ee=new yt({});let ne=e[3].reverse(),O=[];for(let n=0;n<ne.length;n+=1)O[n]=Qe(Ke(e,ne,n));let Oe=[0,1,2,3,4],K=[];for(let n=0;n<5;n+=1)K[n]=Ge(Ye(e,Oe,n));let se=e[0],I=[];for(let n=0;n<se.length;n+=1)I[n]=Ze(Le(e,se,n));let ce=e[0],F=[];for(let n=0;n<ce.length;n+=1)F[n]=xe(Xe(e,ce,n));let q=e[9]!=null&&et(e);return{c(){be(t.$$.fragment),l=X(),i=R("main"),r=R("div"),_=R("h1"),b=A("Downtown Recovery Correlations"),y=X(),f=R("p"),s=A("The recovery metrics on these charts are computed by counting the number unique visitors in a city's downtown area in the specified time period, and then dividing it by the number of unique visitors during the equivalent time period in 2019. Visits are based on a sample of mobile phone data."),m=X(),c=R("p"),u=A("A recovery metric greater than 100% means that for the selected inputs, the mobile device activity increased from the comparison period. A value less than 100% means the opposite, that the city's downtown has not recovered to pre-COVID activity levels."),C=X(),z=R("p"),G=A("For more information, read our "),M=R("a"),Y=A("Methodology"),D=A(" page."),p=X(),g=R("div"),S=R("div"),E=R("div"),be(T.$$.fragment),te=X(),J=R("div"),be(U.$$.fragment),le=X(),be(ee.$$.fragment),de=X(),k=$("svg");for(let n=0;n<O.length;n+=1)O[n].c();ie=Q();for(let n=0;n<5;n+=1)K[n].c();re=Q();for(let n=0;n<I.length;n+=1)I[n].c();ae=Q();for(let n=0;n<F.length;n+=1)F[n].c();d=Q(),q&&q.c(),W=X(),ve=R("br"),Ve=X(),Se=R("br"),Me=X(),De=R("br"),this.h()},l(n){we(t.$$.fragment,n),l=L(n),i=P(n,"MAIN",{class:!0});var V=w(i);r=P(V,"DIV",{class:!0});var o=w(r);_=P(o,"H1",{});var N=w(_);b=H(N,"Downtown Recovery Correlations"),N.forEach(v),y=L(o),f=P(o,"P",{});var Be=w(f);s=H(Be,"The recovery metrics on these charts are computed by counting the number unique visitors in a city's downtown area in the specified time period, and then dividing it by the number of unique visitors during the equivalent time period in 2019. Visits are based on a sample of mobile phone data."),Be.forEach(v),m=L(o),c=P(o,"P",{});var qe=w(c);u=H(qe,"A recovery metric greater than 100% means that for the selected inputs, the mobile device activity increased from the comparison period. A value less than 100% means the opposite, that the city's downtown has not recovered to pre-COVID activity levels."),qe.forEach(v),C=L(o),z=P(o,"P",{});var ye=w(z);G=H(ye,"For more information, read our "),M=P(ye,"A",{href:!0});var We=w(M);Y=H(We,"Methodology"),We.forEach(v),D=H(ye," page."),ye.forEach(v),o.forEach(v),p=L(V),g=P(V,"DIV",{id:!0,class:!0});var Z=w(g);S=P(Z,"DIV",{id:!0,class:!0});var ue=w(S);E=P(ue,"DIV",{id:!0,class:!0});var je=w(E);we(T.$$.fragment,je),je.forEach(v),te=L(ue),J=P(ue,"DIV",{id:!0,class:!0});var Te=w(J);we(U.$$.fragment,Te),Te.forEach(v),le=L(ue),we(ee.$$.fragment,ue),ue.forEach(v),de=L(Z),k=x(Z,"svg",{height:!0,width:!0,id:!0,class:!0});var fe=w(k);for(let j=0;j<O.length;j+=1)O[j].l(fe);ie=Q();for(let j=0;j<5;j+=1)K[j].l(fe);re=Q();for(let j=0;j<I.length;j+=1)I[j].l(fe);ae=Q();for(let j=0;j<F.length;j+=1)F[j].l(fe);d=Q(),q&&q.l(fe),fe.forEach(v),W=L(Z),ve=P(Z,"BR",{}),Ve=L(Z),Se=P(Z,"BR",{}),Me=L(Z),De=P(Z,"BR",{}),Z.forEach(v),V.forEach(v),this.h()},h(){a(M,"href",wt+"/methodology"),a(r,"class","text"),a(E,"id","options-season"),a(E,"class","svelte-52hdfh"),a(J,"id","options-region"),a(J,"class","svelte-52hdfh"),a(S,"id","options"),a(S,"class","svelte-52hdfh"),a(k,"height",e[2]),a(k,"width",e[1]),a(k,"id","chart"),a(k,"class","svelte-52hdfh"),a(g,"id","chart-wrapper"),a(g,"class","svelte-52hdfh"),ot(()=>e[27].call(g)),a(i,"class","svelte-52hdfh")},m(n,V){ke(t,n,V),B(n,l,V),B(n,i,V),h(i,r),h(r,_),h(_,b),h(r,y),h(r,f),h(f,s),h(r,m),h(r,c),h(c,u),h(r,C),h(r,z),h(z,G),h(z,M),h(M,Y),h(z,D),h(i,p),h(i,g),h(g,S),h(S,E),ke(T,E,null),h(S,te),h(S,J),ke(U,J,null),h(S,le),ke(ee,S,null),h(g,de),h(g,k);for(let o=0;o<O.length;o+=1)O[o]&&O[o].m(k,null);h(k,ie);for(let o=0;o<5;o+=1)K[o]&&K[o].m(k,null);h(k,re);for(let o=0;o<I.length;o+=1)I[o]&&I[o].m(k,null);h(k,ae);for(let o=0;o<F.length;o+=1)F[o]&&F[o].m(k,null);h(k,d),q&&q.m(k,null),h(g,W),h(g,ve),h(g,Ve),h(g,Se),h(g,Me),h(g,De),He=nt(g,e[27].bind(g)),oe=!0},p(n,V){if(V[0]&2058){ne=n[3].reverse();let o;for(o=0;o<ne.length;o+=1){const N=Ke(n,ne,o);O[o]?O[o].p(N,V):(O[o]=Qe(N),O[o].c(),O[o].m(k,ie))}for(;o<O.length;o+=1)O[o].d(1);O.length=ne.length}if(V[0]&388){Oe=[0,1,2,3,4];let o;for(o=0;o<5;o+=1){const N=Ye(n,Oe,o);K[o]?K[o].p(N,V):(K[o]=Ge(N),K[o].c(),K[o].m(k,re))}for(;o<5;o+=1)K[o].d(1)}if(V[0]&1141){se=n[0];let o;for(o=0;o<se.length;o+=1){const N=Le(n,se,o);I[o]?I[o].p(N,V):(I[o]=Ze(N),I[o].c(),I[o].m(k,ae))}for(;o<I.length;o+=1)I[o].d(1);I.length=se.length}if(V[0]&13941){ce=n[0];let o;for(o=0;o<ce.length;o+=1){const N=Xe(n,ce,o);F[o]?F[o].p(N,V):(F[o]=xe(N),F[o].c(),F[o].m(k,d))}for(;o<F.length;o+=1)F[o].d(1);F.length=ce.length}n[9]!=null?q?q.p(n,V):(q=et(n),q.c(),q.m(k,null)):q&&(q.d(1),q=null),(!oe||V[0]&4)&&a(k,"height",n[2]),(!oe||V[0]&2)&&a(k,"width",n[1])},i(n){oe||(Ce(t.$$.fragment,n),Ce(T.$$.fragment,n),Ce(U.$$.fragment,n),Ce(ee.$$.fragment,n),oe=!0)},o(n){Ee(t.$$.fragment,n),Ee(T.$$.fragment,n),Ee(U.$$.fragment,n),Ee(ee.$$.fragment,n),oe=!1},d(n){Re(t,n),n&&v(l),n&&v(i),Re(T),Re(U),Re(ee),me(O,n),me(K,n),me(I,n),me(F,n),q&&q.d(),He()}}}const wt="/downtown-recovery";function tt(e,t){let l=[];for(let i=0;i<=Math.ceil(e/t);i++)l.push(i*t);return l}function kt(e){const t=Math.pow(10,Math.floor(Math.log10(e)));return Math.ceil(e/t)*t}function he(e,t,l){return t-t*l/(e[1]-e[0])}function _e(e,t,l){return t*l/(e[1]-e[0])}function Ct(e,t,l){let i,r,_,b,y,f;pe(e,Ae,d=>l(6,_=d)),pe(e,_t,d=>l(20,b=d)),pe(e,dt,d=>l(21,y=d)),pe(e,vt,d=>l(30,f=d));let s=[],m=[],c=[],u=[];const C=f;async function z(){try{const W=await(await fetch("../ranking_data.csv")).text();l(14,s=Ne(W))}catch(d){console.error("Error loading CSV data:",d)}}async function G(){try{const W=await(await fetch("../variables_data.csv")).text();l(15,m=Ne(W))}catch(d){console.error("Error loading CSV data:",d)}}st(()=>{z(),G()});let M,Y=420,D=1,p=[0,1],g,S=100,E=1,T=1,te=.1,J=1,U;const le=function(d){d.clientX,d.clientY},ee=(d,W)=>W.name===d.region,de=(d,W)=>{l(9,U=d),le(W)},k=()=>{l(9,U=void 0)},ie=d=>d.name===U.region,re=d=>d.name===U.region;function ae(){M=this.offsetWidth,l(1,M)}return e.$$.update=()=>{e.$$.dirty[0]&3162112&&l(16,c=s.filter(d=>d.metric==="downtown").filter(d=>d.region!=="Europe").filter(d=>d.Season===`Season_${y}`).filter(d=>b.includes(d.region)).sort((d,W)=>W.seasonal_average-d.seasonal_average)),e.$$.dirty[0]&98304&&l(0,u=c.map(function(d){var W=m.find(function(ve){return ve.city===d.city});return Object.assign({},d,W)})),e.$$.dirty[0]&2&&l(2,Y=M*.666),e.$$.dirty[0]&1&&l(17,D=u.length!==0?u[0].seasonal_average:1),e.$$.dirty[0]&131072&&l(17,D=D<1?1:D),e.$$.dirty[0]&131072&&(D<2?l(3,p=tt(D,.2)):l(3,p=tt(D,.5))),e.$$.dirty[0]&12&&l(11,i=(Y-40)/(p.length-1)),e.$$.dirty[0]&8&&l(10,r=[Math.min(...p),Math.max(...p)]),e.$$.dirty[0]&64&&l(18,g=_),e.$$.dirty[0]&2&&l(4,S=M-45-10),e.$$.dirty[0]&262145&&l(19,E=Math.max(...u.map(d=>parseFloat(d[g])).filter(d=>!isNaN(d)))),e.$$.dirty[0]&524288&&l(5,T=kt(E)),e.$$.dirty[0]&16&&l(7,te=S/4),e.$$.dirty[0]&32&&l(8,J=T/4)},[u,M,Y,p,S,T,_,te,J,U,r,i,C,le,s,m,c,D,g,E,b,y,ee,de,k,ie,re,ae]}class Mt extends lt{constructor(t){super(),it(this,t,Ct,bt,rt,{},null,[-1,-1])}}export{Mt as component,St as universal};
