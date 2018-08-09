const calculator = require('../src/calculator')

describe('Calculator', () => {
  it('does not crash in partial input without operand', () => {
    const sum = ['5']

    expect(calculator(0, sum).Eval()).toBe(5)
  })

  it('adds single digit numbers', () => {
    const sum = ['5', '+', '5']

    expect(calculator(0, sum).Eval()).toBe(10)
  })

  it('adds double digit numbers', () => {
    const sum = ['10', '+', '15']

    expect(calculator(0, sum).Eval()).toBe(25)
  })

  it('substracts single digit numbers', () => {
    const sum = ['5', '-', '5']

    expect(calculator(0, sum).Eval()).toBe(0)
  })

  it('substracts double digit numbers', () => {
    const sum = ['20', '-', '5']

    expect(calculator(0, sum).Eval()).toBe(15)
  })

  it('multiplies single digit numbers', () => {
    const sum = ['5', '*', '5']

    expect(calculator(0, sum).Eval()).toBe(25)
  })

  it('multiplies double digit numbers', () => {
    const sum = ['10', '*', '25']

    expect(calculator(0, sum).Eval()).toBe(250)
  })

  it('divides single digit numbers', () => {
    const sum = ['5', '/', '5']

    expect(calculator(0, sum).Eval()).toBe(1)
  })

  it('divides double digit numbers', () => {
    const sum = ['10', '/', '25']

    expect(calculator(0, sum).Eval()).toBe(0.4)
  })

  it('adds and substracts', () => {
    const sum = ['5', '+', '5', '-', '5']

    expect(calculator(0, sum).Eval()).toBe(5)
  })

  it('adds and multiplies', () => {
    const sum = ['5', '+', '5', '*', '5']

    expect(calculator(0, sum).Eval()).toBe(30)
  })

  it('adds and divides', () => {
    const sum = ['5', '+', '5', '/', '5']

    expect(calculator(0, sum).Eval()).toBe(6)
  })

  it('substracts and adds', () => {
    const sum = ['15', '-', '5', '+', '5']

    expect(calculator(0, sum).Eval()).toBe(15)
  })

  it('substracts and multiplies', () => {
    const sum = ['15', '-', '5', '*', '5']

    expect(calculator(0, sum).Eval()).toBe(-10)
  })

  it('substracts and divides', () => {
    const sum = ['15', '-', '5', '/', '5']

    expect(calculator(0, sum).Eval()).toBe(14)
  })

  it('multiplies and adds', () => {
    const sum = ['15', '*', '5', '+', '5']

    expect(calculator(0, sum).Eval()).toBe(80)
  })

  it('multiplies and substracts', () => {
    const sum = ['15', '*', '5', '-', '5']

    expect(calculator(0, sum).Eval()).toBe(70)
  })

  it('multiplies and divides', () => {
    const sum = ['15', '*', '5', '/', '5']

    expect(calculator(0, sum).Eval()).toBe(15)
  })

})