export const handleInsert = (currentTags, newTag) => {
  const newTags = [...currentTags, newTag];
  return newTags;
}

export const handleEdit = (currentTags, editTagIndex, newValue) => {
  const newTags = [
    ...currentTags.slice(0, editTagIndex),
    newValue,
    ...currentTags.slice(editTagIndex + 1),
  ];
  return newTags;
}

export const handleRemove = (currentTags, removeTagIndex) => {
  const newTags = [
    ...currentTags.slice(0, removeTagIndex),
    ...currentTags.slice(removeTagIndex + 1),
  ];
  return newTags;
}

export const noop = () => {};
