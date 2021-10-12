(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".add-project-popup {\n    display: none;\n}\n\n.add-project-popup-show {\n    display: flex;\n}\n\n/* .add-project-button {\n    display: none;\n} */\n\n.user-projects-header {\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n\n}\n\nnav {\n    min-width: 15%;\n    display: flex;\n    flex-direction: column;\n    resize: horizontal;\n    overflow: auto;\n    background-color: thistle;\n\n}\n\nbody {\n    font-family: 'Nimbus Sans';\n    font-weight: 100;\n    font-size: 14px;\n}\n\nh5 {\n    font-weight: 100;\n    font-size: 24px;\n}\n\nmain {\n    height: 100vh;\n    display: flex;\n\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n}\n\na {\n    display: flex;\n    align-items: center;\n}\n\n/* * {\n    border: solid;\n} */\n\n.default-projects-container {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    background: none;\n}\n\n.project-preview {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: antiquewhite;\n}\n\n.add-task {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.add-task-input {\n    flex: 1 1 auto;\n    margin-left: 10px;\n}\n\nol {\n    list-style-type: none;\n    padding: 0px;\n    margin: 10px;\n}\n\nli {\n    margin: 5px;\n}\n\n.project-task-list-container {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n    border: solid;\n}\n\n.task-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 5px 15px 5px 15px;\n    border-radius: 5px;\n    justify-content: space-between;\n}\n\n.task-container-clicked {\n    background-color: rgb(207, 207, 207);\n}\n\n.task-container:hover {\n    background-color: rgba(108, 142, 251, .5);\n\n}\n\n.task-group {\n    display: flex;\n}\n\n.task-preview {\n    height: 100%;\n    background-color: rgb(141, 219, 212);\n    resize: horizontal;\n    overflow: hidden;\n    direction: rtl;\n    min-width: 20%;\n\n}\n\n.task-preview-content {\n    direction: ltr;\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    height: 100%;\n}\n\n.description-text {\n    flex: 1 0 auto;\n    resize: none;\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.task-preview-title-input {\n    background: none;\n    border: none;\n    color: black;\n    font-size: 16px;\n    padding: 18px 0px;\n    font-family: 'Nimbus Sans';\n    font-weight: bold;\n    width: 100%;\n}\n\n.task-preview-title-input:focus {\n    outline: none;\n}\n\n.task-delete-button {\n    background: none;\n    margin-right: 10px;\n}",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{class e{constructor(e,t=!1){this.title=e,this.complete=t}setTitle(e){this.title=e}getTitle(){return this.title}setDescription(e){this.description=e}getDescription(){return this.description}setDueDate(e){this.dueDate=e}getDueDate(){return this.dueDate}setPriority(e){this.priority=e}getPriority(){return this.priority}markComplete(){this.complete=!this.complete}}const t=e=>{let t=e,n=[],r=[];return{getName:()=>t,taskList:n,addTask:e=>{n.push(e)},removeTask:e=>{const t=n.indexOf(e);n.splice(t,1)},completedTasks:r,addToCompleted:e=>{r.push(e)},getCompleted:()=>r,getTaskInfo:e=>{for(let t of n)if(t.getTitle()===e)return t}}},r=(()=>{let n=[],o=n[0];const i=e=>{n.push(e)},a=e=>{o=e};return(()=>{const r=[t("Inbox"),t("Today"),t("Upcoming")];for(let t of r){if(i(t),"Inbox"===t.getName()){const n=new e("buy more milk.");t.addTask(n)}a(n[0])}})(),{currentProject:o,projectList:n,addProject:i,removeProject:e=>{const t=n.indexOf(e);n.splice(t,1)},getProject:e=>{for(let t of r.projectList)if(t.getName()===e)return t},setCurrentProject:a,getCurrentProject:()=>o}})();console.log(r);const o=(e,t)=>(()=>{const n=(()=>{const e=document.createElement("div");return e.classList.add("task-container"),e.oncontextmenu=e=>{showTaskMenu(e)},e.addEventListener("click",(()=>{e.classList.toggle("task-container-clicked"),i(t,document.querySelector(".task-title"))})),e})(),r=document.createElement("div");r.classList.add("task-group");const o=(()=>{const n=document.createElement("input");return n.setAttribute("type","checkbox"),n.addEventListener("click",(r=>{r.stopPropagation(),n.checked&&(t.markComplete(),e.addToCompleted(t),e.removeTask(t),a(e))})),n})(),c=(()=>{const e=document.createElement("li");return e.classList.add("task-title"),e.textContent=t.getTitle(),e})();r.append(o,c);const s=((e,t)=>{const n=document.createElement("button");return n.classList.add("task-delete-button"),n.classList.add("material-icons"),n.innerHTML="delete_outline",n.addEventListener("click",(n=>{n.stopPropagation(),e.removeTask(t),a(e)})),n})(e,t);return n.append(r,s),n})(),i=(e,t)=>{const n=document.querySelector(".task-preview-content");n.replaceChildren(),n.append((()=>{const e=document.createElement("div");e.classList.add("task-preview-header");const t=(()=>{const e=document.createElement("button");return e.classList.add("material-icons"),e.textContent="priority_high",e})(),n=(()=>{const e=document.createElement("button");return e.classList.add("material-icons"),e.textContent="date_range",e})();return e.append(t,n),e})()),n.append((()=>{const r=document.createElement("h3");return r.textContent=e.getTitle(),r.classList.add("task-preview-title"),r.addEventListener("click",(()=>{(()=>{const r=document.createElement("input");r.classList.add("task-preview-title-input");const o=document.querySelector(".task-preview-title");r.setAttribute("type","text"),r.setAttribute("placeholder",e.getTitle()),r.addEventListener("keyup",(function(i){"Enter"===i.key&&""!==r.value&&(e.setTitle(r.value),o.textContent=e.getTitle(),document.activeElement.blur(),n.replaceChild(o,r),t.textContent=e.getTitle())})),r.addEventListener("focusout",(()=>{""!==r.value&&(e.setTitle(r.value),o.textContent=e.getTitle(),document.activeElement.blur(),t.textContent=e.getTitle())})),n.replaceChild(r,o),r.focus()})()})),r})(),(()=>{const t=document.createElement("textarea");return t.classList.add("description-text"),t.setAttribute("placeholder","Description"),t.addEventListener("keyup",(function(n){"Enter"===n.key&&(e.setDescription(t.value),t.value=e.getDescription(),document.activeElement.blur())})),e.getDescription()&&(t.value=e.getDescription()),t})())},a=e=>{document.querySelector(".task-preview-content").replaceChildren();const t=document.querySelector(".task-list");if(document.querySelector(".project-title").textContent=e.getName(),t.replaceChildren(),e.taskList.length>0){console.log("YES THERE ARE TASKS");for(let n of e.taskList){const r=o(e,n);t.append(r)}}},c=((()=>{const t=document.querySelector(".add-task-input");t.addEventListener("keyup",(function(n){if("Enter"!==n.key)return;const o=r.getCurrentProject();o.addTask(new e(t.value)),t.value="",a(o)}))})(),(()=>{const e=document.getElementById("input-add-project-popup"),n=document.querySelector(".add-project-button"),o=document.querySelector(".add-project-popup");e.setAttribute("placeholder","Add a new project."),n.addEventListener("click",(()=>{o.classList.toggle("add-project-popup-show")})),e.addEventListener("keyup",(function(n){if("Enter"!==n.key)return;const i=t(e.value);e.value="",r.addProject(i),o.classList.toggle("add-project-popup-show"),n.preventDefault();const a=c(i);document.querySelector("nav").append(a)}))})(),e=>{r.setCurrentProject(e),a(e);const t=document.createElement("button");return t.addEventListener("click",(()=>{a(e)})),t.textContent=e.getName(),t});(()=>{const e=document.querySelector(".inbox"),t=document.querySelector(".today"),n=document.querySelector(".upcoming");for(let o of[e,t,n])o.addEventListener("click",(()=>{r.setCurrentProject(r.getProject(o.name)),a(r.getCurrentProject())}))})();var s=n(379),l=n.n(s),d=n(795),u=n.n(d),p=n(569),m=n.n(p),f=n(565),v=n.n(f),h=n(216),g=n.n(h),y=n(589),x=n.n(y),k=n(426),b={};b.styleTagTransform=x(),b.setAttributes=v(),b.insert=m().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=g(),l()(k.Z,b),k.Z&&k.Z.locals&&k.Z.locals,a(r.getCurrentProject())})()})();