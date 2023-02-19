import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'

import { CoffeeCounter } from './styles'

export function CounterButton() {
  const [counter, setCounter] = useState(0)
  const theme = useTheme()

  const isDisabled = counter <= 0

  const handleDecrementCounter = () => {
    setCounter(counter - 1)
  }

  const handleIncrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <CoffeeCounter>
      <button onClick={handleDecrementCounter} disabled={isDisabled}>
        <Minus size={14} weight="duotone" color={theme['purple-400']} />
      </button>
      <p>{counter}</p>
      <button onClick={handleIncrementCounter}>
        <Plus size={14} weight="duotone" color={theme['purple-400']} />
      </button>
    </CoffeeCounter>
  )
}
