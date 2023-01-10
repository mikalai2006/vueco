var I=Object.defineProperty;var a=(t,e)=>I(t,"name",{value:e,configurable:!0});import"./jsx-runtime.90eb8a70.js";import{c as n,A as T,C as v,S as r,M as S,a as d}from"./Props.6bcbec0e.js";import"./iframe.13f63e9f.js";import{a as c}from"./vue.esm-bundler.780544ed.js";import{_ as o,L as x}from"./FButton.e2284790.js";import{L as u}from"./LIcon.15f4bd65.js";import{_ as h}from"./FSpinner.5c65aea2.js";import"./string.6f3fde6b.js";import"./es.map.constructor.8d5d0393.js";import"./es.number.to-fixed.1a66f715.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ripple.4234d591.js";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},B.apply(this,arguments)}a(B,"_extends");const s="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z",K="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z",m=a(t=>({components:{FButton:o},setup(){return{args:t}},template:'<FButton v-bind="args">{{ args.mode }}</FButton>'}),"Template"),P={iBell:s,Template:m},D="wrapper";function L({components:t,...e}){return n(D,B({},P,e,{components:t,mdxType:"MDXLayout"}),n(S,{title:"components/Buttons",component:o,subcomponents:{LBtn:x},argTypes:{as:{options:["a","div","button"]},mode:{options:["primary","second","danger"]}},mdxType:"Meta"}),n("h1",null,"FButton"),n("h2",null,"Playground"),n("p",null,"Change properties to see them in action"),n(v,{mdxType:"Canvas"},n(r,{name:"Playground",args:{as:"a",mode:"second"},mdxType:"Story"},m.bind({}))),n(d,{story:"Playground",mdxType:"ArgsTable"}),n("h2",null,"WithTooltip"),n("p",null,"Change properties to see them in action"),n(v,{mdxType:"Canvas"},n(r,{name:"WithTooltip",args:{},mdxType:"Story"},l=>({components:{FButton:o,LIcon:u},setup(){return{iBell:s,args:l}},template:`
          <div  v-for="i in 100">
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
          </div>
        `}))),n(d,{story:"WithTooltip",mdxType:"ArgsTable"}),n("h2",null,"All"),n(r,{name:"All",args:{},mdxType:"Story"},l=>({components:{FButton:o,LIcon:u},setup(){return{iBell:s}},template:`
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
            <FButton v-tooltip:left="{content:'Hello Popper (left)', showTriggers: ['click'], hideTriggers: ['click']}" fill aria-label="bell">
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
            <FButton mode="primary" fill  v-tooltip:left="{content:'Hello Popper (left)'}">Primary</FButton>
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
            <FButton v-tooltip:right="{content:'Hello Popper (right)', showTriggers: ['click'], hideTriggers: ['click']}" mode="danger">Danger</FButton>
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
            <FButton  v-tooltip="{content:'Hello Popper (top)', placement: 'top'}" mode="danger" fill>
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
            <FButton v-tooltip:left="{content:'Hello Popper (left)'}" mode="link">Danger</FButton>
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
      `})),n("h2",null,"FButton"),n(r,{name:"FButton",args:{},mdxType:"Story"},l=>({components:{FButton:o},setup(){const i=c(!1);return{args:{...l},iBell:s,pressed:i}},template:`
      <div class="">
        <FButton v-bind="args" v-model:pressed="pressed">Primary</FButton>
      </div>
      `})),n(d,{story:"FButton",mdxType:"ArgsTable"}),n(v,{mdxType:"Canvas"},n(r,{name:"FButtonWithSpinner",args:{},mdxType:"Story"},l=>({components:{FButton:o,FSpinner:h},setup(){const i=c(!1);return{args:{...l},iBell:s,pressed:i}},template:`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        `}))),n(d,{story:"FButtonWithSpinner",mdxType:"ArgsTable"}))}a(L,"MDXContent");L.isMDXComponent=!0;const F=m.bind({});F.storyName="Playground";F.args={as:"a",mode:"second"};F.parameters={storySource:{source:`args => {
  return {
    components: {
      FButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<FButton v-bind="args">{{ args.mode }}</FButton>'
  };
}`}};const g=a(t=>({components:{FButton:o,LIcon:u},setup(){return{iBell:s,args:t}},template:`
          <div  v-for="i in 100">
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
          </div>
        `}),"withTooltip");g.storyName="WithTooltip";g.args={};g.parameters={storySource:{source:`args => {
  return {
    components: {
      FButton,
      LIcon
    },
    setup() {
      return {
        iBell,
        args
      };
    },
    template: \`
          <div  v-for="i in 100">
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
            <FButton v-bind="args" v-tooltip="{ content: 'Hello button!' }">
              With tooltip
            </FButton>
          </div>
        \`
  };
}`}};const f=a(t=>({components:{FButton:o,LIcon:u},setup(){return{iBell:s}},template:`
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
            <FButton v-tooltip:left="{content:'Hello Popper (left)', showTriggers: ['click'], hideTriggers: ['click']}" fill aria-label="bell">
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
            <FButton mode="primary" fill  v-tooltip:left="{content:'Hello Popper (left)'}">Primary</FButton>
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
            <FButton v-tooltip:right="{content:'Hello Popper (right)', showTriggers: ['click'], hideTriggers: ['click']}" mode="danger">Danger</FButton>
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
            <FButton  v-tooltip="{content:'Hello Popper (top)', placement: 'top'}" mode="danger" fill>
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
            <FButton v-tooltip:left="{content:'Hello Popper (left)'}" mode="link">Danger</FButton>
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
      `}),"all");f.storyName="All";f.args={};f.parameters={storySource:{source:`args => {
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
            <FButton v-tooltip:left="{content:'Hello Popper (left)', showTriggers: ['click'], hideTriggers: ['click']}" fill aria-label="bell">
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
            <FButton mode="primary" fill  v-tooltip:left="{content:'Hello Popper (left)'}">Primary</FButton>
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
            <FButton v-tooltip:right="{content:'Hello Popper (right)', showTriggers: ['click'], hideTriggers: ['click']}" mode="danger">Danger</FButton>
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
            <FButton  v-tooltip="{content:'Hello Popper (top)', placement: 'top'}" mode="danger" fill>
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
            <FButton v-tooltip:left="{content:'Hello Popper (left)'}" mode="link">Danger</FButton>
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
}`}};const y=a(t=>({components:{FButton:o},setup(){const e=c(!1);return{args:{...t},iBell:s,pressed:e}},template:`
      <div class="">
        <FButton v-bind="args" v-model:pressed="pressed">Primary</FButton>
      </div>
      `}),"fButton");y.storyName="FButton";y.args={};y.parameters={storySource:{source:`args => {
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
}`}};const b=a(t=>({components:{FButton:o,FSpinner:h},setup(){const e=c(!1);return{args:{...t},iBell:s,pressed:e}},template:`
        <FButton v-bind="args" v-model:pressed="pressed">
          <div class="flex items-center">
            <FSpinner role="presentation" class="mr-2" /> Load
          </div>
        </FButton>
        `}),"fButtonWithSpinner");b.storyName="FButtonWithSpinner";b.args={};b.parameters={storySource:{source:`args => {
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
}`}};const p={title:"components/Buttons",component:o,subcomponents:{LBtn:x},argTypes:{as:{options:["a","div","button"]},mode:{options:["primary","second","danger"]}},includeStories:["playground","withTooltip","all","fButton","fButtonWithSpinner"]},k={Playground:"playground",WithTooltip:"withTooltip",All:"all",FButton:"fButton",FButtonWithSpinner:"fButtonWithSpinner"};p.parameters=p.parameters||{};p.parameters.docs={...p.parameters.docs||{},page:()=>n(T,{mdxStoryNameToKey:k,mdxComponentAnnotations:p},n(L,null))};const $=["iBell","iCart","Template","playground","withTooltip","all","fButton","fButtonWithSpinner"];export{m as Template,$ as __namedExportsOrder,f as all,p as default,y as fButton,b as fButtonWithSpinner,s as iBell,K as iCart,F as playground,g as withTooltip};
//# sourceMappingURL=LBtn.stories.825b1bec.js.map
