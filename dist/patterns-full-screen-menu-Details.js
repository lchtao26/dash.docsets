(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{156:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(13),o=n(240),i=n(241),c=n(242);t.default=function(){return a.a.createElement(o.a,{title:"Full screen menu"},a.a.createElement(l.Helmet,null,a.a.createElement("meta",{name:"description",content:"Create a full screen menu with CSS flexbox"}),a.a.createElement("meta",{name:"keywords",content:"css fixed, css flexbox, css menu"})),a.a.createElement("div",{className:"p-8 pb-20"},a.a.createElement(i.a,{content:a.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},a.a.createElement("button",{style:{backgroundColor:"transparent",borderColor:"transparent",padding:0,position:"absolute",right:"16px",top:"16px"}},a.a.createElement("svg",{viewBox:"0 0 24 24",style:{fill:"none",height:24,stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,width:24}},a.a.createElement("path",{d:"M7,16.999l10-10\n                                        M17,16.999l-10-10\n                                        M12,0.499c6.351,0,11.5,5.149,11.5,11.5s-5.149,11.5-11.5,11.5\n                                        S0.5,18.35,0.5,11.999S5.649,0.499,12,0.499z"}))),a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.25)",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",left:0,position:"absolute",top:0,width:"100%"}},a.a.createElement("ul",{style:{alignItems:"center",display:"flex",flexDirection:"column",listStyleType:"none",margin:0,padding:0}},a.a.createElement("li",{style:{marginBottom:"16px",width:"256px"}},a.a.createElement(c.a,null)),a.a.createElement("li",{style:{marginBottom:"16px",width:"144px"}},a.a.createElement(c.a,null)),a.a.createElement("li",{style:{marginBottom:"16px",width:"128px"}},a.a.createElement(c.a,null)),a.a.createElement("li",{style:{width:"160px"}},a.a.createElement(c.a,null))))),source:'\n<div style="\n    /* Full screen overlay */\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    width: 100%;\n\n    /* Center the content */\n    align-items: center;\n    display: flex;\n    justify-content: center;\n">\n    \x3c!-- The close button --\x3e\n    <button style="\n        /* Shown at top right corner */\n        position: absolute;\n        right: 16px;\n        top: 16px;\n    ">\n        ...\n    </button>\n\n    \x3c!-- The navigation menu --\x3e\n    <ul>\n        ...\n    </ul>\n</div>\n'})))}},240:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(9),o=n(14),i=n(15),c=n(16);t.a=function(e){var t=e.title,n=e.children;return Object(i.a)("CSS Layout ∙ ".concat(t)),a.a.createElement(c.a,null,a.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},a.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},"Home"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement(l.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement("h1",null,t)),a.a.createElement("div",{className:"xl:border xl:border-gray-400"},n,a.a.createElement(o.a,null)))}},241:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=n(26);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.content,n=e.source,i=o(Object(r.useState)(!0),2),c=i[0],s=i[1];return a.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n&&a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},c?"Source":"Demo"))),a.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),n&&a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},a.a.createElement(l.a,{fullHeight:!0,lang:"html",code:n}))))}},242:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.height,n=void 0===t?8:t;return a.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"2px",height:"".concat(n,"px"),width:"100%"}})}}}]);
//# sourceMappingURL=patterns-full-screen-menu-Details.js.map