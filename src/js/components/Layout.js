import React from 'react';
import { Link } from 'react-router';
// import PersonForm from './PersonForm';


export default class Layout extends React.Component{
  render(){
    return(
      <div>
        <Link to="new_person">New Person</Link>
        {this.props.children}
      </div>
    );
  }
}