import React from 'react';
import './States.css';
import Header from '../Header/header';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      list: window.cs142models.statesModel().sort().map((name, index)=>
        <li key={index}>{name}</li>
      )
    };

    
    this.handleChangeBound = event =>this.handleChange(event);
    }
  handleChange(event) {
   let arr1=window.cs142models.statesModel().filter(el => el.toLowerCase().startsWith(event.target.value.toLowerCase()));
   console.log(arr1);
    this.setState({ list: arr1.map((name, index)=>
      <li key={index}>{name}</li>
    ) });
  }

  render() {
    return (
      <div class = "states">
        <Header/>
        <input type="text" id= "states" onChange={this.handleChangeBound} placeholder="Search..."/>
        <ul>{this.state.list}</ul>
      </div>
    );
  }
}

export default States;
