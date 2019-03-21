import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: !this.props.todo.completed ? "none" : "line-through"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            id="checkComplete"
            type="checkbox"
            onChange={() => this.props.markComplete(id)}
          />{" "}
          {title}
          {"  "}
          <button style={btnStyle} onClick={() => this.props.onDelete(id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}
const btnStyle = {
  backgroundColor: "#ff0000",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: "5px 9px",
  cursor: "pointer",
  float: "right"
};

// const itemStyle = {
//   backgroundColor: "#ccc"
// };
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
