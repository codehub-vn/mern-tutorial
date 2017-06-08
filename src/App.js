var BugFilter = React.createClass({
  render: function() {
    return (
      <div>Hiển thị filter ở đây.</div>
    )
  }
});

var BugRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.status}</td>
        <td>{this.props.priority}</td>
        <td>{this.props.owner}</td>
        <td>{this.props.title}</td>
      </tr>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <BugRow id={1} priority="P1" status="Open" owner="Jessica Bánh Bèo" title="Bị treo máy khi mở ứng dụng" />
          <BugRow id={2} priority="P2" status="New" owner="Eddie Tí Tèo" title="Thiếu canh lề CSS cho văn bản trong table" />
        </tbody>
      </table>
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
