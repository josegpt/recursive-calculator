import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Calculator from '../components/Calculator'
import Screen from '../components/Screen'
import Pad from '../components/Pad'

Enzyme.configure({ adapter: new Adapter() })

describe('<Calculator />', () => {
  it('renders calculator wrapper', () => {
    const wrapper = shallow(<Calculator />)

    expect(wrapper.find('.calculator')).toHaveLength(1)
  })

  it('renders calculator screen', () => {
    const wrapper = shallow(<Calculator />)

    expect(wrapper.find(Screen)).toHaveLength(1)
  })

  it('renders calculator pad', () => {
    const wrapper = shallow(<Calculator />)

    expect(wrapper.find(Pad)).toHaveLength(1)
  })
})
