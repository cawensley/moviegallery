(this.webpackJsonpmoviegallery=this.webpackJsonpmoviegallery||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(27),a(4)),m=a(8),s=function(){return r.a.createElement("nav",{className:"bg-dark navbar navbar-expand o-mainnavbar_padding fixed-top p-1"},r.a.createElement("h2",{className:"text-light"},"Movie Gallery"),r.a.createElement("div",{className:"ml-auto"},r.a.createElement(i.b,{to:"/",className:"navbar-brand px-3 py-1"},"Search"),r.a.createElement(i.b,{to:"/favorites",className:"navbar-brand px-3 py-1"},"Favorites"),r.a.createElement(i.b,{to:"/details",className:"navbar-brand px-3 py-1"},"Details")))},o=a(6),u=a.n(o),d=a(10),E=a(7),p=(a(17),"bf0372ee"),g=function(e){var t=e.id,a=!1;if(localStorage.getItem("favoriteArray"))var n=JSON.parse(localStorage.getItem("favoriteArray"));if(n)for(var l=0;l<n.length;l++)t===n[l]&&(a=!0);return a?r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-danger m-4",onClick:function(){return function(){for(var e=JSON.parse(localStorage.getItem("favoriteArray")),a=0;a<e.length;a++)t===e[a]&&e.splice(a,1);localStorage.setItem("favoriteArray",JSON.stringify(e)),window.location.reload(!0)}()}},"Remove From Favorites"):r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-success m-4",onClick:function(){return function(){var e=[];localStorage.getItem("favoriteArray")&&(e=JSON.parse(localStorage.getItem("favoriteArray"))),e.push(t),localStorage.setItem("favoriteArray",JSON.stringify(e)),window.location.reload(!0)}()}},"Add to Favorites")},h=function(e){var t=e.id,a=Object(n.useState)(null),l=Object(E.a)(a,2),c=l[0],m=l[1];function s(){return(s=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat(p)).then((function(e){return e.json()}));case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),c?r.a.createElement("div",{className:"d-inline-flex card a-card-width a-card-hover m-2 text-center bg-dark text-white"},r.a.createElement(i.b,{to:"/details",onClick:function(){return localStorage.setItem("movieID","".concat(t))}},r.a.createElement("img",{className:"card-img-top",alt:"Error Loading",src:c.Poster}),r.a.createElement("h2",{className:"text-warning"},c.Title),r.a.createElement("p",{className:"text-light"},"Year: ",c.Year),r.a.createElement("p",{className:"text-light"},"Type: ",c.Type)),r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(c.imdbID,"/"),className:"hyperLink"},"Imdb ID: ",c.imdbID),r.a.createElement(g,{id:c.imdbID})):r.a.createElement("div",{className:"p-padding text-center"},r.a.createElement("h2",{className:"text-warning"},"No Movie to Display"))},v=function(e){var t=e.Title;return r.a.createElement("h1",{className:"text-white pb-3"},r.a.createElement("u",null,t))},f=function(){if(localStorage.getItem("favoriteArray"))var e=JSON.parse(localStorage.getItem("favoriteArray"));return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),e?r.a.createElement("div",{className:"container-fluid p-padding text-center text-light"},r.a.createElement(v,{Title:"Your Favorite Movies!"}),r.a.createElement("div",null,e.map((function(t,a){return r.a.createElement(h,{key:a,id:e[a]})})))):r.a.createElement("div",{className:"p-padding text-center"},r.a.createElement(v,{Title:"Your Favorite Movies!"}),r.a.createElement("h2",{className:"text-warning"},"No Favorites Stored"))},b=function(e){var t=e.Title,a=e.Year,n=e.id,l=e.Type,c=e.Poster;return r.a.createElement("div",{className:"d-inline-flex card a-card-width a-card-hover d-inline-flex m-2 text-center bg-dark text-white"},r.a.createElement(i.b,{to:"/details",onClick:function(){return localStorage.setItem("movieID","".concat(n))}},r.a.createElement("img",{className:"card-img-top",alt:"Error Loading",src:"".concat(c),height:400}),r.a.createElement("h2",{className:"text-warning"},t),r.a.createElement("p",{className:"text-light"},"Year: ",a),r.a.createElement("p",{className:"text-light"},"Type: ",l)),r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(n,"/"),className:"hyperLink"},"Imdb ID: ",n),r.a.createElement(g,{id:n}))},N=function(e){var t=e.movies;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(b,{key:a,Title:t[a].Title,Year:t[a].Year,id:t[a].imdbID,Type:t[a].Type,Poster:t[a].Poster})})))},y=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(localStorage.getItem("searchString")),i=Object(E.a)(c,2),m=i[0],s=i[1],o=Object(n.useState)(1),g=Object(E.a)(o,2),h=g[0],f=g[1];function b(){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("searchString",m),e.next=3,fetch("https://www.omdbapi.com/?s=".concat(m,"&page=").concat(h,"&apikey=").concat(p)).then((function(e){return e.json()}));case 3:t=e.sent,l(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){null!==m&&b(),window.scrollTo(0,0)}),[h]),a&&"False"!==a.Response?r.a.createElement("div",{className:"p-padding text-center"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 text-right"},r.a.createElement(v,{Title:"Search Movies"}),r.a.createElement("input",{type:"text",size:"15",className:"h6",onChange:function(e){return s(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()}}),r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary btn-sm",onClick:function(){return b()}},"Title Search")),r.a.createElement("div",{className:"col-6 text-left"},r.a.createElement("p",{className:"text-warning"},"Total Search Results: ",a.totalResults),r.a.createElement("p",{className:"text-warning"},"Total Pages: ",Math.trunc(a.totalResults/10)+1),r.a.createElement("p",{className:"text-warning"},"Page Displayed: ",h),r.a.createElement("label",{className:"text-warning"}," Page Selector__",r.a.createElement("select",{onChange:function(e){return f(e.target.value)}},r.a.createElement("option",{id:1,value:1},"Page 1"),r.a.createElement("option",{id:2,value:2},"Page 2"),r.a.createElement("option",{id:3,value:3},"Page 3"),r.a.createElement("option",{id:4,value:4},"Page 4"))),r.a.createElement("p",{className:"text-warning"},"Searched Phrase: ",localStorage.getItem("searchString")))),r.a.createElement(N,{movies:a.Search})):r.a.createElement("div",{className:"p-padding text-center"},r.a.createElement(v,{Title:"Search Movies"}),r.a.createElement("input",{type:"text",size:"15",className:"h6",onChange:function(e){return s(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b()}}),r.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary btn-sm",onClick:function(){return b()}},"Title Search"),r.a.createElement("br",null),r.a.createElement("h2",{className:"text-warning"},"No Searches Matching: ",localStorage.getItem("searchString")))},w=function(){var e=Object(n.useState)(null),t=Object(E.a)(e,2),a=t[0],l=t[1];function c(){return(c=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("movieID"),e.next=3,fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat(p)).then((function(e){return e.json()}));case 3:a=e.sent,l(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){c.apply(this,arguments)}(),window.scrollTo(0,0)}),[]),a&&localStorage.getItem("movieID")?r.a.createElement("div",{className:"container-fluid p-padding text-center"},r.a.createElement(v,{Title:"Movie Details"}),r.a.createElement("img",{alt:"Error Loading",src:a.Poster,height:400}),r.a.createElement("br",null),r.a.createElement(g,{id:a.imdbID}),r.a.createElement("div",{className:"row justify-content-center "},r.a.createElement("table",{className:"table table-striped table-bordered text-white my-4 col-md-10 col-lg-6 bg-secondary"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"h5 text-warning"},r.a.createElement("td",null,"Title:"),r.a.createElement("td",null,a.Title)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Type:"),r.a.createElement("td",null,a.Type)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Released:"),r.a.createElement("td",null,a.Released)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Runtime:"),r.a.createElement("td",null,a.Runtime)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Rated:"),r.a.createElement("td",null,a.Rated)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Genre:"),r.a.createElement("td",null,a.Genre)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Director(s):"),r.a.createElement("td",null,a.Director)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Writer(s):"),r.a.createElement("td",null,a.Writer)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Actor(s):"),r.a.createElement("td",null,a.Actors)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"imdb ID:"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://www.imdb.com/title/".concat(a.imdbID,"/"),className:"hyperLink"},a.imdbID))),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"imdb Rating:"),r.a.createElement("td",null,a.imdbRating)),r.a.createElement("tr",{className:"h6"},r.a.createElement("td",null,"Plot:"),r.a.createElement("td",null,a.Plot)))))):r.a.createElement("div",{className:"p-padding text-center"},r.a.createElement(v,{Title:"Movie Details"}),r.a.createElement("h2",{className:"text-warning"},"No Movie to Display"))},x=function(){var e=(new Date).getFullYear();return r.a.createElement("div",{className:"text-white text-center bg-dark py-1"},r.a.createElement("small",null,"Copyright \xa9 Movie Gallery Website ",e.toString()))},S=a(21),I=a.n(S),T={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},k=function(){return r.a.createElement(i.a,null,r.a.createElement(I.a,{className:"particles",params:T}),r.a.createElement(s,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/details",component:w}),r.a.createElement(m.a,{path:"/favorites",component:f}),r.a.createElement(m.a,{path:"/",component:y})),r.a.createElement(x,null))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.27d60128.chunk.js.map