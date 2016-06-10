import React from 'react';

export default class PersonForm extends React.Component{
	constructor(){
		super();
	}

	render(){
	    return(
	      <div>
	      	<h1>PERSON FORM</h1>
	      	{JSON.stringify(this.props)}
	      </div>
	    );
	}
}