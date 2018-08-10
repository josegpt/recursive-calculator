import calculator from '../calculator'

describe('Calculator', () => {
  it('does not crash in partial input without operator', () => {
    const sum = ['5']

    expect(calculator().statement(sum)).toBe(5)
  })

  it('does not crash in partial input with operator', () => {
    const sum = ['5', '+']

    expect(calculator().statement(sum)).toBe(5)
  })

  it('adds single digit numbers', () => {
    const sum = ['5', '+', '5']

    expect(calculator().statement(sum)).toBe(10)
  })

  it('adds double digit numbers', () => {
    const sum = ['10', '+', '15']

    expect(calculator().statement(sum)).toBe(25)
  })

  it('substracts single digit numbers', () => {
    const sum = ['5', '-', '5']

    expect(calculator().statement(sum)).toBe(0)
  })

  it('substracts double digit numbers', () => {
    const sum = ['20', '-', '5']

    expect(calculator().statement(sum)).toBe(15)
  })

  it('multiplies single digit numbers', () => {
    const sum = ['5', '*', '5']

    expect(calculator().statement(sum)).toBe(25)
  })

  it('multiplies double digit numbers', () => {
    const sum = ['10', '*', '25']

    expect(calculator().statement(sum)).toBe(250)
  })

  it('divides single digit numbers', () => {
    const sum = ['5', '/', '5']

    expect(calculator().statement(sum)).toBe(1)
  })

  it('divides double digit numbers', () => {
    const sum = ['10', '/', '25']

    expect(calculator().statement(sum)).toBe(0.4)
  })

  it('adds and substracts', () => {
    const sum = ['5', '+', '5', '-', '5']

    expect(calculator().statement(sum)).toBe(5)
  })

  it('adds and multiplies', () => {
    const sum = ['5', '+', '5', '*', '5']

    expect(calculator().statement(sum)).toBe(30)
  })

  it('adds and divides', () => {
    const sum = ['5', '+', '5', '/', '5']

    expect(calculator().statement(sum)).toBe(6)
  })

  it('substracts and adds', () => {
    const sum = ['15', '-', '5', '+', '5']

    expect(calculator().statement(sum)).toBe(15)
  })

  it('substracts and multiplies', () => {
    const sum = ['15', '-', '5', '*', '5']

    expect(calculator().statement(sum)).toBe(-10)
  })

  it('substracts and divides', () => {
    const sum = ['15', '-', '5', '/', '5']

    expect(calculator().statement(sum)).toBe(14)
  })

  it('multiplies and adds', () => {
    const sum = ['15', '*', '5', '+', '5']

    expect(calculator().statement(sum)).toBe(80)
  })

  it('multiplies and substracts', () => {
    const sum = ['15', '*', '5', '-', '5']

    expect(calculator().statement(sum)).toBe(70)
  })

  it('multiplies and divides', () => {
    const sum = ['15', '*', '5', '/', '5']

    expect(calculator().statement(sum)).toBe(15)
  })

  it('divides and adds', () => {
    const sum = ['15', '/', '5', '+', '5']

    expect(calculator().statement(sum)).toBe(8)
  })

  it('divides and substracts', () => {
    const sum = ['15', '/', '5', '-', '5']

    expect(calculator().statement(sum)).toBe(-2)
  })

  it('divides and multiplies', () => {
    const sum = ['15', '/', '5', '*', '5']

    expect(calculator().statement(sum)).toBe(15)
  })

})
