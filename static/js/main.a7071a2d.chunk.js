(this.webpackJsonpusers_board_client=this.webpackJsonpusers_board_client||[]).push([[0],{108:function(e,t,n){},111:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(30),s=n.n(c),i=(n(108),n(19)),u=n(29),o=n(11),l=n(20),d=n.n(l),j=(n(111),n(181)),b=n(168),p=n(170),f=n(93),O=n.n(f),h=n(2),v=a.a.memo((function(e){var t=e.users;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){var t;return Object(h.jsxs)(j.a,{children:[Object(h.jsx)(b.a,{children:Object(h.jsx)(O.a,{fontSize:"large",style:{color:(null===e||void 0===e||null===(t=e.carColor)||void 0===t?void 0:t.name)||"black"}})}),Object(h.jsx)(p.a,{primary:e.name})]},e.id)}))})})),x=n(171),m=n(175),y=n(174),g=n(184),w=n(177),C=n(173).a.create({baseURL:"https://users-api-x86o.onrender.com",headers:{"Content-Type":"application/json"}});function S(){return(S=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/colors");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){var t=e.addUser,n=Object(r.useState)(""),a=Object(o.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(0),u=Object(o.a)(i,2),l=u[0],d=u[1],j=Object(r.useState)(!1),b=Object(o.a)(j,2),p=b[0],f=b[1],O=Object(r.useState)(!1),v=Object(o.a)(O,2),C=v[0],k=v[1],I=Object(r.useState)([]),U=Object(o.a)(I,2),_=U[0],E=U[1];Object(r.useEffect)((function(){(function(){return S.apply(this,arguments)})().then(E)}),[]);var A=_.find((function(e){return e.id===l}));return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if(!c||!l)return f(!c),void k(!l);t(c,l),s(""),d(0)}()},children:[Object(h.jsx)(x.a,{}),Object(h.jsxs)("div",{style:{padding:"16px 0 16px",display:"flex",alignItems:"end",justifyContent:"space-between"},children:[Object(h.jsx)(m.a,{variant:"standard",label:"Name",style:{width:"45%"},value:c,onChange:function(e){s(e.target.value),f(!1)},error:p}),Object(h.jsxs)(y.a,{label:"Car color",style:{width:"45%",color:(null===A||void 0===A?void 0:A.name)||"currentColor"},variant:"standard",value:l,onChange:function(e){k(!1),d(+e.target.value)},error:C,children:[Object(h.jsx)(g.a,{value:0,disabled:!0,children:"Color"}),_.map((function(e){return Object(h.jsx)(g.a,{style:{color:e.name},value:e.id,children:e.name},e.id)}))]})]}),Object(h.jsx)(w.a,{type:"submit",variant:"outlined",style:{width:"100%"},children:"Add new player"})]})},I=n(180),U=n(71),_=a.a.memo((function(e){var t=e.children;return Object(h.jsxs)(I.a,{elevation:10,style:{padding:"20px",width:"90%",marginTop:"40px",marginInline:"auto"},children:[Object(h.jsx)(U.a,{variant:"h2",style:{textAlign:"center",marginBottom:"16px"},children:"Users` board"}),t,Object(h.jsx)(x.a,{})]})}));function E(){return(E=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(d.a.mark((function e(t){var n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,r=t.carColorId,e.next=3,C.post("/users",{name:n,carColorId:r});case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){(function(){return E.apply(this,arguments)})().then(a)}),[]);var c=function(){var e=Object(u.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({name:t,carColorId:n});case 2:r=e.sent,a((function(e){return[].concat(Object(i.a)(e),[r])}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(h.jsxs)(_,{children:[Object(h.jsx)(v,{users:n}),Object(h.jsx)(k,{addUser:c})]})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.a7071a2d.chunk.js.map