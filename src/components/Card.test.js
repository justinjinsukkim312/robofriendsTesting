import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
// shallow only renders what it calls, not its children
// mount does full render and mounts the component on the dom, tests can affect each other
// render uses cheerio and renders children

it('expect to render Card component', () => {
	expect(shallow(<Card />)).toMatchSnapshot();
});
