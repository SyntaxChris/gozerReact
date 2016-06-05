import React from 'react';

export default class PersonForm extends React.Component{
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
	// handlePageUp = () => {
	// 	this.props.pageUp(this.props.pageIndex);
	// }

	// handlePageDown = () => {
	// 	this.props.pageDown(this.props.pageIndex);
	// }

  render(){
  	let pageDownBtn = <button onClick={this.pageUp}>-</button>,
  			pageUpBtn   = <button onClick={this.pageDown}>+</button>;

    return(
      <div>
      	<h1>{this.state.pageIndex}</h1>
      	{this.props.pageIndex > 0 ? pageDownBtn : null}
      	{this.props.pageIndex < 5 ? pageUpBtn : null}
      </div>
    );
  }
}