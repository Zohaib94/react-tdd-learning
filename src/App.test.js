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
  const currentGiftStateLength = app.state().gifts.length

  expect(currentGiftStateLength).toBeGreaterThan(previousGiftStateLength)
})

it('expects that a new gift is rendered after clicking `Add Gift Button`', () => {
  const previousGiftListLength = app.find('.gift-list').children().length
  app.find('.add-gift').simulate('click')
  const currentGiftListLength = app.find('.gift-list').children().length

  expect(currentGiftListLength).toBeGreaterThan(previousGiftListLength)
})
