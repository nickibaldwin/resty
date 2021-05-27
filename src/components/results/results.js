import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

class Results extends React.Component {
  constructor(props) {
    super(props); // for now, just do this
    this.state ={
    };
  }
  render() {
    return(
      <section className="returnedResults">
        <ReactJson src={this.props.data} />
      </section>
    );
  }
}

export default Results;