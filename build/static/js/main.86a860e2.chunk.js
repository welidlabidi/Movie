(this.webpackJsonpreactmoevies=this.webpackJsonpreactmoevies||[]).push([[0],{29:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),o=(a(34),a(16)),i=a(10),s=a(13),m=a.n(s),u=a(11),d=a(28),v=a(12),E=function(e){var t="https://www.youtube.com/embed/".concat(e.trailer);return r.a.createElement("div",{className:"iframe"},r.a.createElement("embed",{style:{width:"580px",height:"350px"},frameBorder:"0",type:"video/webm",src:t}))},p=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"cardactors"},r.a.createElement(u.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w185/"+e.img,alt:"no image found"}),r.a.createElement("p",{className:"name"},e.name),r.a.createElement("p",{className:"character"},r.a.createElement("i",null,e.character))))},f=a(15),h=a(27),y=function(e){var t=e.result,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],o=c[1],s=Object(n.useState)([]),y=Object(i.a)(s,2),g=y[0],b=y[1],w=Object(n.useState)([]),N=Object(i.a)(w,2),k=N[0],j=N[1],O="fac34116c639f3e75cd5205251be421c",_="https://api.themoviedb.org/3/movie/".concat(t.id,"/videos?api_key=").concat(O,"&append_to_respone=videos"),C="https://api.themoviedb.org/3/movie/".concat(t.id,"/credits?api_key=").concat(O),x=function(){return o(!1)};Object(n.useEffect)((function(){m()(_).then((function(e){var t=e.data;b(t.results),console.log(t)}))}),[_]);for(var S="",q=0;q<g.length;q++)for(var B=g[q].name.toLowerCase().split(" "),I=0;I<B.length;I++)"official"===B[I]&&"trailer"===B[I]&&(S=g[q].key,B=g[q].name),"trailer"===B[I]&&(S=g[q].key,B=g[q].name);return Object(n.useEffect)((function(){m()(C).then((function(e){var t=e.data.cast.slice(0,8);j(t)}))}),[C]),r.a.createElement("div",null,r.a.createElement(u.a,{className:"movie",style:{width:"13rem"},onClick:function(){return o(!0)}},r.a.createElement("button",null,r.a.createElement(u.a.Img,{variant:"top",src:"https://image.tmdb.org/t/p/w185/"+t.poster_path,alt:"no image found"}))),r.a.createElement(v.a,{show:l,onHide:x,centered:!0,size:"lg"},r.a.createElement("div",{className:"popup"},r.a.createElement(v.a.Header,null,r.a.createElement(v.a.Title,null,r.a.createElement("div",{className:"titlemovie"},t.original_title,"(",t.release_date.substring(0,4),")"))),r.a.createElement(v.a.Body,null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"discription"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"modalimg"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/"+t.poster_path,alt:"ok"})),r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"data"},r.a.createElement("p",null,r.a.createElement(f.a,{style:{color:"yellow"}}),r.a.createElement(f.a,{style:{color:"yellow"}}),r.a.createElement(f.a,{style:{color:"yellow"}}),t.vote_average),r.a.createElement("p",null,r.a.createElement(h.a,null),t.original_language)),r.a.createElement("h5",null," ",t.overview))))),r.a.createElement(E,{trailer:S}),r.a.createElement("div",{className:"actors"},r.a.createElement("div",{className:"row",style:{justifyContent:"space-evenly"}},k.map((function(e){return r.a.createElement(p,{key:e.id,name:e.name,character:e.character,img:e.profile_path})}))))),r.a.createElement(v.a.Footer,null,r.a.createElement(d.a,{variant:"secondary",onClick:x},"Close")))))},g=function(e){var t=e.results;return r.a.createElement("div",{className:"style"},r.a.createElement("div",{className:"row",style:{justifyContent:"space-evenly"}},t.map((function(e){return r.a.createElement(y,{key:e.id,result:e})}))))},b=function(e){var t=e.handle,a=e.search;return r.a.createElement("form",null,r.a.createElement("input",{onChange:t,type:"text",name:"movie",placeholder:"Search for a Movie",onKeyPress:a}))},w=(a(54),function(){var e="https://api.themoviedb.org/3/search/movie?api_key=".concat("fac34116c639f3e75cd5205251be421c"),t=Object(n.useState)({query:"",result:[]}),a=Object(i.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row",style:{justifyContent:"space-around",alignItems:"center"}},r.a.createElement("h1",null,"Quarantine Movies"),r.a.createElement(b,{handle:function(e){var t=e.target.value;l((function(e){return Object(o.a)({},e,{query:t})}))},search:function(t){"Enter"===t.key&&(m()(e+"&query="+c.query).then((function(e){var t=e.data.results;l((function(e){return Object(o.a)({},e,{result:t})}))})),t.preventDefault())}}))),r.a.createElement("div",{className:""},r.a.createElement(g,{key:c.id,results:c.result}),console.log(c)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.86a860e2.chunk.js.map