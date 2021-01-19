import ExperienceForm from "./ExperienceForm";
import React from "react";
import "./FormAdd.css";

class AddExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSelected: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isSelected: !this.state.isSelected });
  }

  render() {
    const isSelected = this.state.isSelected;
    let content;
    if (isSelected) {
      content = <ExperienceForm onClose={this.handleClick} />;
    } else {
      content = (
        <i onClick={this.handleClick} className="fas fa-plus-square add"></i>
      );
    }

    return (
      <div>
        Experience
        {content}
      </div>
    );
  }
}

export default AddExperience;
