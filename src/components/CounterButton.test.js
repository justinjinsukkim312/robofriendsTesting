import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
// shallow only renders what it calls, not its children
// mount does full render and mounts the component on the dom, tests can affect each other
// render uses cheerio and renders children

it('expect to render CounterButton component', () => {
	const mockColor = 'red';
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 2 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 3 });
	wrapper.find('[id="counter"]').simulate('click');
	expect(wrapper.state()).toEqual({ count: 4 });
	expect(wrapper.props().color).toEqual('red');
});
