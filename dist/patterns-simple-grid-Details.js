(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{185:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a(243),d=a(1),c=a(240),o=a(241),s=a(242);t.default=function(){return r.a.createElement(c.a,{title:"Simple grid"},r.a.createElement(l.Helmet,null,r.a.createElement("meta",{name:"description",content:"Create a simple grid with CSS flexbox"}),r.a.createElement("meta",{name:"keywords",content:"css flexbox, css flexbox grid, css grid, css layout"})),r.a.createElement("div",{className:"p-8 pb-20"},r.a.createElement(o.a,{content:r.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},r.a.createElement("div",{style:{width:"60%"}},r.a.createElement("div",{style:{display:"flex",margin:"0 -8px 8px -8px"}},r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32}))),r.a.createElement("div",{style:{display:"flex",margin:"0 -8px 32px -8px"}},r.a.createElement("div",{style:{flex:"0 0 50%",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32}))),r.a.createElement("div",{style:{display:"flex",margin:"0 -8px 8px -8px"}},r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32}))),r.a.createElement("div",{style:{display:"flex",margin:"0 -8px 32px -8px"}},r.a.createElement("div",{style:{flex:"0 0 33.3333%",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32}))),r.a.createElement("div",{style:{display:"flex",margin:"0 -8px 8px -8px"}},r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32}))),r.a.createElement("div",{style:{display:"flex",margin:"0 -8px 0 -8px"}},r.a.createElement("div",{style:{flex:"0 0 25%",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"1",padding:"0 8px"}},r.a.createElement(s.a,{height:32})),r.a.createElement("div",{style:{flex:"0 0 33.3333%",padding:"0 8px"}},r.a.createElement(s.a,{height:32}))))),source:'\n\x3c!-- Row --\x3e\n<div style="\n    display: flex;\n\n    margin-left: -8px;\n    margin-right: -8px;\n">\n    \x3c!--Cell with given width. Replace 25% with whatever you want --\x3e\n    <div style="\n        flex: 0 0 25%;\n        padding-left: 8px;\n        padding-right: 8px;\n    ">25%</div>\n\n    \x3c!-- Cell that takes remaining width --\x3e\n    <div style="\n        flex: 1;\n        padding-left: 8px;\n        padding-right: 8px;\n    ">\n        ...\n    </div>\n</div>\n'})),r.a.createElement(i.a,{patterns:[d.a.CardLayout]}))}},240:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(9),i=a(14),d=a(15),c=a(16);t.a=function(e){var t=e.title,a=e.children;return Object(d.a)("CSS Layout ∙ ".concat(t)),r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},"Home"),r.a.createElement("span",{className:"mx-2"},"/"),r.a.createElement(l.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),r.a.createElement("span",{className:"mx-2"},"/"),r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"xl:border xl:border-gray-400"},a,r.a.createElement(i.a,null)))}},241:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(26);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,d=e[Symbol.iterator]();!(n=(i=d.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==d.return||d.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.a=function(e){var t=e.content,a=e.source,d=i(Object(n.useState)(!0),2),c=d[0],o=d[1];return r.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},r.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},r.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),r.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),r.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a&&r.a.createElement("div",{style:{marginLeft:"auto"}},r.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return o((function(e){return!e}))}},c?"Source":"Demo"))),r.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},r.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),a&&r.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},r.a.createElement(l.a,{fullHeight:!0,lang:"html",code:a}))))}},242:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.height,a=void 0===t?8:t;return r.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"2px",height:"".concat(a,"px"),width:"100%"}})}},243:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),i=a(11);t.a=function(e){var t=e.patterns;return r.a.createElement("section",null,r.a.createElement(i.a,{title:"Related patterns"}),r.a.createElement("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"24px"}},t.map((function(e){return r.a.createElement(l.a,{key:e,pattern:e})}))))}}}]);
//# sourceMappingURL=patterns-simple-grid-Details.js.map