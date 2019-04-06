import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App/>);

it('is expected that component will render correctly', () => {
  expect(app).toMatchSnapshot();
})
