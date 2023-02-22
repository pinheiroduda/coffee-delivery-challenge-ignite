import { Minus, Plus } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { CoffeeCounter } from './styles'

interface CounterButtonProps {
  counter: number
  onCounterChange: (updatedCounter: number) => void
}

export function CounterButton({
  counter,
  onCounterChange
}: CounterButtonProps) {
  const theme = useTheme()

  const isDisabled = counter <= 1

  return (
    <CoffeeCounter>
      <button
        onClick={() => onCounterChange(counter - 1)}
        disabled={isDisabled}
      >
        <Minus size={14} weight="duotone" color={theme['purple-400']} />
      </button>
      <p>{counter}</p>
      <button onClick={() => onCounterChange(counter + 1)}>
        <Plus size={14} weight="duotone" color={theme['purple-400']} />
      </button>
    </CoffeeCounter>
  )
}
