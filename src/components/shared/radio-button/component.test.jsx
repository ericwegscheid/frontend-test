import { find } from 'lodash'
import React from 'react'
import { RadioButton } from './component.jsx'
import { shallow } from 'enzyme'

describe('RadioButton component', () => {
  let component

  const renderComponent = props => {
    component = shallow(props)
  }

  it('should renderer snapshot', () => {
    renderComponent(
      <RadioButton />
    )

    expect(component.html()).toMatchSnapshot()
  })

  it('should render with the appropriate label', () => {
    renderComponent(
      <RadioButton label="test" />
    )

    expect(component.find('label').text()).toBe('test')
    expect(component.html()).toMatchSnapshot()
  })

  it('should initialize as unselected then selected on receiving props', () => {
    renderComponent(
      <RadioButton isSelected={false} />
    )

    expect(component.find('.radio-button').hasClass('selected')).toBe(false)
    expect(component.state('isSelected')).toBe(false)
    expect(component.html()).toMatchSnapshot()

    // exercise componentWillReceiveProps
    component.setProps({ isSelected: true })

    expect(component.find('.radio-button').hasClass('selected')).toBe(true)
    expect(component.state('isSelected')).toBe(true)
    expect(component.html()).toMatchSnapshot()
  })

  it('should initialize as selected then unselected on receiving props', () => {
    renderComponent(
      <RadioButton isSelected={true} />
    )

    expect(component.find('.radio-button').hasClass('selected')).toBe(true)
    expect(component.state('isSelected')).toBe(true)
    expect(component.html()).toMatchSnapshot()

    // exercise componentWillReceiveProps
    component.setProps({ isSelected: false })

    expect(component.find('.radio-button').hasClass('selected')).toBe(false)
    expect(component.state('isSelected')).toBe(false)
    expect(component.html()).toMatchSnapshot()
  })

  it('should initialize as enabled then disabled on receiving props', () => {
    renderComponent(
      <RadioButton isDisabled={false} />
    )

    expect(component.find('.control').hasClass('disabled')).toBe(false)
    expect(component.state('isDisabled')).toBe(false)
    expect(component.html()).toMatchSnapshot()

    // exercise componentWillReceiveProps
    component.setProps({ isDisabled: true })

    expect(component.find('.control').hasClass('disabled')).toBe(true)
    expect(component.state('isDisabled')).toBe(true)
    expect(component.html()).toMatchSnapshot()
  })

  it('should initialize as disabled then enabled on receiving props', () => {
    renderComponent(
      <RadioButton isDisabled={true} />
    )

    expect(component.find('.control').hasClass('disabled')).toBe(true)
    expect(component.state('isDisabled')).toBe(true)
    expect(component.html()).toMatchSnapshot()

    // exercise componentWillReceiveProps
    component.setProps({ isDisabled: false })

    expect(component.find('.control').hasClass('disabled')).toBe(false)
    expect(component.state('isDisabled')).toBe(false)
    expect(component.html()).toMatchSnapshot()
  })

  it('should execute appropriate onClick behavior', () => {
    const onClickMockFn = jest.fn()

    renderComponent(
      <RadioButton onClick={onClickMockFn} />
    )

    component.simulate('click')

    expect(component.find('.radio-button').hasClass('selected')).toBe(true)
    expect(component.state('isSelected')).toBe(true)

    component.simulate('click')

    expect(component.find('.radio-button').hasClass('selected')).toBe(false)
    expect(component.state('isSelected')).toBe(false)

    expect(onClickMockFn.mock.calls.length).toBe(2)
  })
})
