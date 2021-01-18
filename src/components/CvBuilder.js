import React from "react";
import InputCv from "./InputCv";

class CvBuilder extends React.Component {
  render() {
    const onInputChange = this.props.onInputChange;

    return (
      <fieldset>
        <legend>CV Builder:</legend>
        <InputCv
          value={this.props.name}
          state={"name"}
          onInputChange={onInputChange}
          placeHolder={"Full Name"}
        />
        <InputCv
          value={this.props.email}
          state={"email"}
          onInputChange={onInputChange}
          placeHolder={"Email"}
        />
      </fieldset>
    );
  }
}

export default CvBuilder;
