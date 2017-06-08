var BugFilter = React.createClass({
  render: function() {
    return (
      <div>Hiển thị filter ở đây.</div>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    return (
      <div>Hiển thị danh sách bug ở đây.</div>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    return (
      <div>Hiển thị form để thêm bug ở đây.</div>
    )
  }
});

var BugList = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Ứng Dụng Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable />
        <hr />
        <BugAdd />
      </div>
    )
  }
});

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
