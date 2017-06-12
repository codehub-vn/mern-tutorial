var React = require('react');
var ReactDOM = require('react-dom');

var BugFilter = React.createClass({
  render: function() {
    console.log("Rendering BugFilter");
    return (
      <div>
        <h3>Bộ Lọc</h3>
        Trạng Thái (Status):
        <select value={this.state.status} onChange={this.onChangeStatus}>
          <option value="">---Chọn---</option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <br/>
        Ưu Tiên (Priority):
        <select value={this.state.priority} onChange={this.onChangePriority}>
          <option value="">---Chọn---</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <br/>
        <button onClick={this.submit}>Áp Dụng</button>
      </div>
    )
  },

  getInitialState: function() {
    var initFilter = this.props.initFilter;
    return {status: initFilter.status, priority: initFilter.priority};
  },

  onChangeStatus: function(e) {
    this.setState({status: e.target.value});
  },
  onChangePriority: function(e) {
    this.setState({priority: e.target.value});
  },

  submit: function(e) {
    var newFilter = {};
    if (this.state.priority) newFilter.priority = this.state.priority;
    if (this.state.status) newFilter.status = this.state.status;
    this.props.submitHandler(newFilter);
  }
});

module.exports = BugFilter;
