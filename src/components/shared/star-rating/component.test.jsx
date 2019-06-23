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

  it('should renderer 3 full stars and 2 empty stars', () => {
    renderComponent(
      <StarRating rating={3}/>
    )

    expect(component.find('Star[fill="full"]').length).toBe(3)
    expect(component.find('Star[fill="half"]').length).toBe(0)
    expect(component.find('Star[fill="empty"]').length).toBe(2)

    expect(component.html()).toMatchSnapshot()
  })

  it('should renderer 2 full stars, 1 half star, and 2 empty stars', () => {
    renderComponent(
      <StarRating rating={2.3}/>
    )

    expect(component.find('Star[fill="full"]').length).toBe(2)
    expect(component.find('Star[fill="half"]').length).toBe(1)
    expect(component.find('Star[fill="empty"]').length).toBe(2)

    expect(component.html()).toMatchSnapshot()
  })

  it('should renderer 5 full stars', () => {
    renderComponent(
      <StarRating rating={6}/>
    )

    expect(component.find('Star[fill="full"]').length).toBe(5)
    expect(component.find('Star[fill="half"]').length).toBe(0)
    expect(component.find('Star[fill="empty"]').length).toBe(0)

    expect(component.html()).toMatchSnapshot()
  })

  it('should renderer 5 empty stars', () => {
    renderComponent(
      <StarRating rating={-2}/>
    )

    expect(component.find('Star[fill="full"]').length).toBe(0)
    expect(component.find('Star[fill="half"]').length).toBe(0)
    expect(component.find('Star[fill="empty"]').length).toBe(5)

    expect(component.html()).toMatchSnapshot()
  })
})
