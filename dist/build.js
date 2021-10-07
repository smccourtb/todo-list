(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,".add-project-popup {\n    display: none;\n}\n\n.add-project-popup-show {\n    display: flex;\n}\n\n/* .add-project-button {\n    display: none;\n} */\n\n.user-projects-header {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n\n}\n\nnav {\n    width: 15%;\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n\n\nmain {\n    height: 100vh;\n    border: solid;\n    display: flex;\n\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n}\n\na {\n    display: flex;\n    align-items: center;\n}\n\n/* * {\n    border: solid;\n} */\n\n.default-projects-container {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    background: none;\n    border: none;\n}\n\n.project-preview {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.add-task {\n    width: 50%;\n    display: flex;\n    justify-content: center;\n}\n\n.add-task-input {\n    flex: 1 0 auto;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}c.push(d)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor(e,t=!1){this.title=e,this.complete=t}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}setPriority(e){this.priority=e}getPriority(){return this.priority}markComplete(){this.complete=!complete}}const t=e=>{let t=e,n=[];return{getName:()=>t,taskList:n,addTask:e=>{n.push(e)},removeTask:e=>{const t=n.indexOf(e);n.splice(t,1)}}},r=(()=>{let n=[],o=n[0];const a=e=>{n.push(e)},c=e=>{o=e};return(()=>{const r=[t("Inbox"),t("Today"),t("Upcoming")];for(let t of r){if(a(t),"Inbox"===t.getName()){const n=new e("buy more milk.");t.addTask(n)}c(n[0])}})(),{currentProject:o,projectList:n,addProject:a,removeProject:e=>{const t=n.indexOf(e);n.splice(t,1)},getProject:e=>{for(let t of r.projectList)if(t.getName()===e)return t},setCurrentProject:c,getCurrentProject:()=>o}})();console.log(r);const o=e=>{const t=document.querySelector(".task-list");console.log("Im being clicked"),console.log(e.taskList),t.replaceChildren();for(let n of e.taskList){const e=document.createElement("li");e.textContent=n.getTitle(),t.append(e)}},a=((()=>{const t=document.querySelector(".add-task-input");t.addEventListener("keyup",(function(n){if("Enter"!==n.key)return;const a=r.getCurrentProject();a.addTask(new e(t.value)),t.value="",o(a)}))})(),(()=>{const e=document.getElementById("input-add-project-popup"),n=document.querySelector(".add-project-button"),o=document.querySelector(".add-project-popup");e.setAttribute("placeholder","Add a new project."),n.addEventListener("click",(()=>{o.classList.toggle("add-project-popup-show")})),e.addEventListener("keyup",(function(n){if("Enter"!==n.key)return;const c=t(e.value);e.value="",r.addProject(c),o.classList.toggle("add-project-popup-show"),n.preventDefault();const i=a(c);document.querySelector("nav").append(i)}))})(),e=>{r.setCurrentProject(e),o(e);const t=document.createElement("button");return t.addEventListener("click",(()=>{o(e)})),t.textContent=e.getName(),t});(()=>{const e=document.querySelector(".inbox"),t=document.querySelector(".today"),n=document.querySelector(".upcoming");for(let a of[e,t,n])a.addEventListener("click",(()=>{r.setCurrentProject(r.getProject(a.name)),console.log(r.getProject(a.name).getName()),o(r.getProject(a.name))}))})();var c=n(379),i=n.n(c),s=n(795),u=n.n(s),l=n(569),d=n.n(l),p=n(565),f=n.n(p),m=n(216),v=n.n(m),y=n(589),h=n.n(y),g=n(426),x={};x.styleTagTransform=h(),x.setAttributes=f(),x.insert=d().bind(null,"head"),x.domAPI=u(),x.insertStyleElement=v(),i()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals})()})();