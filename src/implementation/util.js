export const focusElement = (element) => {
  if (!element) return;
  element.focus();
};

export const selectElement = (element) => {
  if (!element) return;
  element.select();
};

export const noop = () => {};

export const defaultClassNamePrefix = 'react-input-tags';
