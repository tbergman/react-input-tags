import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/index.js');
  require('../stories/Input.jsx');
  require('../stories/Tag.jsx');
  require('../stories/ListItem.jsx');
  require('../stories/List.jsx');
}

configure(loadStories, module);
