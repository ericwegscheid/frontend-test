import React from 'react'
import { StarRating } from './component.jsx'
import { shallow } from 'enzyme'

describe('StarRating component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <StarRating />
    )

    expect(component.html()).toMatchSnapshot()
  })
})
