import React from 'react';
import { InputTagsContainer } from '../index';

export class CustomTag extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
  }

  render() {
    const { value, handleRemove } = this.props;
    return (
      <span>
        <span>
          {value}
        </span>
        <button
          onClick={handleRemove}
        >
          {'x'}
        </button>
      </span>
    );
  }
}

export class CustomTagExample extends React.Component {
  state = {
    tags: [],
  }

  handleUpdateTags = (newTags) => {
    this.setState({ tags: newTags });
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
