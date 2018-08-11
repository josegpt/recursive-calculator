import React, { Component } from 'react'
import Screen from './Screen'
import Pad from './Pad'

class Calculator extends Component {
  constructor() {
    super()

    this.state = {
      keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'C', '()', '%', '÷', '×', '−', '+', '=', '+/−', '.']
    }
  }
  render() {
    const { keys } = this.state

    return (
      <div className="calculator">
        <Screen />
        <Pad keys={keys} />
      </div>
    )
  }
}

export default Calculator
