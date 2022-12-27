var w=Object.defineProperty;var b=(e,l)=>w(e,"name",{value:l,configurable:!0});import{d as f,v as p,f as g,h as c,G as L,r as h,j as F,k as T,n as $,F as x,o as q,x as S,i as m,b as B,B as C,e as k,g as O,y as I,m as j,u as V,z as E,A as _}from"./vue.esm-bundler.4710087e.js";const A=f({name:"LInputText",props:{modelValue:{type:[String,Number],required:!0,default:""},field:{type:Object,required:!0,default:()=>({})},error:{type:String,default:""}},setup(e,{emit:l}){const u=p("autofocus"),a=e.field.id||e.field.name;return()=>g(c("input",{value:e.modelValue,id:a,name:a,type:"text",placeholder:e.field.placeholder,"aria-labelledby":`${e.field.name}_label`,"aria-describedby":e.field.description?`${a}_help`:void 0,"aria-invalid":!!e.error,onInput:n=>{const r=n.target;l("update:modelValue",r.value)}}),[[u,{status:e.field.autofocus}]])}}),H=f({name:"LInputNumber",props:{modelValue:{type:[Number,String],required:!0,default:0},field:{type:Object,required:!0,default:()=>({})},error:{type:String,default:""},max:{type:Number,default:0},min:{type:Number,default:0}},setup(e,{emit:l}){const u=p("autofocus"),a=e.field.id||e.field.name;return L(()=>{l("update:modelValue",+e.modelValue),e.modelValue>e.max&&e.max!=0&&l("update:modelValue",e.max),e.modelValue<e.min&&e.min!=0&&l("update:modelValue",e.min)},{flush:"post"}),()=>g(c("input",{value:e.modelValue,id:a,name:a,type:"number",min:e.min||void 0,max:e.max||void 0,placeholder:e.field.placeholder,"aria-labelledby":`${a}_label`,"aria-describedby":e.field.description?`${a}_help`:void 0,"aria-invalid":!!e.error,onInput:n=>{const r=n.target;l("update:modelValue",r.value)}}),[[u,{status:e.field.autofocus}]])}}),M=f({name:"LInputTextarea",props:{modelValue:{type:String,required:!0,default:""},field:{type:Object,required:!0},error:{type:String,default:""}},setup(e,{emit:l,expose:u}){const a=p("autofocus"),n=e.field.id||e.field.name,r=h(null),o=b(()=>{if(r.value){const d=window.getComputedStyle(r.value,null),{borderTopWidth:t,borderBottomWidth:i}=d;r.value.style.height="auto",r.value.style.height=r.value.scrollHeight+parseInt(t)+parseInt(i)+"px"}},"onResize");return F(()=>e.modelValue,()=>{$(()=>o())}),T(()=>{$(()=>{o()})}),u({focus:()=>{var d;return(d=r.value)==null?void 0:d.focus()}}),()=>g(c("textarea",{ref:r,value:e.modelValue,id:n,name:n,autocomplete:"off",placeholder:e.field.placeholder,"aria-labelledby":`${n}_label`,"aria-describedby":e.field.description?`${n}_help`:void 0,"aria-invalid":!!e.error,onInput:d=>{const t=d.target;l("update:modelValue",t.value)}}),[[a,{status:e.field.autofocus}]])}}),P=f({name:"LInputCheckbox",props:{modelValue:{type:Boolean,required:!0,default:!1},field:{type:Object,required:!0},error:{type:String,default:""}},inheritAttrs:!1,expose:["focus"],setup(e,{attrs:l,slots:u,emit:a,expose:n}){const r=p("autofocus"),o=e.field.id||e.field.name,d=h(null);return n({focus:()=>{var t;return(t=d.value)==null?void 0:t.focus()}}),()=>c(x,{},[g(c("input",{...l,ref:d,value:e.modelValue,id:o,name:o,type:"checkbox","aria-labelledby":`${o}_label`,"aria-describedby":e.field.description?`${o}_help`:void 0,"aria-invalid":!!e.error,onInput:t=>{const i=t.target;a("update:modelValue",i.checked)}}),[[r,{status:e.field.autofocus}]]),u.default?u.default():null])}}),U=f({name:"LInputCheckboxGroup",props:{modelValue:{type:Array,required:!0,default:()=>[]},field:{type:Object,required:!0},error:{type:String,default:""}},inheritAttrs:!1,expose:["focus"],setup(e,{attrs:l,slots:u,emit:a,expose:n}){const r=p("autofocus"),{id:o,name:d}=e.field,t=b((s,v)=>{const y=[...e.modelValue];v?y.push(s):y.splice(y.indexOf(s),1),a("update:modelValue",y)},"check"),i=h(null);return n({focus:()=>{var s;return(s=i.value)==null?void 0:s.focus()}}),()=>c(x,{},[g(c("input",{...l,ref:i,value:e.field.value,id:o,name:d,type:"checkbox",checked:e.modelValue.indexOf(e.field.value)!=-1,"aria-labelledby":`${o}_label`,"aria-describedby":e.field.description?`${o}_help`:void 0,"aria-invalid":!!e.error,onInput:s=>{const v=s.target;t(e.field.value,v.checked)}}),[[r,{status:e.field.autofocus}]]),u.default?u.default():null])}}),R={role:"alert",class:"mt-2 text-sm leading-none text-d-600 dark:text-d-400"},N=f({__name:"FError",props:{error:{type:String,default:""}},setup(e){return(l,u)=>(q(),S("div",R,[m(l.$slots,"default",{},()=>[B(C(e.error),1)])]))}});N.__docgenInfo={exportName:"default",displayName:"FError",description:"",tags:{},props:[{name:"error",description:"String error for field.",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],slots:[{name:"default"}]};const z=f({name:"FText",inheritAttrs:!1}),D=f({...z,props:{modelValue:{default:""},error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input"],setup(e,{emit:l}){const u=e,a=k({get:()=>u.modelValue,set:t=>{l("update:modelValue",t)}}),n=h(null),r=b(()=>{var i;const t=(i=n.value)==null?void 0:i.$el;t&&t.focus()},"onSetFocus"),o=k(()=>a.value==""),d=b(()=>{a.value="",l("on-input"),r()},"onReset");return(t,i)=>(q(),S(x,null,[m(t.$slots,"label",{id:e.field.id,required:e.required,onSetFocus:r}),O("div",{class:_(["flex items-center",["rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1 bg-white dark:bg-s-900",{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500":e.error},{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500 hover:ring-p-500 hover:border-p-500":!e.error}]])},[m(t.$slots,"before",{onReset:d}),I(V(A),j(t.$attrs,{ref_key:"inputElement",ref:n,modelValue:V(a),"onUpdate:modelValue":i[0]||(i[0]=s=>E(a)?a.value=s:null),field:e.field,error:e.error,class:"flex-auto outline-none px-4 py-2 bg-transparent placeholder-s-500 dark:placeholder-s-400",onInput:i[1]||(i[1]=s=>t.$emit("on-input"))}),null,16,["modelValue","field","error"]),m(t.$slots,"after",{onReset:d,empty:V(o)})],2),m(t.$slots,"error",{},()=>[I(N,{error:e.error},null,8,["error"])]),m(t.$slots,"description")],64))}});D.__docgenInfo={exportName:"default",displayName:"FText",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model string",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"on-input"},{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"before",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"onReset",title:"binding"},{name:"empty",title:"binding"}]},{name:"error"},{name:"description"}]};export{M as L,N as _,D as a,P as b,H as c,A as d,U as e};
//# sourceMappingURL=FText.a26618ee.js.map