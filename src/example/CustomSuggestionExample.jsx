import React from 'react';
import { InputTagsContainer } from '../index';

export const AvatarSuggestion = ({ value, isHighlighted, handleHighlight, handleSelect }) => (
  <li // eslint-disable-line jsx-a11y/no-static-element-interactions
    className={(isHighlighted) ? 'react-input-tags-suggestion highlighted' : 'react-input-tags-suggestion'}
    onMouseOver={handleHighlight}
    onMouseDown={event => event.preventDefault()}
    onClick={handleSelect}
  >
    <img alt={'avatar'} src={`${value.url}`} width={'20px'} height={'20px'} />
    <div>
      {value.name}
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
  { name: 'akinnee', url: 'https://avatars.githubusercontent.com/u/3019562?v=3' },
  { name: 'baldwmic', url: 'https://avatars.githubusercontent.com/u/10538297?v=3' },
  { name: 'jimbol', url: 'https://avatars.githubusercontent.com/u/1278367?v=3' },
  { name: 'neurosnap', url: 'https://avatars.githubusercontent.com/u/1940365?v=3' },
];

const getSuggestionValueObject = suggestion => suggestion.name;

export class CustomSuggestionExample extends React.Component {
  static propTypes = {
    suggestions: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
    getSuggestionValue: React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    suggestions: suggestionsLocal,
    getSuggestionValue: getSuggestionValueObject,
  }

  state = {
    tags: [],
    suggestions: [],
  }

  handleUpdateTags = (newTags) => {
    this.setState({ tags: newTags });
  }

  handleUpdateSuggestions = (inputValue) => {
    const { suggestions, getSuggestionValue } = this.props;
    const newSuggestions = suggestions
      .filter(suggestion => getSuggestionValue(suggestion).indexOf(inputValue) !== -1);
    this.setState({ suggestions: newSuggestions });
  }

  render() {
    return (
      <InputTagsContainer
        SuggestionImplementation={AvatarSuggestion}
        tags={this.state.tags}
        handleUpdateTags={this.handleUpdateTags}
        inputPlaceholder={'Add tag'}
        suggestions={this.state.suggestions}
        handleUpdateSuggestions={this.handleUpdateSuggestions}
        getSuggestionValue={this.props.getSuggestionValue}
      />
    );
  }
}
