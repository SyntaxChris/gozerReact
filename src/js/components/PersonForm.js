import React from 'react';

export default class PersonForm extends React.Component{
	handlePageUp = () => {
		this.props.pageUp(this.props.pageIndex);
	}

	handlePageDown = () => {
		this.props.pageDown(this.props.pageIndex);
	}

  render(){
  	let pageDownBtn = <button onClick={this.handlePageDown}>-</button>,
  			pageUpBtn   = <button onClick={this.handlePageUp}>+</button>;

    return(
      <div>
      	<h1>{this.props.pageIndex}</h1>
      	{this.props.pageIndex > 0 ? pageDownBtn : null}
      	{this.props.pageIndex < 5 ? pageUpBtn : null}
      </div>
    );
  }
}