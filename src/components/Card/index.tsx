import { ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CounterButton } from '../CounterButton'
import { CardContainer, CoffeeDescription, CoffeeName, CoffeePrice, CoffeeType, PriceContainer, ShoppingButton } from './styles'

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
          <CounterButton />
          <ShoppingButton href='/order'>
            <ShoppingCart size={22} weight="fill" color={theme['white']}/>
          </ShoppingButton>
        </PriceContainer>
      </CardContainer>
  )
}