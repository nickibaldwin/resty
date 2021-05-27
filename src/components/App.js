import React from 'react';
import '../style.scss';
import Header from './header/Header.js';
import Form from './form/Form.js';
import Footer from './footer/Footer.js';
import Results from './results/Results.js';
import Main from './Main.js';
import Home from './home/Home.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { //holding the state globally - one way data flow
      loading: false,
      count: 0,
      body: [],
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results) => {
    this.setState({ count, results });
  }

  // getHistory = (url, method => {
  //   this.setState({ requests: [...this.state.requests, { URL, method }] })
  // })

  render() {
    return (
      <>
        <Header/>
        <Home />
        <Form toggleLoading={this.toggleLoading} handler={this.handleForm}/>
        <Results data={this.state.results} />
        <Main />
        <Footer/>
      </>  
    );
  }
}

export default App;