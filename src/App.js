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
      <div>
        <form name="bugAdd">
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button onClick={this.handleSubmit}>Thêm Bug</button>
        </form>
      </div>
    )
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1'});
    // xóa dữ liệu trong form input để người dùng nhập lại ở lần tiếp
    form.owner.value = ""; form.title.value = "";
  }
});

var BugList = React.createClass({
  getInitialState: function() {
    return {bugs: []};
  },
  render: function() {
    console.log("Rendering bug list, số lượng item:", this.state.bugs.length);
    return (
      <div>
        <h1>Ứng Dụng Bug Tracker</h1>
        <BugFilter />
        <hr />
        <BugTable bugs={this.state.bugs}/>
        <hr />
        <BugAdd addBug={this.addBug} />
      </div>
    )
  },

  componentDidMount: function() {
    $.ajax('/api/bugs').done(function(data) {
      this.setState({bugs: data});
    }.bind(this));
    // Cần thêm logic xử lý lỗi nếu triển khai trên môi trường production.
  },

  addBug: function(bug) {
    console.log("Adding bug:", bug);
    $.ajax({
      type: 'POST', url: '/api/bugs', contentType: 'application/json',
      data: JSON.stringify(bug),
      success: function(data) {
        var bug = data;
        // Chúng ta sẽ không sửa state thay vào đó sẽ copy state
        var bugsModified = this.state.bugs.concat(bug);
        this.setState({bugs: bugsModified});
      }.bind(this),
      error: function(xhr, status, err) {
        // Nên sửa logic để thông báo lỗi cho người dùng ở đây.
        console.log("Lỗi khi thêm bug:", err);
      }
    });
  }
});

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
