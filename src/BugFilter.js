var React = require('react');
var ReactDOM = require('react-dom');

var BugFilter = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <div>Hiển thị filter ở đây.</div>
    )
  }
});

module.exports = BugFilter;
