(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".add-project-popup {\n    display: none;\n}\n\n.add-project-popup-show {\n    display: flex;\n}\n\n/* .add-project-button {\n    display: none;\n} */\n\n.user-projects-header {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n\n}\n\nnav {\n    min-width: 15%;\n    display: flex;\n    flex-direction: column;\n    resize: horizontal;\n    overflow: auto;\n    background-color: thistle;\n\n}\n\n\n\nmain {\n    height: 100vh;\n    display: flex;\n\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n}\n\na {\n    display: flex;\n    align-items: center;\n}\n\n/* * {\n    border: solid;\n} */\n\n.default-projects-container {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    background: none;\n}\n\n.project-preview {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: antiquewhite;\n}\n\n.add-task {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.add-task-input {\n    flex: 1 1 auto;\n    margin-left: 10px;\n}\n\nol {\n    list-style-type: none;\n    padding: 0px;\n}\n\n.project-task-list-container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\n.task-container {\n    display: flex;\n    width: 100%;\n    padding: 5px 5px 0px 0px;\n}\n\n.task-container:hover {\n    background-color: lightgray;\n\n}\n\n.task-preview {\n    height: 100%;\n    background-color: rgb(141, 219, 212);\n    resize: horizontal;\n    overflow: hidden;\n    direction: rtl;\n    min-width: 20%;\n\n}\n\n.task-preview-content {\n    direction: ltr;\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    height: 100%;\n\n\n}\n\n.description-text {\n    flex: 1 0 auto;\n    resize: none;\n    max-width: 100%;\n    max-height: 100%;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor(e,t=!1){this.title=e,this.complete=t}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}setPriority(e){this.priority=e}getPriority(){return this.priority}markComplete(){this.complete=!this.complete}}const t=e=>{let t=e,n=[],r=[];return{getName:()=>t,taskList:n,addTask:e=>{n.push(e)},removeTask:e=>{const t=n.indexOf(e);n.splice(t,1)},completedTasks:r,addToCompleted:e=>{r.push(e)},getCompleted:()=>r,getTaskInfo:e=>{for(let t of n)if(t.getTitle()===e)return t}}},r=(()=>{let n=[],o=n[0];const i=e=>{n.push(e)},a=e=>{o=e};return(()=>{const r=[t("Inbox"),t("Today"),t("Upcoming")];for(let t of r){if(i(t),"Inbox"===t.getName()){const n=new e("buy more milk.");t.addTask(n)}a(n[0])}})(),{currentProject:o,projectList:n,addProject:i,removeProject:e=>{const t=n.indexOf(e);n.splice(t,1)},getProject:e=>{for(let t of r.projectList)if(t.getName()===e)return t},setCurrentProject:a,getCurrentProject:()=>o}})();console.log(r);const o=e=>{document.querySelector(".task-preview-content").replaceChildren();const t=document.querySelector(".task-list");document.querySelector(".project-task-list-container"),document.querySelector(".project-title").textContent=e.getName(),t.replaceChildren();for(let n of e.taskList){const r=document.createElement("input"),c=document.createElement("div"),s=document.createElement("li");s.textContent=n.getTitle(),c.classList.add("task-container"),c.setAttribute("name",n.getTitle());const l=c.getAttribute("name");r.setAttribute("type","checkbox"),r.addEventListener("click",(()=>{r.checked&&(console.log("hi there"),n.markComplete(),e.addToCompleted(n),e.removeTask(n),o(e))})),c.oncontextmenu=e=>{a(e)},c.addEventListener("click",(()=>{const t=i(e,l),n=document.querySelector(".task-preview-content");n.replaceChildren();const r=document.createElement("h3"),o=document.createElement("textarea");o.classList.add("description-text"),o.setAttribute("placeholder","Description"),o.addEventListener("keyup",(function(e){"Enter"===e.key&&(t.setDescription(o.value),alert(t.getDescription()))})),r.textContent=t.getTitle(),t.getDescription()&&(o.value=t.getDescription()),n.append(r,o)})),c.append(r,s),t.append(c)}},i=(e,t)=>e.getTaskInfo(t),a=e=>{alert(e),e.preventDefault()},c=((()=>{const t=document.querySelector(".add-task-input");t.addEventListener("keyup",(function(n){if("Enter"!==n.key)return;const i=r.getCurrentProject();i.addTask(new e(t.value)),t.value="",o(i)}))})(),(()=>{const e=document.getElementById("input-add-project-popup"),n=document.querySelector(".add-project-button"),o=document.querySelector(".add-project-popup");e.setAttribute("placeholder","Add a new project."),n.addEventListener("click",(()=>{o.classList.toggle("add-project-popup-show")})),e.addEventListener("keyup",(function(n){if("Enter"!==n.key)return;const i=t(e.value);e.value="",r.addProject(i),o.classList.toggle("add-project-popup-show"),n.preventDefault();const a=c(i);document.querySelector("nav").append(a)}))})(),e=>{r.setCurrentProject(e),o(e);const t=document.createElement("button");return t.addEventListener("click",(()=>{o(e)})),t.textContent=e.getName(),t});(()=>{const e=document.querySelector(".inbox"),t=document.querySelector(".today"),n=document.querySelector(".upcoming");for(let i of[e,t,n])i.addEventListener("click",(()=>{r.setCurrentProject(r.getProject(i.name)),o(r.getProject(i.name))}))})();var s=n(379),l=n.n(s),d=n(795),u=n.n(d),p=n(569),f=n.n(p),m=n(565),h=n.n(m),v=n(216),y=n.n(v),g=n(589),x=n.n(g),k=n(426),b={};b.styleTagTransform=x(),b.setAttributes=h(),b.insert=f().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=y(),l()(k.Z,b),k.Z&&k.Z.locals&&k.Z.locals})()})();