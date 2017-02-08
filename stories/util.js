/* TODO: test these functions */

export handleInsert = (currentTags, newTag) => {
  const newTags = [...currentTags, newTag];
  return newTags;
}

export handleRemove = (currentTags, removeTagIndex) => {
  const newTags = [
    ...currentTags.slice(0, removeTagIndex),
    ...currentTags.slice(removeTagIndex + 1),
  ];
  return newTags;
}
