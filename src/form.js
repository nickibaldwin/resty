import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      URL: '',
      method: '',
    };
  }

  handleURLChange = e => {
    let URL = e.target.value;
    this.setState({ URL });
  }

  handleClick = e => {
    let method = e.target.value;
    this.setState({ method });
  }

  render() {
    return (
      <form id="form">
        <div id="crud">
          <option value="GET">GET</option>
          <option value="PUT">PUT</option>
          <option value="POST">POST</option>
          <option value="DELETE">DELETE</option>
        </div>
        <br></br>
        <br></br>
        <label for="URL">URL:</label>
        <input type="text" onChange={this.handleURLChange} />
        <option onClick={this.handleClick} id="go">Go!</option>
      </form>
    );
  }
}

export default Form;