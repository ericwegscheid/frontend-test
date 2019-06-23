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

  it('should render with the appropriate label', () => {
    renderComponent(
      <SelectBox label="test" />
    )

    expect(component.find('label').text()).toBe('test')
    expect(component.find('.label span').text()).toBe('default')
    expect(component.html()).toMatchSnapshot()
  })

  it('should render with the appropriate options when given valid options', () => {
    const options = [
      { key: '0', value: 'zero' },
      { key: '1', value: 'one' },
      { key: '2', value: 'two' },
      { key: '3', value: 'three' },
      { key: '4', value: 'four' },
    ]

    renderComponent(
      <SelectBox options={options} />
    )

    const listItems = component.find('ul li')

    expect(listItems.at(0).text()).toBe(options[0].value)
    expect(listItems.at(1).text()).toBe(options[1].value)
    expect(listItems.at(2).text()).toBe(options[2].value)
    expect(listItems.at(3).text()).toBe(options[3].value)
    expect(listItems.at(4).text()).toBe(options[4].value)
    expect(listItems.length).toBe(5)
    expect(component.html()).toMatchSnapshot()
  })

  it('should render with the appropriate options when given invalid options', () => {
    const options = [
      { key: '0', value: 'zero' },
      { bad: '1', props: 'one' },
      { key: 100, value: 'two' },
      { key: '3', value: 'three' },
      { value: [] },
      [1, 2, 3],
      'test',
      200,
      null,
      undefined,
    ]

    renderComponent(
      <SelectBox options={options} />
    )

    const listItems = component.find('ul li')

    expect(listItems.at(0).text()).toBe(options[0].value)
    expect(listItems.at(1).text()).toBe(options[3].value)
    expect(listItems.length).toBe(2)
    expect(component.html()).toMatchSnapshot()
  })

  it('should initialize as enabled then disabled on receiving props', () => {
    renderComponent(
      <SelectBox isDisabled={false} />
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
      <SelectBox isDisabled={true} />
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

  it('should initialize with the appropriate selected item then update on receiving props', () => {
    const options = [
      { key: '0', value: 'zero' },
      { key: '1', value: 'one' },
      { key: '2', value: 'two' },
    ]

    renderComponent(
      <SelectBox options={options} />
    )

    expect(component.find('.label span').text()).toBe(options[0].value)
    expect(component.state('selected')).toBe(options[0])
    expect(component.html()).toMatchSnapshot()

    // exercise componentWillReceiveProps
    component.setProps({ selected: options[1] })

    expect(component.find('.label span').text()).toBe(options[1].value)
    expect(component.state('selected')).toBe(options[1])
    expect(component.html()).toMatchSnapshot()

    // passing invalid props
    component.setProps({ selected: 'invalid' })

    expect(component.find('.label span').text()).toBe(options[1].value)
    expect(component.state('selected')).toBe(options[1])
    expect(component.html()).toMatchSnapshot()
  })

  it('should execute appropriate onClick behavior', () => {
    const options = [
      { key: '0', value: 'zero' },
      { key: '1', value: 'one' },
      { key: '2', value: 'two' },
      { key: '3', value: 'three' },
      { key: '4', value: 'four' },
    ]

    renderComponent(
      <SelectBox options={options} />
    )

    component.simulate('click')

    expect(component.find('.control').hasClass('open')).toBe(true)
    expect(component.state('isOpen')).toBe(true)
    expect(component.html()).toMatchSnapshot()

    component.simulate('click')

    expect(component.find('.control').hasClass('open')).toBe(false)
    expect(component.state('isOpen')).toBe(false)
    expect(component.html()).toMatchSnapshot()
  })

  it('should execute appropriate onClick behavior', () => {
    const onSelectItemFn = jest.fn()
    const options = [
      { key: '0', value: 'zero' },
      { key: '1', value: 'one' },
      { key: '2', value: 'two' },
      { key: '3', value: 'three' },
      { key: '4', value: 'four' },
    ]

    renderComponent(
      <SelectBox
        onSelectItem={onSelectItemFn}
        options={options}
      />
    )

    component.simulate('click')
    component.find('ul li').at(1).simulate('click')

    expect(component.find('.label span').text()).toBe(options[1].value)
    expect(component.state('selected')).toBe(options[1])
    expect(component.html()).toMatchSnapshot()

    expect(onSelectItemFn.mock.calls.length).toBe(1)
  })
})
