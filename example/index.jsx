import React from 'react';
import { render } from 'react-dom';
import ReactTagging from '../src/index.jsx';

class Example extends React.Component {
  render() {
    return <ReactTagging />
  }
}

render(<Example />, document.getElementById('react-app'));
