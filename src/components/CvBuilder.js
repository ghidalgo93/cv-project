import React from "react";
import InputCv from "./InputCv";
import AddEducation from "./AddEducation";
import AddExperience from "./AddExperience";
import "./CvBuilder.css";

class CvBuilder extends React.Component {
  render() {
    const { onInputChange } = this.props;
    const { name, email, phone, website, github } = this.props;

    return (
      <fieldset className="CvBuilder">
        <legend>CV Builder:</legend>
        <InputCv
          input={"name"}
          value={name}
          onInputChange={onInputChange}
          placeHolder={"Full Name"}
        />
        <InputCv
          input={"email"}
          value={email}
          onInputChange={onInputChange}
          placeHolder={"Email Address"}
        />
        <InputCv
          input={"phone"}
          value={phone}
          onInputChange={onInputChange}
          placeHolder={"Phone Number"}
        />
        <InputCv
          input={"website"}
          value={website}
          onInputChange={onInputChange}
          placeHolder={"Personal Website"}
        />
        <InputCv
          input={"github"}
          value={github}
          onInputChange={onInputChange}
          placeHolder={"GitHub"}
        />
        <AddEducation />
        <AddExperience />
      </fieldset>
    );
  }
}

export default CvBuilder;
