# [react-input-tags](https://www.npmjs.com/package/react-input-tags) | [demo](https://baldwmic.github.io/react-input-tags/)
React component for tagging inputs.

[![npm version](https://badge.fury.io/js/react-input-tags.svg)](https://badge.fury.io/js/react-input-tags)
![dependencies](https://david-dm.org/baldwmic/react-input-tags.svg)
[![travis-ci status](https://travis-ci.org/baldwmic/react-input-tags.png?branch=master)](https://travis-ci.org/baldwmic/react-input-tags)

## Getting Started
### Install Package
```
npm install --save react-input-tags
```

### Use Package
```
import React from 'react';
import { InputTagsContainer } from 'react-input-tags';

export class TagsExample extends React.Component {
  state = {
    tags: [],
  }

  handleUpdateTags = (tags) => {
    this.setState({ tags });
  }

  render() {
    return (
      <InputTagsContainer
        tags={this.state.tags}
        handleUpdateTags={this.handleUpdateTags}
      />
    );
  }
}
```

## API
Both the high-level `InputTagsContainer` component or the low-level `InputTags` component are exported for use.

### [InputTagsContainer](src/interface/InputTagsContainer.jsx)
|Property|Type|Required|Description|
|--------|----|:-----:|-----------|
|`tags`|Array|✓|An array of data that represents the value of the tags|
|`handleUpdateTags`|Function|✓|A function called when the value of tags changes, passes the tags value as an argument.|
|`inputPlaceholder`|String||The placeholder to populate the input with|
|`suggestions`|Array||An array of data that represents the value of the suggestions|
|`handleUpdateSuggestions`|Function||A function called when the value of input changes, passes the input value as an argument.|
|`getSuggestionValue`|Function||A function called when a suggestion is selected, passes the suggestion value as an argument.|
|`InputTagsContainerImplementation`|Function||A function called when InputTagsContainer component is to be rendered.|
|`InputTagsImplementation`|Function||A function called when InputTags component is to be rendered.|
|`InputImplementation`|Function||A function called when Input component is to be rendered.|
|`TagImplementation`|Function||A function called when Tag component is to be rendered.|
|`SuggestionListImplementation`|Function||A function called when SuggestionList component is to be rendered.|
|`SuggestionImplementation`|Function||A function called when Suggestion component is to be rendered.|

### [InputTags](src/interface/InputTags.jsx)
|Property|Type|Required|Description|
|--------|----|:-----:|-----------|
|`tags`|Array|✓|An array of data that represents the value of the tags|
|`handleInsert`|Function|✓|A function called when a tag will be inserted, passes the current tags value and new tag value as arguments.|
|`handleEdit`|Function|✓|A function called when a tag will be edited, passes the current tags value, index of the tag to be edited, and the new tag value as arguments.|
|`handleRemove`|Function|✓|A function called when a tag will be removed, passes the current tags value and index of the tag to be removed as arguments.|
|`inputPlaceholder`|String||The placeholder to populate the input with|
|`suggestions`|Array||An array of data that represents the value of the suggestions|
|`handleUpdateSuggestions`|Function||A function called when the value of input changes, passes the input value as an argument.|
|`getSuggestionValue`|Function||A function called when a suggestion is selected, passes the suggestion value as an argument.|
|`InputTagsImplementation`|Function||A function called when InputTags component is to be rendered.|
|`InputImplementation`|Function||A function called when Input component is to be rendered.|
|`TagImplementation`|Function||A function called when Tag component is to be rendered.|
|`SuggestionListImplementation`|Function||A function called when SuggestionList component is to be rendered.|
|`SuggestionImplementation`|Function||A function called when Suggestion component is to be rendered.|
