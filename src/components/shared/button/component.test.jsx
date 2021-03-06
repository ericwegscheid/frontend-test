import React from 'react'
import { Button } from './component.jsx'
import { shallow } from 'enzyme'

describe('Button component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <Button>test</Button>
    )

    expect(component.html()).toMatchSnapshot()
  })

  it('should include passed in props in \'button\' DOM element', () => {
    renderComponent(
      <Button id="test">test</Button>
    )

    expect(component.prop('id')).toBe('test')
    expect(component.html()).toMatchSnapshot()
  })

  it('should wrap child elements', () => {
    renderComponent(
      <Button><span>test</span></Button>
    )

    expect(component.find('span').text()).toBe('test')
    expect(component.html()).toMatchSnapshot()
  })
})
