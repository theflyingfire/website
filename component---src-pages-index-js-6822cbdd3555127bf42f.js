"use strict";(self.webpackChunkthefireflyer=self.webpackChunkthefireflyer||[]).push([[678,822],{8320:function(e,t,n){var a=n(7294);n(5444);t.Z=function(e){var t=e.children;return a.createElement("div",{style:{minHeight:"100vh",width:"100%",height:"fit-content",top:"0",position:"absolute",left:"0"}},a.createElement("center",null,t),a.createElement("div",{className:"contentMargin"}))}},8845:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.videoSrcURL,n=e.videoTitle;return a.createElement("div",{className:"video",style:{display:""!=t?"block":"none"}},a.createElement("iframe",{src:"https://www.youtube.com/embed/"+t+"?autoplay=1&controls=0&modestbranding=1&enablejsapi=1&playlist="+t+"&loop=1",title:n,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),a.createElement("div",{id:"cover"}))}},6182:function(e,t,n){n.r(t);var a=n(7294),l=n(5444),r=n(4640),i=n(3751),o=(n(1496),n(9)),c=n(8320),m=o.default.div.withConfig({displayName:"gallery__Section",componentId:"sc-1hamj7u-0"})(["width:80%;display:grid;grid-auto-flow:row dense;grid-template-columns:auto auto auto;grid-gap:1%;@media only screen and (max-width:900px){width:95%;grid-template-columns:auto;}"]),u=o.default.div.withConfig({displayName:"gallery__ImageDiv",componentId:"sc-1hamj7u-1"})(["img{border-radius:20px;}"]);t.default=function(e){var t=e.data;return a.createElement(r.ZP,null,a.createElement(i.Z,{title:"Gallery"}),a.createElement(c.Z,null,a.createElement("div",{className:"contentMargin"}),a.createElement(m,null,t.allMdx.nodes.map((function(e){return a.createElement(u,{className:"pickable",key:e.frontmatter.slug},a.createElement(l.Link,{to:e.frontmatter.slug},a.createElement("img",{src:e.frontmatter.img[0].publicURL,style:{width:"100%",minWidth:"300px"}})))})))))}},7704:function(e,t,n){n.r(t);var a=n(7294),l=n(5444),r=n(4640),i=n(3751),o=(n(6182),n(8320)),c=n(8845);t.default=function(e){var t=e.data;return a.useLayoutEffect((function(){var e=window.setInterval(a,3e3),t=0,n=document.getElementsByClassName("featured-entry");function a(){t=(t+1)%n.length;for(var e=0;e<n.length;e++)n.item(e).style.display=e==t?"block":"none"}return a(),function(){window.clearInterval(e)}})),a.createElement(r.ZP,null,a.createElement(i.Z,{title:"Home"}),a.createElement(o.Z,null,a.createElement("div",{class:"featured"},t.allMdx.nodes.map((function(e){return a.createElement("div",{key:e.id,class:"featured-entry",style:{display:"block"}},a.createElement(l.Link,{to:e.frontmatter.slug},a.createElement("img",{style:{display:""!=e.frontmatter.videoSourceURL?"none":"block"},src:e.frontmatter.img[0].publicURL}),a.createElement(c.Z,{videoSrcURL:e.frontmatter.videoSourceURL,videoTitle:e.frontmatter.title}),a.createElement("div",{class:"featured-title"},a.createElement("h1",null,e.frontmatter.title))))}))),a.createElement("div",{class:"About-section",style:{textAlign:"center"}},a.createElement(l.Link,{to:"/about"},a.createElement("h1",null,"About")),a.createElement("p",null,"Welcome to my website, I am a programmer and digital artist and most of the stuff I make in either medium goes up here. ",a.createElement("br",null),"You can also find me on ",a.createElement("a",{href:"https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ"},"YouTube"),", ",a.createElement("a",{href:"https://github.com/theflyingfire"},"GitHub")," and ",a.createElement("a",{href:"https://thefireflyer.itch.io/"},"Itch.io"),"."))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6822cbdd3555127bf42f.js.map