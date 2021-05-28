import React from 'react';
import './form.scss';
// import Loader from 'react-loaders';

class Form extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state = {
      URL: '',
      method: 'GET',
    };
  }

  // renderLoader = e => {
  //   return <Loader type="line-scale" active/>;
  // }

  handleChange = e => {
    let URL = e.target.value;
    this.setState({ URL });
  }

  handleSubmit = async e => {
    e.preventDefault();
    let request = await fetch(this.state.URL);
    let data = await request.json();
    let count = data.count;
    let people = data.results;
    // let { URL, method } = this.state;
    
    this.props.handler(count, people, { URL: this.state.URL, method: this.state.method });
    this.props.toggleLoading(data, count);

    // localStorage.setItem('URL', URL);
    // localStorage.setItem('method', method);

  }

  handleClick = e => {
    e.preventDefault();
    let method = e.target.value;
    this.setState( {method} );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <label>Paste URL here... 
            <input type="text" onChange={this.handleChange} />
          </label>
          <button type='submit' >Leggoooo!</button>
          <p id='form-directions'>... and choose one option below &#9660;</p>
        </section>
        <section>
          <button type="radio" value="GET" onClick={this.handleClick} className="rest">GET</button>
          <button value="PUT" onClick={this.handleClick} className="rest">PUT</button>
          <button value="POST" onClick={this.handleClick} className="rest">POST</button>
          <button value="DELETE" onClick={this.handleClick} className="rest">DELETE</button>
        </section>
      </form>  
    );
  }
}

export default Form;