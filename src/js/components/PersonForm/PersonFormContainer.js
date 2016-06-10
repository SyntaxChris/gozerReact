import React from 'react';
import PersonFormStore from '../../stores/PersonFormStore';
import * as PersonFormActions from '../../actions/PersonFormActions'
import PersonForm from './PersonForm';

export default class PersonFormContainer extends React.Component{
	constructor(){
		super();
		this.state = {
			person: PersonFormStore.getNewPerson(),
        	pageIndex: PersonFormStore.getPageIndex()
		}
	}

	componentWillMount(){
		PersonFormStore.on('change', () => {
			this.setState({
				person: PersonFormStore.getNewPerson(),
				pageIndex: PersonFormStore.getPageIndex()
			})
		});
	}

	pageUp(i) {
		PersonFormActions.handlePageUp(i);
	}

	pageDown(i) {
		PersonFormActions.handlePageDown(i);
	}

  	render(){
	  	let pageDownBtn = <button onClick={() => this.pageDown(this.state.pageIndex)}>-</button>,
	  		pageUpBtn   = <button onClick={() => this.pageUp(this.state.pageIndex)}>+</button>;

	    return(
	      <div>
	      	<h1>{this.props.pageIndex}</h1>
	      	<PersonForm
	      		firstName={this.state.person.first_name}
	      		lastName={this.state.person.last_name}
	      		pageIndex={this.state.pageIndex} />

	      	{this.state.pageIndex > 0 ? pageDownBtn : null}
	      	{this.state.pageIndex < 5 ? pageUpBtn : null}
	      </div>
	    );
  	}
}

