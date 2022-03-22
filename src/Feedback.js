import React from "react";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({value: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({value: event.target.email});
  }
  handleNumberChange(event) {
    this.setState({value: event.target.number});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleNameChange} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={this.handleNumberChange} />
        </label>
        <label>
          Mobile Number:
          <input type="text"  pattern="[0-9]*" value={this.state.number} onChange={this.handleNumberChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Feedback;