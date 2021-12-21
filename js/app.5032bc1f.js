(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/task-tracker-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07e6":function(e,t,n){},"0e22":function(e,t,n){"use strict";n("97c2")},"237f":function(e,t,n){},"36e0":function(e,t,n){"use strict";n("b761")},4027:function(e,t,n){"use strict";n("b1bf")},"411b":function(e,t,n){"use strict";n("ac8a")},"48da":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("Project");return Object(r["openBlock"])(),Object(r["createBlock"])(i)}function a(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("Board"),s=Object(r["resolveComponent"])("EditTask");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(i),Object(r["createVNode"])(s)],64)}n("b64b");var c={class:"board"};function i(e,t,n,o,a,i){var s=Object(r["resolveComponent"])("BoardColumn");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(Object.keys(i.tasks),(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:e,category:e,tasks:i.tasks[e]},null,8,["category","tasks"])})),128))])}n("d3b7");var s={class:"board__column"},u={class:"board__column__body"},l={class:"board__column__footer"};function d(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("Task"),d=Object(r["resolveComponent"])("CreateNewTask"),f=Object(r["resolveComponent"])("Draggable");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[Object(r["createElementVNode"])("div",{class:"board__column__header",style:Object(r["normalizeStyle"])({backgroundColor:c.getCategoryColor(n.category)})},Object(r["toDisplayString"])(n.category),5),Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(f,{modelValue:c.tasks,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.tasks=e}),group:"tasks","item-key":"id"},{item:Object(r["withCtx"])((function(e){var t=e.element;return[Object(r["createVNode"])(i,{key:t.id,task:t,onClick:function(e){return c.setTaskToEdit(t)}},null,8,["task","onClick"])]})),footer:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(d,{category:n.category},null,8,["category"])])]})),_:1},8,["modelValue"])])])}var f=n("b76a"),b=n.n(f),m=n("3ef4"),p=(n("b0c0"),{class:"task"}),O={key:0,class:"task__estimate"};function h(e,t,n,o,a,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",p,[Object(r["createElementVNode"])("div",null,Object(r["toDisplayString"])(n.task.name),1),n.task.estimate?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",O,Object(r["toDisplayString"])(n.task.estimate),1)):Object(r["createCommentVNode"])("",!0)])}var g={props:{task:{type:Object,required:!0}}};n("fb18");g.render=h,g.__scopeId="data-v-48706d82";var v=g,j={class:"create-new-task"},y={style:{"text-align":"center"}},k=Object(r["createTextVNode"])(" + ");function E(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("ElInput"),s=Object(r["resolveComponent"])("ElButton");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",j,[Object(r["withDirectives"])(Object(r["createVNode"])(i,{ref:"textInputRef",modelValue:a.task.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.task.name=e}),type:"text",onBlur:c.handleBlur,onKeypress:c.handleKeyPress},null,8,["modelValue","onBlur","onKeypress"]),[[r["vShow"],a.editMode]]),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",y,[Object(r["createVNode"])(s,{round:"",onClick:c.enableEditMode},{default:Object(r["withCtx"])((function(){return[k]})),_:1},8,["onClick"])],512),[[r["vShow"],!a.editMode]])])}n("498a"),n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0");var C="ADD_TASK",T="SET_TASKS",w="SET_TASKS_CATEGORIES",S="SET_TASKS_CATEGORIES_DATA",_="SET_TASK",N="SET_TASK_TO_EDIT",V="DELETE_TASK",x="FETCH_TASKS_CATEGORIES",B="FETCH_TASKS",D="CREATE_TASK",A="UPDATE_TASK",I="ROLLBACK_STATE",$="BACKUP_STATE",P="UPDATE_TASKS",K="UPDATE_TASK_ACTIVITY",J=n("c349"),M=n("cf2e"),F={props:{category:{type:String,required:!0}},components:{ElInput:J["a"],ElButton:M["a"]},data:function(){return{editMode:!1,task:{name:"",category:this.category},taskCreated:!1}},methods:{createNewTask:function(){var e=this;this.editMode=!1,this.taskCreated||""!==U(this.task.name)&&(this.taskCreated=!0,this.$store.dispatch(D,this.task).then((function(){return e.taskCreated=!1})).catch((function(t){console.error(t.message),Object(m["a"])({message:"Something went wrong while trying to create a new task, please try again",type:"error",duration:5e3}),e.$store.dispatch(I)})).finally((function(){return e.taskCreated=!1})))},handleBlur:function(){this.createNewTask()},handleKeyPress:function(e){"Enter"===e.key&&this.createNewTask()},enableEditMode:function(){this.editMode=!0,this.task={name:"",category:this.category},this.$refs.textInputRef.focus()}}},U=function(e){var t=e.trim();return t.replace(new RegExp(String.fromCharCode(160),"g"),""),t=t.replace(/\s+/g," "),t};n("0e22");F.render=E,F.__scopeId="data-v-5752d11f";var R=F,L={props:{category:{type:String,required:!0}},components:{Task:v,CreateNewTask:R,Draggable:b.a},computed:{categories:function(){return this.$store.state.categories},tasks:{get:function(){return this.$store.state.tasks[this.category]},set:function(e){var t=this;this.$store.dispatch(P,{tasks:e,category:this.category}).catch((function(e){console.error(e.message),Object(m["a"])({message:"Something went wrong while trying to update the task, please try again",type:"error",duration:5e3}),t.$store.dispatch(I)}))}}},methods:{getCategoryColor:function(e){return this.categories[e].color},setTaskToEdit:function(e){var t=this;this.$store.dispatch(N,e).catch((function(e){console.error(e.message),Object(m["a"])({message:"Something went wrong while trying to edit the task, please try again",type:"error",duration:5e3}),t.$store.dispatch(I)}))}}};n("f355d");L.render=d,L.__scopeId="data-v-254de4eb";var q=L,G=n("90b1"),W={name:"Board",data:function(){return{loading:!1}},components:{BoardColumn:q},computed:{tasks:function(){return this.$store.state.tasks}},created:function(){var e=this;this.loading=G["a"].service(),this.$store.dispatch(x).then((function(){return e.$store.dispatch(B)})).catch((function(t){console.error(t.message),Object(m["a"])({message:"Something went wrong while fetching tasks, please try again",type:"error",duration:5e3}),e.$store.dispatch(I)})).finally((function(){return e.loading.close()}))}};n("c1b1");W.render=i,W.__scopeId="data-v-55501df6";var H=W;function z(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("EditTaskForm"),s=Object(r["resolveComponent"])("ElTabPane"),u=Object(r["resolveComponent"])("Activity"),l=Object(r["resolveComponent"])("ElTabs"),d=Object(r["resolveComponent"])("ElDialog");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(d,{"model-value":a.showDialog,"before-close":c.handleClose,"show-close":!1,width:"30%","custom-class":"form-dialog",center:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:a.activeTab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.activeTab=e})},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{label:"Edit task",name:"edit"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{onSave:c.handleClose,onCancel:c.handleClose,onDelete:c.handleClose},null,8,["onSave","onCancel","onDelete"])]})),_:1}),Object(r["createVNode"])(s,{label:"Activity",name:"activity"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(u)]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["model-value","before-close"])])}var Y=n("db9d"),Q=n("e0ad"),X=n("3835"),Z={class:"activity"},ee={class:"activity__key"},te={class:"activity__time"},ne={key:0,class:"activity__item is-done"};function re(e,t,n,o,a,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",Z,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.activity,(function(e){var t=Object(X["a"])(e,1),n=t[0];return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:n,class:"activity__item"},[Object(r["createElementVNode"])("div",ee,Object(r["toDisplayString"])(n),1),Object(r["createElementVNode"])("div",te,Object(r["toDisplayString"])(c.getTimeElapsed(n)),1)])})),128)),c.isDone?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",ne,Object(r["toDisplayString"])(c.taskToEdit.category)+" ✓ ",1)):Object(r["createCommentVNode"])("",!0)])}n("4de4"),n("4fad"),n("99af");var oe={computed:{isDone:function(){var e;return null===(e=this.categories[this.taskToEdit.category])||void 0===e?void 0:e.endOfWorkflow},taskToEdit:function(){return this.$store.state.taskToEdit},activityData:function(){return this.taskToEdit.activity||{}},activity:function(){var e=this;return Object.entries(this.activityData).filter((function(t){var n=Object(X["a"])(t,1),r=n[0];return!0!==e.categories[r].endOfWorkflow}))},categories:function(){return this.$store.state.categories}},methods:{getTimeElapsed:function(e){var t=this.activityData[e].reduce((function(e,t){var n=t.started,r=t.finished||Date.now();return e+=r-n,e}),0),n=Math.floor(t/6e4%60),r=Math.floor(t/36e5%24),o="";return r>0&&(o+="".concat(r," ").concat(r>1||0===r?"hours":"hour",", ")),o+="".concat(n," ").concat(n>1||0===n?"minutes":"minute"),o}}};n("4027");oe.render=re,oe.__scopeId="data-v-3f0839ec";var ae=oe,ce=(n("a4d3"),n("e01a"),{style:{display:"flex",width:"100%"}}),ie=Object(r["createTextVNode"])("Delete"),se={style:{"margin-left":"auto"}},ue=Object(r["createTextVNode"])("Cancel"),le=Object(r["createTextVNode"])("Save");function de(e,t,n,o,a,c){var i=Object(r["resolveComponent"])("ElInput"),s=Object(r["resolveComponent"])("ElFormItem"),u=Object(r["resolveComponent"])("ElOption"),l=Object(r["resolveComponent"])("ElSelect"),d=Object(r["resolveComponent"])("ElInputNumber"),f=Object(r["resolveComponent"])("ElButton"),b=Object(r["resolveComponent"])("ElPopconfirm"),m=Object(r["resolveComponent"])("ElForm");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[Object(r["createVNode"])(m,{model:a.form,class:"edit-task-form",ref:"form",rules:a.formValidation,"label-width":"120px","label-position":"left"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(s,{label:"Name",prop:"name"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:a.form.name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.form.name=e})},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(s,{label:"Description",prop:"description"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(i,{modelValue:a.form.description,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.form.description=e}),type:"textarea"},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(s,{label:"Status",prop:"category"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(l,{modelValue:a.form.category,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.form.category=e}),style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(c.categories,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])(u,{key:e.name,value:e.name},null,8,["value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),Object(r["createVNode"])(s,{label:"Estimate",prop:"estimate"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(d,{modelValue:a.form.estimate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.form.estimate=e}),"controls-position":"right",min:0},null,8,["modelValue"])]})),_:1}),Object(r["createVNode"])(s,{style:{"margin-left":"-120px","padding-top":"20px"}},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",ce,[Object(r["createVNode"])(b,{title:"Are you sure to delete this task?","hide-icon":"true","confirm-button-type":"danger",onConfirm:c.handleDelete},{reference:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(f,{type:"text",style:{color:"#f56c6c"}},{default:Object(r["withCtx"])((function(){return[ie]})),_:1})]})),_:1},8,["onConfirm"]),Object(r["createElementVNode"])("div",se,[Object(r["createVNode"])(f,{onClick:c.handleCancel},{default:Object(r["withCtx"])((function(){return[ue]})),_:1},8,["onClick"]),Object(r["createVNode"])(f,{type:"primary",onClick:c.handleSave},{default:Object(r["withCtx"])((function(){return[le]})),_:1},8,["onClick"])])])]})),_:1})]})),_:1},8,["model","rules"])])}var fe=n("5530"),be=n("d8e8"),me=n("91c0"),pe=n("421b"),Oe=n("9082"),he={data:function(){return{form:{name:"",description:"",category:"",estimate:1,activity:{}},formValidation:{name:[{required:!0,message:"Name is required",trigger:"blur"}]},loading:!1}},components:{ElForm:be["a"],ElFormItem:be["b"],ElInput:J["a"],ElSelect:me["b"],ElOption:me["a"],ElPopconfirm:pe["a"],ElButton:M["a"],ElInputNumber:Oe["a"]},watch:{taskToEdit:{handler:function(e){this.form=Object(fe["a"])({},e)}}},mounted:function(){this.form=Object(fe["a"])({},this.taskToEdit)},computed:{categories:function(){return this.$store.state.categories},taskToEdit:function(){return this.$store.state.taskToEdit}},methods:{handleSave:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.loading=G["a"].service({target:"form"}),e.$store.dispatch(A,{task:e.form,prevCategory:e.taskToEdit.category}).catch((function(t){console.error(t.message),Object(m["a"])({message:"Something went wrong while trying to save the changes, please try again",type:"error",duration:5e3}),e.$store.dispatch(I)})).finally((function(){e.loading.close(),e.$store.dispatch(N,{}),e.$emit("save")})))}))},handleDelete:function(){var e=this;this.loading=G["a"].service({target:"form"}),this.$store.dispatch(V,{task:this.form,category:this.taskToEdit.category}).catch((function(t){console.error(t.message),Object(m["a"])({message:"Something went wrong while trying to delete the task, please try again",type:"error",duration:5e3}),e.$store.dispatch(I)})).finally((function(){e.$store.dispatch(N,{}),e.$emit("delete"),e.loading.close()}))},handleCancel:function(){this.$store.dispatch(N,{}),this.$emit("cancel")}}};n("411b");he.render=de,he.__scopeId="data-v-0fa47274";var ge=he,ve={data:function(){return{activeTab:"edit",showDialog:!1}},components:{ElDialog:Y["a"],ElTabs:Q["b"],ElTabPane:Q["a"],Activity:ae,EditTaskForm:ge},watch:{taskToEdit:{handler:function(e){Object.keys(e).length&&(this.showDialog=!0,this.activeTab="edit")},inmediate:!0}},computed:{taskToEdit:function(){return this.$store.state.taskToEdit}},methods:{handleClose:function(){var e=this;this.showDialog=!1,this.$nextTick((function(){e.$store.dispatch(N,{})}))}}};n("8d1d");ve.render=z,ve.__scopeId="data-v-698ba182";var je=ve,ye={components:{Board:H,EditTask:je}};ye.render=a;var ke=ye,Ee={components:{Project:ke}};n("36e0");Ee.render=o;var Ce,Te=Ee,we=n("5502"),Se=n("ade3"),_e=(n("159b"),n("4e82"),n("c740"),n("e9c4"),n("7db0"),Ce={},Object(Se["a"])(Ce,C,(function(e,t){e.tasks[t.category].push(t)})),Object(Se["a"])(Ce,T,(function(e,t){Object.keys(e.tasks).forEach((function(n){var r=t.filter((function(e){return e.category===n}));e.tasks[n]=r.sort((function(e,t){return e.order-t.order}))}))})),Object(Se["a"])(Ce,w,(function(e,t){t.forEach((function(t){return e.tasks[t.name]=[]}))})),Object(Se["a"])(Ce,S,(function(e,t){t.forEach((function(t){return e.categories[t.name]=t}))})),Object(Se["a"])(Ce,_,(function(e,t){var n=t.task,r=t.targetIndex,o=r||e.tasks[n.category].findIndex((function(e){return e.id===n.id}));e.tasks[n.category][o]=n})),Object(Se["a"])(Ce,N,(function(e,t){e.taskToEdit=t})),Object(Se["a"])(Ce,V,(function(e,t){var n=t.task,r=t.category;e.tasks[r]=e.tasks[r].filter((function(e){return e.id!==n.id}))})),Object(Se["a"])(Ce,I,(function(e){Object.assign(e,JSON.parse(JSON.stringify(e.prevState)))})),Object(Se["a"])(Ce,$,(function(e,t){e.prevState=JSON.parse(JSON.stringify(t))})),Object(Se["a"])(Ce,P,(function(e,t){var n=t.tasks,r=t.category;e.tasks[r]=n})),Object(Se["a"])(Ce,K,(function(e,t){Array.isArray(t)||(t=[t]),t.forEach((function(t){var n=e.tasks[t.category].find((function(e){return e.id===t.id}));n.activity=t.activity}))})),Ce),Ne=n("1da1"),Ve=(n("96cf"),n("1276"),n("fb6a"),n("d81d"),n("a434"),n("caad"),n("2532"),n("2ef0")),xe="task-tracker",Be={categories:[{name:"Planned",color:"#F288B9"},{name:"In progress",color:"#62B7D9"},{name:"Completed",color:"#58A664",endOfWorkflow:!0}],tasks:[]};localStorage.getItem(xe)||localStorage.setItem(xe,JSON.stringify(Be));var De,Ae=function(e){var t=JSON.parse(localStorage.getItem(xe));return[t[e],t]},Ie=function(e){var t=e.split("/");return t.map((function(e){return e.replace(":","")})).slice(1)},$e=function(e){localStorage.setItem(xe,JSON.stringify(e))},Pe=function(e){return new Promise((function(t){setTimeout((function(){return t(e)}),500)}))},Ke=function(e){return Pe({data:e,status:"success"})},Je=function(e){return Pe({data:{title:e},status:"fail"})},Me=function(e){return Pe({message:e.message,status:"error"})},Fe=function(e){try{var t=Ie(e),n=Object(X["a"])(t,2),r=n[0],o=n[1],a=Ae(r)||[],c=Object(X["a"])(a,1),i=c[0];if(!o)return Ke(i);var s=i.find((function(e){return e.id===o}));return s?Ke(s):Je("Item not found")}catch(u){return Me(u)}},Ue=function(e,t){try{var n=Ie(e),r=Object(X["a"])(n,1),o=r[0],a=Ae(o),c=Object(X["a"])(a,2),i=c[0],s=c[1];return i?(qe(t),i.push(t),$e(s),Ke(t)):Je("Collection not found")}catch(u){return Me(u)}},Re=function(e){try{var t=Ie(e),n=Object(X["a"])(t,2),r=n[0],o=n[1],a=Ae(r),c=Object(X["a"])(a,2),i=c[0],s=c[1];if(!i)return Je("Collection not found");var u=i.findIndex((function(e){return e.id===o}));return i.splice(u,1),$e(s),Ke(null)}catch(l){return Me(l)}},Le=function(e,t){try{var n=Ie(e),r=Object(X["a"])(n,2),o=r[0],a=r[1],c=Ae(o),i=Object(X["a"])(c,2),s=i[0],u=i[1];if(!s)return Je("Collection not found");if(a){var l=s.findIndex((function(e){return e.id===a}));if(-1==l)return Je("Task not found");var d=s[l];return qe(t,d),s[l]=Object(Ve["merge"])({},d,t),$e(u),Ke(s[l])}var f=t.map((function(e){return e.id})),b=s.reduce((function(e,t,n){return f.includes(t.id)&&e.push({task:t,collectionIndex:n}),e}),[]);return b.forEach((function(e,n){var r=e.task,o=e.collectionIndex,a=r,c=t.find((function(e){return e.id===r.id}));qe(c,a),b[n]=Object(Ve["merge"])({},a,c),s[o]=b[n]})),$e(u),Ke(b)}catch(m){return Me(m)}},qe=function(e,t){if(t){if(t&&t.category!==e.category){var n=t.activity[t.category].length;t.activity[t.category][n-1].finished=Date.now();var r=Object(Ve["merge"])({},t.activity,e.activity);Array.isArray(r[e.category])||(r[e.category]=[]),r[e.category].push({started:Date.now()}),e.activity=r}}else e.activity[e.category]=[{started:Date.now()}]},Ge=function(){var e=Object(Ne["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:if(n=e.sent,"success"!=n.status){e.next=5;break}return e.abrupt("return",Promise.resolve(n));case 5:if("fail"!=n.status){e.next=7;break}throw new Error(n.data.title);case 7:if("error"!=n.status){e.next=9;break}throw new Error(n.message);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),We={get:function(e){return Ge((function(){return Fe(e)}))},post:function(e,t){return Ge((function(){return Ue(e,t)}))},delete:function(e){return Ge((function(){return Re(e)}))},put:function(e,t){return Ge((function(){return Le(e,t)}))}},He="/tasks",ze={get:function(){return We.get(He)},create:function(e){return We.post(He,JSON.parse(JSON.stringify(e)))},update:function(e){return e.id?We.put("".concat(He,"/:").concat(e.id),JSON.parse(JSON.stringify(e))):We.put("".concat(He),JSON.parse(JSON.stringify(e)))},updateOrder:function(e){We.put("".concat(He),JSON.parse(JSON.stringify(e)))},delete:function(e){return We.delete("".concat(He,"/:").concat(e))}},Ye="/categories",Qe={get:function(){return We.get(Ye)}},Xe=(De={},Object(Se["a"])(De,x,(function(e){var t=e.commit;return Qe.get().then((function(e){t(w,e.data),t(S,e.data)}))})),Object(Se["a"])(De,B,(function(e){var t=e.commit;return ze.get().then((function(e){return t(T,e.data)}))})),Object(Se["a"])(De,D,(function(e,t){var n=e.commit,r=e.state;n($,r);var o=Object(fe["a"])(Object(fe["a"])({},t),{},{id:Math.random().toString(36).substr(2,6),order:r.tasks[t.category].length,estimate:0,activity:{}});return n(C,o),ze.create(o).then((function(e){n(_,{task:e.data})}))})),Object(Se["a"])(De,V,(function(e,t){var n=e.commit,r=e.state,o=t.task,a=t.category;return n($,r),n(V,{task:o,category:a}),ze.delete(o.id)})),Object(Se["a"])(De,A,(function(e,t){var n=e.commit,r=e.state,o=t.task,a=t.prevCategory;n($,r),a&&o.category!==a&&n(V,{task:o,category:a});var c=r.tasks[o.category].findIndex((function(e){return e.id===o.id}));if(c>=0)n(_,{task:o,targetIndex:c});else{var i=r.tasks[o.category].length;n(C,Object(fe["a"])(Object(fe["a"])({},o),{},{order:i}))}return ze.update(o).then((function(e){n(K,e.data)}))})),Object(Se["a"])(De,P,(function(e,t){var n=e.commit,r=e.state,o=t.tasks,a=t.category;return n($,r),o.forEach((function(e,t){e.category=a,e.order=t})),n(P,{tasks:o,category:a}),ze.update(o).then((function(e){n(K,e.data)}))})),Object(Se["a"])(De,N,(function(e,t){var n=e.commit,r=e.state;n($,r),n(N,t)})),Object(Se["a"])(De,I,(function(e){var t=e.commit;t(I)})),De),Ze=Object(we["a"])({state:{tasks:{},categories:{},taskToEdit:{},prevState:{}},mutations:_e,actions:Xe});Object(r["createApp"])(Te).use(Ze).mount("#app")},"8d1d":function(e,t,n){"use strict";n("48da")},"97c2":function(e,t,n){},ac8a:function(e,t,n){},b1bf:function(e,t,n){},b761:function(e,t,n){},c1b1:function(e,t,n){"use strict";n("07e6")},e0c5:function(e,t,n){},f355d:function(e,t,n){"use strict";n("237f")},fb18:function(e,t,n){"use strict";n("e0c5")}});
//# sourceMappingURL=app.5032bc1f.js.map