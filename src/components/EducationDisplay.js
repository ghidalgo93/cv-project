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
    const content = (
      <div className={"row"}>
        <div className={"display"}>
          <hr />
          <p>{values.schoolName}</p>
          <p>
            ({values.startDate})-({values.endDate})
          </p>
          <p>{values.studyName}</p>
        </div>
        <i onClick={this.handleDelete} className="fas fa-trash-alt cancel"></i>
      </div>
    );

    return content;
  }
}

export default EducationDisplay;
