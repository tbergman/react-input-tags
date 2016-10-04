import React from 'react';

class Tag extends React.Component {

  handleOnClick = (event) => {
    console.log('clicked', event);
  }

  // allow custom rendering of tag
  render() {
    const { index, value } = this.props;
    return (
      <li key={index}>
        <div onClick={this.handleOnClick}>
          {value}
        </div>
      </li>
    );
  }
}

Tag.propTypes = {
  index: React.PropTypes.number.isRequired,
  value: React.PropTypes.any,
};

export default Tag;
