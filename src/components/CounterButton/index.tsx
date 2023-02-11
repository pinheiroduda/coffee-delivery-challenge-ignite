import { Minus, Plus } from "phosphor-react";
import { useTheme } from "styled-components";

import { CoffeeCounter } from "./styles";

export function CounterButton() {
  const theme = useTheme()

  return (
    <CoffeeCounter>
      <Minus size={14} weight="duotone" color={theme['purple-400']}/>
        <p>1</p>
      <Plus size={14} weight="duotone" color={theme['purple-400']}/>
    </CoffeeCounter>
  )
} 