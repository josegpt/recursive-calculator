import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Key from '../components/Key'

Enzyme.configure({ adapter: new Adapter() })

describe('<Key />', () => {
  it('renders key title', () => {
    const wrapper = shallow(<Key title="1" />)

    expect(wrapper.text()).toContain('1')
  })
})