import React from 'react'
import Key from './Key'

const Pad = ({ keys }) => (
  <div className="calculator__pad">
    {keys.map((key, i) => <Key key={i} title={key} />)}
  </div>
)

export default Pad
