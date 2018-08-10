const calculator = () => {
  let iNumber = -1

  const expr = (stmt) => {
    let t1 = term(stmt)

    while (true) {
      const token = stmt[iNumber]

      if (token !== '+' && token !== '-') {
        return t1
      }

      const t2 = term(stmt)

      if (!t2.left) {
        return t1
      }

      if (token === '+')
        t1 = new Plus(iNumber, t1, t2)
      else
        t1 = new Minus(iNumber, t1, t2)
    }
  }

  const term = (stmt) => {
    let t1 = primary(stmt)

    while (true) {
      const token = stmt[++iNumber]

      if (token !== '*' && token !== '/') {
        return t1
      }

      const t2 = primary(stmt)

      if (!t2.left) {
        return t1
      }
  
      if (token === '*')
        t1 = new Mult(iNumber, t1, t2)
      else
        t1 = new Div(iNumber, t1, t2)
    }
  }

  const primary = (stmt) => {
    return new Primary(++iNumber, stmt[iNumber])
  }

  return {
    statement: (stmt) => expr(stmt).Eval()
  }
}

class ParseTree {
  constructor(iNumber, left, right) {
    this.iNumber = iNumber
    this.left = left
    this.right = right
  }

  Eval() {}
}

class Plus extends ParseTree {
  constructor(iNumber, left, right) {
    super(iNumber, left, right)
  }
  Eval() {
    return this.left.Eval() + this.right.Eval()
  }
}

class Minus extends ParseTree {
  constructor(iNumber, left, right) {
    super(iNumber, left, right)
  }
  Eval() {
    return this.left.Eval() - this.right.Eval()
  }
}

class Mult extends ParseTree {
  constructor(iNumber, left, right) {
    super(iNumber, left, right)
  }
  Eval() {
    return this.left.Eval() * this.right.Eval()
  }
}

class Div extends ParseTree {
  constructor(iNumber, left, right) {
    super(iNumber, left, right)
  }
  Eval() {
    return this.left.Eval() / this.right.Eval()
  }
}

class Primary extends ParseTree {
  constructor(iNumber, left) {
    super(iNumber, left)
  }
  Eval() {
    return parseFloat(this.left)
  }
}

module.exports = exports = calculator
