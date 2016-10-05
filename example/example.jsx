import React from 'react';
import ReactDOM from 'react-dom';
import { TagsInput } from '../src';

class Example extends React.Component {
  state = {
    tags: [],
  }

  handleInsert = (currentTags, newTag) => {
    const newTags = [...currentTags, newTag];
    this.setState({ tags: newTags });
  }

  handleRemove = (currentTags, removeTagIndex) => {
    const newTags = [
      ...currentTags.slice(0, removeTagIndex),
      ...currentTags.slice(removeTagIndex + 1),
    ];
    this.setState({ tags: newTags });
  }

  renderTag = tag => (
    <div>{tag}</div>
  );

  render() {
    return (
      <TagsInput
        tags={this.state.tags}
        handleInsert={this.handleInsert}
        handleRemove={this.handleRemove}
        // renderTag={this.renderTag}
      />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('react-app'));
