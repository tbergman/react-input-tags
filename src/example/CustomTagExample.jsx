import React from 'react';
import { InputTagsContainer } from '../index';

export const reverseString = string =>
  string.split('').reverse().join('');

export const ReverseTag = ({ value, handleRemove }) => (
  <span>
    <span>
      {reverseString(value)}
    </span>
    <button
      onClick={handleRemove}
    >
      {'x'}
    </button>
  </span>
  );

ReverseTag.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
};

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
        TagImplementation={ReverseTag}
      />
    );
  }
}
