(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"237f":function(e,t,r){},"2f84":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function o(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("Project");return Object(n["openBlock"])(),Object(n["createBlock"])(i)}function a(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("Board"),s=Object(n["resolveComponent"])("EditTask");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(i),Object(n["createVNode"])(s)],64)}r("b64b");var c={class:"board"};function i(e,t,r,o,a,i){var s=Object(n["resolveComponent"])("BoardColumn"),u=Object(n["resolveDirective"])("loading");return Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(Object.keys(i.tasks),(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:e,category:e,tasks:i.tasks[e]},null,8,["category","tasks"])})),128))],512)),[[u,a.loading]])}r("d3b7");var s={class:"board__column"},u={class:"board__column__body"},l={class:"board__column__footer"};function d(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("Task"),d=Object(n["resolveComponent"])("CreateNewTask"),f=Object(n["resolveComponent"])("Draggable");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",s,[Object(n["createElementVNode"])("div",{class:"board__column__header",style:Object(n["normalizeStyle"])({backgroundColor:c.getCategoryColor(r.category)})},Object(n["toDisplayString"])(r.category),5),Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(f,{modelValue:c.tasks,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.tasks=e}),group:"tasks","item-key":"id"},{item:Object(n["withCtx"])((function(e){var t=e.element;return[Object(n["createVNode"])(i,{key:t.id,task:t,onClick:function(e){return c.setTaskToEdit(t)}},null,8,["task","onClick"])]})),footer:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(d,{category:r.category},null,8,["category"])])]})),_:1},8,["modelValue"])])])}var f=r("b76a"),b=r.n(f),p=r("3ef4"),m=(r("b0c0"),{class:"task"});function g(e,t,r,o,a,c){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",m,[Object(n["createElementVNode"])("div",null,Object(n["toDisplayString"])(r.task.name),1)])}var O={props:{task:{type:Object,required:!0}}};r("6b6a");O.render=g;var h=O,j={class:"create-new-task"},v={style:{"text-align":"center"}},k=Object(n["createTextVNode"])(" + ");function y(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("ElInput"),s=Object(n["resolveComponent"])("ElButton");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",j,[Object(n["withDirectives"])(Object(n["createVNode"])(i,{ref:"textInputRef",modelValue:a.task.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.task.name=e}),type:"text",onBlur:c.handleBlur,onKeypress:c.handleKeyPress},null,8,["modelValue","onBlur","onKeypress"]),[[n["vShow"],a.editMode]]),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",v,[Object(n["createVNode"])(s,{round:"",onClick:c.enableEditMode},{default:Object(n["withCtx"])((function(){return[k]})),_:1},8,["onClick"])],512),[[n["vShow"],!a.editMode]])])}r("498a"),r("ac1f"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0");var C="ADD_TASK",S="SET_TASKS",w="SET_TASKS_CATEGORIES",E="SET_TASKS_CATEGORIES_DATA",T="SET_TASK",_="SET_TASK_TO_EDIT",N="DELETE_TASK",V="FETCH_TASKS_CATEGORIES",x="FETCH_TASKS",B="CREATE_TASK",A="UPDATE_TASK",D="ROLLBACK_STATE",I="BACKUP_STATE",$="UPDATE_TASKS",K={props:{category:{type:String,required:!0}},data:function(){return{editMode:!1,task:{name:"",category:this.category},taskCreated:!1}},methods:{createNewTask:function(){var e=this;this.editMode=!1,this.taskCreated||""!==P(this.task.name)&&(this.taskCreated=!0,this.$store.dispatch(B,this.task).then((function(){return e.taskCreated=!1})).catch((function(t){console.error(t.message),Object(p["a"])({message:"Something went wrong while trying to create a new task, please try again",type:"error",duration:5e3}),e.$store.dispatch(D)})).finally((function(){return e.taskCreated=!1})))},handleBlur:function(){this.createNewTask()},handleKeyPress:function(e){"Enter"===e.key&&this.createNewTask()},enableEditMode:function(){this.editMode=!0,this.task={name:"",category:this.category},this.$refs.textInputRef.focus()}}},P=function(e){var t=e.trim();return t.replace(new RegExp(String.fromCharCode(160),"g"),""),t=t.replace(/\s+/g," "),t};K.render=y;var J=K,M={props:{category:{type:String,required:!0}},components:{Task:h,CreateNewTask:J,Draggable:b.a},computed:{categories:function(){return this.$store.state.categories},tasks:{get:function(){return this.$store.state.tasks[this.category]},set:function(e){var t=this;this.$store.dispatch($,{tasks:e,category:this.category}).catch((function(e){console.error(e.message),Object(p["a"])({message:"Something went wrong while trying to update the task, please try again",type:"error",duration:5e3}),t.$store.dispatch(D)}))}}},methods:{getCategoryColor:function(e){return this.categories[e].color},setTaskToEdit:function(e){var t=this;this.$store.dispatch(_,e).catch((function(e){console.error(e.message),Object(p["a"])({message:"Something went wrong while trying to edit the task, please try again",type:"error",duration:5e3}),t.$store.dispatch(D)}))}}};r("f355d");M.render=d,M.__scopeId="data-v-254de4eb";var R=M,F={name:"Board",data:function(){return{loading:!1}},components:{BoardColumn:R},computed:{tasks:function(){return this.$store.state.tasks}},created:function(){var e=this;this.loading=!0,this.$store.dispatch(V).then((function(){return e.$store.dispatch(x)})).catch((function(t){console.error(t.message),Object(p["a"])({message:"Something went wrong while fetching tasks, please try again",type:"error",duration:5e3}),e.$store.dispatch(D)})).finally((function(){return e.loading=!1}))}};r("debe");F.render=i,F.__scopeId="data-v-4c539033";var U=F,q=(r("a4d3"),r("e01a"),{class:"create-new-task-form"}),L={style:{display:"flex",width:"100%"}},G=Object(n["createTextVNode"])("Delete"),H={style:{"margin-left":"auto"}},z=Object(n["createTextVNode"])("Cancel"),Q=Object(n["createTextVNode"])("Save");function W(e,t,r,o,a,c){var i=Object(n["resolveComponent"])("ElInput"),s=Object(n["resolveComponent"])("ElFormItem"),u=Object(n["resolveComponent"])("ElOption"),l=Object(n["resolveComponent"])("ElSelect"),d=Object(n["resolveComponent"])("ElButton"),f=Object(n["resolveComponent"])("ElPopconfirm"),b=Object(n["resolveComponent"])("ElForm"),p=Object(n["resolveComponent"])("ElDialog"),m=Object(n["resolveDirective"])("loading");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",q,[Object(n["createVNode"])(p,{"model-value":Object.keys(c.taskToEdit).length,"show-close":!1,"before-close":c.handleCancel,width:"30%","custom-class":"form-dialog",center:""},{default:Object(n["withCtx"])((function(){return[Object(n["withDirectives"])(Object(n["createVNode"])(b,{model:a.form,ref:"form",rules:a.formValidation,"label-width":"120px","label-position":"left"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{label:"Name",prop:"name"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:a.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(s,{label:"Description",prop:"description"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(i,{modelValue:a.form.description,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.description=e}),type:"textarea"},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(s,{label:"Status",prop:"category"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(l,{modelValue:a.form.category,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.category=e}),style:{width:"100%"}},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.categories,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:e.name,value:e.name},null,8,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(n["createVNode"])(s,{style:{"margin-left":"-120px","padding-top":"20px"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",L,[Object(n["createVNode"])(f,{title:"Are you sure to delete this task?","hide-icon":"true","confirm-button-type":"danger",onConfirm:c.handleDelete},{reference:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(d,{type:"text",style:{color:"#f56c6c"}},{default:Object(n["withCtx"])((function(){return[G]})),_:1})]})),_:1},8,["onConfirm"]),Object(n["createElementVNode"])("div",H,[Object(n["createVNode"])(d,{onClick:c.handleCancel},{default:Object(n["withCtx"])((function(){return[z]})),_:1},8,["onClick"]),Object(n["createVNode"])(d,{type:"primary",onClick:c.handleSave},{default:Object(n["withCtx"])((function(){return[Q]})),_:1},8,["onClick"])])])]})),_:1})]})),_:1},8,["model","rules"]),[[m,a.loading]])]})),_:1},8,["model-value","before-close"])])}var X=r("5530"),Y=(r("07ac"),{data:function(){return{loading:!1,form:{name:"",description:"",category:""},formValidation:{name:[{required:!0,message:"Name is required",trigger:"blur"}]}}},watch:{taskToEdit:{handler:function(e){this.form=Object(X["a"])({},e)},inmediate:!0}},computed:{categories:function(){return Object.values(this.$store.state.categories)},taskToEdit:function(){return this.$store.state.taskToEdit}},methods:{handleSave:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.loading=!0,e.$store.dispatch(A,{task:e.form,prevCategory:e.taskToEdit.category}).catch((function(t){console.error(t.message),Object(p["a"])({message:"Something went wrong while trying to save the changes, please try again",type:"error",duration:5e3}),e.$store.dispatch(D)})).finally((function(){return e.loading=!1})))}))},handleDelete:function(){var e=this;this.loading=!0,this.$store.dispatch(N,{task:this.form,category:this.taskToEdit.category}).catch((function(t){console.error(t.message),Object(p["a"])({message:"Something went wrong while trying to delete the task, please try again",type:"error",duration:5e3}),e.$store.dispatch(D)})).finally((function(){return e.loading=!1}))},handleCancel:function(){this.$store.dispatch(_,{})}}});r("a74f");Y.render=W,Y.__scopeId="data-v-38fa30d0";var Z=Y,ee={components:{Board:U,EditTask:Z}};ee.render=a;var te=ee,re={components:{Project:te}};r("8380");re.render=o;var ne,oe=re,ae=r("5502"),ce=r("ade3"),ie=(r("159b"),r("4de4"),r("4e82"),r("e9c4"),ne={},Object(ce["a"])(ne,C,(function(e,t){e.tasks[t.category].push(t)})),Object(ce["a"])(ne,S,(function(e,t){Object.keys(e.tasks).forEach((function(r){var n=t.filter((function(e){return e.category===r}));e.tasks[r]=n.sort((function(e,t){return e.order-t.order}))}))})),Object(ce["a"])(ne,w,(function(e,t){t.forEach((function(t){return e.tasks[t.name]=[]}))})),Object(ce["a"])(ne,E,(function(e,t){t.forEach((function(t){return e.categories[t.name]=t}))})),Object(ce["a"])(ne,T,(function(e,t){var r=t.task,n=t.targetIndex;e.tasks[r.category][n]=r})),Object(ce["a"])(ne,_,(function(e,t){e.taskToEdit=t})),Object(ce["a"])(ne,N,(function(e,t){var r=t.task,n=t.category;e.tasks[n]=e.tasks[n].filter((function(e){return e.id!==r.id}))})),Object(ce["a"])(ne,D,(function(e){Object.assign(e,JSON.parse(JSON.stringify(e.prevState)))})),Object(ce["a"])(ne,I,(function(e,t){e.prevState=JSON.parse(JSON.stringify(t))})),Object(ce["a"])(ne,$,(function(e,t){var r=t.tasks,n=t.category;e.tasks[n]=r})),ne),se=(r("c740"),r("1da1")),ue=(r("96cf"),r("3835")),le=(r("1276"),r("fb6a"),r("d81d"),r("7db0"),r("a434"),r("caad"),r("2532"),"task-tracker"),de={categories:[{name:"Planned",color:"#F288B9"},{name:"In progress",color:"#62B7D9"},{name:"Completed",color:"#58A664"}],tasks:[]};localStorage.getItem(le)||localStorage.setItem(le,JSON.stringify(de));var fe,be=function(e){var t=JSON.parse(localStorage.getItem(le));return[t[e],t]},pe=function(e){var t=e.split("/");return t.map((function(e){return e.replace(":","")})).slice(1)},me=function(e){localStorage.setItem(le,JSON.stringify(e))},ge=function(e){return new Promise((function(t){setTimeout((function(){return t(e)}),500)}))},Oe=function(e){return ge({data:e,status:"success"})},he=function(e){return ge({data:{title:e},status:"fail"})},je=function(e){return ge({message:e.message,status:"error"})},ve=function(e){try{var t=pe(e),r=Object(ue["a"])(t,2),n=r[0],o=r[1],a=be(n)||[],c=Object(ue["a"])(a,1),i=c[0];if(!o)return Oe(i);var s=i.find((function(e){return e.id===o}));return s?Oe(s):he("Item not found")}catch(u){return je(u)}},ke=function(e,t){try{var r=pe(e),n=Object(ue["a"])(r,1),o=n[0],a=be(o),c=Object(ue["a"])(a,2),i=c[0],s=c[1];return i?(i.push(t),me(s),Oe(t)):he("Collection not found")}catch(u){return je(u)}},ye=function(e){try{var t=pe(e),r=Object(ue["a"])(t,2),n=r[0],o=r[1],a=be(n),c=Object(ue["a"])(a,2),i=c[0],s=c[1];if(!i)return he("Collection not found");var u=i.findIndex((function(e){return e.id===o}));return i.splice(u,1),me(s),Oe(null)}catch(l){return je(l)}},Ce=function(e,t){try{var r=pe(e),n=Object(ue["a"])(r,2),o=n[0],a=n[1],c=be(o),i=Object(ue["a"])(c,2),s=i[0],u=i[1];if(!s)return he("Collection not found");if(a){var l=s.findIndex((function(e){return e.id===a}));return l>=0&&(s[l]=t),me(u),Oe(t)}var d=t.map((function(e){return e.id})),f=s.filter((function(e){return d.includes(e.id)}));return f.forEach((function(e,r){f[r].name=t[r].name,f[r].description=t[r].description,f[r].category=t[r].category,f[r].order=t[r].order})),me(u),Oe(f)}catch(b){return je(b)}},Se=function(){var e=Object(se["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(r=e.sent,"success"!=r.status){e.next=5;break}return e.abrupt("return",Promise.resolve(r));case 5:if("fail"!=r.status){e.next=7;break}throw new Error(r.data.title);case 7:if("error"!=r.status){e.next=9;break}throw new Error(r.message);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we={get:function(e){return Se((function(){return ve(e)}))},post:function(e,t){return Se((function(){return ke(e,t)}))},delete:function(e){return Se((function(){return ye(e)}))},put:function(e,t){return Se((function(){return Ce(e,t)}))}},Ee="/tasks",Te={get:function(){return we.get(Ee)},create:function(e){return we.post(Ee,JSON.parse(JSON.stringify(e)))},update:function(e){return e.id?we.put("".concat(Ee,"/:").concat(e.id),JSON.parse(JSON.stringify(e))):we.put("".concat(Ee),JSON.parse(JSON.stringify(e)))},updateOrder:function(e){we.put("".concat(Ee),JSON.parse(JSON.stringify(e)))},delete:function(e){return we.delete("".concat(Ee,"/:").concat(e))}},_e="/categories",Ne={get:function(){return we.get(_e)}},Ve=(fe={},Object(ce["a"])(fe,V,(function(e){var t=e.commit;return Ne.get().then((function(e){t(w,e.data),t(E,e.data)}))})),Object(ce["a"])(fe,x,(function(e){var t=e.commit;return Te.get().then((function(e){return t(S,e.data)}))})),Object(ce["a"])(fe,B,(function(e,t){var r=e.commit,n=e.state;r(I,n);var o=Object(X["a"])(Object(X["a"])({},t),{},{id:Math.random().toString(36).substr(2,6),order:n.tasks[t.category].length});return r(C,o),Te.create(o)})),Object(ce["a"])(fe,N,(function(e,t){var r=e.commit,n=e.state,o=t.task,a=t.category;return r(I,n),r(N,{task:o,category:a}),r(_,{}),Te.delete(o.id)})),Object(ce["a"])(fe,A,(function(e,t){var r=e.commit,n=e.state,o=t.task,a=t.prevCategory;r(I,n),a&&o.category!==a&&r(N,{task:o,category:a});var c=n.tasks[o.category].findIndex((function(e){return e.id===o.id}));if(c>=0)r(T,{task:o,targetIndex:c});else{var i=n.tasks[o.category].length;r(C,Object(X["a"])(Object(X["a"])({},o),{},{order:i}))}return r(_,{}),Te.update(o)})),Object(ce["a"])(fe,$,(function(e,t){var r=e.commit,n=e.state,o=t.tasks,a=t.category;return r(I,n),o.forEach((function(e,t){e.category=a,e.order=t})),r($,{tasks:o,category:a}),Te.update(o)})),Object(ce["a"])(fe,_,(function(e,t){var r=e.commit,n=e.state;r(I,n),r(_,t)})),Object(ce["a"])(fe,D,(function(e){var t=e.commit;t(D)})),fe),xe=Object(ae["a"])({state:{tasks:{},categories:{},taskToEdit:{},prevState:{}},mutations:ie,actions:Ve}),Be=r("c3a1");r("7437");Object(n["createApp"])(oe).use(xe).use(Be["a"]).mount("#app")},"65d7":function(e,t,r){},"6b6a":function(e,t,r){"use strict";r("93ac")},8380:function(e,t,r){"use strict";r("be4e")},"93ac":function(e,t,r){},a74f:function(e,t,r){"use strict";r("65d7")},be4e:function(e,t,r){},debe:function(e,t,r){"use strict";r("2f84")},f355d:function(e,t,r){"use strict";r("237f")}});
//# sourceMappingURL=app.27136d8d.js.map