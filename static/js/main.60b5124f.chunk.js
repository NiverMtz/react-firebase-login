(this["webpackJsonplogin-react-firebase"]=this["webpackJsonplogin-react-firebase"]||[]).push([[0],{44:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(27),i=a.n(s),r=a(16),l=a(8),o=a(4),j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Inicio"})})},d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Admin"})})},b=a(17),u=a(29),m=(a(38),u.a.initializeApp({apiKey:"AIzaSyBJe9ADWwW8y-SOPoFdjBQ4wMPyqP0Lu0g",authDomain:"login-react-5f424.firebaseapp.com",projectId:"login-react-5f424",storageBucket:"login-react-5f424.appspot.com",messagingSenderId:"781441320166",appId:"1:781441320166:web:dc996df1a09250f51ca727",measurementId:"G-231XKRJYN0"}).auth()),h=function(){var e=Object(l.f)(),t=Object(c.useState)(""),a=Object(b.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(""),r=Object(b.a)(i,2),j=r[0],d=r[1],u=Object(c.useState)(null),h=Object(b.a)(u,2),O=h[0],p=h[1];return Object(o.jsxs)("div",{className:"row mt-5",children:[Object(o.jsx)("div",{className:"col"}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m.createUserWithEmailAndPassword(n,j).then((function(t){e.push("/")})).catch((function(e){"auth/invalid-email"===e.code&&p("Formato de email incorrecto"),"auth/weak-password"===e.code&&p("Password debe tener 6 caracteres o m\xe1s")}))},className:"form-group d-grid",children:[Object(o.jsx)("input",{onChange:function(e){s(e.target.value)},className:"form-control",type:"email",placeholder:"Intro email"}),Object(o.jsx)("input",{onChange:function(e){d(e.target.value)},className:"form-control mt-4",type:"password",placeholder:"Intro password"}),Object(o.jsx)("input",{className:"btn btn-dark mt-4",type:"submit",value:"Registrar usuario"})]}),Object(o.jsxs)("div",{className:"d-grid",children:[Object(o.jsx)("button",{onClick:function(){m.signInWithEmailAndPassword(n,j).then((function(t){e.push("/")})).catch((function(e){"auth/wrong-password"===e.code&&p("Password incorrecta")}))},className:"btn btn-success mt-4",children:"Iniciar sesi\xf3n"}),null!=O?Object(o.jsx)("div",{className:"d-grid mt-4 alert alert-dark",children:O}):Object(o.jsx)("div",{})]})]}),Object(o.jsx)("div",{className:"col"})]})},O=function(){var e=Object(l.f)(),t=Object(c.useState)(null),a=Object(b.a)(t,2),n=a[0],s=a[1];Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e&&s(e.email)}))}),[]);return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link",to:"/",children:"Inicio"})}),Object(o.jsx)("li",{className:"nav-item",children:n?Object(o.jsx)("span",{}):Object(o.jsx)(r.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(o.jsx)("li",{className:"nav-item",children:n?Object(o.jsx)("span",{}):Object(o.jsx)(r.b,{className:"nav-link",to:"/admin",children:"Admin"})})]}),n?Object(o.jsx)("button",{onClick:function(){m.signOut(),s(null),e.push("/login")},className:"btn btn-danger d-flex",children:"Cerrar sesi\xf3n"}):Object(o.jsx)("span",{})]})})})};var p=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(O,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(l.a,{path:"/admin",component:d}),Object(o.jsx)(l.a,{path:"/login",component:h})]})]})})};a(43);i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.60b5124f.chunk.js.map