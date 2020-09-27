(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{164:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),i=(n(254),n(243)),o=n(1),c=n(240),s=n(241),d=n(244),m=n(242);t.default=function(){return r.a.createElement(c.a,{title:"Menu"},r.a.createElement(l.Helmet,null,r.a.createElement("meta",{name:"description",content:"Create a menu with CSS flexbox"}),r.a.createElement("meta",{name:"keywords",content:"css flexbox, css menu"})),r.a.createElement("div",{className:"p-8 pb-20"},r.a.createElement(s.a,{content:r.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},r.a.createElement("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",borderRadius:"4px",width:"40%"}},r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",padding:"0 8px"}},r.a.createElement("div",{style:{width:"40%"}},r.a.createElement(m.a,null))),r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",padding:"0 8px"}},r.a.createElement(d.a,null),r.a.createElement("div",{style:{marginLeft:"4px",width:"50%"}},r.a.createElement(m.a,null))),r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",justifyContent:"space-between",padding:"0 8px"}},r.a.createElement("div",{style:{width:"30%"}},r.a.createElement(m.a,null)),r.a.createElement("div",null,"Ctrl + X")),r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",justifyContent:"space-between",padding:"0 8px"}},r.a.createElement("div",{style:{width:"70%"}},r.a.createElement(m.a,null)),r.a.createElement("div",null,"Ctrl + C")),r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",justifyContent:"space-between",padding:"0 8px"}},r.a.createElement("div",{style:{width:"20%"}},r.a.createElement(m.a,null)),r.a.createElement(d.a,null)),r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",justifyContent:"space-between",padding:"0 8px"}},r.a.createElement("div",{style:{alignItems:"center",display:"flex",width:"80%"}},r.a.createElement(d.a,null),r.a.createElement("div",{style:{marginLeft:"4px",width:"50%"}},r.a.createElement(m.a,null))),r.a.createElement(d.a,null)),r.a.createElement("div",{style:{borderBottom:"1px solid rgba(0, 0, 0, 0.3)",height:"1px"}}),r.a.createElement("div",{className:"p-menu-item",style:{alignItems:"center",display:"flex",height:"32px",justifyContent:"space-between",padding:"0 8px"}},r.a.createElement("div",{style:{width:"40%"}},r.a.createElement(m.a,null)),r.a.createElement("div",null,"Ctrl + V")))),source:'\n<div style="\n    display: flex;\n    flex-direction: column;\n\n    /* Border */\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n">\n    \x3c!-- Normal menu item --\x3e\n    <div style="\n        /* Center the content horizontally */\n        align-items: center;\n        display: flex;\n    ">\n        ...\n    </div>\n\n    \x3c!-- With hot key --\x3e\n    <div style="\n        align-items: center;\n        display: flex;\n        /* Push the hot key to the right */\n        justify-content: space-between;\n    ">\n        \x3c!-- Label --\x3e\n        ...\n        \x3c!-- Hot key --\x3e\n        ...\n    </div>\n\n    \x3c!-- With image and hot key --\x3e\n    <div style="\n        align-items: center;\n        display: flex;\n        /* Push the hot key to the right */\n        justify-content: space-between;\n    ">\n        <div style="\n            align-items: center;\n            display: flex;\n        ">\n            \x3c!-- Image --\x3e\n            ...\n            \x3c!-- Label --\x3e\n            ...\n        </div>\n\n        \x3c!-- Hot key --\x3e\n        ...\n    </div>\n\n    \x3c!-- Divider --\x3e\n    <div style="\n        border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n        height: 1px;\n    " />\n</div>\n'})),r.a.createElement(i.a,{patterns:[o.a.DotLeader,o.a.MegaMenu,o.a.NestedDropdowns,o.a.PropertyList,o.a.SplitNavigation]}))}},240:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(9),i=n(14),o=n(15),c=n(16);t.a=function(e){var t=e.title,n=e.children;return Object(o.a)("CSS Layout ∙ ".concat(t)),r.a.createElement(c.a,null,r.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},"Home"),r.a.createElement("span",{className:"mx-2"},"/"),r.a.createElement(l.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),r.a.createElement("span",{className:"mx-2"},"/"),r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"xl:border xl:border-gray-400"},n,r.a.createElement(i.a,null)))}},241:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(26);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=e.content,n=e.source,o=i(Object(a.useState)(!0),2),c=o[0],s=o[1];return r.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},r.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},r.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),r.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),r.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n&&r.a.createElement("div",{style:{marginLeft:"auto"}},r.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},c?"Source":"Demo"))),r.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},r.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),n&&r.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},r.a.createElement(l.a,{fullHeight:!0,lang:"html",code:n}))))}},242:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.height,n=void 0===t?8:t;return r.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, .3)",borderRadius:"2px",height:"".concat(n,"px"),width:"100%"}})}},243:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(2),i=n(11);t.a=function(e){var t=e.patterns;return r.a.createElement("section",null,r.a.createElement(i.a,{title:"Related patterns"}),r.a.createElement("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"24px"}},t.map((function(e){return r.a.createElement(l.a,{key:e,pattern:e})}))))}},244:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.backgroundColor,n=void 0===t?"rgba(0, 0, 0, .3)":t,a=e.size,l=void 0===a?16:a;return r.a.createElement("div",{style:{backgroundColor:n,borderRadius:"9999px",height:"".concat(l,"px"),width:"".concat(l,"px")}})}},254:function(e,t,n){(t=n(10)(!1)).push([e.i,"/**\n * A collection of popular layouts and patterns made with CSS (https://csslayout.io)\n * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>\n */\n\n.p-menu-item:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n",""]),e.exports=t}}]);
//# sourceMappingURL=patterns-menu-Details.js.map