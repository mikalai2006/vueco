var ve=Object.defineProperty;var O=(o,c)=>ve(o,"name",{value:c,configurable:!0});import{d as $,a as g,v as pe,b as x,l as ae,n as N,h as G,x as X,F as W,p as me,t as he,q as J,H as ye,o as w,y as T,f as A,j as F,z as ee,w as C,m as be,u as k,A as ge,B as j,E as le,e as I,C as K,D,k as H,i as ke}from"./vue.esm-bundler.780544ed.js";import{u as te}from"./useId.06feead9.js";import"./browser.cfbb4fdd.js";import{i as we,a as oe,c as Oe}from"./useIcon.fe9488f3.js";import{L as xe}from"./LSpinner.c2fd7dc3.js";import{L as Y}from"./LIcon.15f4bd65.js";const R=Symbol("SelectContext"),Se=$({name:"LMultiSelect",props:{modelValue:{type:[Array,String,Number],default:()=>[]},showField:{type:Boolean,default:!1},field:{type:Object,required:!0,default:()=>({})}},emits:["update:showList","update:modelValue","onLoadItems","on-input","on-choose","on-choose-group"],setup(o,{emit:c,slots:e,expose:u}){const y=O(s=>{var v,a,p;const n=s.target;!((v=t.selectButtonEl.value)!=null&&v.contains(n))&&!((a=t.listBoxEl.value)!=null&&a.contains(n))&&!((p=t.searchEl.value)!=null&&p.contains(n))&&(L.value=!1,d())},"close"),d=O(()=>{document.removeEventListener("click",y),document.removeEventListener("keyup",y)},"unRegisterOverlay"),i=O(()=>{document.addEventListener("click",y),document.addEventListener("keyup",y)},"registerOverlay"),f=g(null),h=g([]),l=g(null),r=g(null),m=g(o.field),b=g(0),U=g(0),q=g(!1),V=g(""),L=g(!1),z=g(!1),M=g(!1),Q=g(""),B=g(0);pe(()=>L.value,s=>{c("update:showList",s)});const S=m.value.keyGroup||void 0,P=x({get(){return o.field.multiple&&Array.isArray(o.modelValue)?[...o.modelValue]:o.modelValue?[o.modelValue]:[]},set(s){const n=m.value.multiple?s:s[0];c("update:modelValue",n),c("on-input",n)}}),Z=x(()=>{const s=m.value.items||[];let n=s;const v=m.value.keyFilter;return v&&(n=s.filter(a=>typeof a=="object"?a[v].toLowerCase().indexOf(Q.value.toLowerCase())!==-1:typeof a=="number"?a!==-1:a.toLowerCase().indexOf(Q.value.toLowerCase())!==-1).sort((a,p)=>t.model.value.indexOf(a[v])-t.model.value.indexOf(p[v]))),n}),_=x(()=>{const s=m.value.items||[],n=m.value.keyValue;let v=[];return v=s.filter(a=>t.model.value.includes(typeof a=="object"&&n?a[n]:a)).sort((a,p)=>t.model.value.indexOf(a[n])-t.model.value.indexOf(p[n])),v}),ue=x(()=>{var n,v;const s={};return S||(s.default={selected:_.value.length||0,length:((n=m.value.items)==null?void 0:n.length)||0,key:"default"}),S&&((v=Z.value.sort((a,p)=>typeof a[S]=="string"?a[S].localeCompare(p[S]):a-p))==null||v.forEach(a=>{let p=typeof a[S]=="string"?a[S]:a[S].toString();typeof a=="object"&&(s[p]={selected:_.value.filter(E=>typeof E=="object"&&E[S]==p).length,length:s[p]?s[p].length+1:1,key:p})})),s});u({elselect:l});const ne=O(({range:s})=>{if(!m.value.multiple)return;const{from:n,to:v}=s;if(!m.value.items)return;const a=m.value.items.slice(n<v?n:v,v>n?v+1:n+1);t.model.value=JSON.parse(JSON.stringify(a.map(p=>m.value.keyValue&&typeof p=="object"?p[m.value.keyValue]:p)))},"chooseItemsOfRange"),ie=O(s=>{const n=t!=null&&t.field.value.keyValue?s[t.field.value.keyValue]:s,v=t.model.value.findIndex(p=>p===n);let a=[...t.model.value];t.field.value.multiple?v!==-1?a.splice(v,1):a.push(n):a=[n],c("on-choose",s),t.model.value=a},"onChooseOption"),se=O(s=>{if(console.time("chooseGroup"),!(t!=null&&t.field.value.multiple))return;const{length:n,selected:v}=s,a=t.field.value.items.filter(E=>t.groupkey?E[t.groupkey]===s.key:!0).map(E=>t.field.value.keyValue?E[t.field.value.keyValue]:E);c("on-choose-group",a);const p=n!==v?t.model.value.concat(a):t.model.value.filter(E=>a.indexOf(E)<0);t.model.value=p,console.timeEnd("chooseGroup")},"onChooseGroup"),re=O(s=>{let n=t.focusOption.value||0;return t.focusOption.value==-1&&(n=0),s.key==="ArrowDown"?n++:s.key==="ArrowUp"&&n--,n>t.optionsEl.value.length-1&&(n=t.optionsEl.value.length-1),n<0&&(n=0),n},"onChangeActiveIndex"),de=O(()=>{t.focusOption.value||(t.focusOption.value=0);const s=t.field.value.multiple?t.model.value[0]:t.model.value,n=t.field.value.keyValue,v=t.filteredOptions.value.findIndex(a=>n&&typeof a=="object"?a[n]==s:a==s);v&&v!=-1&&(t.focusOption.value=v),N(()=>{var E;const a=t.filteredOptions.value[t.focusOption.value],p=t.optionsEl.value.find(fe=>fe.key===(n?a[n]:a));p.el&&((E=p.el)==null||E.focus())})},"onSetFocus"),t={id:o.field.name,selectButtonEl:l,listBoxEl:r,searchEl:f,optionsEl:h,focusOption:B,model:P,field:m,show:L,loading:M,disabled:z,groups:ue,groupkey:S,selectedOptions:_,filteredOptions:Z,filterText:Q,searchQuery:V,clearSearchQuery(){V.value!==""&&(V.value="")},pressShift:q,indexShiftFrom:b,indexShiftTo:U,registerOverlay:i,unRegisterOverlay:d,chooseItemsOfRange:ne,onLoadItems:()=>c("onLoadItems"),updateModel:s=>{c("update:modelValue",s),c("on-input",s)},onChangeActiveIndex:re,onChooseOption:ie,onChooseGroup:se,onSetFocus:de};he(R,t);const ce=O(async()=>{M.value=!0,z.value=!0,await c("onLoadItems"),M.value=!1,z.value=!1},"loadData");return ae(async()=>{await ce(),m.value.autofocus&&N(()=>{var s;t.searchEl.value?t.searchEl.value.focus():(s=l.value)==null||s.focus()})}),()=>G("div",{},{default:()=>e.default?e.default({select:t,loading:M.value,disabled:z.value,show:t.show.value,filteredOptions:Z.value,focusOption:t.focusOption.value,indexShiftFrom:t.indexShiftFrom.value,indexShiftTo:t.indexShiftTo.value,selectedOptions:t.selectedOptions.value||[]}):[]})}}),Ve=$({name:"LMultiSelectButton",setup(o,{slots:c}){const e=J(R);if(!e){console.info("%s must be use inner %s component!","LMultiSelectButton","LMultiSelect");return}const u=x(()=>{const d={};return e.show.value&&(d["aria-controls"]=`${e.field.value.name}-listbox`),d}),y=x(()=>e.searchEl.value?{}:{role:"button",type:"button",tabindex:0,disabled:e.disabled.value,"aria-expanded":e.show.value,"aria-haspopup":"listbox","aria-labelledby":e.field.value.label?`${e.field.value.name}_label`:void 0,...u.value});return()=>G(e.searchEl.value?"div":"button",{ref:e.selectButtonEl,id:`${e.id}-button`,...y.value,onClick:X(()=>{e.show.value=!e.show.value,e.show.value?(N(()=>{e.onSetFocus()}),e.searchEl.value&&N(()=>{var d;(d=e.searchEl.value)==null||d.focus()}),setTimeout(()=>{e.registerOverlay()},50)):e.unRegisterOverlay()},[]),onKeydown:X(d=>{switch(d.key){case"Enter":e.onChooseOption(e.filteredOptions.value[e.focusOption.value]),e.field.value.multiple||N(()=>{var i,f;e.searchEl.value?(i=e.searchEl.value)==null||i.focus():(f=e.selectButtonEl.value)==null||f.focus({preventScroll:!0}),e.show.value=!1});break;case"ArrowUp":case"ArrowDown":e.show.value||(e.show.value=!0,e.registerOverlay()),e.show.value&&e.onChangeActiveIndex(d),N(()=>{e.onSetFocus()});break;case"Escape":e.show.value=!1,e.focusOption.value=0,e.unRegisterOverlay();break}},[])},c.default?c.default({show:e.show.value,disabled:e.disabled.value,loading:e.loading.value}):[])}}),Ee=$({name:"LMultiSelectList",setup(o,{emit:c,slots:e}){const u=J(R),y=O(i=>{const f=u.model.value.findIndex(h=>h==(i[u.field.value.keyValue]||i));if(f!==-1){const h=[...u.model.value];h.splice(f,1),u.model.value=h}},"removeOption"),d=O(()=>{u.model.value.splice(u.model.value.length-1,1)},"removeLast");return()=>G(W,{},e.default?e.default({removeOption:y,onKeydown:i=>{i.key==="Backspace"&&d()}}):[])}}),Le=$({name:"LMultiSelectSearch",setup(o,{slots:c}){const e=J(R,{}),u=g(""),y=g(null),d=O(()=>{e.filterText.value=u.value,e.loading.value=!1,e.show.value||(e.show.value=!0,setTimeout(()=>{e.registerOverlay()},50))},"onSearch");return()=>{var i;return G("input",{ref:f=>e.searchEl.value=f,role:"combobox",tabindex:0,placeholder:(i=e.field.value)==null?void 0:i.placeholder,disabled:e.disabled.value,"aria-expanded":e.show.value,"aria-haspopup":"listbox","aria-labelledby":e.field.value.label?`${e.field.value.name}_label`:void 0,"aria-controls":e.show.value?`${e.field.value.name}-listbox`:void 0,value:u.value,onInput:f=>{const h=f.target;y.value&&clearTimeout(y.value),e.loading.value=!0,y.value=setTimeout(()=>d(),350),u.value=h.value}})}}}),Fe=$({name:"LMultiSelectOptions",setup(o,{slots:c}){const e=J(R);if(!e)return;te();const u=x(()=>{const i={};return e.focusOption.value!=null&&e.focusOption.value!==-1&&(i["aria-activedescendant"]=`${e.id}-option-${e.focusOption.value}`),e.field.value.multiple&&(i["aria-multiselectable"]=!0),i}),y=O(()=>{var f,h;if(!e.field.value.multiple)return;const i=e.field.value.keyValue;if(e.model.value.length===((f=e.field.value.items)==null?void 0:f.length))e.model.value=[];else{const l=(h=e.field.value.items)==null?void 0:h.map(r=>i&&typeof r=="object"?r[i]:r);l&&(e.model.value=l)}},"toggleChooseAll"),d=g(null);return()=>G("div",{ref:e.listBoxEl,id:`${e.field.value.name}-listbox`,role:"listbox","aria-labelledby":`${e.field.value.name}_label`,tabindex:0,...u.value,onKeydown:X(i=>{var h,l,r;if(d.value&&clearTimeout(d.value),d.value=setTimeout(()=>e.clearSearchQuery(),350),i.ctrlKey&&i.key==="a"&&(y(),i.preventDefault()),i.key==="Escape"){e.focusOption.value=0,e.show.value=!1,e.searchEl.value?(h=e.searchEl.value)==null||h.focus():(l=e.selectButtonEl.value)==null||l.focus({preventScroll:!0});return}const f=e.onChangeActiveIndex(i);if(i.preventDefault(),f!==e.focusOption.value){e.focusOption.value=f;const m=e.field.value.keyValue,b=e.filteredOptions.value[f],U=e.optionsEl.value.find(q=>{let V=b;return typeof b=="object"&&m&&(V=b[m]),q.key==V});U&&((r=U.el)==null||r.focus())}i.shiftKey||(e.indexShiftFrom.value=f),i.shiftKey&&(i.key==="ArrowDown"||i.key==="ArrowUp")&&(e.indexShiftTo.value=e.focusOption.value,e.chooseItemsOfRange({range:{from:e.indexShiftFrom.value,to:e.indexShiftTo.value}}))},["stop"]),onKeyup:i=>{i.key==="Shift"&&(e.pressShift.value=!1,e.indexShiftFrom.value=0,e.indexShiftTo.value=0)},onFocus:()=>{}},c.default?c.default({groups:e==null?void 0:e.groups.value,options:e==null?void 0:e.filteredOptions.value}):[])}}),Ce=$({name:"LMultiSelectGroup",props:{group:{type:[String,Number],default:"default",required:!0}},setup(o,{slots:c,emit:e}){const u=J(R);if(!u)return;const y=te(),d=x(()=>u.groups.value[o.group]),i=x(()=>{const h=u.field.value.keyFilter?u.filteredOptions.value:u.field.value.items;return u.groupkey?h.filter(l=>l[u.groupkey]===o.group):h}),f=x(()=>d.value.selected===d.value.length);return()=>G("div",{id:`${u==null?void 0:u.id}-group-${y}`,role:"group","aria-disabled":!1,onClick:X(()=>{u.onChooseGroup(d.value)},["stop"])},c.default?c.default({groupId:y,options:i.value,groupSelectedOption:d.value.selected,groupLength:d.value.length,groupSelect:f.value}):[])}}),Ie=$({name:"LMultiSelectOption",props:{value:{type:[String,Number,Object],default:""}},setup(o,{slots:c}){const e=J(R),u=g(null),y=x(()=>e.field.value.keyValue?o.value[e.field.value.keyValue]:o.value);ae(()=>{e.optionsEl.value.push({key:y.value,el:u.value})});const d=te(),i=x(()=>e.optionsEl.value.findIndex(l=>l.key==y.value));me(()=>{e==null||e.optionsEl.value.splice(i.value,1)});const f=x(()=>e.model.value.includes(e.field.value.keyValue?o.value[e.field.value.keyValue]:o.value)),h=x(()=>{const l=e.field.value.keyValue,r=e.filteredOptions.value[e.focusOption.value];let m=!1;return r&&(m=(l?o.value[l]:o.value)==(l?r[l]:r)),m});return()=>G("div",{ref:u,id:`${e.id}-option-${d}`,role:"option","aria-disabled":!1,tabindex:-1,"aria-selected":f.value===!0?f.value:void 0,onFocus:()=>{},onKeydown:l=>{var r,m;l.key==="Enter"&&(e.onChooseOption(o.value),e.field.value.multiple||(e.show.value=!1,e.searchEl.value?(r=e.searchEl.value)==null||r.focus():(m=e.selectButtonEl.value)==null||m.focus({preventScroll:!0}),l.preventDefault()))},onMouseenter:l=>{e.focusOption.value=i.value,l.shiftKey?e.indexShiftTo.value=e.focusOption.value-1:e.indexShiftFrom.value=e.focusOption.value},onMouseleave:l=>{e.focusOption.value=null,l.shiftKey||(e.indexShiftFrom.value=0)},onClick:X(l=>{l.shiftKey?e.chooseItemsOfRange({range:{from:e.indexShiftFrom.value,to:e.indexShiftTo.value}}):(e==null||e.onChooseOption(o.value),e.field.value.multiple||(e.selectButtonEl.value.focus({preventScroll:!0}),e.show.value=!1,l.preventDefault()),N(()=>{var r;e!=null&&e.searchEl.value&&((r=e==null?void 0:e.searchEl.value)==null||r.focus(),l.preventDefault())}))},["stop"])},c.default?c.default({optionId:d,selected:f.value,hovered:h.value,focused:e==null?void 0:e.focusOption.value}):[])}}),$e={class:"flex-auto flex flex-wrap m-1"},Me={class:"m-0.5 rounded-md py-1 leading-5 bg-s-200 dark:bg-s-600 flex items-center"},Be={class:"block flex-auto px-1"},Te={key:1,class:"p-1 text-s-500 dark:text-s-400"},Ae={class:"py-2 pr-2"},De={class:"absolute right-8 top-0 h-full flex items-center"},je={key:0,class:"p-2"},qe={class:"shadow-inner max-h-64 b-scroll overflow-y-auto"},Ke={key:0,class:"flex p-2 font-bold cursor-pointer bg-s-100 dark:bg-s-900"},Ne={class:j(["flex items-center border rounded-md h-6 w-6 mr-2 border-s-200 dark:border-s-700 text-xl text-p-500"])},Ge=$({name:"FMultiSelect",inheritAttrs:!1}),Re=$({...Ge,props:{modelValue:null,error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input","on-load-items","on-choose","on-choose-group"],setup(o,{emit:c}){const e=o,u=x({get(){return e.modelValue},set(l){c("update:modelValue",l)}}),y=x(()=>{let l=!0;switch(typeof u.value){case"string":l=u.value=="";break;case"number":l=u.value==0;break;default:Array.isArray(u.value)&&(l=u.value.length==0);break}return l}),d=g(null),i=O(()=>{var r;const l=(r=d.value)==null?void 0:r.$el;l&&l.click()},"onSetFocus"),f=O(async()=>{let l=0;switch(typeof u.value){case"string":l="";break;default:l=[];break}u.value=l,await c("on-input"),await i()},"onReset"),h=g(!1);return(l,r)=>{const m=ye("ripple");return w(),T(W,null,[A(l.$slots,"label",{id:o.field.id,required:o.required,onSetFocus:i}),F("div",{class:j(["flex items-center",["rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1  bg-white dark:bg-s-900",{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500":o.error},(h.value,""),{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500  hover:ring-p-500 hover:border-p-500":!o.error}]])},[A(l.$slots,"before"),ee(k(Se),be(l.$attrs,{modelValue:k(u),"onUpdate:modelValue":r[0]||(r[0]=b=>ge(u)?u.value=b:null),showList:h.value,"onUpdate:showList":r[1]||(r[1]=b=>h.value=b),field:o.field,error:o.error,class:"relative flex-auto",onOnLoadItems:r[2]||(r[2]=b=>l.$emit("on-load-items",b)),onOnInput:r[3]||(r[3]=b=>l.$emit("on-input",b)),onOnChoose:r[4]||(r[4]=b=>l.$emit("on-choose",b)),onOnChooseGroup:r[5]||(r[5]=b=>l.$emit("on-choose-group",b))}),{default:C(({show:b,loading:U,selectedOptions:q})=>[ee(k(Ve),{ref_key:"inputElement",ref:d,class:j(["outline-none flex space-x-2 items-center w-full transition"])},{default:C(()=>[F("div",$e,[(w(!0),T(W,null,le(q,V=>(w(),I(k(Ee),{key:V.name},{default:C(({removeOption:L})=>[A(l.$slots,"selected-item",{option:V,removeOption:L},()=>[F("div",Me,[F("span",Be,D(o.field.keyLabel?V[o.field.keyLabel]:V),1)])])]),_:2},1024))),128)),o.field.keyFilter&&(!q.length&&!o.field.multiple||o.field.multiple)?(w(),I(k(Le),{key:0,class:"px-2 py-1 cursor-text outline-none bg-transparent placeholder-s-400"})):K("",!0),!o.field.keyFilter&&!q.length?(w(),T("div",Te,D(o.field.placeholder),1)):K("",!0)]),F("div",Ae,[U?(w(),I(k(xe),{key:0})):(w(),I(k(Y),{key:1,class:j(["transition-transform",{"rotate-180":b}])},{default:C(()=>[H(D(k(we)),1)]),_:2},1032,["class"]))])]),_:2},1536),F("div",De,[A(l.$slots,"after",{onReset:f,empty:k(y)})]),F("div",{class:j(["z-10 mt-1.5 transition shadow-2xl outline-none border border-s-200 dark:border-s-700 rounded-md absolute top-full left-0 right-0 bg-white dark:bg-s-800",[b?"block":"hidden",(o.error,""),{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500":o.error},(h.value,""),{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500":!o.error}]])},[o.error?(w(),T("div",je,[A(l.$slots,"error",{error:o.error})])):K("",!0),F("div",qe,[ee(k(Fe),null,{default:C(({groups:V})=>[(w(!0),T(W,null,le(V,L=>(w(),I(k(Ce),{key:L.key,group:L.key},{default:C(({options:z,groupSelectedOption:M,groupLength:Q})=>[L.key!=="default"?(w(),T("div",Ke,[F("div",Ne,[M==Q?(w(),I(k(Y),{key:0},{default:C(()=>[H(D(k(oe)),1)]),_:1})):K("",!0),M<Q&&M!=0?(w(),I(k(Y),{key:1},{default:C(()=>[H(D(k(Oe)),1)]),_:1})):K("",!0)]),H(" "+D(L.key),1)])):K("",!0),(w(!0),T(W,null,le(z,B=>(w(),I(k(Ie),{key:o.field.keyValue?B[o.field.keyValue]:B,value:B,class:"group relative overflow-hidden focus:outline-none cursor-pointer"},{default:C(({selected:S,hovered:P})=>[A(l.$slots,"option",{option:B,selected:S,hovered:P},()=>[ke((w(),T("div",{class:j(["flex p-2 items-center cursor-pointer focus:outline-none",P?"bg-p-200 dark:bg-p-800 text-black dark:text-white group-focus:bg-p-200 group-hover:bg-p-200 dark:group-hover:bg-p-800 dark:group-focus:bg-p-800":"bg-transparent text-black dark:text-white group-focus:bg-p-100 group-hover:bg-p-100 dark:group-hover:bg-p-900 dark:group-focus:bg-p-900"])},[F("div",{class:j(["flex items-center border rounded-md h-6 w-6 mr-2",S||P?"border-transparent":"border-s-200 dark:border-s-700"])},[S?(w(),I(k(Y),{key:0,class:j(["text-xl",{"text-p-500 dark:text-p-500":S}])},{default:C(()=>[H(D(k(oe)),1)]),_:2},1032,["class"])):K("",!0)],2),H(D(o.field.keyLabel?B[o.field.keyLabel]:B),1)],2)),[[m,{}]])])]),_:2},1032,["value"]))),128))]),_:2},1032,["group"]))),128))]),_:3})])],2)]),_:3},16,["modelValue","showList","field","error"])],2),A(l.$slots,"error",{error:o.error}),A(l.$slots,"description")],64)}}});Re.__docgenInfo={exportName:"default",displayName:"FMultiSelect",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model string",required:!0,type:{name:"ISelectModel"}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"on-load-items"},{name:"on-input"},{name:"on-choose"},{name:"on-choose-group"},{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"before"},{name:"selected-item",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"removeOption",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"on-reset",title:"binding"},{name:"empty",title:"binding"}]},{name:"error",scoped:!0,bindings:[{name:"error",title:"binding"}]},{name:"option",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"selected",title:"binding"},{name:"hovered",title:"binding"}]},{name:"description"}]};export{Re as _};
//# sourceMappingURL=FMultiSelect.f13b4e17.js.map