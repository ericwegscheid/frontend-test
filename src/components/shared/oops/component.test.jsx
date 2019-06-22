import React from 'react'
import { Oops } from './component.jsx'
import { shallow } from 'enzyme'

describe('Oops component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <Oops />
    )

    expect(component).toMatchSnapshot()
  })

  it('should include passed in props in \'.oops\' dom element', () => {
    renderComponent(
      <Oops id="test"/>
    )

    expect(component.prop('id')).toBe('test')
    expect(component).toMatchSnapshot()
  })
})
