import React from "react";
import EducationDisplay from "./EducationDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import "../styles/App.css";

class CvViewer extends React.Component {
  render() {
    const {
      name,
      email,
      phone,
      website,
      github,
      education,
      experience,
    } = this.props;

    const edList = education.map((edObj) => (
      <EducationDisplay
        onDelete={this.props.onDelete}
        onInputChange={this.props.onInputChange}
        onFormSubmit={this.props.onFormSubmit}
        values={edObj.values}
        key={edObj.id}
        id={edObj.id}
      />
    ));
    const expList = experience.map((expObj) => (
      <ExperienceDisplay
        onDelete={this.props.onDelete}
        onInputChange={this.props.onInputChange}
        onFormSubmit={this.props.onFormSubmit}
        values={expObj.values}
        key={expObj.id}
        id={expObj.id}
      />
    ));

    return (
      <div className={"cv-container"}>
        <h1>{name}</h1>
        <div className="row basic-info">
          <p>
            <i className="fas fa-envelope"></i>
            {email}
          </p>
          <p>
            <i className="fas fa-phone-square"></i>
            {phone}
          </p>
          <p>
            <i className="fas fa-home"></i>
            {website}
          </p>
          <p>
            <i className="fab fa-github"></i>
            {github}
          </p>
        </div>
        <div className="info">
          <h3>Education {edList}</h3>
          <h3>Experience {expList}</h3>
        </div>
      </div>
    );
  }
}

export default CvViewer;
