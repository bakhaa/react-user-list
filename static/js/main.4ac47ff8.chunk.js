(this["webpackJsonpreact-users"]=this["webpackJsonpreact-users"]||[]).push([[0],{112:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(12),s=r(54),i=r(77),o=r(14),u=r(78),l=r(153),d=r(144),f=r(70),j=r.n(f),b=r(11),v=function(e){var t=e.users,r=e.loading,a=e.isReadyUsers;return r?Object(b.jsx)(d.a,{}):a&&!t.length?Object(b.jsx)("div",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}):Object(b.jsx)("ul",{className:"user-list",children:t.map((function(e){return Object(b.jsx)("li",{children:"".concat(e.last_name," ").concat(e.first_name,", ").concat(j()(e.created_at).format("DD.MM.YYYY, HH:mm:ss"))},e.id)}))})},h=r(50),O=r(21),m=r(149),_=r(150),p=r(157),x=r(159),g=r(154),y=r(160),C=r(161),w=r(155),F=r(148),E=r(156),R=Object(F.a)((function(e){return Object(E.a)({formControl:{margin:e.spacing(1),minWidth:250},selectEmpty:{marginTop:e.spacing(2)}})})),S=function(e){var t=e.changeFilter,r=e.filter,a=e.isReadyUsers,n=void 0!==a&&a,c=R(),s=function(e,a){return t(Object(O.a)(Object(O.a)({},r),{},Object(h.a)({},a,e)))};return Object(b.jsxs)(m.a,{row:!0,children:[Object(b.jsx)(_.a,{variant:"outlined",className:c.formControl,children:Object(b.jsx)(p.a,{disabled:!n,id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",variant:"outlined",value:r.search,onChange:function(e){return s(e.target.value,"search")}})}),Object(b.jsxs)(_.a,{variant:"outlined",className:c.formControl,children:[Object(b.jsx)(x.a,{id:"sort-select-label",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"}),Object(b.jsxs)(g.a,{disabled:!n,labelId:"sort-select-label",id:"sort-select",value:r.sort,onChange:function(e){return s(e.target.value,"sort")},label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",children:[Object(b.jsx)(y.a,{value:"0",children:"\u0411\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438"}),Object(b.jsx)(y.a,{value:"ASC",children:"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"}),Object(b.jsx)(y.a,{value:"DESC",children:"\u041f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e"})]})]}),Object(b.jsx)(C.a,{control:Object(b.jsx)(w.a,{disabled:!n,checked:r.onlyActive,onChange:function(e){return s(e.target.checked,"onlyActive")},name:"onlyActive",color:"primary"}),label:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"})]})},k=r(23),A=r.n(k),L=r(33);function U(e,t){return void 0===t?{type:e}:{type:e,payload:t}}var T=r(75),H=[{created_at:1615370457e3,first_name:"\u0421\u0435\u043c\u0435\u043d",id:1,is_active:!0,last_name:"\u0418\u0432\u0430\u043d\u043e\u0432"},{created_at:1615314992e3,first_name:"\u0418\u0432\u0430\u043d",id:2,is_active:!1,last_name:"\u041b\u0435\u043e\u043d\u0438\u0434\u043e\u0432"},{created_at:1615536e6,first_name:"\u041c\u0430\u0440\u0438\u044f",id:3,is_active:!0,last_name:"\u0421\u0435\u043c\u0435\u043d\u043e\u0432\u0430"},{created_at:16157268e5,first_name:"\u0418\u043b\u044c\u044f",id:4,is_active:!1,last_name:"\u041c\u0430\u0440\u0438\u0438\u043d\u0441\u043a\u0438\u0439"},{created_at:16152336e5,first_name:"\u0421\u0435\u0440\u0433\u0435\u0439",id:5,is_active:!0,last_name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u0438\u0439"},{created_at:1615206992e3,first_name:"\u041f\u043e\u043b\u0438\u043d\u0430",id:6,is_active:!1,last_name:"\u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0430"},{created_at:16160004e5,first_name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430",id:7,is_active:!0,last_name:"\u041b\u0435\u043e\u043d\u043e\u0432\u0430"},{created_at:1616227077e3,first_name:"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430",id:8,is_active:!0,last_name:"\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f"}],N=function(){var e=Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){return e({data:H})}),1e3)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=A.a.mark(P),Y=A.a.mark(Q),D="users/FETCH_REQUEST",M="users/FETCH_SUCCESS",q="users/FETCH_FAIL",J="users/CHANGE_FILTER",B={loading:!1,filter:{sort:"0",search:"",onlyActive:!1},list:[],loaded:!1},G={fetchRequest:function(){return U(D)},fetchSuccess:function(e){return U(M,e)},fetchFail:function(e){return U(q,e)},changeFilter:function(e){return U(J,e)}};function P(){var e,t,r,a;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(L.b)((function(){return N()}));case 3:return e=n.sent,t=e.data,n.next=7,Object(L.d)(G.fetchSuccess(t));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(L.d)(G.fetchFail((null===n.t0||void 0===n.t0||null===(r=n.t0.response)||void 0===r||null===(a=r.data)||void 0===a?void 0:a.message)||"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f."));case 13:case"end":return n.stop()}}),I,null,[[0,9]])}function Q(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)(D,P);case 2:case"end":return e.stop()}}),Y)}var W=r(76),z=Object(W.a)((function(e){return e.users.list}),(function(e){return e.users.filter}),(function(e,t){var r=t.onlyActive,a=t.sort,n=t.search,c=e,s="ASC"===a;if(c="0"===a?c.sort((function(e,t){return e.id<t.id?-1:1})):c.sort((function(e,t){return e.created_at<t.created_at?s?-1:1:s?1:-1})),r&&(c=c.filter((function(e){return e.is_active===r}))),n.length){var i=n.toLocaleLowerCase();c=c.filter((function(e){if(e.first_name.toLowerCase().includes(i)||e.last_name.toLowerCase().includes(i))return e}))}return c})),K=Object(s.b)((function(e){return{userList:z(e),loaded:e.users.loaded,loading:e.users.loading,filter:e.users.filter}}),{fetchUsers:G.fetchRequest,changeFilter:G.changeFilter})((function(e){var t=e.userList,r=e.fetchUsers,a=e.changeFilter,n=e.filter,c=e.loading,s=e.loaded;return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(l.a,{onClick:function(){return r()},variant:"contained",color:"primary",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"}),Object(b.jsx)(S,{isReadyUsers:s&&!c,filter:n,changeFilter:a}),Object(b.jsx)(v,{isReadyUsers:s&&!c,loading:c,users:t})]})}));var V=function(){return Object(b.jsx)(i.a,{children:Object(b.jsx)(u.a,{ReactRouterRoute:o.a,children:Object(b.jsx)(K,{})})})},X=r(26),Z=r(79),$=A.a.mark(te),ee=Object(X.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(O.a)(Object(O.a)({},e),{},{list:[],loading:!0});case M:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,list:t.payload,loaded:!0});case q:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});case J:return Object(O.a)(Object(O.a)({},e),{},{selectedSort:t.payload,filter:t.payload});default:return e}}});function te(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.a)([Q].map((function(e){return Object(L.c)(e)})));case 2:case"end":return e.stop()}}),$)}var re=Object(Z.a)(),ae=Object(X.e)(ee,Object(X.a)(re));re.run(te);var ne=ae;Object(c.render)(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(s.a,{store:ne,children:Object(b.jsx)(V,{})})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.4ac47ff8.chunk.js.map