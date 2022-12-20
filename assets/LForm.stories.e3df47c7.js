var D=Object.defineProperty;var s=(n,u)=>D(n,"name",{value:u,configurable:!0});import{d as c,a as F,r as y,k as b,l as h,m as o,q as g,t as f,v,x as d,y as L,z as A,F as T,u as x,A as S,E as _,D as $,o as Z}from"./vue.esm-bundler.d6e8a8ce.js";import{b as V,c as N,L as M,a as R}from"./LForm.f2b6a216.js";import{L as Y,_ as k,b as z,c as j,a as G}from"./FText.23a6b47a.js";import{L as I}from"./LIcon.b157f1df.js";import{_ as O}from"./FMultiSelect.fd937d66.js";import{_ as U}from"./FCombobox.0e06f52d.js";import{L as K}from"./LBtn.ba5088c0.js";import{L as H}from"./LSpinner.c9659ed3.js";import{u as P}from"./useValidate.3ccd11a8.js";import"./useIcon.1f824c76.js";import"./iframe.10fce278.js";const J=c({name:"FTextarea",inheritAttrs:!1}),q=c({...J,props:{modelValue:{default:""},error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input"],setup(n,{emit:u}){const p=n,r=F({get:()=>p.modelValue,set:e=>{u("update:modelValue",e)}}),a=y(null),i=s(()=>{var t;const e=(t=a.value)==null?void 0:t.$el;e&&(e==null?void 0:e.input)&&(e==null||e.input.focus())},"onSetFocus"),l=s(()=>{r.value="",u("on-input"),i()},"onReset");return(e,t)=>(b(),h(T,null,[o(e.$slots,"label",{id:n.field.id,required:n.required,onSetFocus:i}),g("div",{class:A(["flex items-center",["rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 placeholder-s-400 dark:placeholder-s-400 bg-white dark:bg-s-900",{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500":n.error},{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500 hover:ring-p-500 hover:border-p-500":!n.error}]])},[o(e.$slots,"before",{onReset:l}),f(d(Y),v(e.$attrs,{ref_key:"inputElement",ref:a,modelValue:d(r),"onUpdate:modelValue":t[0]||(t[0]=m=>L(r)?r.value=m:null),field:n.field,error:n.error,class:"flex-auto outline-none px-4 py-2 bg-transparent",onInput:t[1]||(t[1]=m=>u("on-input"))}),null,16,["modelValue","field","error"]),o(e.$slots,"after",{onReset:l})],2),o(e.$slots,"error",{},()=>[f(k,{error:n.error},null,8,["error"])]),o(e.$slots,"description")],64))}});q.__docgenInfo={exportName:"default",displayName:"FTextarea",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model string",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue"},{name:"on-input"}],slots:[{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"before",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"error"},{name:"description"}]};const Q={class:"relative flex items-start"},W={class:"flex items-center"},X=c({name:"FCheckbox",inheritAttrs:!1}),w=c({...X,props:{modelValue:{type:Boolean,default:!1},error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input"],setup(n,{emit:u}){const p=n,r=F({get:()=>p.modelValue,set:e=>{u("update:modelValue",e)}}),a=y(null),i=s(()=>{var t;const e=(t=a.value)==null?void 0:t.$el;e&&(e==null?void 0:e.input)&&(e==null||e.input.focus())},"onSetFocus"),l=s(()=>{r.value=!1,u("on-input"),i()},"onReset");return(e,t)=>(b(),h("div",Q,[o(e.$slots,"before",{onReset:l}),g("div",W,[f(d(z),v(e.$attrs,{ref_key:"inputElement",ref:a,modelValue:d(r),"onUpdate:modelValue":t[0]||(t[0]=m=>L(r)?r.value=m:null),field:n.field,error:n.error,checked:!!d(r),class:["mr-2 h-5 w-5 appearance-none outline-none group focus:ring-2 focus:ring-offset-2 border rounded-md focus:ring-offset-white dark:focus:ring-offset-s-800 checked:bg-p-500",[{"border-d-500 dark:border-d-500 focus:ring-d-500 focus:border-d-500 hover:ring-d-500":n.error},{"border-s-200 dark:border-s-600 focus:ring-p-500 focus:border-p-500 hover:ring-p-500 hover:border-p-500":!n.error}]],onChange:t[1]||(t[1]=m=>e.$emit("on-input"))}),{default:x(()=>[d(r)?(b(),S(d(I),{key:0,class:"bg-transparent absolute top-0 left-0 text-white text-xl"},{default:x(()=>[_(" M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z ")]),_:1})):$("",!0)]),_:1},16,["modelValue","field","error","checked","class"])]),g("div",null,[o(e.$slots,"label",{id:n.field.id,required:n.required,onSetFocus:i}),o(e.$slots,"after",{onReset:l}),o(e.$slots,"error"),o(e.$slots,"description")])]))}});w.__docgenInfo={exportName:"default",displayName:"FCheckbox",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model boolean",required:!0,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"on-input"},{name:"update:modelValue"}],slots:[{name:"before",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"error"},{name:"description"}]};const ee=c({name:"FNumber",inheritAttrs:!1}),B=c({...ee,props:{modelValue:{default:0},error:null,field:null,required:{type:Boolean}},emits:["update:modelValue","on-input"],setup(n,{emit:u}){const p=n,r=F({get:()=>p.modelValue,set:e=>{u("update:modelValue",+e)}}),a=y(null),i=s(()=>{var t;const e=(t=a.value)==null?void 0:t.$el;e&&e.focus()},"onSetFocus"),l=s(()=>{r.value=0,u("on-input"),i()},"onReset");return(e,t)=>(b(),h(T,null,[o(e.$slots,"label",{id:n.field.id,required:n.required,onSetFocus:i}),g("div",{class:A(["flex items-center",["rounded-md border text-base transition w-full appearance-none outline-none focus-within:ring-1 hover:ring-1 bg-white dark:bg-s-900",{"border-d-500 dark:border-d-500 focus-within:ring-d-500 focus-within:border-d-500 hover:ring-d-500":n.error},{"border-s-200 dark:border-s-600 focus-within:ring-p-500 focus-within:border-p-500 hover:ring-p-500 hover:border-p-500":!n.error}]])},[o(e.$slots,"before",{onReset:l}),f(d(j),v(e.$attrs,{ref_key:"inputElement",ref:a,modelValue:d(r),"onUpdate:modelValue":t[0]||(t[0]=m=>L(r)?r.value=m:null),field:n.field,error:n.error,class:"outline-none px-4 py-2 bg-transparent w-full placeholder-s-400",onInput:t[1]||(t[1]=m=>e.$emit("on-input"))}),null,16,["modelValue","field","error"]),o(e.$slots,"after",{onReset:l})],2),o(e.$slots,"error",{},()=>[f(k,{error:n.error},null,8,["error"])]),o(e.$slots,"description")],64))}});B.__docgenInfo={exportName:"default",displayName:"FNumber",description:"",tags:{},props:[{name:"modelValue",description:"modelValue - model number",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"error",required:!1,type:{name:"string"}},{name:"field",description:"Schema for field.",required:!0,type:{name:"IField"}},{name:"required",required:!1,type:{name:"boolean"}}],events:[{name:"on-input"},{name:"update:modelValue"}],slots:[{name:"label",scoped:!0,bindings:[{name:"id",title:"binding"},{name:"required",title:"binding"},{name:"onSetFocus",title:"binding"}]},{name:"before",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"after",scoped:!0,bindings:[{name:"onReset",title:"binding"}]},{name:"error"},{name:"description"}]};const ne="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z",E="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",C=[{id:"name",name:"name",group:"default",component:"FText",label:"First name",description:"Input your first name",placeholder:"Mikalai",after:E,type:"text",vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[3,"Name cannot be less than 3 characters"]},{type:"max",params:[10,"Name cannot be more than 10 characters"]}]},{autocomplete:"both",id:"group",name:"group",keyValue:"id",keyLabel:"id",keyFilter:"title",after:!0,component:"FCombobox",label:"Your group",description:"Choose group your know",placeholder:"Choose group",items:[{id:"one",group:"group1",title:"one item"},{id:"two",group:"group2",title:"two item"},{id:"three",group:"group1",title:"three item"}],vtype:"string",rules:[{type:"required",params:[]}]},{id:"categories",name:"categories",autocomplete:"both",after:!0,keyValue:"title",keyLabel:"title",keyFilter:"title",component:"FCombobox",label:"Your categories",description:"Input category your know",placeholder:"Choose categories",multiple:!0,items:[{_id:"622c83fa6fdefe5e9ccd08b2",parentId:null,seo:"dress",sort_order:0,status:!0,title:"\u041E\u0434\u0435\u0436\u0434\u0430",description:"\u041E\u0434\u0435\u0436\u0434\u0430 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",createdAt:"2022-03-12T11:28:58.263Z",updatedAt:"2022-03-12T17:42:51.377Z",__v:0},{_id:"622c841e6fdefe5e9ccd08b5",parentId:null,seo:"decorations",sort_order:0,status:!0,title:"\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F",description:"\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439",createdAt:"2022-03-12T11:29:34.330Z",updatedAt:"2022-03-12T15:01:49.046Z",__v:0},{_id:"622c9dbd7db0e401b1d32fdf",parentId:null,title:"\u0418\u0433\u0440\u0443\u0448\u043A\u0438",description:"\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u0434\u0435\u043B\u043A\u0438 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F",seo:"toys",sort_order:0,status:!0,createdAt:"2022-03-12T13:18:53.144Z",updatedAt:"2022-03-12T16:12:37.210Z",__v:0},{_id:"622ef1997e21dcd30f55b4a1",parentId:"622ef1997e21dcd30f55b4a1",title:"\u041E\u0434\u0435\u0436\u0434\u0430 \u0434\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D",description:"\u041E\u0434\u0435\u0436\u0434\u0430 \u0434\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D",seo:"for-man",sort_order:0,status:!0,createdAt:"2022-03-14T07:41:13.633Z",updatedAt:"2022-03-14T10:03:38.525Z",__v:0},{_id:"622f11997e21dcd30f55be8a",parentId:"622c9dbd7db0e401b1d32fdf",title:"\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0438\u0437 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",description:"\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0438\u0437 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",seo:"games-of-wood",sort_order:0,status:!0,createdAt:"2022-03-14T09:57:45.987Z",updatedAt:"2022-03-14T10:01:28.605Z",__v:0},{_id:"622f11cb7e21dcd30f55be8d",parentId:"622c841e6fdefe5e9ccd08b5",title:"\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u0438\u0437 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",description:"\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u0438\u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",seo:"jewelry-wood",sort_order:0,status:!0,createdAt:"2022-03-14T09:58:35.669Z",updatedAt:"2022-03-14T10:01:51.436Z",__v:0},{_id:"622f12047e21dcd30f55be90",parentId:null,title:"\u0414\u043E\u043C \u0438 \u0434\u0430\u0447\u0430",description:"\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430 \u0438 \u0434\u0430\u0447\u0438",seo:"house-and-cottage",sort_order:0,status:!0,createdAt:"2022-03-14T09:59:32.868Z",updatedAt:"2022-03-14T09:59:32.868Z",__v:0},{_id:"622f122b7e21dcd30f55be93",parentId:"622f12047e21dcd30f55be90",title:"\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438",description:"\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",seo:"kitchen-utensils",sort_order:0,status:!0,createdAt:"2022-03-14T10:00:11.664Z",updatedAt:"2022-03-14T10:03:23.265Z",__v:0}],vtype:"array",rules:[{type:"required",params:[]},{type:"min",params:[1,"Friends cannot be less than 1"]},{type:"max",params:[5,"Friends cannot be more than 5"]}]},{id:"groups",name:"groups",keyValue:"id",keyLabel:"id",keyFilter:"title",keyGroup:"group",group:"custom info",autofocus:!0,multiple:!0,after:!0,component:"FMultiSelect",label:"Your groups",description:"Input groups your know",placeholder:"Choose groups",items:[{id:"one",group:"odd",title:"One item"},{id:"two",group:"even",title:"two item"},{id:"four",group:"even",title:"Four item"},{id:"five",group:"odd",title:"Five item"},{id:"six",group:"even",title:"Six item"},{id:"seven",group:"odd",title:"Seven item"},{id:"three",group:"odd",title:"three item"}],vtype:"array",rules:[{type:"required",params:[]}]},{id:"friend",name:"friend",autofocus:!0,component:"FMultiSelect",label:"Your friend",description:"Input friend your know",placeholder:"Choose friend",items:["one","two","three"],vtype:"string",rules:[{type:"required",params:[]}]},{id:"languages",name:"languages",keyValue:"_id",keyLabel:"title",group:"custom info",component:"GInputMultiSelectNested",label:"Your languages",description:"Input languages your know",placeholder:"Choose language",items:[],multiple:!0,vtype:"array",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[1,"Languages cannot be less than 1 language"]},{type:"max",params:[5,"Languages cannot be more than 5 language"]}]},{id:"about",name:"about",group:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",component:"FTextarea",label:"About",description:"Brief description for your profile. URLs are hyperlinked.",placeholder:"About me",vtype:"string",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[3,"About cannot be less than 3 characters"]},{type:"max",params:[10,"About cannot be more than 10 characters"]}]},{id:"age",name:"age",group:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",component:"FNumber",label:"Age",placeholder:"Enter age",type:"number",vtype:"number",rules:[{type:"required",params:["This field is required"]},{type:"min",params:[10,"Age cannot be less than 5"]},{type:"max",params:[60,"Age cannot be more than 60 "]}]},{id:"comments",name:"comments",group:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",component:"FCheckbox",description:"Get notified when someones posts a comment on a posting.",label:"Comments",type:"checkbox",vtype:"boolean",rules:[{type:"isTrue",params:["This field boolean is required"]}]},{id:"accept",name:"accept",group:"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",component:"FCheckbox",description:"Description for accept field",label:"Accept",type:"checkbox",vtype:"boolean",rules:[{type:"isTrue",params:["This field boolean is required"]}]}],fe={parameters:{storySource:{source:`import { computed, onMounted, ref } from "vue";
import {
  LForm,
  LFormField,
  LFormFieldLabel,
  LFormFieldDescription,
} from "@/components/LForm";

import FError from "@/components/ui/FError.vue";

import FText from "@/components/ui/FText.vue";
import FTextarea from "@/components/ui/FTextarea.vue";
import FCheckbox from "@/components/ui/FCheckbox.vue";
import FNumber from "@/components/ui/FNumber.vue";
import FMultiSelect from "@/components/ui/FMultiSelect.vue";
import FCombobox from "@/components/ui/FCombobox.vue";

import LBtn from "@/components/LBtn";

import LIcon from "@/components/LIcon";
import { LSpinner } from "@/components/LSpinner";

import { useValidate } from "@/composable/useValidate";

// import { mdiCommentText, mdiAlertCircle, mdiClose } from '@mdi/js'

const iChat =
  "M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z";
const iClose =
  "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z";

const formData = [
  {
    id: "name",
    name: "name",
    group: "default",
    component: "FText",
    label: "First name",
    description: "Input your first name",
    placeholder: "Mikalai",
    after: iClose,
    type: "text",
    vtype: "string",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [3, "Name cannot be less than 3 characters"],
      },
      {
        type: "max",
        params: [10, "Name cannot be more than 10 characters"],
      },
    ],
  },
  {
    autocomplete: "both",
    id: "group",
    name: "group",
    keyValue: "id",
    keyLabel: "id",
    keyFilter: "title",
    // keyGroup: "group",
    // group: "custom info",
    // autofocus: true,
    // multiple: true,
    after: true,
    component: "FCombobox",
    label: "Your group",
    description: "Choose group your know",
    placeholder: "Choose group",
    items: [
      { id: "one", group: "group1", title: "one item" },
      { id: "two", group: "group2", title: "two item" },
      { id: "three", group: "group1", title: "three item" },
    ],
    vtype: "string",
    rules: [
      {
        type: "required",
        params: [],
      },
    ],
  },
  {
    id: "categories",
    name: "categories",
    autocomplete: "both",
    after: true,
    keyValue: "title",
    keyLabel: "title",
    keyFilter: "title",
    component: "FCombobox",
    label: "Your categories",
    description: "Input category your know",
    placeholder: "Choose categories",
    multiple: true,
    items: [
      {
        _id: "622c83fa6fdefe5e9ccd08b2",
        parentId: null,
        seo: "dress",
        sort_order: 0,
        status: true,
        title: "\u041E\u0434\u0435\u0436\u0434\u0430",
        description: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",
        createdAt: "2022-03-12T11:28:58.263Z",
        updatedAt: "2022-03-12T17:42:51.377Z",
        __v: 0,
      },
      {
        _id: "622c841e6fdefe5e9ccd08b5",
        parentId: null,
        seo: "decorations",
        sort_order: 0,
        status: true,
        title: "\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F",
        description: "\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u043D\u0430 \u043B\u044E\u0431\u043E\u0439 \u0441\u043B\u0443\u0447\u0430\u0439",
        createdAt: "2022-03-12T11:29:34.330Z",
        updatedAt: "2022-03-12T15:01:49.046Z",
        __v: 0,
      },
      {
        _id: "622c9dbd7db0e401b1d32fdf",
        parentId: null,
        title: "\u0418\u0433\u0440\u0443\u0448\u043A\u0438",
        description: "\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u0434\u0435\u043B\u043A\u0438 \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F",
        seo: "toys",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-12T13:18:53.144Z",
        updatedAt: "2022-03-12T16:12:37.210Z",
        __v: 0,
      },
      {
        _id: "622ef1997e21dcd30f55b4a1",
        parentId: "622ef1997e21dcd30f55b4a1",
        title: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0434\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D",
        description: "\u041E\u0434\u0435\u0436\u0434\u0430 \u0434\u043B\u044F \u043C\u0443\u0436\u0447\u0438\u043D",
        seo: "for-man",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T07:41:13.633Z",
        updatedAt: "2022-03-14T10:03:38.525Z",
        __v: 0,
      },
      {
        _id: "622f11997e21dcd30f55be8a",
        parentId: "622c9dbd7db0e401b1d32fdf",
        title: "\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0438\u0437 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",
        description: "\u0418\u0433\u0440\u0443\u0448\u043A\u0438 \u0438\u0437 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",
        seo: "games-of-wood",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T09:57:45.987Z",
        updatedAt: "2022-03-14T10:01:28.605Z",
        __v: 0,
      },
      {
        _id: "622f11cb7e21dcd30f55be8d",
        parentId: "622c841e6fdefe5e9ccd08b5",
        title: "\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u0438\u0437 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",
        description: "\u0423\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u044F \u0438\u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0439 \u0434\u0440\u0435\u0432\u0435\u0441\u0438\u043D\u044B",
        seo: "jewelry-wood",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T09:58:35.669Z",
        updatedAt: "2022-03-14T10:01:51.436Z",
        __v: 0,
      },
      {
        _id: "622f12047e21dcd30f55be90",
        parentId: null,
        title: "\u0414\u043E\u043C \u0438 \u0434\u0430\u0447\u0430",
        description: "\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0434\u043B\u044F \u0434\u043E\u043C\u0430 \u0438 \u0434\u0430\u0447\u0438",
        seo: "house-and-cottage",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T09:59:32.868Z",
        updatedAt: "2022-03-14T09:59:32.868Z",
        __v: 0,
      },
      {
        _id: "622f122b7e21dcd30f55be93",
        parentId: "622f12047e21dcd30f55be90",
        title: "\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438",
        description: "\u041A\u0443\u0445\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",
        seo: "kitchen-utensils",
        sort_order: 0,
        status: true,
        createdAt: "2022-03-14T10:00:11.664Z",
        updatedAt: "2022-03-14T10:03:23.265Z",
        __v: 0,
      },
    ],
    vtype: "array",
    rules: [
      {
        type: "required",
        params: [],
      },
      {
        type: "min",
        params: [1, "Friends cannot be less than 1"],
      },
      {
        type: "max",
        params: [5, "Friends cannot be more than 5"],
      },
    ],
  },
  {
    id: "groups",
    name: "groups",
    keyValue: "id",
    keyLabel: "id",
    keyFilter: "title",
    keyGroup: "group",
    group: "custom info",
    autofocus: true,
    multiple: true,
    after: true,
    component: "FMultiSelect",
    label: "Your groups",
    description: "Input groups your know",
    placeholder: "Choose groups",
    items: [
      { id: "one", group: "odd", title: "One item" },
      { id: "two", group: "even", title: "two item" },
      { id: "four", group: "even", title: "Four item" },
      { id: "five", group: "odd", title: "Five item" },
      { id: "six", group: "even", title: "Six item" },
      { id: "seven", group: "odd", title: "Seven item" },
      { id: "three", group: "odd", title: "three item" },
    ],
    vtype: "array",
    rules: [
      {
        type: "required",
        params: [],
      },
    ],
  },
  {
    id: "friend",
    name: "friend",
    // keyValue: "name",
    // keyLabel: "name",
    // group: "custom info",
    autofocus: true,
    component: "FMultiSelect",
    label: "Your friend",
    description: "Input friend your know",
    placeholder: "Choose friend",
    items: ["one", "two", "three"],
    vtype: "string",
    rules: [
      {
        type: "required",
        params: [],
      },
    ],
  },
  {
    id: "languages",
    name: "languages",
    // groupkey: 'name',
    keyValue: "_id",
    keyLabel: "title",
    group: "custom info",
    component: "GInputMultiSelectNested",
    label: "Your languages",
    description: "Input languages your know",
    placeholder: "Choose language",
    items: [],
    multiple: true,
    vtype: "array",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [1, "Languages cannot be less than 1 language"],
      },
      {
        type: "max",
        params: [5, "Languages cannot be more than 5 language"],
      },
    ],
  },
  {
    id: "about",
    name: "about",
    group: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    component: "FTextarea",
    label: "About",
    description: "Brief description for your profile. URLs are hyperlinked.",
    placeholder: "About me",
    vtype: "string",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [3, "About cannot be less than 3 characters"],
      },
      {
        type: "max",
        params: [10, "About cannot be more than 10 characters"],
      },
    ],
  },
  {
    id: "age",
    name: "age",
    group: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    component: "FNumber",
    label: "Age",
    placeholder: "Enter age",
    type: "number",
    vtype: "number",
    rules: [
      {
        type: "required",
        params: ["This field is required"],
      },
      {
        type: "min",
        params: [10, "Age cannot be less than 5"],
      },
      {
        type: "max",
        params: [60, "Age cannot be more than 60 "],
      },
    ],
  },
  {
    id: "comments",
    name: "comments",
    group: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    component: "FCheckbox",
    description: "Get notified when someones posts a comment on a posting.",
    label: "Comments",
    type: "checkbox",
    vtype: "boolean",
    rules: [
      {
        type: "isTrue",
        params: ["This field boolean is required"],
      },
    ],
  },
  {
    id: "accept",
    name: "accept",
    group: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    component: "FCheckbox",
    description: "Description for accept field",
    label: "Accept",
    type: "checkbox",
    vtype: "boolean",
    rules: [
      {
        type: "isTrue",
        params: ["This field boolean is required"],
      },
    ],
  },
];

export default {
  title: "Components/Form",
  component: LForm,
};

export const Default = () => ({
  components: {
    LForm,
    LFormField,
    LFormFieldLabel,
    LFormFieldDescription,
    LIcon,
    LSpinner,

    FError,
    FText,
    FTextarea,
    FCheckbox,
    FNumber,
    FMultiSelect,
    FCombobox,

    LBtn,
  },
  setup() {
    const forms = ref({
      email: "",
      name: "Name",
      languages: ["Karianne"],
      friend: "Nicholas Runolfsdottir V",
      male: false,
      accept: false,
      comments: true,
    });

    const { errors, onValidate, onCreateSchema, onFormValidate } =
      useValidate();

    const onSaveForm = async () => {
      await onFormValidate(forms.value);

      if (isValidForm.value) {
        console.group("Save form");
        console.log(forms.value);
        console.groupEnd();
      }
    };

    onMounted(async () => {
      // create schema validate
      await onCreateSchema(formData);

      // await onFormValidate(forms.value)
    });

    const isValidForm = computed(() => Object.keys(errors.value).length === 0);

    const onInput = async (field: any) => {
      await onValidate(field.name, forms.value);
      // console.log("Hook after validate field ", field.name, forms.value);
    };

    return {
      errors,
      forms,
      formData,

      onSaveForm,
      onInput,

      iClose,
      iChat,
    };
  },
  template: \`
  <div class="py-16 bg-s-200 dark:bg-s-900">
      <LForm
        v-model="forms"
        :schema="formData"
        :errors="errors"
        class="max-w-lg mx-auto p-6 rounded-md bg-white dark:bg-s-800 shadow-xl"
        #default="{ form }"
      >
        <LFormField
          v-for="field in formData"
          :key="field.name"
          :field="field"
          class="mb-6"
          #default="{ errorField, required }"
        >
            <component
              :is="field.component"
              v-model="forms[field.name]"
              :field="field"
              :error="errors[field.name]"
              @onInput="onInput(field)"
            >
              <template #label="{ onSetFocus }">
                <LFormFieldLabel
                  v-if="field.label"
                  :field="field"
                  class="flex-none block font-medium mb-1"
                  @onSetFocus="onSetFocus"
                >
                  {{ field.label }}
                  <span v-if="required" class="text-d-600 dark:text-d-400">*</span>
                </LFormFieldLabel>
              </template>

              <template #description>
                <LFormFieldDescription
                  v-if="field.description"
                  :field="field"
                  class="mt-2 text-sm leading-none text-s-600 dark:text-s-400"
                >
                  {{ field.description }}
                </LFormFieldDescription>
              </template>

              <template v-if="field.after" #after="{onReset, empty}">
                <LBtn
                  v-if="!empty"
                  mode="danger"
                  aria-label="reset"
                  class="px-2 mr-1"
                  @click="onReset"
                >
                  <LIcon>
                    {{ iClose }}
                  </LIcon>
                </LBtn>
              </template>

              <template #error>
                <FError
                  v-if="errorField && errorField != ''"
                  :error="errorField"
                />
              </template>

            </component>

          </LFormField>
          <LBtn @click="onSaveForm" fill mode="primary" ringed :disabled="Object.keys(errors).length > 0">
            <LIcon>
              {{iChat}}
            </LIcon>
            <span class="pl-2" >onSave</span>
          </LBtn>
        </LForm>
    </div>
  \`,
});
// !forms[field.name] ? 'px-4' : 'pl-4 pr-12'

// <div v-if="forms[field.name]" class="absolute right-1 top-2">
// <LBtn
//   :mode="errorField ? 'danger' : 'second'"
//   ringed
//   class="text-lg leading-3 px-2"
//   @click="onReset"
// >
//   <LIcon>
//     {{ iClose }}
//   </LIcon>
// </LBtn>
// </div>
`,locationsMap:{default:{startLoc:{col:23,line:383},endLoc:{col:2,line:530},startBody:{col:23,line:383},endBody:{col:2,line:530}}}}},title:"Components/Form",component:V},be=s(()=>({components:{LForm:V,LFormField:N,LFormFieldLabel:M,LFormFieldDescription:R,LIcon:I,LSpinner:H,FError:k,FText:G,FTextarea:q,FCheckbox:w,FNumber:B,FMultiSelect:O,FCombobox:U,LBtn:K},setup(){const n=y({email:"",name:"Name",languages:["Karianne"],friend:"Nicholas Runolfsdottir V",male:!1,accept:!1,comments:!0}),{errors:u,onValidate:p,onCreateSchema:r,onFormValidate:a}=P(),i=s(async()=>{await a(n.value),l.value&&(console.group("Save form"),console.log(n.value),console.groupEnd())},"onSaveForm");Z(async()=>{await r(C)});const l=F(()=>Object.keys(u.value).length===0);return{errors:u,forms:n,formData:C,onSaveForm:i,onInput:s(async t=>{await p(t.name,n.value)},"onInput"),iClose:E,iChat:ne}},template:`
  <div class="py-16 bg-s-200 dark:bg-s-900">
      <LForm
        v-model="forms"
        :schema="formData"
        :errors="errors"
        class="max-w-lg mx-auto p-6 rounded-md bg-white dark:bg-s-800 shadow-xl"
        #default="{ form }"
      >
        <LFormField
          v-for="field in formData"
          :key="field.name"
          :field="field"
          class="mb-6"
          #default="{ errorField, required }"
        >
            <component
              :is="field.component"
              v-model="forms[field.name]"
              :field="field"
              :error="errors[field.name]"
              @onInput="onInput(field)"
            >
              <template #label="{ onSetFocus }">
                <LFormFieldLabel
                  v-if="field.label"
                  :field="field"
                  class="flex-none block font-medium mb-1"
                  @onSetFocus="onSetFocus"
                >
                  {{ field.label }}
                  <span v-if="required" class="text-d-600 dark:text-d-400">*</span>
                </LFormFieldLabel>
              </template>

              <template #description>
                <LFormFieldDescription
                  v-if="field.description"
                  :field="field"
                  class="mt-2 text-sm leading-none text-s-600 dark:text-s-400"
                >
                  {{ field.description }}
                </LFormFieldDescription>
              </template>

              <template v-if="field.after" #after="{onReset, empty}">
                <LBtn
                  v-if="!empty"
                  mode="danger"
                  aria-label="reset"
                  class="px-2 mr-1"
                  @click="onReset"
                >
                  <LIcon>
                    {{ iClose }}
                  </LIcon>
                </LBtn>
              </template>

              <template #error>
                <FError
                  v-if="errorField && errorField != ''"
                  :error="errorField"
                />
              </template>

            </component>

          </LFormField>
          <LBtn @click="onSaveForm" fill mode="primary" ringed :disabled="Object.keys(errors).length > 0">
            <LIcon>
              {{iChat}}
            </LIcon>
            <span class="pl-2" >onSave</span>
          </LBtn>
        </LForm>
    </div>
  `}),"Default"),ge=["Default"];export{be as Default,ge as __namedExportsOrder,fe as default};
//# sourceMappingURL=LForm.stories.e3df47c7.js.map
