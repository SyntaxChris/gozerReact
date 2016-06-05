import { EventEmitter } from 'events';

class PersonFormStore extends EventEmitter {
	constructor(){
		super();
		this.person = {
			id: 4231231423,
			first_name: 'Chris',
			last_name: 'Lehneis',
			address: '',
			job_title: 'Software Developer',
			job_type: 'Full Time',
			business_unit: 'Shutterstock',
			department: 'Tech',
			role: null,
			region: null,
			team: null,
			start_date: '',
			end_date: '',
			start_location: 'NYC',
			permanent_location: 'NYC',
			desk_num: null,
			floor: null,
			email_domain: '@shutterstock.com',
			distribution_list: [
				'company@shutterstock.com',
				'office.esb@shutterstock.com'
			],
			primary_computer: 'None',
			custom_build: '',
			external_displays: 0,
			accessories: [],
			additional_accessories: '',
			software: [],
			additional_software: '',
			system_access: [],
			additional_system_access: ''
		}
		this.form = {
			pageIndex: 0;
		}
	}


	getPerson(){
		return this.person; 
	}

	getFormState(){

	}
}

const personFormStore = new PersonFormStore;

export default personFormStore;
