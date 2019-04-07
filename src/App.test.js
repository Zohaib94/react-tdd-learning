import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App/>);

describe('When App is rendered', () => {
  it('is expected that component will render correctly', () => {
    expect(app).toMatchSnapshot();
  })

  it('is expected that component will initialize with empty array', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('When `Add Gift` is clicked', () => {
    const previousGiftListLength = app.find('.gift-list').children().length
    const previousGiftStateLength = app.state().gifts.length

    beforeEach(() => {
      app.find('.add-gift').simulate('click')
    })

    afterEach(() => {
      app.setState({
        gifts: []
      })
    })

    it('expects that gift will be added', () => {
      const currentGiftStateLength = app.state().gifts.length
      expect(currentGiftStateLength).toBeGreaterThan(previousGiftStateLength)
    })

    it('expects that a new gift is rendered', () => {
      const currentGiftListLength = app.find('.gift-list').children().length
      expect(currentGiftListLength).toBeGreaterThan(previousGiftListLength)
    })

    it('expects that gift component is created', () => {
      expect(app.find('Gift').exists()).toEqual(true)
    })
  })
})
