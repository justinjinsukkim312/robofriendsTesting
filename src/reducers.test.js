import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';
// import * as reducers.searchRobots from './reducers';

describe('searchRobots', () => {
	const initialStateSearch = {
		searchField: ''
	};
	it('should return the intial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
	});
	it('should handle CHANGE_SEARCHFIELD', () => {
		expect(
			reducers.searchRobots(initialStateSearch, {
				type: CHANGE_SEARCHFIELD,
				payload: 'abc'
			})
		).toEqual({
			searchField: 'abc'
		});
	});
});
