(this.webpackJsonpmoviegallery=this.webpackJsonpmoviegallery||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/imageBlank.dcb16180.jpg"},25:function(e,t,a){e.exports=a(41)},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),s=(a(30),a(7)),i=a(8),o=(a(31),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark fixed-top p-1"},l.a.createElement("h2",{className:"text-light"},"Movie Gallery"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive"},l.a.createElement("span",{className:"text-white"},l.a.createElement("i",{className:"fas fa-bars"}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(s.b,{to:"/",className:"nav-link px-3 py-1"},"Search")),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(s.b,{to:"/favorites",className:"nav-link px-3 py-1"},"Favorites")),l.a.createElement("li",{className:"navbar-brand"},l.a.createElement(s.b,{to:"/details",className:"nav-link px-3 py-1"},"Details")))))}),m=function(e){var t=e.Title;return l.a.createElement("h1",{className:"text-white pb-3"},l.a.createElement("u",null,t))};a(36);var u=a(5),d=a.n(u),p=a(2),g="bf0372ee",h=function(){return l.a.createElement("p",{className:"container-fluid p-padding text-center text-white"},l.a.createElement("i",{className:"fas fa-5x fa-cog fa-spin"}))};function E(e){return localStorage.setItem("FavoriteArray",JSON.stringify(e)),{type:"Favorites_Change",payload:e}}var v=a(11);var b=Object(v.a)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("FavoriteArray"))||[],t=arguments.length>1?arguments[1]:void 0;return"Favorites_Change"===t.type?t.payload:e},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.getItem("Movieselected")||null,t=arguments.length>1?arguments[1]:void 0;return"Movie_Change"===t.type?t.payload:e},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.getItem("Pageselected")||1,t=arguments.length>1?arguments[1]:void 0;return"Page_Change"===t.type?t.payload:e},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.getItem("Resultsselected")||10,t=arguments.length>1?arguments[1]:void 0;return"Results_Change"===t.type?t.payload:e},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:localStorage.getItem("Searchstring")||"",t=arguments.length>1?arguments[1]:void 0;return"Search_Change"===t.type?t.payload:e}}),f=Object(v.b)(b),N=function(e){for(var t=e.id,a=Object(n.useState)(!1),r=Object(p.a)(a,2),c=r[0],s=r[1],i=f.getState().favorites,o=!1,m=0;m<i.length;m++)t===i[m].imdbID&&(o=!0);return c?l.a.createElement(h,null):o?l.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-danger m-4",onClick:function(){return function(){for(var e=0;e<i.length;e++)t===i[e].imdbID&&i.splice(e,1);f.dispatch(E(i)),window.location.reload(!0)}()}},"Remove From Favorites"):l.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-success m-4",onClick:function(){return s(!0),void function(){var e,a;d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(fetch("https://www.omdbapi.com/?i=".concat(t,"&apikey=").concat(g)).then((function(e){return e.json()})));case 2:e=n.sent,a={Title:e.Title,Year:e.Year,imdbID:e.imdbID,Type:e.Type,Poster:e.Poster},i.push(a),f.dispatch(E(i)),s(!1);case 7:case"end":return n.stop()}}))}()}},"Add to Favorites")},y=function(e){var t=e.Title,n=e.Year,r=e.id,c=e.Type,i=e.Poster,o="".concat(i);return"N/A"===o&&(o=a(19)),l.a.createElement("div",{className:"card d-inline-flex m-card-width m-card-hover m-1 bg-dark"},l.a.createElement(s.b,{to:"/details",onClick:function(){return f.dispatch((e="".concat(r),localStorage.setItem("Movieselected",e),{type:"Movie_Change",payload:e}));var e}},l.a.createElement("img",{className:"m-cardimg-height w-100",alt:"Error Loading",src:o}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-warning"},t),l.a.createElement("p",{className:"card-text text-light"},"Year: ",n),l.a.createElement("p",{className:"card-text text-light"},"Type: ",c))),l.a.createElement("a",{href:"https://www.imdb.com/title/".concat(r,"/"),rel:"noopener noreferrer",target:"_blank",className:"m-cardhyperLink-color"},"Imdb ID: ",r),l.a.createElement(N,{id:r}))},w=function(e){var t=e.movies;return l.a.createElement("div",null,t.map((function(e,a){return l.a.createElement(y,{key:a,Title:t[a].Title,Year:t[a].Year,id:t[a].imdbID,Type:t[a].Type,Poster:t[a].Poster})})))},S=function(){return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]),0===f.getState().favorites.length?l.a.createElement("div",{className:"container-fluid p-padding text-center"},l.a.createElement(m,{Title:"Favorite Movies"}),l.a.createElement("h2",{className:"text-warning"},"No Favorites Stored")):l.a.createElement("div",{className:"container-fluid p-padding text-center"},l.a.createElement(m,{Title:"Favorite Movies"}),l.a.createElement(w,{movies:f.getState().favorites}))},x=function(e){var t=e.Results,a=e.Page,n=e.Total,r=(a-1)*t+1,c=t*a;return t*a>n&&(c=n),l.a.createElement("p",{className:"text-warning"},"Displaying Results: ",r," through ",c)};function T(e){return localStorage.setItem("Pageselected",e),{type:"Page_Change",payload:e}}var j=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([1]),s=Object(p.a)(c,2),i=s[0],o=s[1],u=Object(n.useState)(),E=Object(p.a)(u,2),v=E[0],b=E[1],N=Object(n.useState)(!1),y=Object(p.a)(N,2),S=y[0],j=y[1],k=Object(n.useState)(!1),O=Object(p.a)(k,2),R=O[0],C=O[1],I=Object(n.useState)(f.getState().search),P=Object(p.a)(I,2),D=P[0],M=P[1],F=Object(n.useState)([]),_=Object(p.a)(F,2),A=_[0],Y=_[1],L=Object(n.useRef)(""),B=Object(n.useRef)("");function G(){var e,t,a,n,l,c,s,i,m,u,p,h;return d.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:return C(!0),f.dispatch((v=D,localStorage.setItem("Searchstring",v),{type:"Search_Change",payload:v})),E.next=4,d.a.awrap(fetch("https://www.omdbapi.com/?s=".concat(D,"&apikey=").concat(g)).then((function(e){return e.json()})));case 4:for(e=E.sent,b(e.totalResults),t="True"===e.Response,j(t),a=Math.ceil(e.totalResults/f.getState().results),n=[],l=1;l<=a;l++)n.push(l);for(o(n),c=[],s=Math.ceil(e.totalResults/10),i=(f.getState().page-1)*(f.getState().results/10)+1;i<=f.getState().page*f.getState().results/10;i++)i<=s&&c.push(i);m=[],u=0;case 17:if(!(u<c.length)){E.next=25;break}return E.next=20,d.a.awrap(fetch("https://www.omdbapi.com/?s=".concat(D,"&page=").concat(c[u],"&apikey=").concat(g)).then((function(e){return e.json()})));case 20:for(p=E.sent,h=0;h<p.Search.length;h++)m.push(p.Search[h]);case 22:u++,E.next=17;break;case 25:r(m),L.current="",B.current="",Y(m),C(!1);case 30:case"end":return E.stop()}var v}))}function J(){var e=a.filter((function(e){return e.Title.toLowerCase().includes(L.current)})).filter((function(e){return e.Type.includes(B.current)}));Y(e)}return Object(n.useEffect)((function(){null!==f.getState().search&&G(),window.scrollTo(0,0)}),[]),R?l.a.createElement(h,null):a&&S?l.a.createElement("div",{className:"container-fluid p-padding text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-3"}),l.a.createElement("div",{className:"col-xl-3 col-md-6"},l.a.createElement(m,{Title:"Search Movies"}),l.a.createElement("input",{type:"text",placeholder:"Enter a movie title",className:"h6",onChange:function(e){return M(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(f.dispatch(T(1)),G())}}),l.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary btn-sm",onClick:function(){f.dispatch(T(1)),G()}},"Title Search"),l.a.createElement("h6",{className:"text-white mt-2"},"Filter Title By:"),l.a.createElement("input",{type:"search",placeholder:"Enter filter term",className:"h6",onChange:function(e){L.current=e.target.value.toLowerCase(),J()}}),l.a.createElement("br",null),l.a.createElement("label",{className:"text-white h6"},"Filter Type By:",l.a.createElement("select",{className:"my-2",value:B.current,onChange:function(e){B.current=e.target.value,J()}},l.a.createElement("option",{key:"",value:""},"Show All"),["movie","series","game"].map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))),l.a.createElement("div",{className:"col-xl-3 col-md-6 text-md-left"},l.a.createElement("p",{className:"text-warning"},"Total Search Results: ",v),l.a.createElement("p",{className:"text-warning"},"Total Pages: ",i.length),l.a.createElement("label",{className:"text-warning"},"Results per Page:",l.a.createElement("select",{className:"ml-1",value:f.getState().results,onChange:function(e){var t;f.dispatch(T(1)),f.dispatch((t=e.target.value,localStorage.setItem("Resultsselected",t),{type:"Results_Change",payload:t})),G()}},[10,20,50].map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("br",null),l.a.createElement("label",{className:"text-warning"}," Page:",l.a.createElement("select",{className:"ml-1 my-2",value:f.getState().page,onChange:function(e){f.dispatch(T(e.target.value)),G()}},i.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("p",{className:"text-warning"},'Searches Matching: "',f.getState().search,'"'),l.a.createElement(x,{Page:f.getState().page,Results:f.getState().results,Total:v})),l.a.createElement("div",{className:"col-xl-3"})),l.a.createElement(w,{movies:A})):l.a.createElement("div",{className:"container-fluid p-padding text-center"},l.a.createElement(m,{Title:"Search Movies"}),l.a.createElement("input",{type:"text",size:"15",className:"h6",onChange:function(e){return M(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(f.dispatch(T(1)),G())}}),l.a.createElement("button",{type:"submit",value:"Submit",className:"btn btn-primary btn-sm",onClick:function(){f.dispatch(T(1)),G()}},"Title Search"),l.a.createElement("br",null),l.a.createElement("h2",{className:"text-warning"},"No Searches Matching: ",f.getState().search))},k=(a(39),function(){var e=f.getState().movie,t=Object(n.useState)(null),r=Object(p.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(p.a)(i,2),u=o[0],E=o[1],v=Object(n.useState)(a(19)),b=Object(p.a)(v,2),y=b[0],w=b[1];return Object(n.useEffect)((function(){!function(){var t;d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return E(!0),a.next=3,d.a.awrap(fetch("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat(g)).then((function(e){return e.json()})));case 3:t=a.sent,s(t),"N/A"!==t.Poster&&w(t.Poster),E(!1);case 7:case"end":return a.stop()}}))}(),window.scrollTo(0,0)}),[]),u?l.a.createElement(h,null):c&&e?l.a.createElement("div",{className:"container-fluid p-padding text-center "},l.a.createElement(m,{Title:"Movie Details"}),l.a.createElement("img",{className:"p-movieimage-height p-movieimage-width bg-dark",alt:"Error Loading",src:y}),l.a.createElement("br",null),l.a.createElement(N,{id:c.imdbID}),l.a.createElement("div",{className:"row justify-content-center "},l.a.createElement("table",{className:"table table-striped table-bordered text-white my-4 col-md-10 col-lg-6 bg-secondary"},l.a.createElement("tbody",null,l.a.createElement("tr",{className:"h5 text-warning"},l.a.createElement("td",{className:"align-middle"},"Title:"),l.a.createElement("td",null,c.Title)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"Type:"),l.a.createElement("td",null,c.Type)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"Released:"),l.a.createElement("td",null,c.Released)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"Runtime:"),l.a.createElement("td",null,c.Runtime)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"Rated:"),l.a.createElement("td",null,c.Rated)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"Genre:"),l.a.createElement("td",null,c.Genre)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",{className:"align-middle"},"Director(s):"),l.a.createElement("td",null,c.Director)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",{className:"align-middle"},"Writer(s):"),l.a.createElement("td",null,c.Writer)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",{className:"align-middle"},"Actor(s):"),l.a.createElement("td",null,c.Actors)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"imdb ID:"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.imdb.com/title/".concat(c.imdbID,"/"),className:"p-hyperLink-color",rel:"noopener noreferrer",target:"_blank"},c.imdbID))),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",null,"imdb Rating:"),l.a.createElement("td",{className:"align-middle"},c.imdbRating)),l.a.createElement("tr",{className:"h6"},l.a.createElement("td",{className:"align-middle"},"Plot:"),l.a.createElement("td",null,c.Plot)))))):l.a.createElement("div",{className:"container-fluid p-padding text-center"},l.a.createElement(m,{Title:"Movie Details"}),l.a.createElement("h2",{className:"text-warning"},"No Movie to Display"))}),O=(a(40),function(){var e=(new Date).getFullYear();return l.a.createElement("div",{className:"text-white text-center bg-dark py-2 o-footer-height o-footer-bottom"},l.a.createElement("small",null,"Copyright \xa9 Movie Gallery Website ",e.toString()))}),R=a(24),C=a.n(R),I={particles:{number:{value:80,density:{enable:!0,value_area:800}}}},P=function(){return l.a.createElement(s.a,null,l.a.createElement(C.a,{className:"p-particles",params:I}),l.a.createElement(o,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/details",component:k}),l.a.createElement(i.a,{path:"/favorites",component:S}),l.a.createElement(i.a,{path:"/",component:j})),l.a.createElement(O,null))};c.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.14b02699.chunk.js.map