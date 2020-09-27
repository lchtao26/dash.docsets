(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{160:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(13),i=a(9),l=a(11),c=a(240),s=a(241),d=function(e){var t=e.action,a=e.keys;return n.a.createElement("div",{style:{alignItems:"center",display:"flex",justifyContent:"space-between",margin:0,padding:"4px 0"}},n.a.createElement("div",null,t),n.a.createElement("kbd",{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"4px",boxShadow:"rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px",color:"rgba(0, 0, 0, 0.7)",padding:"8px"}},a))};t.default=function(){return n.a.createElement(c.a,{title:"Keyboard shortcut"},n.a.createElement(o.Helmet,null,n.a.createElement("meta",{name:"description",content:"Create a keyboard shortcut with CSS"}),n.a.createElement("meta",{name:"keywords",content:"kbd tag, keyboard shortcut"})),n.a.createElement("div",{className:"p-8 pb-20"},n.a.createElement("div",{style:{lineHeight:1.5,marginBottom:"16px"}},"We use the native ",n.a.createElement("code",null,"kbd")," tag to display the keyboard shortcut."),n.a.createElement(s.a,{content:n.a.createElement("div",{style:{alignItems:"center",display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"8px"}},n.a.createElement("kbd",{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",borderRadius:"4px",boxShadow:"rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px",color:"rgba(0, 0, 0, 0.7)",padding:"8px"}},"⌘ + C")),source:'\n<kbd style="\n    /* Background and color */\n    background-color: rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    color: rgba(0, 0, 0, 0.7);\n\n    /* Bottom shadow */\n    box-shadow: rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px;\n\n    /* Spacing */\n    padding: 8px;\n">\n    ...\n</kbd>\n'})),n.a.createElement("section",null,n.a.createElement(l.a,{title:"Use cases"}),n.a.createElement("div",{style:{padding:"32px"}},n.a.createElement("div",{style:{lineHeight:1.5,marginBottom:"16px"}},"We can use this pattern with the ",n.a.createElement(i.b,{to:"/patterns/property-list"},"property list")," pattern to create shortkey preferences as following:"),n.a.createElement("div",{style:{width:"250px"}},n.a.createElement(d,{action:"Cut",keys:"⌘ + X"}),n.a.createElement(d,{action:"Copy",keys:"⌘ + C"}),n.a.createElement(d,{action:"Paste",keys:"⌘ + V"})))))}},240:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(9),i=a(14),l=a(15),c=a(16);t.a=function(e){var t=e.title,a=e.children;return Object(l.a)("CSS Layout ∙ ".concat(t)),n.a.createElement(c.a,null,n.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},n.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},"Home"),n.a.createElement("span",{className:"mx-2"},"/"),n.a.createElement(o.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),n.a.createElement("span",{className:"mx-2"},"/"),n.a.createElement("h1",null,t)),n.a.createElement("div",{className:"xl:border xl:border-gray-400"},a,n.a.createElement(i.a,null)))}},241:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(26);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}t.a=function(e){var t=e.content,a=e.source,l=i(Object(r.useState)(!0),2),c=l[0],s=l[1];return n.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},n.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},n.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),a&&n.a.createElement("div",{style:{marginLeft:"auto"}},n.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},c?"Source":"Demo"))),n.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},n.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),a&&n.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},n.a.createElement(o.a,{fullHeight:!0,lang:"html",code:a}))))}}}]);
//# sourceMappingURL=patterns-keyboard-shortcut-Details.js.map