var g=Object.defineProperty;var l=(n,t)=>g(n,"name",{value:t,configurable:!0});import"./jsx-runtime.85c91f14.js";import{c as e,A as y,M as b,S as p,a as F,C as I}from"./Props.9569eb05.js";import"./iframe.1571f945.js";import{r as d}from"./vue.esm-bundler.4710087e.js";import{L as u}from"./ripple.8c7dd227.js";import{L as f}from"./LIcon.9826c8a0.js";import{_ as x}from"./FSpinner.d817384b.js";import{_ as i}from"./FButton.7dbe626b.js";import"./string.997b2c0c.js";import"./es.map.constructor.49db12e6.js";import"./es.number.to-fixed.d8f9414e.js";function c(){return c=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},c.apply(this,arguments)}l(c,"_extends");const o="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z",j="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z",h=l(n=>({components:{LBtn:u},setup(){return{args:{...n}}},template:'<LBtn v-bind="args">Button</LBtn>'}),"Template"),S={iBell:o,Template:h},D="wrapper";function L({components:n,...t}){return e(D,c({},S,t,{components:n,mdxType:"MDXLayout"}),e(b,{title:"components/Buttons",component:u,argTypes:{mode:{control:{type:"select"},options:["primary","second","danger"]},as:{control:{type:"select"},options:["div","a","button"]},disabled:{control:"boolean"},fill:{control:"boolean"}},mdxType:"Meta"}),e("h1",null,"LBtn"),e("h2",null,"All"),e(p,{name:"All",args:{},mdxType:"Story"},a=>({components:{FButton:i,LIcon:f},setup(){return{iBell:o}},template:`
      <div class="flex flex-col space-y-6">
        <h1>Button</h1>
        <h2>Secondary</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton>Secondary</FButton>
          </div>
          <div class="p-2">
            <FButton fill>Secondary</FButton>
          </div>
          <div class="p-2 text-xl">
            <FButton aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton fill aria-label="bell">
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Secondary</span>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton fill disabled>Disabled</FButton>
          </div>
        </div>
        <h2>Primary</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="primary">Primary</FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" fill>Primary</FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" fill aria-label="bell">
              <span class="flex items-center space-x-2">
                <span>Primary</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" disabled aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
        </div>
        <h2>Danger</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="danger">Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" fill>Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" fill>
              <span class="flex items-center space-x-2">
                <span>Danger</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" disabled fill>
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Danger</span>
              </span>
            </FButton>
          </div>
        </div>
        <h2>Link</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="link">Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" fill>Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" fill>
              <span class="flex items-center space-x-2">
                <span>Danger</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" disabled fill>
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Danger</span>
              </span>
            </FButton>
          </div>
        </div>
      </div>
      `})),e("h2",null,"FButton"),e(p,{name:"FButton",args:{},mdxType:"Story"},a=>({components:{FButton:i},setup(){const s=d(!1);return{args:{...a},iBell:o,pressed:s}},template:`
      <div class="">
        <FButton v-bind="args" v-model:pressed="pressed">Primary</FButton>
      </div>
      `})),e(F,{story:"FButton",mdxType:"ArgsTable"}),e(I,{mdxType:"Canvas"},e(p,{name:"FButtonWithSpinner",args:{},mdxType:"Story"},a=>({components:{FButton:i,FSpinner:x},setup(){const s=d(!1);return{args:{...a},iBell:o,pressed:s}},template:`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        `}))),e(F,{story:"FButtonWithSpinner",mdxType:"ArgsTable"}))}l(L,"MDXContent");L.isMDXComponent=!0;const B=l(n=>({components:{FButton:i,LIcon:f},setup(){return{iBell:o}},template:`
      <div class="flex flex-col space-y-6">
        <h1>Button</h1>
        <h2>Secondary</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton>Secondary</FButton>
          </div>
          <div class="p-2">
            <FButton fill>Secondary</FButton>
          </div>
          <div class="p-2 text-xl">
            <FButton aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton fill aria-label="bell">
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Secondary</span>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton fill disabled>Disabled</FButton>
          </div>
        </div>
        <h2>Primary</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="primary">Primary</FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" fill>Primary</FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" fill aria-label="bell">
              <span class="flex items-center space-x-2">
                <span>Primary</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" disabled aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
        </div>
        <h2>Danger</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="danger">Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" fill>Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" fill>
              <span class="flex items-center space-x-2">
                <span>Danger</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" disabled fill>
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Danger</span>
              </span>
            </FButton>
          </div>
        </div>
        <h2>Link</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="link">Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" fill>Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" fill>
              <span class="flex items-center space-x-2">
                <span>Danger</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" disabled fill>
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Danger</span>
              </span>
            </FButton>
          </div>
        </div>
      </div>
      `}),"all");B.storyName="All";B.args={};B.parameters={storySource:{source:`args => {
  return {
    components: {
      FButton,
      LIcon
    },
    setup() {
      return {
        iBell
      };
    },
    template: \`
      <div class="flex flex-col space-y-6">
        <h1>Button</h1>
        <h2>Secondary</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton>Secondary</FButton>
          </div>
          <div class="p-2">
            <FButton fill>Secondary</FButton>
          </div>
          <div class="p-2 text-xl">
            <FButton aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton fill aria-label="bell">
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Secondary</span>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton fill disabled>Disabled</FButton>
          </div>
        </div>
        <h2>Primary</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="primary">Primary</FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" fill>Primary</FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" fill aria-label="bell">
              <span class="flex items-center space-x-2">
                <span>Primary</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="primary" disabled aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
        </div>
        <h2>Danger</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="danger">Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" fill>Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" fill>
              <span class="flex items-center space-x-2">
                <span>Danger</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="danger" disabled fill>
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Danger</span>
              </span>
            </FButton>
          </div>
        </div>
        <h2>Link</h2>
        <div class="flex flex-wrap">
          <div class="p-2">
            <FButton mode="link">Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" fill>Danger</FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" aria-label="bell">
              <LIcon>
                {{iBell}}
              </LIcon>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" fill>
              <span class="flex items-center space-x-2">
                <span>Danger</span>
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
              </span>
            </FButton>
          </div>
          <div class="p-2">
            <FButton mode="link" disabled fill>
              <span class="flex items-center space-x-2">
                <LIcon role="presentation">
                  {{iBell}}
                </LIcon>
                <span>Danger</span>
              </span>
            </FButton>
          </div>
        </div>
      </div>
      \`
  };
}`}};const m=l(n=>({components:{FButton:i},setup(){const t=d(!1);return{args:{...n},iBell:o,pressed:t}},template:`
      <div class="">
        <FButton v-bind="args" v-model:pressed="pressed">Primary</FButton>
      </div>
      `}),"fButton");m.storyName="FButton";m.args={};m.parameters={storySource:{source:`args => {
  return {
    components: {
      FButton
    },
    setup() {
      const pressed = ref(false);
      return {
        args: {
          ...args
        },
        iBell,
        pressed
      };
    },
    template: \`
      <div class="">
        <FButton v-bind="args" v-model:pressed="pressed">Primary</FButton>
      </div>
      \`
  };
}`}};const v=l(n=>({components:{FButton:i,FSpinner:x},setup(){const t=d(!1);return{args:{...n},iBell:o,pressed:t}},template:`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        `}),"fButtonWithSpinner");v.storyName="FButtonWithSpinner";v.args={};v.parameters={storySource:{source:`args => {
  return {
    components: {
      FButton,
      FSpinner
    },
    setup() {
      const pressed = ref(false);
      return {
        args: {
          ...args
        },
        iBell,
        pressed
      };
    },
    template: \`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        \`
  };
}`}};const r={title:"components/Buttons",component:u,argTypes:{mode:{control:{type:"select"},options:["primary","second","danger"]},as:{control:{type:"select"},options:["div","a","button"]},disabled:{control:"boolean"},fill:{control:"boolean"}},includeStories:["all","fButton","fButtonWithSpinner"]},P={All:"all",FButton:"fButton",FButtonWithSpinner:"fButtonWithSpinner"};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:()=>e(y,{mdxStoryNameToKey:P,mdxComponentAnnotations:r},e(L,null))};const H=["iBell","iCart","Template","all","fButton","fButtonWithSpinner"];export{h as Template,H as __namedExportsOrder,B as all,r as default,m as fButton,v as fButtonWithSpinner,o as iBell,j as iCart};
//# sourceMappingURL=LBtn.stories.4519486d.js.map
