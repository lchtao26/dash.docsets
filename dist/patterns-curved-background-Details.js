(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{138:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(13),i=r(243),l=r(1),c=r(240),s=r(241);t.default=function(){return n.a.createElement(c.a,{title:"Curved background"},n.a.createElement(o.Helmet,null,n.a.createElement("meta",{name:"description",content:"Create an element with curved background"}),n.a.createElement("meta",{name:"keywords",content:"css border radius, css curved background"})),n.a.createElement("div",{className:"p-8 pb-20"},n.a.createElement(s.a,{content:n.a.createElement("div",{style:{height:"100%",padding:"8px"}},n.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.3)",borderBottomLeftRadius:"50% 40%",borderBottomRightRadius:"50% 40%",height:"50%",width:"100%"}})),source:'\n<div style="\n    /* Background color */\n    background-color: rgba(0, 0, 0, 0.3);\n\n    /* You can use gradient background color such as\n    background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */\n\n    /* Curved corners */\n    border-bottom-left-radius: 50% 40%;\n    border-bottom-right-radius: 50% 40%;\n">\n    ...\n</div>\n'})),n.a.createElement(i.a,{patterns:[l.a.DiagonalSection]}))}},240:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(9),i=r(14),l=r(15),c=r(16);t.a=function(e){var t=e.title,r=e.children;return Object(l.a)("CSS Layout ∙ ".concat(t)),n.a.createElement(c.a,null,n.a.createElement("div",{className:"flex sm:text-2xl p-4 xl:pl-0"},n.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},"Home"),n.a.createElement("span",{className:"mx-2"},"/"),n.a.createElement(o.b,{to:"/patterns",style:{textDecoration:"none"}},"Explore"),n.a.createElement("span",{className:"mx-2"},"/"),n.a.createElement("h1",null,t)),n.a.createElement("div",{className:"xl:border xl:border-gray-400"},r,n.a.createElement(i.a,null)))}},241:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(26);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);a=!0);}catch(e){n=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.a=function(e){var t=e.content,r=e.source,l=i(Object(a.useState)(!0),2),c=l[0],s=l[1];return n.a.createElement("div",{className:"shadow-2xl",style:{border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:"4px"}},n.a.createElement("div",{style:{alignItems:"center",backgroundColor:"rgba( 0, 0, 0, 0.05)",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",padding:"8px 16px"}},n.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n.a.createElement("div",{style:{backgroundColor:"#FFB700",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),n.a.createElement("div",{style:{backgroundColor:"#FF4136",borderRadius:"100%",height:"16px",marginRight:"4px",width:"16px"}}),r&&n.a.createElement("div",{style:{marginLeft:"auto"}},n.a.createElement("button",{style:{backgroundColor:"#00449E",borderColor:"transparent",borderRadius:"4px",color:"#FFF",cursor:"pointer",padding:"4px 8px"},onClick:function(){return s((function(e){return!e}))}},c?"Source":"Demo"))),n.a.createElement("div",{style:{height:"512px",position:"relative",transform:c?"":"rotateY(180deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},n.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?1:0,overflow:"scroll",position:"absolute",top:0,width:"100%"}},t),r&&n.a.createElement("div",{style:{WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:0,opacity:c?0:1,overflow:"scroll",position:"absolute",top:0,transform:"rotateY(180deg)",width:"100%"}},n.a.createElement(o.a,{fullHeight:!0,lang:"html",code:r}))))}},243:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(2),i=r(11);t.a=function(e){var t=e.patterns;return n.a.createElement("section",null,n.a.createElement(i.a,{title:"Related patterns"}),n.a.createElement("div",{style:{alignItems:"start",display:"flex",flexWrap:"wrap",padding:"24px"}},t.map((function(e){return n.a.createElement(o.a,{key:e,pattern:e})}))))}}}]);
//# sourceMappingURL=patterns-curved-background-Details.js.map