import React from "react";
import EducationDisplay from "./EducationDisplay";

class CvViewer extends React.Component {
  render() {
    const { name, email, phone, website, github, education } = this.props;

    const edList = education.map((edObj) => (
      <EducationDisplay
        onDelete={this.props.onDelete}
        values={edObj.values}
        key={edObj.id}
        id={edObj.id}
      />
    ));

    return (
      <fieldset>
        <legend>CV Viewer:</legend>
        <p>{name}</p>
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
        <div>Education {edList}</div>
      </fieldset>
    );
  }
}

export default CvViewer;
