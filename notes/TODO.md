# react-tagging
React component for tagging inputs.

## todo
### Basic
- [X] insert a tag on keydown (enter, tab, comma) or onblur, clear the input
- [X] delete a tag on keydown (backspace / delete) or onclick of button
- [X] input placeholder
- [X] input autosize while typing
- [X] tests
- [ ] make entire tagsinput container clickable, how does i-like-robots do it?

### Suggestions
- [X] display list of suggestions onInputChange
- [X] select suggestion, insert as tag
- [ ] tests
- [ ] container? tagsinput component? tagsinput seems like it should be separated from suggestions
- [ ] reasearch using children instead of passing in render functions
- [ ] autoselect the first item in suggestions list so enter will enter it
- [ ] enter, tab, comma should preventDefault to enter suggestion and not typed text in input
- [ ] navigate through list of suggestions using keyboard arrows
  - [ ] up and down to move through list
  - [ ] enter to add a suggestion as a tag
- [ ] highlight suggestions when move through them with keys, over them with mouse
- [ ] show loader for loading suggestions asynchronously

### Advanced
- [X] edit tag by clicking
- [ ] reorder tags by dragging
- [ ] drag tag from one component to another (onDrag?)
- [ ] validate tags
- [ ] tests

### WAI ARIA Compliance
- https://www.w3.org/TR/wai-aria-practices/#autocomplete
