var M=Object.defineProperty;var a=(e,s)=>M(e,"name",{value:s,configurable:!0});import"./jsx-runtime.03e9a816.js";import{c as n,A as R,C as P,S as i,a as c,b as p,M as N}from"./Props.54b2471a.js";import{d as L}from"./iframe.10fce278.js";import{r as m}from"./vue.esm-bundler.d6e8a8ce.js";import{L as r}from"./LBtn.ba5088c0.js";import{L as t}from"./LIcon.b157f1df.js";import{L as o}from"./LSpinner.c9659ed3.js";import"./string.cc2edf31.js";import"./es.map.constructor.ec8c4977.js";import"./es.number.to-fixed.d0c386b5.js";function b(){return b=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var B in d)Object.prototype.hasOwnProperty.call(d,B)&&(e[B]=d[B])}return e},b.apply(this,arguments)}a(b,"_extends");const l="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z",C="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z",u=a(e=>({components:{LBtn:r},setup(){return{args:{...e}}},template:'<LBtn v-bind="args">Button</LBtn>'}),"Template"),v=["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl","text-6xl","text-7xl","text-8xl"],j={iBell:l,Template:u,sizesClass:v},k="wrapper";function F({components:e,...s}){return n(k,b({},j,s,{components:e,mdxType:"MDXLayout"}),n(N,{title:"components/Buttons",component:r,argTypes:{mode:{control:{type:"select",options:["primary","accent","second","danger"]}},rounded:{control:{type:"select",options:["rounded-none","rounded-sm","rounded","rounded-md","rounded-xl","rounded-full"]}},size:{control:{type:"select",options:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl"]}}},mdxType:"Meta"}),n("h1",null,"LBtn"),n("h2",null,"Default"),n(i,{name:"Default",args:{},mdxType:"Story"},u.bind({})),n("div",null,n(c,{language:"js",code:L`
  <LBtn>Button</LBtn>
  `,mdxType:"Source"})),n("h2",null,"All"),n(P,{mdxType:"Canvas"},n(i,{name:"All",args:{mode:"primary"},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
        <h2>Default</h2>
        <div class="flex flex-wrap items-center space-y-4 space-x-4 p-2">
          <LBtn v-bind="args" class="active mt-4 p-2" ringed>
            <LIcon>
              {{iBell}}
            </LIcon>
            <div class="pl-2">active</div>
          </LBtn>
          <LBtn v-bind="args" bordered rounded="rounded-full" class="text-xl mt-4 p-2" ringed aria-label="button">
            <LIcon>
              {{iBell}}
            </LIcon>
          </LBtn>
          <LBtn v-bind="args" ringed aria-label="button">
            <LSpinner />
            <div class="pl-2">
              Icon
            </div>
          </LBtn>
          <LBtn v-bind="args" bordered ringed>
            bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered ringed>
            Fill bordered
          </LBtn>
          <LBtn v-bind="args" class="active" fill bordered ringed>
            Fill bordered active
          </LBtn>
          <LBtn v-bind="args" fill bordered rounded="rounded-full" ringed>
            Rounded full fill bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered disabled ringed>
            Disable
          </LBtn>
        </div>
        <h2 class="pt-12">Inverse</h2>
        <div class="flex flex-wrap items-center space-y-4 space-x-4 p-12 bg-s-800 dark">
          <LBtn v-bind="args" class="active mt-4 p-2" ringed>
            <LIcon>
              {{iBell}}
            </LIcon>
            <div class="pl-2">active</div>
          </LBtn>
          <LBtn v-bind="args" bordered rounded="rounded-full" class="text-xl mt-4 p-2" ringed aria-label="button">
            <LIcon>
              {{iBell}}
            </LIcon>
          </LBtn>
          <LBtn v-bind="args" ringed aria-label="button">
            <LSpinner />
            <div class="pl-2">
              Icon
            </div>
          </LBtn>
          <LBtn v-bind="args" bordered ringed>
            bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered ringed>
            Fill bordered
          </LBtn>
          <LBtn v-bind="args" class="active" fill bordered ringed>
            Fill bordered active
          </LBtn>
          <LBtn v-bind="args" fill bordered rounded="rounded-full" ringed>
            Rounded full fill bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered disabled ringed>
            Disable
          </LBtn>
        </div>
        `}))),n(p,{story:"All",mdxType:"ArgsTable"}),n("h2",null,"Mode"),n(i,{name:"Mode",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary">Primary</LBtn>
        <LBtn mode="second">Second</LBtn>
        <LBtn mode="accent">Accent</LBtn>
        <LBtn mode="danger">Danger</LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
        <LBtn mode="primary">Primary</LBtn>
        <LBtn mode="second">Second</LBtn>
        <LBtn mode="accent">Accent</LBtn>
        <LBtn mode="danger">Danger</LBtn>
  `,mdxType:"Source"})),n("h2",null,"Ringed"),n(i,{name:"Ringed",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" ringed>Primary</LBtn>
        <LBtn mode="second" ringed>Second</LBtn>
        <LBtn mode="accent" ringed>Accent</LBtn>
        <LBtn mode="danger" ringed>Danger</LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
        <LBtn mode="primary" ringed>Primary</LBtn>
        <LBtn mode="second" ringed>Second</LBtn>
        <LBtn mode="accent" ringed>Accent</LBtn>
        <LBtn mode="danger" ringed>Danger</LBtn>
  `,mdxType:"Source"})),n("h2",null,"Fill"),n(i,{name:"Fill",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" fill ringed>Primary</LBtn>
        <LBtn mode="second" fill ringed>Second</LBtn>
        <LBtn mode="accent" fill ringed>Accent</LBtn>
        <LBtn mode="danger" fill ringed>Danger</LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
        <LBtn mode="primary" fill ringed>Primary</LBtn>
        <LBtn mode="second" fill ringed>Second</LBtn>
        <LBtn mode="accent" fill ringed>Accent</LBtn>
        <LBtn mode="danger" fill ringed>Danger</LBtn>
  `,mdxType:"Source"})),n("h2",null,"Bordered"),n(i,{name:"Bordered",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" bordered ringed>Primary</LBtn>
        <LBtn mode="second" bordered ringed>Second</LBtn>
        <LBtn mode="accent" bordered ringed>Accent</LBtn>
        <LBtn mode="danger" bordered ringed>Danger</LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
        <LBtn mode="primary" bordered ringed>Primary</LBtn>
        <LBtn mode="second" bordered ringed>Second</LBtn>
        <LBtn mode="accent" bordered ringed>Accent</LBtn>
        <LBtn mode="danger" bordered ringed>Danger</LBtn>
  `,mdxType:"Source"})),n("h2",null,"Rounded"),n(i,{name:"Rounded",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="second" bordered ringed rounded="rounded-lg">rounded-lg</LBtn>
        <LBtn fill mode="second"  bordered ringed rounded="rounded-xl">rounded-xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-2xl">rounded-2xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-full">rounded-full</LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
        <LBtn mode="second" bordered ringed rounded="rounded-lg">rounded-lg</LBtn>
        <LBtn fill mode="second" bordered ringed rounded="rounded-xl">rounded-xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-2xl">rounded-2xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-full">rounded-full</LBtn>
  `,mdxType:"Source"})),n("h2",null,"Icons"),n(i,{name:"Icons",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...d},iBell:l}},template:`
      <div class="flex flex-row items-center space-x-4">
        <LBtn mode="primary" bordered ringed rounded="rounded-full p-4" class="text-4xl">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed fill>
          <div class="pr-2">with text</div>
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed>
          <LIcon>{{iBell}}</LIcon>
          <div class="pl-2">with text</div>
        </LBtn>
        <LBtn mode="danger" bordered ringed rounded="rounded-full">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
        <LBtn mode="primary" bordered ringed rounded="rounded-full p-4" class="text-4xl">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed fill>
          <div class="pr-2">with text</div>
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed>
          <LIcon>{{iBell}}</LIcon>
          <div class="pl-2">with text</div>
        </LBtn>
        <LBtn mode="danger" bordered ringed rounded="rounded-full">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
  `,mdxType:"Source"})),n("h2",null,"Loading status"),n(i,{name:"Loading",args:{mode:"primary",fill:!0},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){const B=m(!1);return{args:{...d},load:B,iBell:l}},template:`
      <div class="flex items-center">
        <LBtn v-bind="args" rounded="rounded-full p-2" :disabled="load || args.disabled" class="text-xl mr-4">
          <LSpinner v-if="load"/>
          <LIcon v-else>
            {{iBell}}
          </LIcon>
        </LBtn>
        <LBtn v-bind="args" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          <LIcon v-else>
            {{iBell}}
          </LIcon>
          <div class="pl-2">
            With icon
          </div>
        </LBtn>
        <LBtn v-bind="args" class="ml-4" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          Simple
        </LBtn>
        <LBtn v-bind="args" class="ml-4 active" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          Active
        </LBtn>
      </div>
        <LBtn @click="load = !load">Toggle load</LBtn>`})),n("div",null,n(c,{language:"js",code:L`
  <LBtn fill mode="primary">
    <LSpinner>Icon</LSpinner>
  </LBtn>
  `,mdxType:"Source"})),n(p,{story:"Loading",mdxType:"ArgsTable"}),n("h2",null,"Sizes"),n(i,{name:"Sizes",args:{},mdxType:"Story"},d=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){const B=m(!1);return{args:{...d},sizesClass:v,iCart:C,load:B}},template:`
      <div class="flex flex-wrap flex-row items-center space-x-4">
        <LBtn v-for="size in sizesClass" :disabled="load" bordered ringed :class="['mb-4', size]">
          <LSpinner v-if="load" />
          <LIcon v-else>{{iCart}}</LIcon>
          <div class="pl-2">{{size}}</div>
        </LBtn>
        <hr />
        <LBtn :fill="load" @click="load = !load" bordered class="text-sm">toggle load status</LBtn>
      </div>
      `})),n("div",null,n(c,{language:"js",code:L`
      <LBtn bordered ringed class="text-lg">
        <LIcon>{{iBell}}</LIcon>
        <div class="pl-2">{{size}}</div>
      </LBtn>
  `,mdxType:"Source"})),n("h2",null,"Playground"),n(P,{mdxType:"Canvas"},n(i,{name:"Playground",args:{mode:"second",fill:!0},mdxType:"Story"},u.bind({}))),n(p,{story:"Playground",mdxType:"ArgsTable"}))}a(F,"MDXContent");F.isMDXComponent=!0;const x=u.bind({});x.storyName="Default";x.args={};x.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn
    },
    setup() {
      return {
        args: {
          ...args
        }
      };
    },
    template: '<LBtn v-bind="args">Button</LBtn>'
  };
}`}};const f=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
        <h2>Default</h2>
        <div class="flex flex-wrap items-center space-y-4 space-x-4 p-2">
          <LBtn v-bind="args" class="active mt-4 p-2" ringed>
            <LIcon>
              {{iBell}}
            </LIcon>
            <div class="pl-2">active</div>
          </LBtn>
          <LBtn v-bind="args" bordered rounded="rounded-full" class="text-xl mt-4 p-2" ringed aria-label="button">
            <LIcon>
              {{iBell}}
            </LIcon>
          </LBtn>
          <LBtn v-bind="args" ringed aria-label="button">
            <LSpinner />
            <div class="pl-2">
              Icon
            </div>
          </LBtn>
          <LBtn v-bind="args" bordered ringed>
            bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered ringed>
            Fill bordered
          </LBtn>
          <LBtn v-bind="args" class="active" fill bordered ringed>
            Fill bordered active
          </LBtn>
          <LBtn v-bind="args" fill bordered rounded="rounded-full" ringed>
            Rounded full fill bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered disabled ringed>
            Disable
          </LBtn>
        </div>
        <h2 class="pt-12">Inverse</h2>
        <div class="flex flex-wrap items-center space-y-4 space-x-4 p-12 bg-s-800 dark">
          <LBtn v-bind="args" class="active mt-4 p-2" ringed>
            <LIcon>
              {{iBell}}
            </LIcon>
            <div class="pl-2">active</div>
          </LBtn>
          <LBtn v-bind="args" bordered rounded="rounded-full" class="text-xl mt-4 p-2" ringed aria-label="button">
            <LIcon>
              {{iBell}}
            </LIcon>
          </LBtn>
          <LBtn v-bind="args" ringed aria-label="button">
            <LSpinner />
            <div class="pl-2">
              Icon
            </div>
          </LBtn>
          <LBtn v-bind="args" bordered ringed>
            bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered ringed>
            Fill bordered
          </LBtn>
          <LBtn v-bind="args" class="active" fill bordered ringed>
            Fill bordered active
          </LBtn>
          <LBtn v-bind="args" fill bordered rounded="rounded-full" ringed>
            Rounded full fill bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered disabled ringed>
            Disable
          </LBtn>
        </div>
        `}),"all");f.storyName="All";f.args={mode:"primary"};f.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
        <h2>Default</h2>
        <div class="flex flex-wrap items-center space-y-4 space-x-4 p-2">
          <LBtn v-bind="args" class="active mt-4 p-2" ringed>
            <LIcon>
              {{iBell}}
            </LIcon>
            <div class="pl-2">active</div>
          </LBtn>
          <LBtn v-bind="args" bordered rounded="rounded-full" class="text-xl mt-4 p-2" ringed aria-label="button">
            <LIcon>
              {{iBell}}
            </LIcon>
          </LBtn>
          <LBtn v-bind="args" ringed aria-label="button">
            <LSpinner />
            <div class="pl-2">
              Icon
            </div>
          </LBtn>
          <LBtn v-bind="args" bordered ringed>
            bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered ringed>
            Fill bordered
          </LBtn>
          <LBtn v-bind="args" class="active" fill bordered ringed>
            Fill bordered active
          </LBtn>
          <LBtn v-bind="args" fill bordered rounded="rounded-full" ringed>
            Rounded full fill bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered disabled ringed>
            Disable
          </LBtn>
        </div>
        <h2 class="pt-12">Inverse</h2>
        <div class="flex flex-wrap items-center space-y-4 space-x-4 p-12 bg-s-800 dark">
          <LBtn v-bind="args" class="active mt-4 p-2" ringed>
            <LIcon>
              {{iBell}}
            </LIcon>
            <div class="pl-2">active</div>
          </LBtn>
          <LBtn v-bind="args" bordered rounded="rounded-full" class="text-xl mt-4 p-2" ringed aria-label="button">
            <LIcon>
              {{iBell}}
            </LIcon>
          </LBtn>
          <LBtn v-bind="args" ringed aria-label="button">
            <LSpinner />
            <div class="pl-2">
              Icon
            </div>
          </LBtn>
          <LBtn v-bind="args" bordered ringed>
            bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered ringed>
            Fill bordered
          </LBtn>
          <LBtn v-bind="args" class="active" fill bordered ringed>
            Fill bordered active
          </LBtn>
          <LBtn v-bind="args" fill bordered rounded="rounded-full" ringed>
            Rounded full fill bordered
          </LBtn>
          <LBtn v-bind="args" fill bordered disabled ringed>
            Disable
          </LBtn>
        </div>
        \`
  };
}`}};const y=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary">Primary</LBtn>
        <LBtn mode="second">Second</LBtn>
        <LBtn mode="accent">Accent</LBtn>
        <LBtn mode="danger">Danger</LBtn>
      </div>
      `}),"mode");y.storyName="Mode";y.args={};y.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary">Primary</LBtn>
        <LBtn mode="second">Second</LBtn>
        <LBtn mode="accent">Accent</LBtn>
        <LBtn mode="danger">Danger</LBtn>
      </div>
      \`
  };
}`}};const I=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" ringed>Primary</LBtn>
        <LBtn mode="second" ringed>Second</LBtn>
        <LBtn mode="accent" ringed>Accent</LBtn>
        <LBtn mode="danger" ringed>Danger</LBtn>
      </div>
      `}),"ringed");I.storyName="Ringed";I.args={};I.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" ringed>Primary</LBtn>
        <LBtn mode="second" ringed>Second</LBtn>
        <LBtn mode="accent" ringed>Accent</LBtn>
        <LBtn mode="danger" ringed>Danger</LBtn>
      </div>
      \`
  };
}`}};const S=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" fill ringed>Primary</LBtn>
        <LBtn mode="second" fill ringed>Second</LBtn>
        <LBtn mode="accent" fill ringed>Accent</LBtn>
        <LBtn mode="danger" fill ringed>Danger</LBtn>
      </div>
      `}),"fill");S.storyName="Fill";S.args={};S.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" fill ringed>Primary</LBtn>
        <LBtn mode="second" fill ringed>Second</LBtn>
        <LBtn mode="accent" fill ringed>Accent</LBtn>
        <LBtn mode="danger" fill ringed>Danger</LBtn>
      </div>
      \`
  };
}`}};const h=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" bordered ringed>Primary</LBtn>
        <LBtn mode="second" bordered ringed>Second</LBtn>
        <LBtn mode="accent" bordered ringed>Accent</LBtn>
        <LBtn mode="danger" bordered ringed>Danger</LBtn>
      </div>
      `}),"bordered");h.storyName="Bordered";h.args={};h.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
      <div class="flex flex-row space-x-4">
        <LBtn mode="primary" bordered ringed>Primary</LBtn>
        <LBtn mode="second" bordered ringed>Second</LBtn>
        <LBtn mode="accent" bordered ringed>Accent</LBtn>
        <LBtn mode="danger" bordered ringed>Danger</LBtn>
      </div>
      \`
  };
}`}};const w=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
      <div class="flex flex-row space-x-4">
        <LBtn mode="second" bordered ringed rounded="rounded-lg">rounded-lg</LBtn>
        <LBtn fill mode="second"  bordered ringed rounded="rounded-xl">rounded-xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-2xl">rounded-2xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-full">rounded-full</LBtn>
      </div>
      `}),"rounded");w.storyName="Rounded";w.args={};w.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
      <div class="flex flex-row space-x-4">
        <LBtn mode="second" bordered ringed rounded="rounded-lg">rounded-lg</LBtn>
        <LBtn fill mode="second"  bordered ringed rounded="rounded-xl">rounded-xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-2xl">rounded-2xl</LBtn>
        <LBtn mode="second" bordered ringed rounded="rounded-full">rounded-full</LBtn>
      </div>
      \`
  };
}`}};const T=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){return{args:{...e},iBell:l}},template:`
      <div class="flex flex-row items-center space-x-4">
        <LBtn mode="primary" bordered ringed rounded="rounded-full p-4" class="text-4xl">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed fill>
          <div class="pr-2">with text</div>
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed>
          <LIcon>{{iBell}}</LIcon>
          <div class="pl-2">with text</div>
        </LBtn>
        <LBtn mode="danger" bordered ringed rounded="rounded-full">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
      </div>
      `}),"icons");T.storyName="Icons";T.args={};T.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      return {
        args: {
          ...args
        },
        iBell
      };
    },
    template: \`
      <div class="flex flex-row items-center space-x-4">
        <LBtn mode="primary" bordered ringed rounded="rounded-full p-4" class="text-4xl">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed fill>
          <div class="pr-2">with text</div>
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
        <LBtn mode="second" bordered ringed>
          <LIcon>{{iBell}}</LIcon>
          <div class="pl-2">with text</div>
        </LBtn>
        <LBtn mode="danger" bordered ringed rounded="rounded-full">
          <LIcon>{{iBell}}</LIcon>
        </LBtn>
      </div>
      \`
  };
}`}};const A=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){const s=m(!1);return{args:{...e},load:s,iBell:l}},template:`
      <div class="flex items-center">
        <LBtn v-bind="args" rounded="rounded-full p-2" :disabled="load || args.disabled" class="text-xl mr-4">
          <LSpinner v-if="load"/>
          <LIcon v-else>
            {{iBell}}
          </LIcon>
        </LBtn>
        <LBtn v-bind="args" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          <LIcon v-else>
            {{iBell}}
          </LIcon>
          <div class="pl-2">
            With icon
          </div>
        </LBtn>
        <LBtn v-bind="args" class="ml-4" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          Simple
        </LBtn>
        <LBtn v-bind="args" class="ml-4 active" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          Active
        </LBtn>
      </div>
        <LBtn @click="load = !load">Toggle load</LBtn>`}),"loading");A.storyName="Loading";A.args={mode:"primary",fill:!0};A.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      const load = ref(false);
      return {
        args: {
          ...args
        },
        load,
        iBell
      };
    },
    template: \`
      <div class="flex items-center">
        <LBtn v-bind="args" rounded="rounded-full p-2" :disabled="load || args.disabled" class="text-xl mr-4">
          <LSpinner v-if="load"/>
          <LIcon v-else>
            {{iBell}}
          </LIcon>
        </LBtn>
        <LBtn v-bind="args" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          <LIcon v-else>
            {{iBell}}
          </LIcon>
          <div class="pl-2">
            With icon
          </div>
        </LBtn>
        <LBtn v-bind="args" class="ml-4" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          Simple
        </LBtn>
        <LBtn v-bind="args" class="ml-4 active" :disabled="load || args.disabled">
          <LSpinner v-if="load"/>
          Active
        </LBtn>
      </div>
        <LBtn @click="load = !load">Toggle load</LBtn>\`
  };
}`}};const D=a(e=>({components:{LBtn:r,LIcon:t,LSpinner:o},setup(){const s=m(!1);return{args:{...e},sizesClass:v,iCart:C,load:s}},template:`
      <div class="flex flex-wrap flex-row items-center space-x-4">
        <LBtn v-for="size in sizesClass" :disabled="load" bordered ringed :class="['mb-4', size]">
          <LSpinner v-if="load" />
          <LIcon v-else>{{iCart}}</LIcon>
          <div class="pl-2">{{size}}</div>
        </LBtn>
        <hr />
        <LBtn :fill="load" @click="load = !load" bordered class="text-sm">toggle load status</LBtn>
      </div>
      `}),"sizes");D.storyName="Sizes";D.args={};D.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn,
      LIcon,
      LSpinner
    },
    setup() {
      const load = ref(false);
      return {
        args: {
          ...args
        },
        sizesClass,
        iCart,
        load
      };
    },
    template: \`
      <div class="flex flex-wrap flex-row items-center space-x-4">
        <LBtn v-for="size in sizesClass" :disabled="load" bordered ringed :class="['mb-4', size]">
          <LSpinner v-if="load" />
          <LIcon v-else>{{iCart}}</LIcon>
          <div class="pl-2">{{size}}</div>
        </LBtn>
        <hr />
        <LBtn :fill="load" @click="load = !load" bordered class="text-sm">toggle load status</LBtn>
      </div>
      \`
  };
}`}};const z=u.bind({});z.storyName="Playground";z.args={mode:"second",fill:!0};z.parameters={storySource:{source:`args => {
  return {
    components: {
      LBtn
    },
    setup() {
      return {
        args: {
          ...args
        }
      };
    },
    template: '<LBtn v-bind="args">Button</LBtn>'
  };
}`}};const g={title:"components/Buttons",component:r,argTypes:{mode:{control:{type:"select",options:["primary","accent","second","danger"]}},rounded:{control:{type:"select",options:["rounded-none","rounded-sm","rounded","rounded-md","rounded-xl","rounded-full"]}},size:{control:{type:"select",options:["text-xs","text-sm","text-base","text-lg","text-xl","text-2xl","text-3xl","text-4xl","text-5xl"]}}},includeStories:["defaultStory","all","mode","ringed","fill","bordered","rounded","icons","loading","sizes","playground"]},O={Default:"defaultStory",All:"all",Mode:"mode",Ringed:"ringed",Fill:"fill",Bordered:"bordered",Rounded:"rounded",Icons:"icons",Loading:"loading",Sizes:"sizes",Playground:"playground"};g.parameters=g.parameters||{};g.parameters.docs={...g.parameters.docs||{},page:()=>n(R,{mdxStoryNameToKey:O,mdxComponentAnnotations:g},n(F,null))};const V=["iBell","iCart","Template","sizesClass","defaultStory","all","mode","ringed","fill","bordered","rounded","icons","loading","sizes","playground"];export{u as Template,V as __namedExportsOrder,f as all,h as bordered,g as default,x as defaultStory,S as fill,l as iBell,C as iCart,T as icons,A as loading,y as mode,z as playground,I as ringed,w as rounded,D as sizes,v as sizesClass};
//# sourceMappingURL=LBtn.stories.39119b5a.js.map
