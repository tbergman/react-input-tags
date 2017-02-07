import React from 'react';
import InputTags from '../src/index.js';

const data = ['apple', 'banana', 'cherry'];

export class Example extends React.Component {
  static propTypes = {
    handleInsert: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    handleInputChange: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    handleInsert: () => {},
    handleRemove: () => {},
    handleInputChange: () => {},
  }

  state = {
    tags: [],
    suggestions: [],
  }

  handleInsert = (currentTags, newTag) => {
    this.props.handleInsert();
    const newTags = [...currentTags, newTag];
    this.setState({ tags: newTags });
    this.setState({ suggestions: [] });
  }

  handleRemove = (currentTags, removeTagIndex) => {
    this.props.handleRemove();
    const newTags = [
      ...currentTags.slice(0, removeTagIndex),
      ...currentTags.slice(removeTagIndex + 1),
    ];
    this.setState({ tags: newTags });
  }

  handleInputChange = (inputValue) => {
    this.props.handleInputChange();
    const newSuggestions = data.filter(datum => datum.indexOf(inputValue) !== -1);
    this.setState({ suggestions: newSuggestions });
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
          suggestions={this.state.suggestions}
          handleInputChange={this.handleInputChange}
          inputPlaceholder={'add tag'}
        />
      </div>
    );
  }
}
