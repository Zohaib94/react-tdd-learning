import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App/>);

it('is expected that component will render correctly', () => {
  expect(app).toMatchSnapshot();
})

it('is expected that component will initialize with empty array', () => {
  expect(app.state().gifts).toEqual([])
})

it('gift will be added on clicking the `Add Gift` button', () => {
  const previousGiftStateLength = app.state().gifts.length
  app.find('.add-gift').simulate('click')

  let isGiftAdded = (Number(app.state().gifts.length) > previousGiftStateLength)
  expect(isGiftAdded).toBe(true);
})
