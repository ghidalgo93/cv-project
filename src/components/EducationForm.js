import React from "react";
import "./Form.css";

class FormEducation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  render() {
    return (
      <form className="FormEducation">
        <input type="text" placeholder="School Name" />
        <input type="text" placeholder="Title of Study" />
        <div className="date">
          <label>
            From:
            <input type="date" />
          </label>
          <label>
            To:
            <input type="date" />
          </label>
        </div>
        <i className="fas fa-check-square"></i>
        <i onClick={this.handleClose} className="fas fa-window-close"></i>
      </form>
    );
  }
}

export default FormEducation;
