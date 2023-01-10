var fe=Object.defineProperty;var y=(o,v)=>fe(o,"name",{value:v,configurable:!0});import{d as A,b as L,a as c,v as ne,l as ie,n as V,h as P,x as N,p as ce,t as ve,q as G,o as O,y as S,f as E,j as $,z as Y,w as B,m as pe,u as m,A as be,B as F,C as Z,F as M,e as H,D as T,E as te,k as _,i as le,G as me}from"./vue.esm-bundler.780544ed.js";import{u as he}from"./useId.06feead9.js";import{i as ye,a as Oe}from"./useIcon.fe9488f3.js";import{L as xe}from"./LSpinner.c2fd7dc3.js";import{L as ae}from"./LIcon.15f4bd65.js";import{r as ge}from"./ripple.4234d591.js";const ke=y(o=>o.length===1&&o.match(/\S| /),"isPrintableCharacter"),K=Symbol("ComboboxContext"),we=A({props:{modelValue:{type:[Array,String,Number],default:()=>[]},field:{type:Object,required:!0,default:()=>({})},error:{type:String,default:""},showList:{type:Boolean,default:!1}},emits:["update:showList","update:modelValue","onLoadItems","onInput","onChoose"],setup(o,{slots:v,emit:e}){const x=L(()=>{var i;return((i=o.field)==null?void 0:i.autocomplete)||"none"}),a=c(!1),b=c(!1),l=c(!1),t=c(o.field),I=c(-1),p=L(()=>W.value.length>0),s=c(null),r=c(!1),f=c(!1),g=c(!1),J=L(()=>{var i;return((i=t.value)==null?void 0:i.disabled)||g.value||!1}),D=c(!1),j=c(!1),C=c(null),R=c(null),Q=c([]),se=L({get(){return o.field.multiple&&Array.isArray(o.modelValue)?[...o.modelValue]:[o.modelValue]},set(i){const d=t.value.multiple?i:i[0];e("update:modelValue",d),e("onInput",d)}}),U=c(""),ue=c(""),W=c([]),X=y(i=>{console.time("onFilterOptions"),typeof i!="boolean"&&(i=!1);const d=U.value.toLowerCase();let u=[];const k=t.value.keyFilter,w=t.value.items||[];return(a.value||U.value.length===0)&&!i?u=w:k?u=w.filter(h=>typeof h=="object"?h[k].toLowerCase().indexOf(d)===0:!1).sort((h,z)=>n.model.value.indexOf(h[k])-n.model.value.indexOf(z[k])):u=w.filter(h=>typeof h=="string"?h.toLowerCase().indexOf(d)===0:""),W.value=u,console.timeEnd("onFilterOptions"),u},"onFilterOptions");if(ne(()=>o.field.items,()=>{X()}),t.value.autocomplete)if(typeof t.value.autocomplete=="string"){const i=t.value.autocomplete.toLowerCase();a.value=i==="none",b.value=i==="list",l.value=i==="both"}else a.value=!0;const re=y(()=>{r.value=!0,setTimeout(()=>{oe()},10),V(()=>{var i;n.isNone.value||(i=C.value)==null||i.setSelectionRange(0,n.filter.value.length)})},"open"),q=y((i,d)=>{var k,w;if(typeof d!="boolean"&&(d=!1),!i)return;const u=i.target;(d||!((k=n.listboxNode.value)!=null&&k.contains(u))&&n.comboboxNode.value!=u)&&(ee(),r.value=!1,(w=C.value)==null||w.focus(),n.focusOption.value=-1,t.value.multiple||V(()=>{var h;n.isNone.value||(h=C.value)==null||h.setSelectionRange(n.filter.value.length,n.filter.value.length)}))},"close"),ee=y(()=>{document&&(document.removeEventListener("click",q),document.removeEventListener("keyup",q))},"unRegisterOverlay"),oe=y(()=>{document&&(document.addEventListener("click",q),document.addEventListener("keyup",q))},"registerOverlay"),n={autocomplete:x,isNone:a,isBoth:l,isList:b,field:t,comboboxNode:C,listboxNode:R,focusOption:I,hasOptions:p,filter:U,filterText:ue,option:s,allOptions:Q,filteredOptions:W,model:se,comboboxHasVisualFocus:D,listboxHasVisualFocus:j,hasHover:f,isOpen:r,isBusy:g,isDisabled:J,open:re,close:q,registerOverlay:oe,unRegisterOverlay:ee,onChangeActiveIndex:y((i,d)=>{let u=n.focusOption.value||0;return d||d===0?u=d:(i.key==="ArrowDown"?u++:i.key==="ArrowUp"&&u--,u>n.allOptions.value.length-1&&(u=n.allOptions.value.length-1),u<0&&(u=0)),n.focusOption.value=u,u},"onChangeActiveIndex"),onSetFocusOption:y(()=>{const i=n.field.value.keyValue;V(()=>{var k;const d=n.filteredOptions.value[n.focusOption.value];if(!d)return;const u=n.allOptions.value.find(w=>w.index===(i&&typeof d=="object"?d[i]:d));u!=null&&u.el&&((k=u.el)==null||k.focus())})},"onSetFocusOption"),onChooseOption:y((i,d)=>{typeof d!="boolean"&&(d=!1);const u=n.field.value.keyValue&&typeof i=="object"?i[n.field.value.keyValue]:i;e("onChoose",u);const k=n.model.value.findIndex(h=>h===u);let w=[...n.model.value];n.field.value.multiple?(k!==-1?w.splice(k,1):w.push(u),n.filter.value=`${u}`):(w=[u],n.filter.value=`${u}`),a.value||V(()=>{var h,z;d?(h=n.comboboxNode.value)==null||h.setSelectionRange(0,n.filter.value.length):(z=n.comboboxNode.value)==null||z.setSelectionRange(n.filterText.value.length,n.filter.value.length)})},"onChooseOption"),onFilterOptions:X,onSetValue:y(()=>{if(t.value.multiple){const i=[...n.model.value],d=n.model.value.findIndex(u=>u==n.filter.value);d!=-1?i.splice(d,1):i.push(n.filter.value),n.model.value=i,U.value=""}else n.model.value=[n.filter.value];n.onFilterOptions(),console.groupEnd()},"onSetValue")},de=y(async()=>{g.value=!0,await e("onLoadItems"),g.value=!1},"loadData");return ie(async()=>{await de(),V(()=>{var i;t.value.autofocus&&((i=n.comboboxNode.value)==null||i.focus())}),await X()}),ve(K,n),()=>P("div",null,{default:()=>v.default?v.default({isNone:a.value,isOpen:r.value,isBusy:g.value}):[]})}}),Ce=A({name:"LComboboxInput",setup(o,{slots:v}){const e=G(K);if(!e){console.info("LComboboxInput must be nested to LCombobox component");return}const x=c(null),a=y(()=>{e.filterText.value=e.filter.value,e.isBusy.value=!1,e.focusOption.value=-1,!e.isOpen.value&&e.open(),e.onFilterOptions(),V(()=>{if(e.isBoth.value){const l=e.filteredOptions.value[0];l&&e.filterText.value.length&&e.onChooseOption(l)}})},"onSearch");ne(()=>e.model.value,l=>{var t;e.isBoth.value&&!((t=e.field.value)!=null&&t.multiple)&&(e.filter.value=`${l[0]}`)});const b=L(()=>{var t;const l={};return e.allOptions.value[e.focusOption.value]&&(l["aria-activedescendant"]=`${(t=e.allOptions.value[e.focusOption.value])==null?void 0:t.key}`),l});return()=>P("input",{ref:e.comboboxNode,id:e.field.value.id,value:e.filter.value,type:"text",name:e.field.value.id,role:"combobox",tabindex:0,placeholder:e.field.value.placeholder,"aria-autocomplete":e.autocomplete.value,"aria-expanded":e.isOpen.value,"aria-controls":`${e.field.value.name}-listbox`,...b.value,onInput:l=>{const t=l.target;x.value&&clearTimeout(x.value),e.isBusy.value=!0,e.filter.value=t.value,x.value=setTimeout(()=>a(),500)},onClick:N(l=>{e.isOpen.value?e.close(l,!0):e.open()},["stop"]),onKeydown:N(l=>{var p,s,r;let t=!1;const I=l.altKey;switch(l.key){case"Enter":if(e.isOpen.value&&e.focusOption.value!=-1){const f=e.filteredOptions.value[e.focusOption.value];f&&(e.onChooseOption(f,!0),e.onSetValue()),e.field.value.multiple||(e.close(l,!0),e.onFilterOptions(!0))}e.filterText.value="",t=!0;break;case"ArrowDown":case"Down":if(e.hasOptions)if(I)!e.isOpen.value&&e.open();else{!e.isOpen.value&&e.open(),e.onChangeActiveIndex(l);const f=e.filteredOptions.value[e.focusOption.value];f&&e.isBoth.value&&e.onChooseOption(f,!0),e.onSetFocusOption(),V(()=>{var g;(g=e.comboboxNode.value)==null||g.focus(),e.filterText.value=""})}t=!0;break;case"Up":case"ArrowUp":if(e.hasOptions)if(I)e.open();else{e.isOpen.value?e.onChangeActiveIndex(l):(e.open(),e.onChangeActiveIndex(l,e.filteredOptions.value.length-1)),e.onSetFocusOption();const f=e.filteredOptions.value[e.focusOption.value];f&&e.isBoth.value&&e.onChooseOption(f),V(()=>{var g;(g=e.comboboxNode.value)==null||g.focus(),e.filterText.value=""})}t=!0;break;case"Esc":case"Escape":e.isOpen.value?(e.close(l,!0),(p=e.comboboxNode.value)==null||p.setSelectionRange(e.filter.value.length,e.filter.value.length)):(e.model.value=[],e.filter.value="",e.filterText.value=""),e.onFilterOptions(!0),t=!0;break;case"Tab":e.close(l,!0);break;case"Home":(s=e.comboboxNode.value)==null||s.setSelectionRange(0,0),t=!0;break;case"End":(r=e.comboboxNode.value)==null||r.setSelectionRange(e.filter.value.length,e.filter.value.length),t=!0;break}t&&(l.stopPropagation(),l.preventDefault())},[]),onKeyup:N(l=>{let t=!1;const I=l.key;if(!(l.key==="Escape"||l.key==="Esc")){switch(l.key){case"Backspace":e.onFilterOptions(),t=!0;break;case"Left":case"ArrowLeft":case"Right":case"ArrowRight":case"Home":case"End":e.isBoth.value;break;default:ke(I)&&(t=!0);break}t&&(l.stopPropagation(),l.preventDefault())}},[]),onFocus:()=>{},onBlur:()=>{}},v.default?v.default({}):[])}}),Ve=A({name:"LComboboxButton",setup(o,{slots:v}){const e=G(K);if(!e){console.info("LComboboxButton must be nested to LCombobox component");return}return()=>{var x;return P("div",{ref:e.comboboxNode,id:e.field.value.id,name:e.field.value.id,role:"combobox",tabindex:0,"aria-labelledby":`${e.field.value.id}_label`,"aria-expanded":e.isOpen.value,"aria-controls":`${e.field.value.name}-listbox`,"aria-activedescendant":`${((x=e.allOptions.value[e.focusOption.value])==null?void 0:x.key)||""}`,onClick:N(a=>{e.isOpen.value?e.close(a,!0):e.open()},[]),onKeydown:N(a=>{let b=!1;const l=a.altKey;switch(a.key){case"Enter":if(e.isOpen.value&&e.focusOption.value!=-1){const t=e.filteredOptions.value[e.focusOption.value];t&&(e.onChooseOption(t,!0),e.onSetValue()),e.field.value.multiple||e.close(a,!0)}b=!0;break;case"ArrowDown":case"Down":e.hasOptions&&(l?!e.isOpen.value&&e.open():(e.isOpen.value?e.onChangeActiveIndex(a):(e.open(),e.focusOption.value<=0&&(e.focusOption.value=0),e.onChangeActiveIndex(a,e.focusOption.value)),e.onSetFocusOption(),V(()=>{var t;(t=e.comboboxNode.value)==null||t.focus()}))),b=!0;break;case"Up":case"ArrowUp":e.hasOptions&&(l?e.open():(e.isOpen.value?e.onChangeActiveIndex(a):(e.open(),e.focusOption.value<=0&&(e.focusOption.value=e.filteredOptions.value.length-1),e.onChangeActiveIndex(a,e.focusOption.value)),e.onSetFocusOption(),V(()=>{var t;(t=e.comboboxNode.value)==null||t.focus(),e.filterText.value=""}))),b=!0;break;case"Esc":case"Escape":e.isOpen.value?e.close(a,!0):(e.model.value=[],e.filter.value="",e.filterText.value=""),b=!0;break;case"Tab":e.close(a,!0);break;case"Home":b=!0;break;case"End":b=!0;break}b&&(a.stopPropagation(),a.preventDefault())},[])},v.default?v.default({}):[])}}}),Le=A({name:"LComboboxOptions",props:{as:{type:String,default:"ul"}},setup(o,{slots:v}){const e=G(K);if(!e){console.info("LComboboxOptions must be nested to LCombobox component");return}return()=>P(o.as,{ref:e.listboxNode,id:`${e.field.value.id}-listbox`,role:"listbox","aria-labelledby":`${e.field.value.id}`,onKeydown:N(x=>{},["stop"]),onPointerup:()=>{},onPointerover:()=>{e.hasHover.value=!0},onPointerout:()=>{e.hasHover.value=!1}},v.default?v.default({options:e.filteredOptions.value,hasOptions:e.hasOptions.value}):[])}}),Ie=A({props:{as:{type:String,default:"li"},value:{type:[String,Number,Object],default:""}},name:"LComboboxOption",setup(o,{slots:v}){const e=G(K);if(!e){console.info("LComboboxOption must be nested to LComboboxOptions component");return}const x=c(null),a=he(),b=L(()=>e.field.value.keyValue&&typeof o.value=="object"?o.value[e.field.value.keyValue]:o.value),l=L(()=>e.model.value.includes(e.field.value.keyValue&&typeof o.value=="object"?o.value[e.field.value.keyValue]:o.value)),t=L(()=>{const p=e.field.value.keyValue,s=e.filteredOptions.value[e.focusOption.value];let r=!1;return s&&(r=(p&&typeof o.value=="object"?o.value[p]:o.value)==(p&&typeof s=="object"?s[p]:s)),r});ie(()=>{e.allOptions.value.push({index:b.value,key:`${e.field.value.id}-option-${a}`,el:x.value})});const I=L(()=>e==null?void 0:e.allOptions.value.findIndex(p=>p.key==b.value));return ce(()=>{e==null||e.allOptions.value.splice(I.value,1)}),()=>P(o.as,{ref:x,id:`${e.field.value.id}-option-${a}`,role:"option","aria-disabled":!1,tabindex:-1,"aria-selected":l.value===!0?l.value:void 0,onKeydown:N(p=>{},["stop"]),onPointerup:()=>{},onPointerover:()=>{e.hasHover.value=!0},onPointerout:()=>{e.hasHover.value=!1},onClick:N(p=>{var s;e.onChooseOption(o.value),e.onSetValue(),(s=e.field.value)!=null&&s.multiple||e.close(p,!0),e.isNone||e.onFilterOptions(!0),V(()=>{var r;(r=e.comboboxNode.value)==null||r.focus()})},["stop"])},v.default?v.default({selected:l.value,hovered:t.value}):e.field.value.keyValue&&typeof o.value=="object"?o.value[e.field.value.keyValue]:o.value)}}),Se={class:F(["outline-none flex space-x-2 items-center w-full transition"])},Ne={class:"flex-auto flex flex-wrap m-1"},$e={key:0},Fe={key:1,class:"text-s-400"},Ae={key:0,class:"flex flex-row flex-wrap"},Ee={class:"py-2 pr-2"},Be={class:"absolute right-8 top-0 h-full flex items-center"},Te={class:F(["flex items-center h-6 w-6 mr-2"])},De={key:1,class:"p-2"},je=A({name:"FCombobox",inheritAttrs:!1}),Re=A({...je,props:{modelValue:null,error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","onInput","onLoadItems","onChoose"],setup(o,{emit:v}){const e=o,x=ge,a=L({get(){return e.modelValue},set(s){v("update:modelValue",s)}}),b=L(()=>{let s=!0;switch(typeof a.value){case"string":s=a.value=="";break;case"number":s=a.value==0;break;default:Array.isArray(a.value)&&(s=a.value.length==0);break}return s}),l=c(null),t=y(()=>{var r;const s=(r=l.value)==null?void 0:r.$el;s&&s.focus()},"onSetFocus"),I=y(async()=>{let s=0;switch(typeof a.value){case"string":s="";break;default:s=[];break}a.value=s,await v("onInput"),await t()},"onReset"),p=c(!1);return(s,r)=>(O(),S(M,null,[E(s.$slots,"label",{id:o.field.id,required:o.required,onSetFocus:t}),$("div",{class:F(["flex items-center cursor-pointer",["rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1  bg-white dark:bg-s-900",{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500":o.error},(p.value,""),{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500 hover:ring-p-500 hover:border-p-500":!o.error}]])},[E(s.$slots,"before"),Y(m(we),pe(s.$attrs,{modelValue:m(a),"onUpdate:modelValue":r[0]||(r[0]=f=>be(a)?a.value=f:null),"show-list":p.value,"onUpdate:show-list":r[1]||(r[1]=f=>p.value=f),field:o.field,error:o.error,class:"relative flex-auto",onOnLoadItems:r[2]||(r[2]=f=>s.$emit("onLoadItems")),onOnInput:r[3]||(r[3]=f=>s.$emit("onInput",f)),onOnChoose:r[4]||(r[4]=f=>s.$emit("onChoose",f))}),{default:B(({isOpen:f,isBusy:g,isNone:J})=>[$("div",Se,[$("div",Ne,[J?(O(),H(m(Ve),{key:0,ref_key:"inputElement",ref:l,autocomplete:"off",class:"w-full px-2 py-1 outline-none bg-transparent"},{default:B(()=>[m(a)?(O(),S("div",$e,T(m(a)),1)):(O(),S("div",Fe,T(o.field.placeholder),1))]),_:1},512)):(O(),S(M,{key:1},[typeof m(a)=="object"&&o.field.multiple?(O(),S("div",Ae,[(O(!0),S(M,null,te(m(a),(D,j)=>(O(),S("div",{key:j,class:"px-2 bg-s-300 dark:bg-s-700 rounded-md mr-1 mb-1"},T(D),1))),128))])):Z("",!0),Y(m(Ce),{ref_key:"inputElement",ref:l,autocomplete:"off",class:"w-full px-2 py-1 cursor-text outline-none bg-transparent placeholder-s-400"},null,512)],64))]),$("div",Ee,[g?(O(),H(m(xe),{key:0})):(O(),H(m(ae),{key:1,class:F(["transition-transform",{"rotate-180":f}])},{default:B(()=>[_(T(m(ye)),1)]),_:2},1032,["class"]))]),$("div",Be,[E(s.$slots,"after",{onReset:I,empty:m(b)})])]),le($("div",{class:F(["z-10 mt-1.5 transition overflow-hidden shadow-2xl outline-none border border-s-200 dark:border-s-700 rounded-md absolute top-full left-0 right-0 bg-white dark:bg-s-800",[f?"block":"hidden",(o.error,""),{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500":o.error},(p.value,""),{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500":!o.error}]])},[Y(m(Le),{class:"max-h-64 b-scroll overflow-y-auto"},{default:B(({options:D,hasOptions:j})=>[j?(O(!0),S(M,{key:0},te(D,C=>(O(),H(m(Ie),{key:o.field.keyValue?C[o.field.keyValue]:C,value:C,class:"group relative overflow-hidden"},{default:B(({selected:R,hovered:Q})=>[E(s.$slots,"option",{option:C,selected:R},()=>[le((O(),S("div",{class:F(["flex p-2 items-center cursor-pointer focus:outline-none",Q?"bg-p-200 dark:bg-p-800 text-black dark:text-white group-focus:bg-p-200 group-hover:bg-p-200 dark:group-hover:bg-p-800 dark:group-focus:bg-p-800":"bg-transparent text-black dark:text-white group-focus:bg-p-100 group-hover:bg-p-100 dark:group-hover:bg-p-900 dark:group-focus:bg-p-900"])},[$("div",Te,[R?(O(),H(m(ae),{key:0,class:F(["text-xl",{"text-p-500 dark:text-p-500":R}])},{default:B(()=>[_(T(m(Oe)),1)]),_:2},1032,["class"])):Z("",!0)]),_(" "+T(o.field.keyLabel?C[o.field.keyLabel]:C),1)],2)),[[m(x),{}]])])]),_:2},1032,["value"]))),128)):(O(),S("div",De,"None options"))]),_:3})],2),[[me,f]])]),_:3},16,["modelValue","show-list","field","error"])],2),o.error?E(s.$slots,"error",{key:0,error:o.error}):Z("",!0),E(s.$slots,"description")],64))}});Re.__docgenInfo={exportName:"default",displayName:"FCombobox",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model string",required:!0,type:{name:"TComboboxModel"}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"onLoadItems"},{name:"onInput"},{name:"onChoose"},{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"before"},{name:"after",scoped:!0,bindings:[{name:"on-reset",title:"binding"},{name:"empty",title:"binding"}]},{name:"option",scoped:!0,bindings:[{name:"option",title:"binding"},{name:"selected",title:"binding"}]},{name:"error",scoped:!0,bindings:[{name:"error",title:"binding"}]},{name:"description"}]};export{Re as _};
//# sourceMappingURL=FCombobox.2a76966d.js.map
