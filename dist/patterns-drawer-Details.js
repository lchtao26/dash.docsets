(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{145:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(13),o=n(240),l=n(247),c=n(241);t.default=function(){return a.a.createElement(o.a,{title:"Drawer"},a.a.createElement(i.Helmet,null,a.a.createElement("meta",{name:"description",content:"Create a drawer navigation with CSS"}),a.a.createElement("meta",{name:"keywords",content:"css drawer, css off-canvas"})),a.a.createElement("div",{className:"p-8 pb-20"},a.a.createElement("div",{style:{lineHeight:1.5,marginBottom:"16px"}},"This pattern is also known as off-canvas."),a.a.createElement(c.a,{content:a.a.createElement("div",{style:{height:"100%",position:"relative",width:"100%"}},a.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.3)",height:"100%",left:0,position:"absolute",top:0,width:"100%"}}),a.a.createElement("div",{style:{backgroundColor:"#fff",height:"100%",left:0,padding:"16px",position:"absolute",top:0,width:"250px"}},a.a.createElement(l.a,{numberOfBlocks:20}))),source:'\n<div style="\n    /* Container takes full size */\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    width: 100%;\n\n    z-index: 9999;\n">\n    \x3c!-- Backdrop --\x3e\n    <div style="\n        /* Take full size */\n        height: 100%;\n        left: 0;\n        position: fixed;\n        top: 0;\n        width: 100%;\n\n        /* User still can see the content of main page */\n        background-color: rgba(0, 0, 0, 0.5);\n\n        z-index: -1;\n    " />\n\n    \x3c!-- Sidebar --\x3e\n    <div style="\n        /* Take full height */\n        height: 100%;\n        left: 0;\n        position: fixed;\n        top: 0;\n        width: 200px;\n\n        /* Background */\n        background-color: #fff;\n    ">\n        ...\n    </div>\n</div>\n'})))}},240:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(9),o=n(14),l=n(15),c=n(16);t.a=function(e){var t=e.title,n=e.children;return Object(l.a)("CSS Layout ∙ ".concat(t)),a.a.createElement(c.a,null,a.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},a.a.createElement(i.b,{to:"/",style:{textDecoration:"none"}},"Home"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement(i.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement("h1",null,t)),a.a.createElement("div",{className:"xl:border xl:border-gray-400"},n,a.a.createElement(o.a,null)))}},241:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(26);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.content,n=e.source,l=o(Object(r.useState)(!0),2),c=l[0],s=l[1];return a.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n&&a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},c?"Source":"Demo"))),a.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),n&&a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},a.a.createElement(i.a,{fullHeight:!0,lang:"html",code:n}))))}},246:function(e,t,n){"use strict";t.a=function(e,t){return e+Math.round(Math.random()*(t-e))}},247:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(246);t.a=function(e){var t=e.backgroundColor,n=void 0===t?"rgba(0, 0, 0, 0.3)":t,r=e.blockHeight,o=void 0===r?4:r,l=e.justify,c=void 0===l?"start":l,s=e.numberOfBlocks,d=void 0===s?1:s;return a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:c,width:"100%"}},Array(d).fill(0).map((function(e,t){var r=Object(i.a)(1,5);return a.a.createElement("div",{key:t,style:{marginBottom:"8px",marginRight:"8px",width:"".concat(10*r,"%")}},a.a.createElement("div",{style:{backgroundColor:n,borderRadius:"9999px",height:"".concat(o,"px"),width:"100%"}}))})))}}}]);
//# sourceMappingURL=patterns-drawer-Details.js.map