# react-tagging
React component for tagging inputs.

## TODO:
### Basic
- [X] insert a tag on keydown (enter, tab, comma) or onblur, clear the input
- [X] delete a tag on keydown (backspace / delete) or onclick of button
- [X] input placeholder
- [X] input autosize while typing
- [ ] tests
- [ ] make entire tagsinput container clickable, how does i-like-robots do it?

### Suggestions
- [X] display list of suggestions onInputChange
  - [ ] only display list of suggestions when there is text typed
  - [ ] container? tagsinput component? tagsinput seems like it should be separated from suggestions
- [ ] select suggestion, insert as tag
  - [ ] if click a suggestion, onblur shouldn't insert the typed text as tag (prevent default?)

### Advanced
- [ ] edit tag by clicking
- [ ] reorder tags by dragging
- [ ] drag tag from one component to another (onDrag?)
- [ ] validate tags
- [ ] tests

### Dev
- [ ] watchify, browserify hot module reload, dev server
- [ ] continuous integration with tests with Jenkins
- [ ] demo website using github pages
