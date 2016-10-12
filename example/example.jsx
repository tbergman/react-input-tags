import React from 'react';
import ReactDOM from 'react-dom';
import { InputTags } from '../src/InputTags.jsx';

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

  render() {
    return (
      <div
        className={'container'}
      >
        <InputTags
          tags={this.state.tags}
          handleInsert={this.handleInsert}
          handleRemove={this.handleRemove}
          inputPlaceholder={'add tag'}
        />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('react-app'));
