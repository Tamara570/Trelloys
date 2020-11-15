import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Card from './card';


describe(`Card component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders markup as expected without props', () => {
        const wrapper = shallow(<Card />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it('renders Card when supplied with an items prop', () => {
        const testItem = { id: 'a', title: 'First card', content: 'lorem ipsum' }
        const wrapper = shallow(<Card item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})


