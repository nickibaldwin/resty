import React from 'react';
import Header from './header.js';
import Form from './form.js';
import Footer from './footer.js';
import './header.scss';
import './form.scss';
import './footer.scss';
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Form/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;