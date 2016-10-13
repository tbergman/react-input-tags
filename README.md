# react-tagging
React component for tagging inputs.

## TODO:
### Basic
- [X] insert a tag on keydown (enter, tab, comma) or onblur, clear the input
- [X] delete a tag on keydown (backspace / delete) or onclick of button
- [X] input placeholder
- [X] input autosize while typing
- [ ] tests

### Advanced
- [X] display list of suggestions onInputChange
  - [ ] only display list of suggestions when there is text typed
- [ ] select suggestion, insert as tag
  - [ ] if click a suggestion, onblur shouldn't insert the typed text as tag (prevent default?)
- [ ] edit tag by clicking
- [ ] reorder tags by dragging
- [ ] drag tag from one component to another (onDrag?)
- [ ] tests

### Dev
- [ ] continuous integration with tests
- [ ] demo website
