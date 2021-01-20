import React from "react";
import InputCv from "./InputCv";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";
import "../styles/App.css";

class CvBuilder extends React.Component {
  render() {
    const { onFormSubmit, onInputChange } = this.props;
    const { name, email, phone, website, github } = this.props;

    return (
      <div className={"column cv-container"}>
        <h1>CV Builder</h1>
        <InputCv
          className={"InputCv"}
          input={"name"}
          value={name}
          onInputChange={onInputChange}
          placeHolder={"Full Name"}
        />
        <InputCv
          className={"InputCv"}
          input={"email"}
          value={email}
          onInputChange={onInputChange}
          placeHolder={"Email Address"}
        />
        <InputCv
          className={"InputCv"}
          input={"phone"}
          value={phone}
          onInputChange={onInputChange}
          placeHolder={"Phone Number"}
        />
        <InputCv
          className={"InputCv"}
          input={"website"}
          value={website}
          onInputChange={onInputChange}
          placeHolder={"Personal Website"}
        />
        <InputCv
          className={"boo"}
          input={"github"}
          value={github}
          onInputChange={onInputChange}
          placeHolder={"GitHub"}
        />
        <div className={"addForm"}>
          Education
          <AddEducation onFormSubmit={onFormSubmit} />
        </div>
        <div className={"addForm"}>
          Experience
          <AddExperience onFormSubmit={onFormSubmit} />
        </div>
      </div>
    );
  }
}

export default CvBuilder;
