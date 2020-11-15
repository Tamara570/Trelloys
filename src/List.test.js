import React from 'react';
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import List from './list';

const header = 'a string';

const mockCards = [
    { id: 'a', title: 'First card', content: 'lorem ipsum' },
    { id: 'b', title: 'Second card', content: 'lorem ipsum' },
    { id: 'c', title: 'Third card', content: 'lorem ipsum' },]


describe(`List component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List
          header = {header}
          cards = {mockCards} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('renders empty given no items', () => {
        const wrapper = shallow(<List />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders List when supplied with an items prop', () => {
        const testItems = {mockCards}
        const wrapper = shallow(<List items={testItems} />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })
})
