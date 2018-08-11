import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pad from '../components/Pad'
import Key from '../components/Key'

Enzyme.configure({ adapter: new Adapter() })

describe('<Pad />', () => {
  it('allows to pass props', () => {
    const keys = ['1', '2']

    const wrapper = mount(<Pad keys={keys} />)

    expect(wrapper.props().keys[0]).toBe('1')
  })

  it('renders 2 buttons', () => {
    const keys = ['1', '2']

    const wrapper = shallow(<Pad keys={keys} />)
    
    expect(wrapper.find(Key)).toHaveLength(2)
  })
})