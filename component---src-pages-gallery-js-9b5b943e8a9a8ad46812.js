"use strict";(self.webpackChunkthefireflyer=self.webpackChunkthefireflyer||[]).push([[822],{8848:function(e,t,a){var n=a(7294);a(5444);t.Z=function(e){var t=e.background,a=e.children;return n.createElement("div",{style:{background:t,minHeight:"100vh",width:"100%",height:"fit-content",top:"0",position:"absolute",left:"0"}},n.createElement("center",null,a),n.createElement("div",{className:"contentMargin"}))}},6182:function(e,t,a){a.r(t);var n=a(7294),r=a(5444),i=(a(3820),a(1277)),l=a(6125),c=a(9),o=a(8848),d=c.default.div.withConfig({displayName:"gallery__Section",componentId:"sc-1hamj7u-0"})(["width:80%;display:grid;grid-auto-flow:row dense;grid-template-columns:auto auto auto;grid-gap:1%;@media only screen and (max-width:900px){width:95%;grid-template-columns:auto;}"]),m=c.default.div.withConfig({displayName:"gallery__ImageDiv",componentId:"sc-1hamj7u-1"})(["img{border-radius:20px;object-fit:cover;}"]);t.default=function(e){var t=e.data;return n.createElement(n.Fragment,null,n.createElement(i.Z,{title:"Gallery"}),n.createElement(o.Z,null,n.createElement("div",{className:"contentMargin"}),n.createElement(d,null,t.allMdx.nodes.map((function(e){return n.createElement(m,{className:"pickable",key:e.frontmatter.slug,style:{gridRowEnd:e.frontmatter.img[0].childImageSharp.fixed.aspectRatio>1?"auto":"span 3"}},n.createElement(r.Link,{to:e.frontmatter.slug},n.createElement(l.G,{image:(0,l.d)(e.frontmatter.img[0].childImageSharp),style:{width:"100%",minWidth:"300px"}})))})))))}}}]);
//# sourceMappingURL=component---src-pages-gallery-js-9b5b943e8a9a8ad46812.js.map