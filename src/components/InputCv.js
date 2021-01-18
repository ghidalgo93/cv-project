import React from "react";

class InputCv extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(this.props.state, e.target.value);
  }

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.handleChange}
        type="text"
        placeholder={this.props.placeHolder}
        autoComplete="off"
      />
    );
  }
}

export default InputCv;
