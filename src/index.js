/*
var React = require('react');
var ReactDOM.render(
    <h1>Hello, world!</h1>
    document.getElementById('example')
    );
*/

[1, 2, 3].map((item) => {
  console.log(item + 2);
});

var React = require('react');
var ReactDOM = require('react-dom');

const Test = React.createClass({
  render: () => {
    return (
      <div>Yo</div>
    );
  }
});

ReactDOM.render(
  <Test />,
  document.getElementById('example')
);
