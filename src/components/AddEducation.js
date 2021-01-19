import EducationForm from "./EducationForm";
import React from "react";
import "./FormAdd.css";

class AddEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const { onFormSubmit } = this.props;
    const isSelected = this.state.isSelected;
    let content;
    if (isSelected) {
      content = (
        <EducationForm onClose={this.handleClick} onFormSubmit={onFormSubmit} />
      );
    } else {
      content = (
        <i onClick={this.handleClick} className="fas fa-plus-square add"></i>
      );
    }

    return (
      <div>
        Education
        {content}
      </div>
    );
  }
}

export default AddEducation;
