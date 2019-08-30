import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
// shallow only renders what it calls, not its children
// mount does full render and mounts the component on the dom, tests can affect each other
// render uses cheerio and renders children

it('expect to render CardList component', () => {
	const mockRobots = [
		{
			id: 1,
			name: 'John Snow',
			username: 'JohnJohn',
			email: 'john@gmail.com'
		}
	];
	expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
