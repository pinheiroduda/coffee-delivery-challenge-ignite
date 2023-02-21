import { Minus, Plus } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { CoffeeCounter } from './styles'

interface CounterButtonProps {
  counter: number
  increment: () => void
  decrement: () => void
}

export function CounterButton({
  counter,
  increment,
  decrement
}: CounterButtonProps) {
  const theme = useTheme()

  const isDisabled = counter <= 0

  return (
    <CoffeeCounter>
      <button onClick={decrement} disabled={isDisabled}>
        <Minus size={14} weight="duotone" color={theme['purple-400']} />
      </button>
      <p>{counter}</p>
      <button onClick={increment}>
        <Plus size={14} weight="duotone" color={theme['purple-400']} />
      </button>
    </CoffeeCounter>
  )
}
