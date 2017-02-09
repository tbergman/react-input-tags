import React from 'react';

export class Tag extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    renderTag: React.PropTypes.func.isRequired,
  }

  // TODO: test setting state, calling callbacks
  state = {
    isEditing: false,
  }

  setIsEditing = (isEditing) => {
    this.setState({ isEditing });
  }

  render() {
    const { value, handleEdit, handleRemove, renderTag } = this.props;
    const { isEditing } = this.state;
    const setIsEditing = this.setIsEditing;
    return renderTag({ value, handleEdit, handleRemove, isEditing, setIsEditing });
  }
}
