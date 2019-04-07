import React from 'react'
import { shallow } from 'enzyme'
import Gift from './Gift'

describe('Gift', () => {
  const gift = shallow(<Gift/>);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  })

  it('is expected that initial state is empty', () => {
    expect(gift.state()).toEqual({
      person: '',
      present: ''
    })
  })

  describe('When input is entered', () => {
    const personInput = 'Zohaib'

    beforeEach(() => {
      gift.find('.person-input').simulate('change', { target: { value: personInput }})
    })

    it('is expected that state is equivalent to person input', () => {
      expect(gift.state().person).toEqual(personInput)
    })
  })
})
