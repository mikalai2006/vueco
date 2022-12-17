let id = 0;

function generateId() {
  return ++id;
}

export const useId = () => generateId();
