import React from 'react';
import { shallow } from 'enzyme';
import App from '../containers/App';
// shallow only renders what it calls, not its children
// mount does full render and mounts the component on the dom, tests can affect each other
// render uses cheerio and renders children

it('expect to render App component', () => {
	const mockStore = {
		robots: [],
		searchField: ''
	};
	expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
});
