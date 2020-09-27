(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{159:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(13),l=n(240),o=n(241),d=n(242);t.default=function(){return a.a.createElement(l.a,{title:"Input add-on"},a.a.createElement(i.Helmet,null,a.a.createElement("meta",{name:"description",content:"Create an input add-on with CSS flexbox"}),a.a.createElement("meta",{name:"keywords",content:"css flexbox, css input add-on"})),a.a.createElement("div",{className:"p-8 pb-20"},a.a.createElement(o.a,{content:a.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},a.a.createElement("div",{style:{width:"256px"}},a.a.createElement("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:"4px",display:"flex",height:"32px",marginBottom:"16px",width:"100%"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.1)",borderRight:"1px solid rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",padding:"8px",width:"30%"}},a.a.createElement(d.a,null)),a.a.createElement("input",{type:"text",style:{borderColor:"transparent",flex:1,marginRight:"1px",padding:"4px"}})),a.a.createElement("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:"4px",display:"flex",height:"32px",marginBottom:"16px",width:"100%"}},a.a.createElement("input",{type:"text",style:{borderColor:"transparent",flex:1,marginLeft:"1px",padding:"8px"}}),a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.1)",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",padding:"8px",width:"40%"}},a.a.createElement(d.a,null))),a.a.createElement("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:"4px",display:"flex",height:"32px",width:"100%"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.1)",borderRight:"1px solid rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",padding:"8px",width:"20%"}},a.a.createElement(d.a,null)),a.a.createElement("input",{type:"text",style:{borderColor:"transparent",flex:1,padding:"8px"}}),a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba(0, 0, 0, 0.1)",borderLeft:"1px solid rgba(0, 0, 0, 0.3)",display:"flex",justifyContent:"center",padding:"8px",width:"30%"}},a.a.createElement(d.a,null))))),source:'\n\x3c!-- Add-on prepended --\x3e\n<div style="\n    display: flex;\n\n    /* Take full size */\n    width: 100%;\n">\n    \x3c!-- Add-on --\x3e\n    <div style="\n        /* Center the content */\n        align-items: center;\n        display: flex;\n        justify-content: center;\n    ">\n        ...\n    </div>\n\n    \x3c!-- Input --\x3e\n    <input type="text" style="\n        /* Take the remaining width */\n        flex: 1;\n    " />\n</div>\n\n\x3c!-- Add-on appended --\x3e\n<div style="\n    display: flex;\n\n    /* Take full size */\n    width: 100%;\n">\n    \x3c!-- Input --\x3e\n    <input type="text" style="\n        /* Take the remaining width */\n        flex: 1;\n    " />\n\n    \x3c!-- Add-on --\x3e\n    <div style="\n        /* Center the content */\n        align-items: center;\n        display: flex;\n        justify-content: center;\n    ">\n        ...\n    </div>\n</div>\n\n\x3c!-- Appended and prepended add-ons --\x3e\n<div style="\n    display: flex;\n\n    /* Take full size */\n    width: 100%;\n">\n    \x3c!-- Add-on --\x3e\n    <div style="\n        /* Center the content */\n        align-items: center;\n        display: flex;\n        justify-content: center;\n    ">\n        ...\n    </div>\n\n    \x3c!-- Input --\x3e\n    <input type="text" style="\n        /* Take the remaining width */\n        flex: 1;\n    " />\n\n    \x3c!-- Add-on --\x3e\n    <div style="\n        /* Center the content */\n        align-items: center;\n        display: flex;\n        justify-content: center;\n    ">\n        ...\n    </div>\n</div>\n'})))}},240:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(9),l=n(14),o=n(15),d=n(16);t.a=function(e){var t=e.title,n=e.children;return Object(o.a)("CSS Layout ∙ ".concat(t)),a.a.createElement(d.a,null,a.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},a.a.createElement(i.b,{to:"/",style:{textDecoration:"none"}},"Home"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement(i.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),a.a.createElement("span",{className:"mx-2"},"/"),a.a.createElement("h1",null,t)),a.a.createElement("div",{className:"xl:border xl:border-gray-400"},n,a.a.createElement(l.a,null)))}},241:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(26);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.content,n=e.source,o=l(Object(r.useState)(!0),2),d=o[0],c=o[1];return a.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},a.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n&&a.a.createElement("div",{style:{marginLeft:"auto"}},a.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return c((function(e){return!e}))}},d?"Source":"Demo"))),a.a.createElement("div",{style:{height:"512px",position:"relative",transform:d?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:d?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),n&&a.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:d?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},a.a.createElement(i.a,{fullHeight:!0,lang:"html",code:n}))))}},242:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.height,n=void 0===t?8:t;return a.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"2px",height:"".concat(n,"px"),width:"100%"}})}}}]);
//# sourceMappingURL=patterns-input-addon-Details.js.map