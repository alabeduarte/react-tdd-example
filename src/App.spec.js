import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders Hello World', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('p').text()).toEqual('Hello World');
  });

  it('renders Hello <name> according to a passed props', () => {
    const wrapper = mount(<App name="John" />);

    expect(wrapper.find('p').text()).toEqual('Hello John');
  });

  it('does not show "bye" if button is not clicked', () => {
    const wrapper = mount(<App />);

    expect(wrapper.text()).not.toContain('bye!');
  });

  it('shows "bye" when click on button', () => {
    const wrapper = mount(<App />);

    wrapper.find('button').simulate('click');

    expect(wrapper.text()).toContain('bye!');
  });
});
