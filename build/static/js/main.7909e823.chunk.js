(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{16:function(e,t,n){e.exports={navBar:"navigation_navBar__TPDgQ",navItem:"navigation_navItem__1NCD-",mobileMenuButton:"navigation_mobileMenuButton__2itpQ",logo:"navigation_logo__1t6F3",homeIcon:"navigation_homeIcon__1rckw",navList:"navigation_navList__2KZsh"}},18:function(e,t,n){e.exports={navMenu:"navMenu_navMenu__5Z9yw",opened:"navMenu_opened__8Y03N",closeBtn:"navMenu_closeBtn__12YvM",navItem:"navMenu_navItem__2W94T"}},20:function(e,t,n){e.exports={post:"blogPost_post__3oFzl",text:"blogPost_text__1MDSk",date:"blogPost_date__2evr6",title:"blogPost_title__1fKAR",sect:"blogPost_sect__1Ahw8"}},32:function(e,t,n){e.exports={intro:"introBox_intro__3Hz5k",title:"introBox_title__2Kqi5",body:"introBox_body__2gjFe",text:"introBox_text__1NEQ4"}},34:function(e,t,n){e.exports={submit:"postForm_submit__2Vx8F",post:"postForm_post__1Ztvf",form:"postForm_form__2aOeA"}},38:function(e,t,n){e.exports={photosBox:"photoGallery_photosBox__k_bNa",loading:"photoGallery_loading__mOWPL"}},39:function(e,t,n){e.exports={inputName:"inputBox_inputName__2uKEU",textBox:"inputBox_textBox__1-tqk"}},44:function(e,t,n){e.exports={column:"photoColumn_column__36BiQ"}},45:function(e,t,n){e.exports={photoImg:"photo_photoImg__3mvkC"}},47:function(e,t,n){e.exports={home:"homePage_home__1CJ8t"}},62:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(41),s=n.n(a),o=n(13),i=n(5),r=n(16),l=n.n(r),j=n(27),b=n(7),u=n(18),d=n.n(u),m=n(0);function x(e,t){var n=Object(c.useState)([d.a.navMenu]),a=Object(b.a)(n,2),s=a[0],i=a[1];function r(){i([d.a.navMenu])}return Object(c.useImperativeHandle)(t,(function(){return{openMenu:function(){i([d.a.navMenu,d.a.opened])}}})),Object(m.jsxs)("div",{className:s.join(" "),children:[Object(m.jsx)(j.d,{className:d.a.closeBtn,onClick:r}),Object(m.jsx)(o.b,{className:d.a.navItem,onClick:r,to:"/data",children:"Add Information"}),Object(m.jsx)(o.b,{className:d.a.navItem,onClick:r,to:"/gallery",children:"Image Gallery"}),Object(m.jsx)(o.b,{className:d.a.navItem,onClick:r,to:"/info",children:"About Me"})]})}var O=Object(c.forwardRef)(x);var h=function(){var e=Object(c.useRef)();return Object(m.jsxs)("nav",{className:l.a.navBar,children:[Object(m.jsx)("div",{children:Object(m.jsxs)(o.b,{className:l.a.navItem,to:"/my-webpage/",children:[" ",Object(m.jsx)(j.b,{className:l.a.homeIcon}),"Home"]})}),Object(m.jsx)(j.c,{className:l.a.logo}),Object(m.jsxs)("div",{className:l.a.navList,children:[Object(m.jsx)(o.b,{className:l.a.navItem,to:"/data",children:"Add Information"}),Object(m.jsx)(o.b,{className:l.a.navItem,to:"/gallery",children:"Image Gallery"}),Object(m.jsx)(o.b,{className:l.a.navItem,to:"/info",children:"About Me"})]}),Object(m.jsx)(j.a,{className:l.a.mobileMenuButton,onClick:function(){e.current.openMenu()}}),Object(m.jsx)(O,{ref:e})]})},p=n(15),_=n(44),v=n.n(_);var f=function(e){return Object(m.jsx)("div",{className:v.a.column,children:e.children})},g=n(45),N=n.n(g);var I=function(e){return Object(m.jsx)("img",{className:N.a.photoImg,src:e.src,alt:"Maria and Alex",onError:function(e){var t=e.currentTarget;t.onerror=null,t.style="display: none"}})},B=n(38),y=n.n(B),M=n(46),k=n(28);var w=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),o=Object(b.a)(s,2),i=o[0],r=o[1],l=Object(c.useState)([]),j=Object(b.a)(l,2),u=j[0],d=j[1],x=Object(c.useState)([]),O=Object(b.a)(x,2),h=O[0],_=O[1],v=Object(c.useRef)(i),g=Object(c.useRef)(u),N=Object(c.useRef)(h);return Object(c.useEffect)((function(){v.current=i,g.current=u,N.current=h})),Object(c.useEffect)((function(){a(!0);var e=Object(M.a)({apiKey:"AIzaSyAqJg-fe3fayu8xapocNCJSzKm4XGhzq5E",authDomain:"personalwebsite-51254.firebaseapp.com",projectId:"personalwebsite-51254",storageBucket:"personalwebsite-51254.appspot.com",messagingSenderId:"32709056754",appId:"1:32709056754:web:3a1cefca604f4be665586b"}),t=Object(k.b)(e),n=Object(k.d)(t,"anm");Object(k.c)(n).then((function(e){for(var n=e.items.map((function(e){return Object(k.a)(Object(k.d)(t,e))})),c=function(e){n[e].then((function(t){var n=Object(m.jsx)(I,{src:t,onLoad:void a(!1)},t);e%3===0?r((function(e){return[].concat(Object(p.a)(e),[n])})):e%3===1?d((function(e){return[].concat(Object(p.a)(e),[n])})):_((function(e){return[].concat(Object(p.a)(e),[n])}))})).catch((function(e){console.log(e)}))},s=0;s<n.length;s++)c(s)})).catch((function(e){console.log(e)}))}),[]),n?Object(m.jsx)("div",{className:y.a.loading,children:"Please Wait, page is loading..."}):Object(m.jsxs)("div",{className:y.a.photosBox,id:"main",children:[Object(m.jsx)(f,{children:i}),Object(m.jsx)(f,{children:u}),Object(m.jsx)(f,{children:h})]})},A=n(32),S=n.n(A),P=n.p+"static/media/intro.130bfeec.txt";var C=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch(P).then((function(e){return e.text()})).then((function(e){a([e])}))}),[]),Object(m.jsxs)("div",{className:S.a.intro,children:[Object(m.jsx)("h1",{className:S.a.title,children:"Hello There!"}),n.map((function(e){return Object(m.jsx)("div",{className:S.a.body,children:Object(m.jsx)("pre",{className:S.a.text,children:e})},e)}))]})},E=n(47),q=n.n(E),H=n(20),T=n.n(H);var D=function(e){return Object(m.jsxs)("div",{className:T.a.post,children:[Object(m.jsxs)("div",{className:T.a.sect,children:[Object(m.jsx)("h2",{className:T.a.title,children:"Lorem Ipsum Dolor"}),Object(m.jsx)("h3",{className:T.a.date,children:"Date: 02/21/2021 @ 21:47"})]}),Object(m.jsx)("div",{className:T.a.sect,children:Object(m.jsx)("p",{className:T.a.desc,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),Object(m.jsxs)("div",{className:T.a.sect,children:[Object(m.jsx)("h4",{children:"Signature"}),Object(m.jsx)("p",{children:"Whats poppin'"})]})]})};var F=function(){return Object(m.jsx)("div",{className:q.a.home,children:Object(m.jsxs)("main",{children:[Object(m.jsx)(C,{}),Object(m.jsxs)("section",{children:[Object(m.jsx)(D,{}),Object(m.jsx)(D,{}),Object(m.jsx)(D,{}),Object(m.jsx)(D,{}),Object(m.jsx)(D,{})]})]})})};var K=function(){return Object(m.jsxs)("div",{children:["This page will give some background on me. ",Object(m.jsx)("br",{}),"Github: alexk9081",Object(m.jsx)("br",{}),"Email: alexk9081@gmail",Object(m.jsx)("br",{})]})},L=n(39),G=n.n(L);var R=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{className:G.a.inputName,children:Object(m.jsxs)("b",{children:[e.label,": "]})}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:G.a.textBox,id:e.id,placeholder:e.placeHolder})]})},z=n(34),J=n.n(z);var Q=function(){return Object(m.jsxs)("div",{className:J.a.form,children:[Object(m.jsxs)("form",{className:J.a.post,children:[Object(m.jsx)(R,{id:"title",label:"Title",placeHolder:"My First Post"}),Object(m.jsx)(R,{id:"description",label:"Description",placeHolder:"I did this today."}),Object(m.jsx)(R,{id:"user",label:"Username",placeHolder:"KeoA"})]}),Object(m.jsx)("button",{className:J.a.submit,children:"Submit"})]})};var W=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(Q,{})})};var U=function(){return Object(m.jsx)("div",{children:"Hello This is A Test"})};var Z=function(){return Object(m.jsxs)("div",{children:["Test Page",Object(m.jsx)(U,{}),Object(m.jsx)(Q,{})]})};var Y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{path:"/my-webpage/",children:Object(m.jsx)(F,{})}),Object(m.jsx)(i.a,{path:"/gallery",children:Object(m.jsx)(w,{})}),Object(m.jsx)(i.a,{path:"/info",children:Object(m.jsx)(K,{})}),Object(m.jsx)(i.a,{path:"/data",children:Object(m.jsx)(W,{})}),Object(m.jsx)(i.a,{path:"/test",children:Object(m.jsx)(Z,{})})]})]})};s.a.render(Object(m.jsx)(o.a,{children:Object(m.jsx)(Y,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.7909e823.chunk.js.map