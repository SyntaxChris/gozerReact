import React from 'react';
import PersonForm from './PersonForm';

export default class Layout extends React.Component{
  constructor(){
    super();
    this.state = {
      personForm: {
        pageIndex: 0,
        personInfo: {

        }
      }
    }
  }

  pageUp = (i) => {
    if(i < 5){
      this.setState({
        pageIndex: this.state.personForm.pageIndex += 1
      });
    }
  }

  pageDown = (i) => {
    if(i > 0){
      this.setState({
        pageIndex: this.state.personForm.pageIndex -= 1
      });
    }
  }

  render(){
    return(
      <div>
        <PersonForm 
          pageIndex={this.state.personForm.pageIndex}
          personInfo={this.state.personForm.personInfo}
          pageUp={this.pageUp}
          pageDown={this.pageDown} />
      </div>
    );
  }
}