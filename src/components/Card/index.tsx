import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CardContainer, CoffeeCounter, CoffeeDescription, CoffeeName, CoffeePrice, CoffeeType, PriceContainer, ShoppingButton } from './styles'

export function Card({ image, type, name, description }: any) {
  const theme = useTheme()

  return (
      <CardContainer>
        <img src={image} alt="" />
        <div>
          {type.map((coffeeType: string) =>
            <CoffeeType>{coffeeType}</CoffeeType>
          )}
        </div>
        <CoffeeName>{name}</CoffeeName>
        <CoffeeDescription>{description}</CoffeeDescription>
        <PriceContainer>
          <CoffeePrice>R$<span>9,90</span></CoffeePrice>
          <CoffeeCounter>
            <Minus size={14} weight="duotone" color={theme['purple-400']}/>
            <p>1</p>
            <Plus size={14} weight="duotone" color={theme['purple-400']}/>
          </CoffeeCounter>
          <ShoppingButton>
            <ShoppingCart size={22} weight="fill" color={theme['white']}/>
          </ShoppingButton>
        </PriceContainer>
      </CardContainer>
  )
}