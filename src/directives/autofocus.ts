export const autofocus = {
  mounted: (el: any, binding): any => {
    const { status } = binding.value;
    if (el && status) {
      el.focus();
    }
  },
};
