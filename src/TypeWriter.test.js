import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import TypeWriter from './TypeWriter';

const props = {
    elements: ["First element", "Second Line", "Third Line"]
}

test('Renders wrapper', () => {
    const wrapper = mount(<TypeWriter {...props} />)
    expect(wrapper.exists()).toEqual(true);
});

test('renders correct text for given first line text', () => {
    const wrapper = mount(<TypeWriter {...props} />)
    wrapper.setState({activeTextFirstLine: "Test First Line"});
    expect(wrapper.find("h1").children().find("span.text").text()).toEqual("Test First Line");
});

test('if element <h2> exist', () => {
    const wrapper = mount(<TypeWriter {...props} />)
    wrapper.setState({activeTextSecondLine: "Test Second Line"});
    expect(wrapper.find("h2").exists()).toEqual(true);
});

test('renders correct text for given second line text', () => {
    const wrapper = mount(<TypeWriter {...props} />)
    wrapper.setState({activeTextSecondLine: "Test Second Line"});
    expect(wrapper.find("h2").children().find("span.text").text()).toEqual("Test Second Line");
});

