import { defineComponent, type InjectionKey } from "vue";

export type StateNavDefinition = {
  // State
};

export const NavContext = Symbol(
  "NavContext"
) as InjectionKey<StateNavDefinition>;

export const LNav = defineComponent({});
