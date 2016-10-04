export const arrayIncludes = (array, searchElement) => {
  const indexOfElement = array.indexOf(searchElement);
  if (indexOfElement === -1) return false;
  return true;
};
