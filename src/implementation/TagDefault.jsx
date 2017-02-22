import React from 'react';

import { focusElement, selectElement, defaultClassNamePrefix } from './util';
import { enterKeyCode, tabKeyCode } from '../keyCodes';

export const TagClassNameDefault = `${defaultClassNamePrefix}-tag`;

export const handleDoneEditingDefault = () => {};

const exitKeyCodesDefault = [
  enterKeyCode,
  tabKeyCode,
];

export class TagEdit extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    handleDoneEditing: React.PropTypes.func.isRequired,
    setIsEditing: React.PropTypes.func.isRequired,
    TagClassName: React.PropTypes.string,
    focusElement: React.PropTypes.func.isRequired,
    selectElement: React.PropTypes.func.isRequired,
    exitKeyCodes: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  }

  static defaultProps = {
    handleDoneEditing: handleDoneEditingDefault,
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
      this.handleDoneEditing();
    }
  }

  handleOnBlur = () => {
    const { setIsEditing } = this.props;
    setIsEditing(false);
    this.handleDoneEditing();
  }

  handleDoneEditing = () => {
    const { handleDoneEditing } = this.props;
    handleDoneEditing();
  }

  render() {
    const { value, TagClassName } = this.props;
    return (
      <textarea
        ref={(c) => { this.tagTextArea = c; }}
        value={value}
        onBlur={this.handleOnBlur}
        onChange={this.handleOnChange}
        onKeyDown={this.handleOnKeyDown}
        className={TagClassName}
      />
    );
  }
}

export const TagRead = ({
  value,
  handleRemove,
  setIsEditing,
  TagClassName,
}) =>
  <span
    className={TagClassName}
  >
    <span // eslint-disable-line jsx-a11y/no-static-element-interactions
      onClick={() => setIsEditing(true)}
    >
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
    handleDoneEditing: React.PropTypes.func,
    TagClassName: React.PropTypes.string,
  }

  static defaultProps = {
    TagClassName: TagClassNameDefault,
  }

  state = {
    isEditing: false,
  }

  setIsEditing = (isEditing) => {
    this.setState({ isEditing });
  }

  render() {
    const { value, handleEdit, handleRemove, handleDoneEditing, TagClassName } = this.props;
    const { isEditing } = this.state;
    if (isEditing) {
      return (
        <TagEdit
          value={value}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          handleDoneEditing={handleDoneEditing}
          setIsEditing={this.setIsEditing}
          TagClassName={TagClassName}
        />
      );
    }
    return (
      <TagRead
        value={value}
        handleRemove={handleRemove}
        setIsEditing={this.setIsEditing}
        TagClassName={TagClassName}
      />
    );
  }
}
