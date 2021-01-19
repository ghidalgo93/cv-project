import React from "react";

class CvViewer extends React.Component {
  render() {
    const { name, email, phone, website, github } = this.props;

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
      </fieldset>
    );
  }
}

export default CvViewer;
