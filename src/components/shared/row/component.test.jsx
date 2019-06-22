import React from 'react'
import { Row } from './component.jsx'
import { shallow } from 'enzyme'

describe('Row component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <Row>test</Row>
    )

    expect(component.html()).toMatchSnapshot()
  })
})
