import React from 'react';
import PersonFormContainer from './PersonForm/PersonFormContainer';

export default class Layout extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <PersonFormContainer />
      </div>
    );
  }
}