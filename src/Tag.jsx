import React from 'react';

class Tag extends React.Component {

  handleOnClick = (event) => {
    console.log('clicked', event);
  }

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
  value: React.PropTypes.any.isRequired,
};

export default Tag;
