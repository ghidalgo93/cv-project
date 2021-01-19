import React from "react";

class InputCv extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(this.props.input, e.target.value);
  }

  render() {
    return (
      <label>
        {this.props.input}:
        <input
          id={this.props.input}
          value={this.props.value}
          onChange={this.handleChange}
          type="text"
          placeholder={this.props.placeHolder}
          autoComplete="off"
        />
      </label>
    );
  }
}

export default InputCv;
