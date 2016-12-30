# react-tagging
React component for tagging inputs.

## TODO:
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
- [ ] maybe even split up input, tags, suggestions
- [ ] autoselect the first item in suggestions list so enter will enter it
- [ ] enter, tab, comma should preventDefault to enter suggestion and not typed text in input
- [ ] navigate through list of suggestions using keyboard arrows
  - [ ] up and down to move through list
  - [ ] enter to add a suggestion as a tag
- [ ] highlight suggestions when move through them with keys, over them with mouse

### Advanced
- [ ] loading state for fetching suggestions
- [ ] edit tag by clicking
- [ ] reorder tags by dragging
- [ ] drag tag from one component to another (onDrag?)
- [ ] validate tags
- [ ] tests

### Dev
- [ ] watchify, browserify hot module reload, dev server
- [ ] continuous deployment when push to github master and tests pass, publish npm module
- [ ] on deploy, update the demo website using github pages

### WAI ARIA Compliance
- https://www.w3.org/TR/wai-aria-practices/#autocomplete
