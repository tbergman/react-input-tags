import React from 'react';
import { InputTagsContainer } from '../index';

const NameTag = ({ value, handleEdit, handleRemove, TagClassName }) => (
  <span
    className={TagClassName}
  >
    <span // eslint-disable-line jsx-a11y/no-static-element-interactions
      onClick={handleEdit}
    >
      {value.name || value.address}
    </span>
    <button
      onClick={handleRemove}
    >
      {'x'}
    </button>
  </span>
);

NameTag.propTypes = {
  value: React.PropTypes.object.isRequired,
  handleEdit: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
  TagClassName: React.PropTypes.string,
};

const AvatarSuggestion = ({ value, isHighlighted, handleHighlight, handleSelect }) => (
  <li // eslint-disable-line jsx-a11y/no-static-element-interactions
    className={(isHighlighted) ? 'react-input-tags-suggestion highlighted' : 'react-input-tags-suggestion'}
    onMouseOver={handleHighlight}
    onMouseDown={event => event.preventDefault()}
    onClick={handleSelect}
  >
    <img alt={'avatar'} src={`${value.url}`} width={'20px'} height={'20px'} />
    <div>
      {`${value.name} ${value.address}`}
    </div>
  </li>
  );

AvatarSuggestion.propTypes = {
  value: React.PropTypes.object.isRequired,
  isHighlighted: React.PropTypes.bool.isRequired,
  handleHighlight: React.PropTypes.func.isRequired,
  handleSelect: React.PropTypes.func.isRequired,
};

const suggestionsLocal = [
  { name: 'akinnee', address: 'alex@kinnee.com', url: 'https://avatars.githubusercontent.com/u/3019562?v=3' },
  { name: 'baldwmic', address: 'baldwmic@mail.gvsu.edu', url: 'https://avatars.githubusercontent.com/u/10538297?v=3' },
  { name: 'jimbol', address: 'jim.hall.dev@gmail.com', url: 'https://avatars.githubusercontent.com/u/1278367?v=3' },
  { name: 'neurosnap', address: 'neurosnap@gmail.com', url: 'https://avatars.githubusercontent.com/u/1940365?v=3' },
];

const getTagValueAddress = tag => tag.address;

const createTagObject = inputValue => ({ address: inputValue });

export class CustomTagSuggestionExample extends React.Component {
  static propTypes = {
    getTagValue: React.PropTypes.func.isRequired,
    createTag: React.PropTypes.func.isRequired,
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
  }

  static defaultProps = {
    getTagValue: getTagValueAddress,
    createTag: createTagObject,
    suggestions: suggestionsLocal,
  }

  state = {
    tags: [],
    suggestions: [],
  }

  handleUpdateTags = (newTags) => {
    this.setState({ tags: newTags });
  }

  handleUpdateSuggestions = (inputValue) => {
    const { suggestions } = this.props;
    const newSuggestions = suggestions
      .filter(suggestion => suggestion.address.indexOf(inputValue) !== -1);
    this.setState({ suggestions: newSuggestions });
  }

  render() {
    return (
      <InputTagsContainer
        TagImplementation={NameTag}
        SuggestionImplementation={AvatarSuggestion}
        tags={this.state.tags}
        handleUpdateTags={this.handleUpdateTags}
        getTagValue={this.props.getTagValue}
        createTag={this.props.createTag}
        inputPlaceholder={'Add tag'}
        suggestions={this.state.suggestions}
        handleUpdateSuggestions={this.handleUpdateSuggestions}
      />
    );
  }
}
