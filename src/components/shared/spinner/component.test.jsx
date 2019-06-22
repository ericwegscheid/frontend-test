import React from 'react'
import { Spinner } from './component.jsx'
import { shallow } from 'enzyme'

describe('Spinner component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <Spinner />
    )

    expect(component.html()).toMatchSnapshot()
  })
})
