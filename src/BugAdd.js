var React = require('react');
var ReactDOM = require('react-dom');

var BugAdd = React.createClass({
  render: function() {
    //console.log("Rendering BugAdd");
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

module.exports = BugAdd;
