const removeEl = function (params: any) {
  const { preCircle } = params;
  if (preCircle) {
    preCircle.remove();
  }
};

const createRipple = (event: any) => {
  const button = event.currentTarget;
  const options = event.currentTarget.ripple_options;
  const preCircle = document.createElement("div");
  preCircle.className += "overflow-hidden absolute inset-0 rounded-md";
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  const target = button.getBoundingClientRect();
  circle.style.left = `${event.clientX - target.left - radius}px`; // - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - target.top - radius}px`; //  - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple");
  if (options.class) {
    circle.className += ` ${options.class}`;
  } else {
    circle.className += " bg-black/20 dark:bg-white/20";
  }
  circle.style.animation = `ripple ${options.duration || 600}ms ${
    options.timingf || "linear"
  }`;
  preCircle.appendChild(circle);
  button.prepend(preCircle);

  setTimeout(
    removeEl.bind(null, { preCircle, options }),
    options.duration || 600
  );
};

export const ripple = {
  mounted: (el: any, binding: any): any => {
    if (binding.value) {
      const options = binding.value;
      el.addEventListener("click", createRipple);
      el.ripple_options = options;
    }
  },
  updated(el: any, binding: any) {
    const options = binding;
    if (options.oldValue !== options.value) {
      // el.removeEventListener('click', createRipple)
      el.ripple_options = { ...options.value };
      // el.addEventListener('click', createRipple)
    }
  },
};
