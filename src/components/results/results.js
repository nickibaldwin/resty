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
        <ReactJson src={this.props.people} />
      </section>
    );
  }
}

// const Results = (props) => {
//   return (
//     <section className="results">
//       <ul>
//         {Object.keys(props.results).map((item, idx) => {
//           return (
//             <li key={idx}>
//               <a href={props.results[item]}>{item}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

export default Results;