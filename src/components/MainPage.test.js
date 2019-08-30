import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
// shallow only renders what it calls, not its children
// mount does full render and mounts the component on the dom, tests can affect each other
// render uses cheerio and renders children

let wrapper;

// jest - makes sure that it runs before each one of our tests
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	};
	wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
});
// instance() gives us access all the methods that mainpage has
it('filters robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [
			{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}
		],
		searchField: 'a',
		isPending: false
	};
	const wrapper2 = shallow(<MainPage {...mockProps2} />);
	expect(wrapper2.instance().filterRobots()).toEqual([]);
	expect(wrapper2.instance().filterRobots()).toEqual([]);
});

//
