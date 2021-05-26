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

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    let request = await fetch(this.state.url);
    let data = await request.json();
    let count = data.count;
    let people = data.results;
    // let people = data.results.reduce((list, person) => {
    //   list[person.name] = person.url;
    //   return list;
    // }, {});

    this.props.handler(count, people);
    this.props.toggleLoading(data, count);
  }
  // let method = e.target.value;
  // this.setState({ method });
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <label>Paste URL here... 
            <input type="text" value={this.state.url} onChange={this.handleChange} />
          </label>
          <button type='submit' >Leggoooo!</button>
          <p id='form-directions'>... and choose one option below &#9660;</p>
        </section>
        <section>
          <button type="radio" value="GET" onClick={this.handleClick} className="crud">GET</button>
          <button value="PUT" onClick={this.handleClick} className="crud">PUT</button>
          <button value="POST" onClick={this.handleClick} className="crud">POST</button>
          <button value="DELETE" onClick={this.handleClick} className="crud">DELETE</button>
          {/* <div className="crud">
            <label>
              <input type="radio" value="GET" name="method" />
              <span>GET</span>
            </label>
          </div> */}

        </section>
      </form>  
    );
  }
}

export default Form;