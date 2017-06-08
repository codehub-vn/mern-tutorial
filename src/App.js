var BugFilter = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <div>Hiển thị filter ở đây.</div>
    )
  }
});

var BugRow = React.createClass({
  render: function() {
    console.log("Rendering BugRow:", this.props.bug);
    return (
      <tr>
        <td>{this.props.bug.id}</td>
        <td>{this.props.bug.status}</td>
        <td>{this.props.bug.priority}</td>
        <td>{this.props.bug.owner}</td>
        <td>{this.props.bug.title}</td>
      </tr>
    )
  }
});

var BugTable = React.createClass({
  render: function() {
    console.log("Rendering bug table, số lượng item:", this.props.bugs.length);
    var bugRows = this.props.bugs.map(function(bug) {
      return <BugRow key={bug.id} bug={bug} />
    });
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
          {bugRows}
        </tbody>
      </table>
    )
  }
});

var BugAdd = React.createClass({
  render: function() {
    console.log("Rendering BugAdd");
    return (
      <div>Hiển thị form để thêm bug ở đây.</div>
    )
  }
});

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Jessica Bánh Bèo', title:'Jessica Bánh Bèo'},
  {id: 2, priority: 'P2', status:'New', owner:'Eddie Tí Tèo', title:'Thiếu canh lề CSS cho văn bản trong table'},
];

var BugList = React.createClass({
  getInitialState: function() {
    return {bugs: bugData};
  },
  render: function() {
    console.log("Rendering bug list, số lượng item:", this.state.bugs.length);
    return (
      <div>
        <h1>Ứng Dụng Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <button onClick={this.testNewBug}>Add Bug</button>
        <hr />
        <BugAdd />
      </div>
    )
  },

  testNewBug: function() {
    var nextId = this.state.bugs.length + 1;
    this.addBug({id: nextId, priority: 'P2', status:'New', owner:'Long Đẹp Trai', title:'Quên xóa "console.log()" trong source code'})
  },

  addBug: function(bug) {
    console.log("Adding bug:", bug);
    // Chúng ta sẽ không sửa state thay vào đó sẽ copy state
    var bugsModified = this.state.bugs.slice();
    bugsModified.push(bug);
    this.setState({bugs: bugsModified});
  }
});

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
