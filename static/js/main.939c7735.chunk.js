(window["webpackJsonphight-order-component"]=window["webpackJsonphight-order-component"]||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(21),o=a.n(i),c=(a(32),a(11)),s=a(7),u=a(12),m=a(13),l=a(17),p=a(53),d=a(54),g=a(52),h=a(55),f=a(56),v=Object(g.a)(function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:400,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)},bigAvatar:{margin:10,width:100,height:100}}});var b=function(e){var t=e.name,a=e.image,n=e.description,i=(e.isLoading,e.ident,v());return r.a.createElement(p.a,{item:!0,md:4,xl:3,className:i.root},r.a.createElement(d.a,{className:i.paper},r.a.createElement(p.a,{container:!0,wrap:"nowrap",spacing:2},r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{src:a,alt:"avatar",className:i.bigAvatar})),r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(f.a,{variant:"h5",component:"h2"},t),r.a.createElement(f.a,null,n)))))},E=a(57),w=Object(g.a)(function(e){return{progress:{margin:e.spacing(2)}}});var j=function(){var e=w();return r.a.createElement("div",null,r.a.createElement(E.a,{className:e.progress}))};var O=function(e){return e.props.isLoading?r.a.createElement(j,{key:e.props.ident}):r.a.createElement(b,Object.assign({key:e.props.ident},e.props))},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={movies:[{name:"Robin de bois",image:"http://mondocine.net/wp-content/uploads/2018/11/robin_des_bois_film_2018.jpg",description:"Robin de Loxley, combattant aguerri revenu des croisades, et un chef maure prennent la t\xeate d\u2019une audacieuse r\xe9volte contre la corruption des institutions.",isLoading:!0},{name:"Dora",image:"https://static.actu.fr/uploads/2019/08/affiche-dora-854x1139.jpg",description:"Dora d\xe9barque sur grand \xe9cran, tout comme les fameux Playmobil\xae. Le Roi lion est de retour, Toy Story aussi, sans oublier les autres fictions d'une semaine tr\xe8s familiale.",isLoading:!0}]},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({movies:e.state.movies.map(function(e){return e.isLoading=!1,e})})},2e3)}},{key:"render",value:function(){return r.a.createElement(p.a,{container:!0,spacing:2},this.state.movies.map(function(e,t){return O(r.a.createElement(b,Object.assign({key:t,ident:t},e)))}))}}]),t}(n.Component),k=(a(37),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(y,null)))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.939c7735.chunk.js.map