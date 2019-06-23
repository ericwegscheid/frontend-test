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

  it('should include passed in props in \'button\' DOM element', () => {
    renderComponent(
      <Row id="test">test</Row>
    )

    expect(component.prop('id')).toBe('test')
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
