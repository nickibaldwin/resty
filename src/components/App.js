import React from 'react';
import '../style.scss';
import Header from './header/Header.js';
import Form from './form/Form.js';
import Footer from './footer/Footer.js';
import Results from './results/Results.js';
import Main from './Main.js';
import Home from './home/Home.js';
import History from './history/History.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { //holding the state globally - one way data flow
      loading: false,
      count: 0,
      body: [],
      request: {},
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  handleForm = (count, results, request) => {
  //   this.setState({ count, results });
  // }
    let updatedHistory = [...this.state.body, request];

    this.setState({
      request: request,
      body: updatedHistory,
      results: results,
    }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.body));
    });
  }
  componentDidMount() {
    if(localStorage.getItem('history')){
      console.log('here');
      this.setState({ body: JSON.parse(localStorage.getItem('history')) });
    }
  }
  // getHistory = (url, method => {
  //   this.setState({ requests: [...this.state.requests, { URL, method }] })
  // })

  render() {
    console.log(this.state.body);
    return (
      <>
        <Header/>
        <Home />
        <Form toggleLoading={this.toggleLoading} handler={this.handleForm}/>
        <Results data={this.state.results} count={this.state.count} />
        <Main />
        <History requests={this.state.body}/>
        <Footer/>
      </>  
    );
  }
}

export default App;