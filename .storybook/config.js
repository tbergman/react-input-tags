import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/index.js');
  require('../stories/Example.jsx');
  require('../stories/InputTagsContainer.jsx');
  require('../stories/InputTags.jsx');
  require('../stories/Input.jsx');
  require('../stories/Tag.jsx');
  require('../stories/List.jsx');
  require('../stories/Suggestion.jsx');
}

configure(loadStories, module);
