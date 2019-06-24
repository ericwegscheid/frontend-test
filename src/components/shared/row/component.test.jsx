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

  it('should include className in props in \'button\' DOM element', () => {
    renderComponent(
      <Row className="test">test</Row>
    )

    expect(component.prop('className')).toBe('row test')
    expect(component.html()).toMatchSnapshot()
  })

  it('should wrap child elements', () => {
    renderComponent(
      <Row><span>test</span></Row>
    )

    expect(component.find('span').text()).toBe('test')
    expect(component.html()).toMatchSnapshot()
  })
})
