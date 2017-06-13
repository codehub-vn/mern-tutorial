var React = require('react');
var ReactDOM = require('react-dom');

var Panel = require('react-bootstrap/lib/Panel');
var Input = require('react-bootstrap/lib/Input');
var ButtonInput = require('react-bootstrap/lib/ButtonInput');

var BugAdd = React.createClass({
  render: function() {
    //console.log("Rendering BugAdd");
    return (
      <Panel header="Thêm Bug">
        <form name="bugAdd">
          <Input type="text" name="title" label="Title" />
          <Input type="text" name="owner" label="Owner" />
          <ButtonInput value="Thêm" bsStyle="primary" onClick={this.handleSubmit} />
        </form>
      </Panel>
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
