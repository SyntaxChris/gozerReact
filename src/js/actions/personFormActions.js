import dispatcher from '../dispatcher';

export function handlePageUp(pageInx){
	dispatcher.dispatch({
		type: 'GET_NEW_PERSON' 
	});
}

export function handlePageUp(pageInx){
	dispatcher.dispatch({
		type: 'HANDLE_PAGE_UP',
		pageInx 
	});
}

export function handlePageDown(pageInx){
	dispatcher.dispatch({
		type: 'HANDLE_PAGE_DOWN',
		pageInx 
	});
}