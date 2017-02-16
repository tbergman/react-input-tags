import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/index.js');
  require('../stories/ListItem.jsx');
}

configure(loadStories, module);
