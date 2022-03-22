import React from 'react'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleFirstNameChange(event) {
      this.setState({ value: event.target.value });
    }
    handleLastNameChange(event) {
      this.setState({ lastname: event.target.value });
    }
    handleFeedbackChange(event) {
      this.setState({ feedback: event.target.value });
    }
  
    handleSubmit(event) {
      alert("A name was submitted: " + "Firstname: " + this.state.value + "Lastname: " + this.state.lastname + "Feedback:" + this.state.feedback);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleFirstNameChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleLastNameChange}
            />
          </label>
          <label>
            Feedback:
            <textarea value={this.state.feedback} onChange={this.handleFeedbackChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Contact;
  