import React from 'react';

export class Tag extends React.Component {

  // allow custom rendering of tag
  render() {
    const { value } = this.props;
    return (
      <li>
        {value}
      </li>
    );
  }
}

Tag.propTypes = {
  value: React.PropTypes.string,
};
