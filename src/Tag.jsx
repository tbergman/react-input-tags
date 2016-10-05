import React from 'react';

export class Tag extends React.Component {

  render() {
    const { value, handleRemove } = this.props;
    return (
      <div>
        <div>
          {value}
        </div>
        <button
          onClick={handleRemove}
        >
          {'X'}
        </button>
      </div>
    );
  }
}
