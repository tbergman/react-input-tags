# react-tagging
React component for tagging inputs.

## TODO:
### Basic
- [X] insert a tag on keydown (enter, tab, comma) or onblur, clear the input
- [X] delete a tag on keydown (backspace / delete) or onclick of button
- [X] input placeholder
- [ ] input autosize while typing
- [ ] custom styling
- [X] custom render of tag

### Advanced
- [ ] list of suggestions, click one will insert as tag
- [ ] custom render of suggestion
- [ ] reorder tags by dragging
- [ ] drag tag from one component to another (onDrag?)

## Dev
### Commands
#### Build
```
npm run build
```

#### Test
```
npm test
```

### Environment
- es2015: https://babeljs.io/docs/setup/#installation
- react: https://facebook.github.io/react/docs/package-management.html
https://facebook.github.io/react/docs/reusable-components.html#es6-classes
- enzyme: https://github.com/airbnb/enzyme

## Component Research
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- https://facebook.github.io/react/docs/forms.html
- https://facebook.github.io/react/docs/events.html#keyboard-events
- https://developer.mozilla.org/en-US/docs/Web/Events/keydown
- https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
- http://stackoverflow.com/questions/3396754/onkeypress-vs-onkeyup-and-onkeydown
- http://caniuse.com/#feat=keyboardevent-key
- http://caniuse.com/#search=input
- http://caniuse.com/#feat=getcomputedstyle
- https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
- http://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
- https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
- http://making.fiftythree.com/fluid-text-inputs/
- http://caniuse.com/#search=textcontent

- http://alistapart.com/article/expanding-text-areas-made-elegant
- http://ngmodules.org/modules/angular-elastic-input

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals
