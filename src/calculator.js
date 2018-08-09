const calculator = (iNumber, stmt) => {
  let t1 = term(iNumber, stmt)

  while (true) {
    const token = stmt[++iNumber]
    if (token !== '+' && token !== '-') {
      return t1
    }

    const t2 = term(++iNumber, stmt)

    if (token === '+')
      t1 = new Plus(iNumber, t1, t2)
    else
      t1 = new Minus(iNumber, t1, t2)
  }
}

const term = (iNumber, stmt) => {
  let t1 = primary(iNumber, stmt)

  while (true) {
    const token = stmt[++iNumber]

    if (token !== '*' && token !== '/') {
      return t1
    }

    const t2 = primary(++iNumber, stmt)

    if (token === '*')
      t1 = new Mult(iNumber, t1, t2)
    else
      t1 = new Div(iNumber, t1, t2)
  }
}

const primary = (iNumber, stmt) => {
  return new Primary(iNumber, stmt[iNumber])
}

class ParseTree {
  constructor(iNumber, left, right) {
    this.iNumber = iNumber
    this.left = left
    this.right = right
  }

  Eval() {
    return 0
  }
}

class Expr extends ParseTree {
  constructor(iNumber, left, right) {
    super(iNumber, left, right)
  }
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
