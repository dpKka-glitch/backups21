(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{58:function(e,c,s){},59:function(e,c,s){},60:function(e,c,s){},71:function(e,c,s){},74:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s.n(t),n=s(22),r=s.n(n),i=s(6),l=s(4),o=(s(58),s(89)),j=s(44),d=s.n(j),h=(s(59),s(38)),b=s(21),u=s(31),O=s.n(u),m=s(43),g=s.n(m),x=s(88),_=(s(60),s(2)),v=Object(t.createContext)(),p=function(e){var c=e.reducer,s=e.initialState,a=e.children;return Object(_.jsx)(v.Provider,{value:Object(t.useReducer)(c,s),children:a})},f=function(){return Object(t.useContext)(v)},N=s(37),P="SET_SEARCH_TERM",w=function(e,c){switch(console.log(c),c.type){case P:return Object(N.a)(Object(N.a)({},e),{},{term:c.term});default:return e}};var S=function(e){var c=e.hideButtons,s=void 0!==c&&c,a=f(),n=Object(b.a)(a,2);Object(h.a)(n[0]);var r=n[1],i=Object(l.f)(),o=Object(t.useState)(""),j=Object(b.a)(o,2),d=j[0],u=j[1],m=function(e){e.preventDefault(),console.log("search!"),r({type:P,term:d}),i.push("/search")};return Object(_.jsxs)("form",{className:"search",children:[Object(_.jsxs)("div",{className:"search__input",children:[Object(_.jsx)(O.a,{className:"search__inputIcon"}),Object(_.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)}}),Object(_.jsx)(g.a,{})]}),s?Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(x.a,{className:"search__buttonsHidden",onClick:m,type:"submit",variant:"outlined",children:"Google Search"}),Object(_.jsx)(x.a,{className:"search__buttonsHidden",variant:"outlined",children:"I'm Feeling Lucky"})]}):Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(x.a,{onClick:m,type:"submit",variant:"outlined",children:"Google Search"}),Object(_.jsx)(x.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};function y(){return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsxs)("div",{className:"home__header",children:[Object(_.jsxs)("div",{className:"home__headerLeft",children:[Object(_.jsx)(i.b,{to:"/about",children:"About"}),Object(_.jsx)(i.b,{to:"/store",children:"Store"})]}),Object(_.jsxs)("div",{className:"home__headerRight",children:[Object(_.jsx)(i.b,{to:"/gmail",children:"Gmail"}),Object(_.jsx)(i.b,{to:"/images",children:"Search"}),Object(_.jsx)(d.a,{}),Object(_.jsx)(o.a,{})]})]}),Object(_.jsxs)("div",{className:"home__body",children:[Object(_.jsx)("img",{alt:"logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}),Object(_.jsx)(S,{})]})]})}s(71);var k=s(36),C=s.n(k),I=s(45),E=function(e){var c=Object(t.useState)(null),s=Object(b.a)(c,2),a=s[0],n=s[1];return Object(t.useEffect)((function(){(function(){var c=Object(I.a)(C.a.mark((function c(){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyCt50k__Ew6-W24wjqqrPfy7WUEe2TstC0","&cx=").concat("db1e9ed79829f6fa8","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]),{data:a}},T=s(46),L=s.n(T),R=s(47),A=s.n(R),B=s(48),q=s.n(B),G=s(49),H=s.n(G),F=s(50),J=s.n(F);var M=function(){var e=f(),c=Object(b.a)(e,2),s=c[0].term,t=(c[1],E(s).data);return console.log(t),Object(_.jsxs)("div",{className:"searchPage",children:[Object(_.jsxs)("div",{className:"searchPage__header",children:[Object(_.jsx)(i.b,{to:"/",children:Object(_.jsx)("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""})}),Object(_.jsxs)("div",{className:"searchPage__headerBody",children:[Object(_.jsx)(S,{hideButtons:!0}),Object(_.jsxs)("div",{className:"searchPage__options",children:[Object(_.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(O.a,{}),Object(_.jsx)(i.b,{to:"/all",children:"All"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(L.a,{}),Object(_.jsx)(i.b,{to:"/news",children:"News"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(A.a,{}),Object(_.jsx)(i.b,{to:"/images",children:"Images"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(q.a,{}),Object(_.jsx)(i.b,{to:"/shopping",children:"shopping"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(H.a,{}),Object(_.jsx)(i.b,{to:"/maps",children:"maps"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(J.a,{}),Object(_.jsx)(i.b,{to:"/more",children:"more"})]})]}),Object(_.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(i.b,{to:"/settings",children:"Settings"})}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(i.b,{to:"/tools",children:"Tools"})})]})]})]})]}),s&&Object(_.jsxs)("div",{className:"searchPage__results",children:[Object(_.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===t||void 0===t?void 0:t.searchInformation.formattedTotalResults," results (",null===t||void 0===t?void 0:t.searchInformation.formattedSearchTime," seconds) for"," ",Object(_.jsx)("strong",{children:s})]}),null===t||void 0===t?void 0:t.items.map((function(e){var c,s,t,a,n,r,i,l;return Object(_.jsxs)("div",{className:"searchPage__result",children:[Object(_.jsxs)("a",{className:"searchPage__resultLink",href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(s=c.cse_image)||void 0===s?void 0:s.length)>0&&(null===(t=e.pagemap)||void 0===t||null===(a=t.cse_image[0])||void 0===a?void 0:a.src)&&Object(_.jsx)("img",{className:"searchPage__resultImage",src:(null===(n=e.pagemap)||void 0===n||null===(r=n.cse_image)||void 0===r?void 0:r.length)>0&&(null===(i=e.pagemap)||void 0===i||null===(l=i.cse_image[0])||void 0===l?void 0:l.src),alt:""}),e.displayLink," \u25be"]}),Object(_.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(_.jsx)("h2",{children:e.title})}),Object(_.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var W=function(){return Object(_.jsx)("div",{className:"app",children:Object(_.jsx)(i.a,{children:Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{path:"/search",children:Object(_.jsx)(M,{})}),Object(_.jsx)(l.a,{path:"/",children:Object(_.jsx)(y,{})})]})})})};r.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(p,{initialState:{term:null},reducer:w,children:Object(_.jsx)(W,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.30b2cca0.chunk.js.map