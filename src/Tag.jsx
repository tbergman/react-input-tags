import React from 'react';

export class Tag extends React.Component {
  static propTypes = {
    value: React.PropTypes.string.isRequired,
    handleEdit: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired,
    RenderTag: React.PropTypes.element.isRequired,
  }

  state = {
    isEditing: false,
  }

  setIsEditing = (isEditing) => {
    this.setState({ isEditing });
  }

  render() {
    const { value, handleEdit, handleRemove, RenderTag } = this.props;
    const { isEditing } = this.state;
    const setIsEditing = this.setIsEditing;
    return (
      // TODO: see how children would be better, composition!
      // we don't really want to call a function
      // we really want someone to define their own html / jsx
      // their own tag component basically, just connected to our API
      <RenderTag
        value={value}
        handleEdit={handleEdit}
        handleRemove={handleRemove}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    );
    // return renderTag({ value, handleEdit, handleRemove, isEditing, setIsEditing });
  }
}
