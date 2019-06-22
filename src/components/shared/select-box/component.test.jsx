import React from 'react'
import { SelectBox } from './component.jsx'
import { shallow } from 'enzyme'

describe('SelectBox component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <SelectBox />
    )

    expect(component.html()).toMatchSnapshot()
  })
})
