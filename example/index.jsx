import React from 'react';
import { render } from 'react-dom';
import ReactTagging from '../src/index.jsx';

class Example extends React.Component {
  state = {
    tags: [],
  }

  handleInsert = (currentTags, newTag) => {
    const newTags = [...currentTags, newTag];
    this.setState({ tags: newTags });
  }

  renderTag = tag => (
    <li>{tag}</li>
  );

  render() {
    return (
      <ReactTagging
        tags={this.state.tags}
        handleInsert={this.handleInsert}
        renderTag={this.renderTag}
      />
    );
  }
}

render(<Example />, document.getElementById('react-app'));
