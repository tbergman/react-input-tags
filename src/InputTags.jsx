import React from 'react';

import { Input } from './Input.jsx';
import { TagList } from './TagList.jsx';

import {
  defaultInsertKeyCodes,
  defaultRemoveKeyCodes,
  defaultInputPlaceholder,
  defaultRenderTag,
  defaultInputTagsStyle,
  defaultTagListStyle,
} from './default.jsx';

export class InputTags extends React.Component {
  static propTypes = {
    tags: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    handleInsert: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    insertKeyCodes: React.PropTypes.object,
    removeKeyCodes: React.PropTypes.object,
    inputPlaceholder: React.PropTypes.string,
    renderTag: React.PropTypes.func,
    InputTagsStyle: React.PropTypes.object,
    tagListStyle: React.PropTypes.object,
  };

  static defaultProps = {
    insertKeyCodes: defaultInsertKeyCodes,
    removeKeyCodes: defaultRemoveKeyCodes,
    inputPlaceholder: defaultInputPlaceholder,
    renderTag: defaultRenderTag,
    InputTagsStyle: defaultInputTagsStyle,
    tagListStyle: defaultTagListStyle,
  };

  state = {
    inputValue: '',
  }

  handleOnChange = (event) => {
    const inputValue = event.target.value;
    this.setState({ inputValue });
  }

  handleOnBlur = () => {
    const { inputValue } = this.state;
    const { tags, handleInsert } = this.props;

    if (inputValue.length > 0) {
      this.setState({ inputValue: '' });
      handleInsert(tags, inputValue);
    }
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { inputValue } = this.state;
    const { tags, handleInsert, handleRemove, insertKeyCodes, removeKeyCodes } = this.props;

    if (insertKeyCodes.hasOwnProperty(keyCode) && inputValue.length > 0) {
      this.setState({ inputValue: '' });
      handleInsert(tags, inputValue);
    }

    if (removeKeyCodes.hasOwnProperty(keyCode) && inputValue.length === 0 && tags.length > 0) {
      handleRemove(tags, tags.length - 1);
    }
  }

  render() {
    const {
      tags,
      handleRemove,
      inputPlaceholder,
      renderTag,
      InputTagsStyle,
      tagListStyle,
    } = this.props;
    const { inputValue } = this.state;
    return (
      <div style={InputTagsStyle}>
        <TagList
          tags={tags}
          handleRemove={handleRemove}
          renderTag={renderTag}
          tagListStyle={tagListStyle}
        />
        <Input
          value={inputValue}
          onChange={this.handleOnChange}
          onBlur={this.handleOnBlur}
          onKeyDown={this.handleOnKeyDown}
          placeholder={inputPlaceholder}
        />
      </div>
    );
  }
}
