(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(8),i=n.n(s),o=n(2),r=(n(16),c.a.createContext()),l=(n(17),n(0)),d=c.a.memo((function(e){var t=e.addTask,n=e.placeholder,a=c.a.useContext(r),s=c.a.useState(""),i=Object(o.a)(s,2),d=i[0],u=i[1],j=c.a.useState(""),b=Object(o.a)(j,2),h=b[0],m=b[1];return Object(l.jsx)("div",{className:"form",children:Object(l.jsxs)("form",{className:"form__container",onSubmit:function(e){e.preventDefault(),d&&(a.filter((function(e){return e.title===d.toLowerCase()})).length?m("The same task has already been added!"):(t(d),u(""),e.target[0].value="",m("")))},children:[Object(l.jsx)("label",{className:"form__label",htmlFor:"input_text"}),Object(l.jsx)("input",{className:"form__input",id:"input_text",type:"text",placeholder:n,required:!0,onChange:function(e){var t=e.target.value.trim();t.length>4?(u(t),m("")):m("it requires 5 symbols, but no more than 50")},minLength:"5",maxLength:"50",pattern:"^[0-9A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]{5,50}$",title:"The field can only contain latin, cyrillic, numbers, space or hyphen"}),h&&Object(l.jsx)("span",{style:{color:"red"},children:h}),Object(l.jsx)("button",{className:"form__btn btn waves-effect waves-light",type:"submit",children:"ok"})]})})})),u=(n(19),n(3)),j=n(7),b=(n(20),n(5)),h=n.p+"static/media/pencil.24e7703b.svg",m=["completed"],f=["title"],p=c.a.memo((function(e){var t=e.task,n=e.handleTaskChange,a=e.handleRemoveTask,s=c.a.useState(""),i=Object(o.a)(s,2),r=i[0],p=i[1],O=c.a.useState(!1),x=Object(o.a)(O,2),v=x[0],g=x[1];c.a.useEffect((function(){t.date?p(b.DateTime.fromISO(t.date).setLocale("en").toFormat("dd LLL T")):p(b.DateTime.fromISO((new Date).toISOString()).setLocale("en").toFormat("dd LLL T"))}),[t]);return Object(l.jsxs)("li",{className:"todo-item",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:"todo-item__checkbox",type:"checkbox",onChange:function(e){t.completed;var a=Object(j.a)(t,m);n(Object(u.a)(Object(u.a)({},a),{},{completed:e.target.checked}))},checked:t.completed,disabled:v}),Object(l.jsx)("span",{})]}),Object(l.jsxs)("p",{className:"todo-item__text ".concat(t.completed&&"todo-item__text_crossed-out"," ").concat(v&&"todo-item__text_color"),children:[t.title.toUpperCase(),Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"todo-item__time",children:r})]}),Object(l.jsx)("img",{className:"todo-item__pencil",src:h,alt:"edit task",onClick:function(){g(!v)}}),Object(l.jsx)("button",{className:"waves-effect waves-light btn todo-item__btn",onClick:function(){a(t)},children:"x"}),v&&Object(l.jsx)(d,{addTask:function(e){t.title;var a=Object(j.a)(t,f);n(Object(u.a)(Object(u.a)({},a),{},{title:e})),g(!1)},placeholder:t.title.toUpperCase()})]})})),O=c.a.memo((function(e){var t=e.handleChangeTodosList,n=e.isSubmitting,a=c.a.useContext(r),s=c.a.useState(!1),i=Object(o.a)(s,2),d=i[0],u=i[1],j=c.a.useState([]),b=Object(o.a)(j,2),h=b[0],m=b[1];c.a.useEffect((function(){m(a.map((function(e){return Object(l.jsx)(p,{task:e,handleTaskChange:f,handleRemoveTask:O},e.id)})))}),[a,d]);var f=function(e){var n=a;n.splice(n.findIndex((function(t){return t.id===e.id})),1,e),t(n),u(!d)},O=function(e){t(a.filter((function(t){return t.id!==e.id})))};return Object(l.jsx)("div",{className:"todo-list",children:h.length?Object(l.jsx)("ul",{children:h}):!n&&Object(l.jsx)("p",{children:"You have no tasks added!"})})})),x=(n(21),function(){return Object(l.jsxs)("div",{className:"lds-ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),v=n(6),g=n.n(v),_=n(9),k=n(10),T=n(11),S=function(){function e(t){var n=t.url;Object(k.a)(this,e),this._url=n}return Object(T.a)(e,[{key:"getTasks",value:function(){var e=Object(_.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._url),{method:"GET","Content-Type":"application/json"});case 2:return t=e.sent,e.abrupt("return",t.ok&&t.json());case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),C=new S({url:"https://jsonplaceholder.typicode.com/todos?_limit=3"}),y=function(){var e=c.a.useState([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(o.a)(s,2),u=i[0],j=i[1];c.a.useEffect((function(){j(!0),C.getTasks().then((function(e){e.length&&a(e)})).catch((function(e){return console.log(e)})).finally((function(){return j(!1)}))}),[]);return Object(l.jsx)(r.Provider,{value:n,children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{children:"My Todo App"}),Object(l.jsx)(d,{addTask:function(e){a(n.concat({completed:!1,id:n.length+1,title:e,userId:1,date:(new Date).toISOString()}))},placeholder:"...todo"}),u&&Object(l.jsx)(x,{}),Object(l.jsx)(O,{handleChangeTodosList:function(e){a(e)},isSubmitting:u})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),L()}},[[23,1,2]]]);
//# sourceMappingURL=main.ba192f14.chunk.js.map