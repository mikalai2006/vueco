import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import { FCombobox } from "@/components/ui/index";
import { ref, defineComponent } from "vue";
import { vi } from "vitest";
import {
  LCombobox,
  LComboboxInput,
  LComboboxOptions,
  LComboboxOption,
} from "@/components/LCombobox";

const testProps = {
  autocomplete: "both",
  id: "friends",
  name: "friends",
  component: "FCombobox",
  keyValue: "title", // ключ для свойства
  keyLabel: "title",
  keyFilter: "title",
  autofocus: true,
  label: "Your friends",
  description: "Choose friends your know",
  placeholder: "Choose friends",
  items: [
    {
      id: 1,
      title: "One",
    },
    {
      id: 2,
      title: "Two",
    },
    {
      id: 3,
      title: "Three",
    },
  ],
  vtype: "array",
  rules: [
    {
      type: "required",
      params: ["This field is required"],
    },
    {
      type: "length",
      params: [1, "Languages cannot be less than 1 language"],
    },
  ],
};
const testComponent = defineComponent({
  components: {
    LCombobox,
    LComboboxInput,
    LComboboxOptions,
    LComboboxOption,
  },
  setup() {
    const model = ref("");
    const field = ref(testProps);
    return {
      model,
      field,
    };
  },
  template: `
  <LCombobox :field="field" v-model="model">
    <LComboboxInput></LComboboxInput>
    <LComboboxOptions #default="{ options, hasOptions }">
        <template v-if="hasOptions">
          <LComboboxOption
            v-for="option of options"
            :key="field.keyValue ? option[field.keyValue] : option"
            :value="option"
            class="group relative overflow-hidden"
            #default="{ selected, hovered, height }"
          ></LComboboxOption>
        </template>
        <template v-else>
          <div class="p-2">None options</div>
        </template>
    </LComboboxOptions>
  </LCombobox>`,
});
const model = ref("");

describe("Combobox with autocomplete", () => {
  it("should be render with default options", () => {
    const wrapper = mount(testComponent);

    expect(wrapper.html()).toBeDefined();
    expect(wrapper.find("input").attributes("aria-expanded")).toBe("false");
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should be by press ArrowDown ", async () => {
    const wrapper = mount(testComponent);

    await wrapper.find("input").trigger("click");
    expect(wrapper.find("input").attributes("aria-expanded")).toBe("true");
    await wrapper.find("input").trigger("keydown", { key: "ArrowDown" });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("LCombobox filter", () => {
    // vi.useFakeTimers();
    const wrapper = mount(testComponent);

    wrapper.find("input").trigger("click");
    wrapper.find("input").setValue("Gogo");
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.findAll("[role='option']").length).toEqual(0);
    });
    // vi.advanceTimersByTime(20000);
  });
});

describe("FCombobox", () => {
  it("renders properly", () => {
    const wrapper = mount(FCombobox, {
      props: { field: testProps, modelValue: model.value },
    });

    expect(wrapper.html()).toBeDefined();
    expect(wrapper.find("input").attributes("aria-expanded")).toBe("false");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

describe("FCombobox a11y", () => {
  it("autocomplete none", () => {
    const wrapper = mount(FCombobox, {
      props: {
        field: { ...testProps, autocomplete: "none" },
        modelValue: model.value,
      },
    });

    expect(wrapper.html()).toBeDefined();
    expect(wrapper.find("[role='combobox']")).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("autocomplete both", () => {
    const wrapper = mount(FCombobox, {
      props: {
        field: { ...testProps, autocomplete: "both" },
        modelValue: model.value,
      },
    });

    expect(wrapper.html()).toBeDefined();
    expect(wrapper.find("[role='combobox']")).toBeDefined();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("role=listbox", () => {
    const wrapper = mount(FCombobox, {
      props: { field: testProps, modelValue: model.value },
    });

    expect(wrapper.find("[role='listbox']").attributes("id")).toBe(
      `${testProps.id}-listbox`
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("test aria-expanded", async () => {
    const wrapper = mount(FCombobox, {
      props: { field: testProps, modelValue: model.value },
    });

    await wrapper.find("input").trigger("click");
    expect(wrapper.find("input").attributes("aria-expanded")).toBe("true");
  });

  it("test aria-activedescendant(first)", async () => {
    const wrapper = mount(FCombobox, {
      props: { field: testProps, modelValue: model.value },
    });

    await wrapper.find("input").trigger("focus");
    await wrapper.find("input").trigger("keydown", { key: "ArrowDown" });
    const activedescendant = wrapper
      .find("input")
      .attributes("aria-activedescendant");
    expect(wrapper.findAll("[role='option']")[0].attributes("id")).toBe(
      activedescendant
    );
  });
  it("test aria-activedescendant(last)", async () => {
    const wrapper = mount(FCombobox, {
      props: { field: testProps, modelValue: model.value },
    });

    await wrapper.find("input").trigger("focus");
    await wrapper.find("input").trigger("keydown", { key: "ArrowUp" });
    const activedescendant = wrapper
      .find("input")
      .attributes("aria-activedescendant");
    const allOptions = wrapper.findAll("[role='option']");
    expect(allOptions[allOptions.length - 1].attributes("id")).toBe(
      activedescendant
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
  // it("load items", () => {
  //   const wrapper = mount(FCombobox, {
  //     props: { field: testProps, modelValue: model },
  //     slots: {

  //     }
  //   });
  //   expect(wrapper.html()).toBeDefined();
  //   expect(wrapper.html()).toMatchSnapshot();
  // });
});
