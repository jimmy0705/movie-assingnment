(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{20:function(e,t,a){},59:function(e,t,a){e.exports=a(73)},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=a(21),i=(a(64),a(6)),m=(a(45),a(81)),s=a(78),u=a(82);a(20);var v=function(e){return r.a.createElement("div",{className:"navbar-area"},r.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:"light",fixed:"top"},r.a.createElement(s.a,null,r.a.createElement(o.b,{to:"/",className:"home-link"},"Home "),r.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"ml-auto"},r.a.createElement(o.b,{to:"/favourite",className:"favourite-link"}," Favourites "))))))},d=a(42),p=a.n(d),f=a(49),g=a(10),E=a(80),b=a(54),h=a(79),N=a(56);var y=function(e){var t=e.movies,a=e.movieId,c=e.movieName,l=e.type,o=Object(n.useState)(!1),i=Object(g.a)(o,2),m=i[0],s=i[1],u=Object(n.useState)([]),v=Object(g.a)(u,2);return v[0],v[1],Object(n.useEffect)((function(){var e=localStorage.getItem("id");(JSON.parse(e)||[]).map((function(e,t){e.movieId===a&&s(!0)}))}),[]),r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{className:"bd-placeholder-img card-img-top",width:"100%",height:"180",src:t.Poster}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.Title),r.a.createElement("p",{className:"card-text"},t.Year),r.a.createElement("a",{href:"#",className:"btn btn-primary",onClick:function(e){e.preventDefault(),s(!m);var t=localStorage.getItem("id"),n=JSON.parse(t)||[];n.map((function(e){return e.movieId})).includes(a)?n=n.filter((function(e){return e.movieId!==a})):n.push({movieId:a,movieName:c,type:l}),localStorage.setItem("id",JSON.stringify(n))}}," ",m?"Unfavorite":"Favorite")))};var O=function(e){var t=e.loading,a=e.nodata,c=e.movies,l=Object(n.useState)("All"),o=Object(g.a)(l,2),i=o[0],m=o[1];return void 0!==c&&("movie"===i?c=c.filter((function(e){return"movie"===e.Type})):"series"===i?c=c.filter((function(e){return"series"===e.Type})):"episodes"===i&&(c=c.filter((function(e){return"episodes"===e.Type})))),Object(n.useEffect)((function(){}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:"drp-button",id:"dropdown-basic-button",title:i,style:{textAlign:"center"}},r.a.createElement("div",{onClick:function(e){e.preventDefault(),console.log(e.target.text),m(e.target.text)}},r.a.createElement(N.a.Item,{href:"#"},"All"),r.a.createElement(N.a.Item,{href:"#?"},"movie"),r.a.createElement(N.a.Item,{href:"#"},"series"),r.a.createElement(N.a.Item,{href:"#"},"episodes"))),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards-area"},t?r.a.createElement("h3",{className:"result-loading",style:{textAlign:"center"}},"loading..."):a?r.a.createElement("h3",{className:"result-nodata",style:{textAlign:"center"}},"Too Many Datas..."):c.map((function(e){return r.a.createElement(y,{movies:e,movieId:e.imdbID,movieName:e.Title,type:e.Type,key:e.imdbID})})))))};var S=function(e){var t=Object(n.useState)(""),a=Object(g.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(g.a)(o,2),m=i[0],u=i[1],v=Object(n.useState)(!1),d=Object(g.a)(v,2),h=d[0],N=d[1],y=Object(n.useState)(null),S=Object(g.a)(y,2),j=(S[0],S[1]),I=Object(n.useState)([]),x=Object(g.a)(I,2),w=x[0],k=x[1];function T(){return(T=Object(f.a)(p.a.mark((function e(t){var a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(!0),a="http://www.omdbapi.com/?apikey=e0df3e16&s=".concat(c,"&page=1&type="),e.prev=3,e.next=6,fetch(a);case 6:return n=e.sent,e.next=9,n.json();case 9:if(r=e.sent,console.log(r.Response),"False"!==r.Response){e.next=15;break}return N(!0),u(!1),e.abrupt("return");case 15:u(!1),N(!1),k(r.Search),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(3),console.error(e.t0),j("something went wrong"),u(!1);case 25:case"end":return e.stop()}}),e,null,[[3,20]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"search-area",style:{marginTop:"6em"}},r.a.createElement(s.a,null,r.a.createElement("h2",{style:{textAlign:"center",fontWeight:"600",marginTop:"1em"}},"Search Movies"),r.a.createElement(E.a,{inline:!0,onSubmit:function(e){return T.apply(this,arguments)}},r.a.createElement(E.a.Control,{className:"mb-2 mr-sm-2",id:"inlineFormInputName2",placeholder:"Search movies...",value:c,onChange:function(e){return l(e.target.value)},required:!0}),r.a.createElement(b.a,{type:"submit",className:"mb-2",style:{padding:"6px 1.5em"}},"Submit")),r.a.createElement(O,{movies:w,loading:m,nodata:h})))};var j=function(e){console.log(e);var t=e.movie;return r.a.createElement("div",{className:"favourite-card"},r.a.createElement("p",{className:"favourite-p",style:{}},t.movieName))};var I=function(e){var t=Object(n.useState)(Boolean(localStorage.getItem("id"))),a=Object(g.a)(t,2),c=a[0],l=(a[1],Object(n.useState)([])),o=Object(g.a)(l,2),i=o[0],m=o[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("id"),t=JSON.parse(e)||[];console.log(t),m(t)}),[]),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"favourite-title",style:{textAlign:"center",marginTop:"4em",marginBottom:"1em",fontWeight:"600"}},"Favorite Movies"),i.map((function(e){return r.a.createElement(j,{movie:e,key:e.movieId})}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{textAlign:"center",marginTop:"4em",fontSize:"600"}},"No Favorite Movies added"))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(S,null)),r.a.createElement(i.a,{to:"/"}),r.a.createElement(i.b,{path:"/favourite"},r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.e4ad7833.chunk.js.map