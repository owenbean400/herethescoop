(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/9XU":function(e,t,a){},"0l77":function(e,t,a){e.exports=a.p+"static/icecream_cotton-8a48bc633c312783b403438a4c101470.png"},"1CvL":function(e,t,a){},"1ppt":function(e,t,a){e.exports=a.p+"static/icecream_chocolate-be0fff739a93d8292a5cb0d4a86413f2.png"},"4VWn":function(e,t,a){},"6us9":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("JX7q"),i=a("dI71"),r=a("q1tI"),c=a.n(r),o=a("Wbzz"),l=(a("4VWn"),["Flavors","Our Stories","Find Us"]),s=/\w/g,m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showPhoneLinks:!1},a.handleClick=a.handleClick.bind(Object(n.a)(a)),a.handleResize=a.handleResize.bind(Object(n.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.handleClick=function(){this.setState((function(e){return{showPhoneLinks:!e.showPhoneLinks}}))},a.handleResize=function(){window.innerWidth>768&&this.setState((function(){return{showPhoneLinks:!1}}))},a.componentDidMount=function(){"undefined"!=typeof window&&window.addEventListener("resize",this.handleResize)},a.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.handleResize)},a.render=function(){var e=l.map((function(e){return c.a.createElement(o.Link,{key:e,to:"/"+e.toLowerCase().match(s).join("")+"/"},c.a.createElement("li",null,e))}));return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("h1",null,c.a.createElement(o.Link,{to:"/"},"Here The Scoop")),c.a.createElement("ol",null,e),c.a.createElement("div",{id:"hamburger",onClick:this.handleClick},c.a.createElement("div",{className:"hamburger-slice"}),c.a.createElement("div",{className:"hamburger-slice"}),c.a.createElement("div",{className:"hamburger-slice"}))),c.a.createElement("div",{id:"navbar-phone-links",style:this.state.showPhoneLinks?{top:"0"}:{top:"-400px"}},c.a.createElement("ol",null,e)))},t}(r.Component)},"Ce/m":function(e,t,a){e.exports=a.p+"static/building-6d7664cbfd34b8ee792b1303bd0ea603.png"},EhBY:function(e,t,a){e.exports=a.p+"static/icecream_vanilla-58e43af71270463613316bb8e785159b.png"},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return F}));var n=a("JX7q"),i=a("dI71"),r=a("q1tI"),c=a.n(r),o=a("Wbzz");a("/9XU");function l(e){return c.a.createElement("div",null,c.a.createElement("button",{className:"button"},e.buttonName))}var s=a("6us9"),m=(a("1CvL"),a("iYqy")),u=a.n(m),d=a("Ce/m"),h=a.n(d),p=a("l8Ye"),b=a.n(p),f=a("yQCl"),g=a.n(f),v=a("1ppt"),C=a.n(v),E=a("uipR"),I=a.n(E),w=a("EhBY"),k=a.n(w),y=a("0l77"),N=a.n(y),x=a("Vfy3"),S=a.n(x),F=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={IceCreamFlavorNumber:0},a.leftClickedIcecream=a.leftClickedIcecream.bind(Object(n.a)(a)),a.rightClickedIcecream=a.rightClickedIcecream.bind(Object(n.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.leftClickedIcecream=function(){var e=this;0!==this.state.IceCreamFlavorNumber?this.setState((function(){return{IceCreamFlavorNumber:e.state.IceCreamFlavorNumber-1}})):this.setState((function(){return{IceCreamFlavorNumber:4}}))},a.rightClickedIcecream=function(){var e=this;4!==this.state.IceCreamFlavorNumber?this.setState((function(){return{IceCreamFlavorNumber:e.state.IceCreamFlavorNumber+1}})):this.setState((function(){return{IceCreamFlavorNumber:0}}))},a.render=function(){var e={0:{iceCreamFlavor:"Chocolate Ice-Cream",iceCreamImg:C.a},1:{iceCreamFlavor:"Strawberry Ice-Cream",iceCreamImg:I.a},2:{iceCreamFlavor:"Vanilla Ice-Cream",iceCreamImg:k.a},3:{iceCreamFlavor:"Cotton Candy Ice-Cream",iceCreamImg:N.a},4:{iceCreamFlavor:"Cookie & Creme Ice-Cream",iceCreamImg:S.a}};return c.a.createElement("div",null,c.a.createElement(s.a,null),c.a.createElement("main",{id:"main-main"},c.a.createElement("section",{id:"flavor-picker-container"},c.a.createElement("h2",null,"Choose a Flavor"),c.a.createElement("div",{id:"flavor-picker-view"},c.a.createElement("img",{src:b.a,className:"image-button",onClick:this.leftClickedIcecream}),c.a.createElement("div",{id:"icecream-image"},c.a.createElement("img",{src:g.a,id:"icecream-image-cone",alt:"ice-cream cone"}),c.a.createElement("img",{src:e[this.state.IceCreamFlavorNumber].iceCreamImg,id:"icecream-image-icecream",alt:"icecream cone"})),c.a.createElement("img",{src:b.a,className:"image-button",onClick:this.rightClickedIcecream})),c.a.createElement("h4",null,e[this.state.IceCreamFlavorNumber].iceCreamFlavor),c.a.createElement(o.Link,{to:"/flavors/"},c.a.createElement(l,{buttonName:"More Flavors"}))),c.a.createElement("section",{id:"our-story-container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Our Story"),c.a.createElement("p",null,"La verdure on et pelouse minutes la dernier. Oh ca dechire rustres heureux ensuite en. Voulut baquet sortie que nul. Souvenirs pouvaient ont vie qui expliquer fit annoncait. Crurent tristes des partout meriter ere rustres. Nid par adultes maigres famille entrevu pelouse. Que son car ete neanmoins puissions echauffer. Maison ah tuiles terres rendre le venait ou. Altere une non signes sortie trente prison."," "),c.a.createElement(l,{buttonName:"More About Us"})),c.a.createElement("img",{src:h.a,alt:"Here The Scoop building",id:"building-img"})),c.a.createElement("section",{id:"fun-container"},c.a.createElement("h3",null,"Join the Fun"),c.a.createElement("div",{id:"fun-active"},c.a.createElement("img",{src:"https://source.unsplash.com/random?0",alt:"test",width:"200px",height:"200px"}),c.a.createElement("img",{src:"https://source.unsplash.com/random?1",alt:"test",width:"200px",height:"200px"}),c.a.createElement("img",{src:"https://source.unsplash.com/random?2",alt:"test",width:"200px",height:"200px"})),c.a.createElement("p",null,"Come on the first day to get your picture taken on the wall")),c.a.createElement("section",{id:"location-container"},c.a.createElement("img",{src:u.a,alt:"Here The Scoop Sign outside of the building",id:"sign-img"}),c.a.createElement("div",{id:"location-info"},c.a.createElement("h3",null,"Come Enjoy a Scoop"),c.a.createElement("address",null,"755 Gardiner Rd, Dresden Me 04342"),c.a.createElement("img",{src:"https://www.topoquest.com/place-detail-map.php?id=582446",alt:"test",width:"400px",height:"200px"}),c.a.createElement(o.Link,{to:"/findus/"},c.a.createElement(l,{buttonName:"Location"}))))))},t}(r.Component)},Vfy3:function(e,t,a){e.exports=a.p+"static/icecream_cookie-4c16aaf034e6d80bf8ff5553c626edeb.png"},iYqy:function(e,t,a){e.exports=a.p+"static/sign-f9e1e1bc06aa9845874f1d3c8d762862.png"},l8Ye:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4zLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxOTkgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTkgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cG9seWdvbiBwb2ludHM9IjAsMTAwIDAsMCA5OS41LDUwIDE5OSwxMDAgOTkuNSwxNTAgMCwyMDAgCSIvPg0KPC9nPg0KPC9zdmc+DQo="},uipR:function(e,t,a){e.exports=a.p+"static/icecream_strawberry-6539c04ebba6ff44ec39fb6cde4681e5.png"},yQCl:function(e,t,a){e.exports=a.p+"static/cone-c0d19777dc73e989009a5925da557326.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-cec85fffc5204590c36e.js.map