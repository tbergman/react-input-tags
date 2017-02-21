import React from 'react';

import { focusElement, selectElement } from './util';
import { enterKeyCode, tabKeyCode } from '../keyCodes';

const exitKeyCodesDefault = [
  enterKeyCode,
  tabKeyCode,
];

export class TagEdit extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    setIsEditing: React.PropTypes.func.isRequired,
    TagClassName: React.PropTypes.string,
    focusElement: React.PropTypes.func.isRequired,
    selectElement: React.PropTypes.func.isRequired,
    exitKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  }

  static defaultProps = {
    focusElement,
    selectElement,
    exitKeyCodes: exitKeyCodesDefault,
  }

  componentDidMount() {
    const element = this.tagTextArea;
    this.props.focusElement(element);
    this.props.selectElement(element);
  }

  handleOnChange = (event) => {
    const newValue = event.target.value;
    const { handleEdit, handleRemove } = this.props;
    if (newValue.length > 0) {
      handleEdit(newValue);
    } else {
      handleRemove();
    }
  }

  handleOnKeyDown = (event) => {
    const { keyCode } = event;
    const { exitKeyCodes, setIsEditing } = this.props;
    if (exitKeyCodes.includes(keyCode)) {
      setIsEditing(false);
    }
  }

  render() {
    const { value, setIsEditing } = this.props;
    return (
      <textarea
        ref={(c) => { this.tagTextArea = c; }}
        value={value}
        onBlur={() => setIsEditing(false)}
        onChange={this.handleOnChange}
        onKeyDown={this.handleOnKeyDown}
      />
    );
  }
}

export const TagRead = ({
  value,
  handleRemove,
  setIsEditing,
}) =>
  <span
    onDoubleClick={() => setIsEditing(true)}
  >
    <span>
      {value}
    </span>
    <button
      onClick={handleRemove}
    >
      {'x'}
    </button>
  </span>;

TagRead.propTypes = {
  value: React.PropTypes.string.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  setIsEditing: React.PropTypes.func.isRequired,
  TagClassName: React.PropTypes.string,
};

export class TagDefault extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    TagClassName: React.PropTypes.string,
  }

  state = {
    isEditing: false,
  }

  setIsEditing = (isEditing) => {
    this.setState({ isEditing });
  }

  render() {
    const { value, handleEdit, handleRemove } = this.props;
    const { isEditing } = this.state;
    if (isEditing) {
      return (
        <TagEdit
          value={value}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          setIsEditing={this.setIsEditing}
        />
      );
    }
    return (
      <TagRead
        value={value}
        handleRemove={handleRemove}
        setIsEditing={this.setIsEditing}
      />
    );
  }
}
