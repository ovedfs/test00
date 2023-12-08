import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
  console.log('counter');
  const [counter, setCounter] = useState(value)

  const handleAdd = () => setCounter(counter + 1)
  const handleDiff = () => setCounter(counter - 1)
  const handleReset = () => setCounter(value)

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleDiff}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
