import React from 'react';
import { InputTagsContainer } from '../index';

export class CustomTag extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
  }

  render() {
    const { value } = this.props;
    return (
      <span>
        {value}
      </span>
    );
  }
}

export const CustomTagFn = ({ value }) => (
  <span>
    {value}
  </span>
);

CustomTagFn.propTypes = {
  value: React.PropTypes.string.isRequired,
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
        TagImplementation={CustomTagFn}
      />
    );
  }
}
