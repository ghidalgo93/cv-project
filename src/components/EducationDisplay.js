import React from "react";

class EducationDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete("education", this.props.id);
  }
  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const { values } = this.props;
    const isEditing = this.state.isEditing;
    let content;
    if (isEditing) {
      content = <div>editing</div>;
    } else {
      content = (
        <div>
          <i onClick={this.handleDelete} className="fas fa-trash-alt"></i>
          <i onClick={this.handleEdit} className="fas fa-edit"></i>
          <p>{values.schoolName}</p>
          <p>{values.studyName}</p>
          <p>
            From: {values.startDate}-{values.endDate}
          </p>
        </div>
      );
    }

    return content;
  }
}

export default EducationDisplay;
