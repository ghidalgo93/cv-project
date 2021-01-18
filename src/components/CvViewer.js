import React from "react";

class CvViewer extends React.Component {
  render() {
    const { name, email } = this.props;

    return (
      <fieldset>
        <legend>CV Viewer:</legend>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </fieldset>
    );
  }
}

export default CvViewer;
