var y=Object.defineProperty;var l=(n,t)=>y(n,"name",{value:t,configurable:!0});import"./jsx-runtime.e8334e0a.js";import{c as e,A as b,M as v,S as c,a as f,C as I}from"./Props.d9ccfa7a.js";import"./iframe.62c1ba6d.js";import{r as p}from"./vue.esm-bundler.a08ba302.js";import{L as d,_ as r}from"./FButton.6d175000.js";import{L}from"./LIcon.ca56402e.js";import{_ as x}from"./FSpinner.02b7571f.js";import"./string.6315b796.js";import"./es.map.constructor.ec0fd5c7.js";import"./es.number.to-fixed.0aaad78f.js";function u(){return u=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},u.apply(this,arguments)}l(u,"_extends");const s="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z",j="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z",h=l(n=>({components:{LBtn:d},setup(){return{args:{...n}}},template:'<LBtn v-bind="args">Button</LBtn>'}),"Template"),S={iBell:s,Template:h},D="wrapper";function g({components:n,...t}){return e(D,u({},S,t,{components:n,mdxType:"MDXLayout"}),e(v,{title:"components/Buttons",component:d,argTypes:{mode:{control:{type:"select"},options:["primary","second","danger"]},as:{control:{type:"select"},options:["div","a","button"]},disabled:{control:"boolean"},fill:{control:"boolean"}},mdxType:"Meta"}),e("h1",null,"LBtn"),e("h2",null,"All"),e(c,{name:"All",args:{},mdxType:"Story"},o=>({components:{FButton:r,LIcon:L},setup(){return{iBell:s}},template:`
      <div class="flex flex-col space-y-6">
        <h1>Button</h1>
        <h2>Secondary</h2>
        <div class="flex space-x-2">
          <FButton>Secondary</FButton>
          <FButton fill>Secondary</FButton>
          <FButton aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton fill aria-label="bell">
            <span class="flex items-center space-x-2">
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
              <span>Secondary</span>
            </span>
          </FButton>
          <FButton fill disabled>Disabled</FButton>
        </div>
        <h2>Primary</h2>
        <div class="flex space-x-2">
          <FButton mode="primary">Primary</FButton>
          <FButton mode="primary" fill>Primary</FButton>
          <FButton mode="primary" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="primary" fill aria-label="bell">
            <span class="flex items-center space-x-2">
              <span>Primary</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
          <FButton mode="primary" disabled aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
        </div>
        <h2>Danger</h2>
        <div class="flex space-x-2">
          <FButton mode="danger">Danger</FButton>
          <FButton mode="danger" fill>Danger</FButton>
          <FButton mode="danger" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="danger" fill>
            <span class="flex items-center space-x-2">
              <span>Danger</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
          <FButton mode="danger" disabled fill>
            <span class="flex items-center space-x-2">
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
              <span>Danger</span>
            </span>
          </FButton>
        </div>
        <h2>Link</h2>
        <div class="flex space-x-2">
          <FButton mode="link">Danger</FButton>
          <FButton mode="link" fill>Danger</FButton>
          <FButton mode="link" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="link" fill>
            <span class="flex items-center space-x-2">
              <span>Danger</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
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
      `})),e("h2",null,"FButton"),e(c,{name:"FButton",args:{},mdxType:"Story"},o=>({components:{FButton:r},setup(){const a=p(!1);return{args:{...o},iBell:s,pressed:a}},template:`
      <div class="">
        <FButton v-bind="args" v-model:pressed="pressed">Primary</FButton>
      </div>
      `})),e(f,{story:"FButton",mdxType:"ArgsTable"}),e(I,{mdxType:"Canvas"},e(c,{name:"FButtonWithSpinner",args:{},mdxType:"Story"},o=>({components:{FButton:r,FSpinner:x},setup(){const a=p(!1);return{args:{...o},iBell:s,pressed:a}},template:`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        `}))),e(f,{story:"FButtonWithSpinner",mdxType:"ArgsTable"}))}l(g,"MDXContent");g.isMDXComponent=!0;const B=l(n=>({components:{FButton:r,LIcon:L},setup(){return{iBell:s}},template:`
      <div class="flex flex-col space-y-6">
        <h1>Button</h1>
        <h2>Secondary</h2>
        <div class="flex space-x-2">
          <FButton>Secondary</FButton>
          <FButton fill>Secondary</FButton>
          <FButton aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton fill aria-label="bell">
            <span class="flex items-center space-x-2">
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
              <span>Secondary</span>
            </span>
          </FButton>
          <FButton fill disabled>Disabled</FButton>
        </div>
        <h2>Primary</h2>
        <div class="flex space-x-2">
          <FButton mode="primary">Primary</FButton>
          <FButton mode="primary" fill>Primary</FButton>
          <FButton mode="primary" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="primary" fill aria-label="bell">
            <span class="flex items-center space-x-2">
              <span>Primary</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
          <FButton mode="primary" disabled aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
        </div>
        <h2>Danger</h2>
        <div class="flex space-x-2">
          <FButton mode="danger">Danger</FButton>
          <FButton mode="danger" fill>Danger</FButton>
          <FButton mode="danger" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="danger" fill>
            <span class="flex items-center space-x-2">
              <span>Danger</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
          <FButton mode="danger" disabled fill>
            <span class="flex items-center space-x-2">
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
              <span>Danger</span>
            </span>
          </FButton>
        </div>
        <h2>Link</h2>
        <div class="flex space-x-2">
          <FButton mode="link">Danger</FButton>
          <FButton mode="link" fill>Danger</FButton>
          <FButton mode="link" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="link" fill>
            <span class="flex items-center space-x-2">
              <span>Danger</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
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
        <div class="flex space-x-2">
          <FButton>Secondary</FButton>
          <FButton fill>Secondary</FButton>
          <FButton aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton fill aria-label="bell">
            <span class="flex items-center space-x-2">
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
              <span>Secondary</span>
            </span>
          </FButton>
          <FButton fill disabled>Disabled</FButton>
        </div>
        <h2>Primary</h2>
        <div class="flex space-x-2">
          <FButton mode="primary">Primary</FButton>
          <FButton mode="primary" fill>Primary</FButton>
          <FButton mode="primary" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="primary" fill aria-label="bell">
            <span class="flex items-center space-x-2">
              <span>Primary</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
          <FButton mode="primary" disabled aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
        </div>
        <h2>Danger</h2>
        <div class="flex space-x-2">
          <FButton mode="danger">Danger</FButton>
          <FButton mode="danger" fill>Danger</FButton>
          <FButton mode="danger" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="danger" fill>
            <span class="flex items-center space-x-2">
              <span>Danger</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
          <FButton mode="danger" disabled fill>
            <span class="flex items-center space-x-2">
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
              <span>Danger</span>
            </span>
          </FButton>
        </div>
        <h2>Link</h2>
        <div class="flex space-x-2">
          <FButton mode="link">Danger</FButton>
          <FButton mode="link" fill>Danger</FButton>
          <FButton mode="link" aria-label="bell">
            <LIcon>
              {{iBell}}
            </LIcon>
          </FButton>
          <FButton mode="link" fill>
            <span class="flex items-center space-x-2">
              <span>Danger</span>
              <LIcon role="presentation">
                {{iBell}}
              </LIcon>
            </span>
          </FButton>
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
      \`
  };
}`}};const m=l(n=>({components:{FButton:r},setup(){const t=p(!1);return{args:{...n},iBell:s,pressed:t}},template:`
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
}`}};const F=l(n=>({components:{FButton:r,FSpinner:x},setup(){const t=p(!1);return{args:{...n},iBell:s,pressed:t}},template:`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        `}),"fButtonWithSpinner");F.storyName="FButtonWithSpinner";F.args={};F.parameters={storySource:{source:`args => {
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
}`}};const i={title:"components/Buttons",component:d,argTypes:{mode:{control:{type:"select"},options:["primary","second","danger"]},as:{control:{type:"select"},options:["div","a","button"]},disabled:{control:"boolean"},fill:{control:"boolean"}},includeStories:["all","fButton","fButtonWithSpinner"]},P={All:"all",FButton:"fButton",FButtonWithSpinner:"fButtonWithSpinner"};i.parameters=i.parameters||{};i.parameters.docs={...i.parameters.docs||{},page:()=>e(b,{mdxStoryNameToKey:P,mdxComponentAnnotations:i},e(g,null))};const H=["iBell","iCart","Template","all","fButton","fButtonWithSpinner"];export{h as Template,H as __namedExportsOrder,B as all,i as default,m as fButton,F as fButtonWithSpinner,s as iBell,j as iCart};
//# sourceMappingURL=LBtn.stories.8a3e401b.js.map
