import React from 'react';
import './app.scss';

import Header from './components/header/Header';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import Results from './components/results/Results';

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

  render() {
    return (
      <>
        <Header/>
        <Form toggleLoading={this.toggleLoading} handler={this.handleForm}/>
        <Results data={this.state.results}/>
        <Footer/>
      </>  
    );
  }
}

export default App;