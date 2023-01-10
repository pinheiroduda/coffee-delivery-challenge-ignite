import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import Expresso from '../../assets/Expresso.svg'
import { Card, CoffeeCounter, CoffeeDescription, CoffeeName, CoffeePrice, CoffeeType, PriceContainer, ShoppingButton } from './styles'

export function ProductCard() {
  const theme = useTheme()

  return (
    <Card>
      <img src={Expresso} alt="" />
      <CoffeeType>Tradicional</CoffeeType>
      <CoffeeName>Expresso Tradicional</CoffeeName>
      <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>
      <PriceContainer>
        <CoffeePrice>R$ <span>9,90</span></CoffeePrice>
          <CoffeeCounter>
            <Minus size={14} weight="duotone" color={theme['purple-400']}/>
            <p>1</p>
            <Plus size={14} weight="duotone" color={theme['purple-400']}/>
          </CoffeeCounter>
          <ShoppingButton>
            <ShoppingCart size={22} weight="fill" color={theme['white']}/>
          </ShoppingButton>
      </PriceContainer>
    </Card>
  )
}