var BugFilter = React.createClass({
  displayName: "BugFilter",

  render: function () {
    console.log("Rendering BugFilter");
    return React.createElement(
      "div",
      null,
      "Hi\u1EC3n th\u1ECB filter \u1EDF \u0111\xE2y."
    );
  }
});

var BugRow = React.createClass({
  displayName: "BugRow",

  render: function () {
    console.log("Rendering BugRow:", this.props.bug);
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        this.props.bug.id
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.status
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.priority
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.owner
      ),
      React.createElement(
        "td",
        null,
        this.props.bug.title
      )
    );
  }
});

var BugTable = React.createClass({
  displayName: "BugTable",

  render: function () {
    console.log("Rendering bug table, số lượng item:", this.props.bugs.length);
    var bugRows = this.props.bugs.map(function (bug) {
      return React.createElement(BugRow, { key: bug.id, bug: bug });
    });
    return React.createElement(
      "table",
      null,
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Id"
          ),
          React.createElement(
            "th",
            null,
            "Status"
          ),
          React.createElement(
            "th",
            null,
            "Priority"
          ),
          React.createElement(
            "th",
            null,
            "Owner"
          ),
          React.createElement(
            "th",
            null,
            "Title"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        bugRows
      )
    );
  }
});

var BugAdd = React.createClass({
  displayName: "BugAdd",

  render: function () {
    console.log("Rendering BugAdd");
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { name: "bugAdd" },
        React.createElement("input", { type: "text", name: "owner", placeholder: "Owner" }),
        React.createElement("input", { type: "text", name: "title", placeholder: "Title" }),
        React.createElement(
          "button",
          { onClick: this.handleSubmit },
          "Th\xEAm Bug"
        )
      )
    );
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var form = document.forms.bugAdd;
    this.props.addBug({ owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1' });
    // xóa dữ liệu trong form input để người dùng nhập lại ở lần tiếp
    form.owner.value = "";form.title.value = "";
  }
});

var bugData = [{ id: 1, priority: 'P1', status: 'Open', owner: 'Jessica Bánh Bèo', title: 'Jessica Bánh Bèo' }, { id: 2, priority: 'P2', status: 'New', owner: 'Eddie Tí Tèo', title: 'Thiếu canh lề CSS cho văn bản trong table' }];

var BugList = React.createClass({
  displayName: "BugList",

  getInitialState: function () {
    return { bugs: bugData };
  },
  render: function () {
    console.log("Rendering bug list, số lượng item:", this.state.bugs.length);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "\u1EE8ng D\u1EE5ng Bug Tracker"
      ),
      React.createElement(BugFilter, null),
      React.createElement("hr", null),
      React.createElement(BugTable, { bugs: this.state.bugs }),
      React.createElement("hr", null),
      React.createElement(BugAdd, { addBug: this.addBug })
    );
  },

  addBug: function (bug) {
    console.log("Adding bug:", bug);
    // Chúng ta sẽ không sửa state thay vào đó sẽ copy state
    bug.id = this.state.bugs.length + 1;
    var bugsModified = this.state.bugs.slice();
    bugsModified.push(bug);
    this.setState({ bugs: bugsModified });
  }
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));