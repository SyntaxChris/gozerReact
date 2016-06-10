import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class PersonFormStore extends EventEmitter {
	constructor(){
		super();
		// this.person = {
		// 	id: 4231231423,
		// 	first_name: 'Chris',
		// 	last_name: 'Lehneis',
		// 	address: '',
		// 	job_title: 'Software Developer',
		// 	job_type: 'Full Time',
		// 	business_unit: 'Shutterstock',
		// 	department: 'Tech',
		// 	role: null,
		// 	region: null,
		// 	team: null,
		// 	start_date: '',
		// 	end_date: '',
		// 	start_location: 'NYC',
		// 	permanent_location: 'NYC',
		// 	desk_num: null,
		// 	floor: null,
		// 	email_domain: '@shutterstock.com',
		// 	distribution_list: [
		// 		'company@shutterstock.com',
		// 		'office.esb@shutterstock.com'
		// 	],
		// 	primary_computer: 'None',
		// 	custom_build: '',
		// 	external_displays: 0,
		// 	accessories: [],
		// 	additional_accessories: '',
		// 	software: [],
		// 	additional_software: '',
		// 	system_access: [],
		// 	additional_system_access: ''
		// }

		this.person = {
			first_name: 'Chris',
			last_name: 'Lehneis',
			job_type: 'Full Time',
			jobe_title: 'Software Developerx'
		}

		this.form = {
			pageIndex: 0
		}
	}

	getNewPerson(){
		return this.person; 
	}

	getPageIndex(){
		return this.form.pageIndex;
	}

	handlePageUp = (i) => {
	    if(i < 5){
	      this.form.pageIndex += 1
	    }
	    this.emit('change');
	}

	handlePageDown = (i) => {
	    if(i > 0){
	      this.form.pageIndex -= 1
	    }
	    this.emit('change');
	}

	handleActions(action){
		switch(action.type){
			case 'GET_NEW_PERSON':
				this.getNewPerson();
				break;
			case 'HANDLE_PAGE_UP':
				this.handlePageUp(action.pageInx);
				break;
			case 'HANDLE_PAGE_DOWN':
				this.handlePageDown(action.pageInx);
				break;
		}
	}
}

const personFormStore = new PersonFormStore;
// window.personFormStore = personFormStore;
dispatcher.register(personFormStore.handleActions.bind(personFormStore));
window.dispatcher = dispatcher;

export default personFormStore;
