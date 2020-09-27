(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{132:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),l=a(243),o=a(1),c=a(240),s=a(241),d=a(242);t.default=function(){return n.a.createElement(c.a,{title:"Card layout"},n.a.createElement(i.Helmet,null,n.a.createElement("meta",{name:"description",content:"Create a card layout with CSS flexbox"}),n.a.createElement("meta",{name:"keywords",content:"css card layout, css flexbox, css layout"})),n.a.createElement("div",{className:"p-8 pb-20"},n.a.createElement(s.a,{content:n.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",margin:"0 -8px",width:"60%"}},Array(10).fill(0).map((function(e,t){return n.a.createElement("div",{key:t,style:{flexBasis:"25%",marginBottom:"24px",padding:"0 8px"}},n.a.createElement(d.a,{height:80}))})))),source:'\n<div style="\n    display: flex;\n\n    /* Put a card in the next row when previous cards take all width */\n    flex-wrap: wrap;\n\n    margin-left: -8px;\n    margin-right: -8px;\n">\n    \x3c!-- A card with given width --\x3e\n    <div style="\n        /* There will be 4 cards per row */\n        flex-basis: 25%;\n\n        padding-left: 8px;\n        padding-right: 8px;\n    ">\n        ...\n    </div>\n\n    \x3c!-- Repeat other cards --\x3e\n    ...\n</div>\n'})),n.a.createElement(l.a,{patterns:[o.a.Card,o.a.SimpleGrid]}))}},240:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(9),l=a(14),o=a(15),c=a(16);t.a=function(e){var t=e.title,a=e.children;return Object(o.a)("CSS Layout ∙ ".concat(t)),n.a.createElement(c.a,null,n.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},n.a.createElement(i.b,{to:"/",style:{textDecoration:"none"}},"Home"),n.a.createElement("span",{className:"mx-2"},"/"),n.a.createElement(i.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),n.a.createElement("span",{className:"mx-2"},"/"),n.a.createElement("h1",null,t)),n.a.createElement("div",{className:"xl:border xl:border-gray-400"},a,n.a.createElement(l.a,null)))}},241:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(26);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.a=function(e){var t=e.content,a=e.source,o=l(Object(r.useState)(!0),2),c=o[0],s=o[1];return n.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},n.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},n.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a&&n.a.createElement("div",{style:{marginLeft:"auto"}},n.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},c?"Source":"Demo"))),n.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},n.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),a&&n.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},n.a.createElement(i.a,{fullHeight:!0,lang:"html",code:a}))))}},242:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.height,a=void 0===t?8:t;return n.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"2px",height:"".concat(a,"px"),width:"100%"}})}},243:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(2),l=a(11);t.a=function(e){var t=e.patterns;return n.a.createElement("section",null,n.a.createElement(l.a,{title:"Related patterns"}),n.a.createElement("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"24px"}},t.map((function(e){return n.a.createElement(i.a,{key:e,pattern:e})}))))}}}]);
//# sourceMappingURL=patterns-card-layout-Details.js.map