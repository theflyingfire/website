"use strict";(self.webpackChunkthefireflyer=self.webpackChunkthefireflyer||[]).push([[678,822],{8320:function(e,t,n){var r=n(7294);n(5444);t.Z=function(e){var t=e.children;return r.createElement("div",{style:{minHeight:"100vh",width:"100%",height:"fit-content",top:"0",position:"absolute",left:"0"}},r.createElement("center",null,t),r.createElement("div",{style:{marginBottom:"5vh"}}))}},8845:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.videoSrcURL,n=e.videoTitle;return r.createElement("div",{className:"video",style:{display:""==t?"none":"block"}},r.createElement("iframe",{src:"https://www.youtube.com/embed/"+t+"?autoplay=1&controls=0&modestbranding=1&enablejsapi=1&playlist="+t+"&loop=1",title:n,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.createElement("div",{id:"cover"}))}},6182:function(e,t,n){n.r(t);var r=n(7294),a=n(5444),l=n(4640),i=n(3751),o=(n(1496),n(9)),c=n(8320),m=o.default.div.withConfig({displayName:"gallery__Section",componentId:"sc-1hamj7u-0"})(["width:80%;display:grid;grid-auto-flow:row dense;grid-template-columns:auto auto auto;grid-gap:1%;@media only screen and (max-width:900px){width:95%;grid-template-columns:auto;}"]),u=o.default.div.withConfig({displayName:"gallery__ImageDiv",componentId:"sc-1hamj7u-1"})(["img{border-radius:20px;}"]);t.default=function(e){var t=e.data;return r.createElement(l.ZP,null,r.createElement(i.Z,{title:"Gallery"}),r.createElement(c.Z,null,r.createElement("div",{style:{marginBottom:"3.5vw"}}),r.createElement(m,null,t.allMarkdownRemark.nodes.map((function(e){return r.createElement(u,{className:"pickable"},r.createElement(a.Link,{to:e.frontmatter.slug},r.createElement("img",{src:(0,a.withPrefix)(e.frontmatter.img.publicURL),style:{width:"100%",minWidth:"300px"}})))})))))}},7704:function(e,t,n){n.r(t);var r=n(7294),a=n(5444),l=n(4640),i=n(3751),o=(n(6182),n(8320)),c=n(8845);t.default=function(e){var t=e.data;return r.useLayoutEffect((function(){var e=window.setInterval(r,3e3),t=0,n=document.getElementsByClassName("featured-entry");function r(){t=(t+1)%n.length;for(var e=0;e<n.length;e++)n.item(e).style.display=e==t?"block":"none"}return r(),function(){window.clearInterval(e)}})),r.createElement(l.ZP,null,r.createElement(i.Z,{title:"Home"}),r.createElement(o.Z,null,r.createElement("div",{class:"featured"},t.allMarkdownRemark.nodes.map((function(e){return r.createElement("div",{key:e.id,class:"featured-entry",style:{display:"block"}},r.createElement(a.Link,{to:e.frontmatter.slug},r.createElement("img",{style:{display:""==e.frontmatter.videoSourceURL?"none":"block"},src:(0,a.withPrefix)(e.frontmatter.img.publicURL)}),r.createElement(c.Z,{videoSrcURL:e.frontmatter.videoSourceURL,videoTitle:e.frontmatter.title}),r.createElement("div",{class:"featured-title"},r.createElement("h1",null,e.frontmatter.title))))}))),r.createElement("div",{class:"About-section",style:{textAlign:"center"}},r.createElement(a.Link,{to:"/about"},r.createElement("h1",null,"About")),r.createElement("p",null,"Welcome to my website, I am a programmer and digital artist and most of the stuff I make in either medium goes up here. ",r.createElement("br",null),"You can also find me on ",r.createElement("a",{href:"https://www.youtube.com/channel/UCJBJX_6j1520fVj73qi3RGQ"},"YouTube"),", ",r.createElement("a",{href:"https://github.com/theflyingfire"},"GitHub")," and ",r.createElement("a",{href:"https://thefireflyer.itch.io/"},"Itch.io"),"."))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-009b39eaf7651a97493e.js.map