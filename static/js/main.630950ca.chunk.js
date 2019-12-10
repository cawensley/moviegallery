(this.webpackJsonpmoviegallery=this.webpackJsonpmoviegallery||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=(a(27),a(5)),m=a(8),i=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark fixed-top p-1"},r.a.createElement("h2",{className:"text-light"},"Movie Gallery"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive"},r.a.createElement("span",{className:"text-white"},r.a.createElement("i",{className:"fas fa-bars"}))),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"navbar-brand"},r.a.createElement(s.b,{to:"/",className:"nav-link px-3 py-1"},"Search")),r.a.createElement("li",{className:"navbar-brand"},r.a.createElement(s.b,{to:"/favorites",className:"nav-link px-3 py-1"},"Favorites")),r.a.createElement("li",{className:"navbar-brand"},r.a.createElement(s.b,{to:"/details",className:"nav-link px-3 py-1"},"Details")))))},o=a(7),u=a.n(o),d=a(10),E=a(4),p=(a(17),"bf0372ee"),g=function(e){var t=e.id,a=!1;if(localStorage.getItem("favoriteArray"))var n=JSON.parse(localStorage.getItem("favoriteArray"));if(n)for(var l=0;l<n.length;l++)t===n[l]&&(a=!0);return a?r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-danger m-4",onClick:function(){return function(){for(var e=JSON.parse(localStorage.getItem("favoriteArray")),a=0;a<e.length;a++)t===e[a]&&e.splice(a,1);localStorage.setItem("favoriteArray",JSON.stringify(e)),window.location.reload(!0)}()}},"Remove From Favorites"):r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-success m-4",onClick:function(){return function(){var e=[];localStorage.getItem("favoriteArray")&&(e=JSON.parse(localStorage.getItem("favoriteArray"))),e.push(t),localStorage.setItem("favoriteArray",JSON.stringify(e)),window.location.reload(!0)}()}},"Add to Favorites")},b=function(e){var t=e.id,a=Object(n.useState)(null),l=Object(E.a)(a,2),c=l[0],m=l[1];function i(){return(i=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat(p)).then((function(e){return e.json()}));case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),c?r.a.createElement("div",{className:"card d-inline-flex m-card-width m-card-hover m-1 bg-dark"},r.a.createElement(s.b,{to:"/details",onClick:function(){return localStorage.setItem("movieID","".concat(t))}},r.a.createElement("img",{className:"card-img-top",alt:"Error Loading",src:c.Poster}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title text-warning"},c.Title),r.a.createElement("p",{className:"card-text text-white"},"Year: ",c.Year),r.a.createElement("p",{className:"card-text text-white"},"Type: ",c.Type))),r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(c.imdbID,"/"),className:"card-link hyperLink"},"Imdb ID: ",c.imdbID),r.a.createElement(g,{id:c.imdbID})):r.a.createElement("div",{className:"p-padding text-center"},r.a.createElement("h2",{className:"text-warning"},"No Movie to Display"))},v=function(e){var t=e.Title;return r.a.createElement("h1",{className:"text-white pb-3"},r.a.createElement("u",null,t))},f=function(){if(localStorage.getItem("favoriteArray"))var e=JSON.parse(localStorage.getItem("favoriteArray"));return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),e?r.a.createElement("div",{className:"container-fluid p-padding text-center"},r.a.createElement(v,{Title:"Your Favorite Movies!"}),r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(b,{key:a,id:e[a]})})))):r.a.createElement("div",{className:"container-fluid p-padding text-center"},r.a.createElement(v,{Title:"Your Favorite Movies!"}),r.a.createElement("h2",{className:"text-warning"},"No Favorites Stored"))},h=function(e){var t=e.Title,a=e.Year,n=e.id,l=e.Type,c=e.Poster;return r.a.createElement("div",{className:"card d-inline-flex m-card-width m-card-hover m-1 bg-dark"},r.a.createElement(s.b,{to:"/details",onClick:function(){return localStorage.setItem("movieID","".concat(n))}},r.a.createElement("img",{className:"card-img-top",alt:"Error Loading",src:"".concat(c)}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title text-warning"},t),r.a.createElement("p",{className:"card-text text-light"},"Year: ",a),r.a.createElement("p",{className:"card-text text-light"},"Type: ",l))),r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(n,"/"),className:"card-link hyperLink"},"Imdb ID: ",n),r.a.createElement(g,{id:n}))},N=function(e){var t=e.movies;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(h,{key:a,Title:t[a].Title,Year:t[a].Year,id:t[a].imdbID,Type:t[a].Type,Poster:t[a].Poster})})))},y=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(localStorage.getItem("searchString")),s=Object(E.a)(c,2),m=s[0],i=s[1],o=Object(n.useState)(localStorage.getItem("PageSelected")||1),g=Object(E.a)(o,2),b=g[0],f=g[1],h=Object(n.useState)([1]),y=Object(E.a)(h,2),w=y[0],S=y[1],x=Object(n.useState)(localStorage.getItem("ResultsSelected")||10),I=Object(E.a)(x,2),k=I[0],O=I[1],j=Object(n.useState)(),T=Object(E.a)(j,2),D=T[0],R=T[1];function P(){return M.apply(this,arguments)}function M(){return(M=Object(d.a)(u.a.mark((function e(){var t,a,n,r,c,s,i,o,d,E;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("searchString",m),localStorage.setItem("PageSelected",b),localStorage.setItem("ResultsSelected",k),e.next=5,fetch("https://www.omdbapi.com/?s=".concat(m,"&apikey=").concat(p)).then((function(e){return e.json()}));case 5:for(t=e.sent,R(t.totalResults),a=Math.trunc(t.totalResults/k)+1,n=[],r=1;r<=a;r++)n.push(r);for(S(n),c=[],s=k/10*(b-1)+1;s<=b*k/10;s++)c.push(s);i=[],o=0;case 15:if(!(o<c.length)){e.next=23;break}return e.next=18,fetch("https://www.omdbapi.com/?s=".concat(m,"&page=").concat(c[o],"&apikey=").concat(p)).then((function(e){return e.json()}));case 18:for(d=e.sent,E=0;E<d.Search.length;E++)i.push(d.Search[E]);case 20:o++,e.next=15;break;case 23:l(i);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){null!==m&&P(),window.scrollTo(0,0)}),[b,k]),a?r.a.createElement("div",{className:"container-fluid p-padding text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-3"}),r.a.createElement("div",{className:"col-xl-3 col-md-6"},r.a.createElement(v,{Title:"Search Movies"}),r.a.createElement("input",{type:"text",size:"15",className:"h6",onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&P()}}),r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary btn-sm",onClick:function(){f(1),P()}},"Title Search")),r.a.createElement("div",{className:"col-xl-3 col-md-6 text-md-left"},r.a.createElement("p",{className:"text-warning"},"Total Search Results: ",D),r.a.createElement("p",{className:"text-warning"},"Total Pages: ",w.length),r.a.createElement("label",{className:"text-warning"},"Results per Page:",r.a.createElement("select",{className:"ml-1",value:k,onChange:function(e){return O(e.target.value)}},[10,20,50].map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("br",null),r.a.createElement("label",{className:"text-warning"}," Page:",r.a.createElement("select",{className:"ml-1",value:b,onChange:function(e){return f(e.target.value)}},w.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("p",{className:"text-warning"},'Searches Matching: "',localStorage.getItem("searchString"),'"')),r.a.createElement("div",{className:"col-xl-3"})),r.a.createElement(N,{movies:a})):r.a.createElement("div",{className:"container-fluid p-padding text-center"},r.a.createElement(v,{Title:"Search Movies"}),r.a.createElement("input",{type:"text",size:"15",className:"h6",onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&P()}}),r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary btn-sm",onClick:function(){f(1),P()}},"Title Search"),r.a.createElement("br",null),r.a.createElement("h2",{className:"text-warning"},"No Searches Matching: ",localStorage.getItem("searchString")))},w=function(){var e=Object(n.useState)(null),t=Object(E.a)(e,2),a=t[0],l=t[1];function c(){return(c=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("movieID"),e.next=3,fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat(p)).then((function(e){return e.json()}));case 3:a=e.sent,l(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}(),window.scrollTo(0,0)}),[]),a&&localStorage.getItem("movieID")?r.a.createElement("div",{className:"container-fluid p-padding text-center "},r.a.createElement(v,{Title:"Movie Details"}),r.a.createElement("img",{alt:"Error Loading",src:a.Poster}),r.a.createElement("br",null),r.a.createElement(g,{id:a.imdbID}),r.a.createElement("div",{className:"row justify-content-center "},r.a.createElement("table",{className:"table table-striped table-bordered text-white my-4 col-md-10 col-lg-6 bg-secondary"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"h5 text-warning"},r.a.createElement("td",{className:"align-middle"},"Title:"),r.a.createElement("td",null,a.Title)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Type:"),r.a.createElement("td",null,a.Type)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Released:"),r.a.createElement("td",null,a.Released)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Runtime:"),r.a.createElement("td",null,a.Runtime)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Rated:"),r.a.createElement("td",null,a.Rated)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Genre:"),r.a.createElement("td",null,a.Genre)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",{className:"align-middle"},"Director(s):"),r.a.createElement("td",null,a.Director)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",{className:"align-middle"},"Writer(s):"),r.a.createElement("td",null,a.Writer)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",{className:"align-middle"},"Actor(s):"),r.a.createElement("td",null,a.Actors)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"imdb ID:"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(a.imdbID,"/"),className:"hyperLink"},a.imdbID))),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"imdb Rating:"),r.a.createElement("td",{className:"align-middle"},a.imdbRating)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",{className:"align-middle"},"Plot:"),r.a.createElement("td",null,a.Plot)))))):r.a.createElement("div",{className:"container-fluid p-padding text-center"},r.a.createElement(v,{Title:"Movie Details"}),r.a.createElement("h2",{className:"text-warning"},"No Movie to Display"))},S=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"text-white text-center bg-dark py-1"},r.a.createElement("small",null,"Copyright \xa9 Movie Gallery Website ",e.toString()))},x=a(21),I=a.n(x),k={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},O=function(){return r.a.createElement(s.a,null,r.a.createElement(I.a,{className:"particles",params:k}),r.a.createElement(i,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/details",component:w}),r.a.createElement(m.a,{path:"/favorites",component:f}),r.a.createElement(m.a,{path:"/",component:y})),r.a.createElement(S,null))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.630950ca.chunk.js.map