import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'
import { CardType } from '../../@types/cardType'
import { CartContext } from '../../context/CartContext'
import { CounterButton } from '../CounterButton'
import {
  CardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
  CoffeeType,
  PriceContainer,
  ShoppingButton
} from './styles'

export function Card({ image, type, name, description }: CardType) {
  const [counter, setCounter] = useState<number>(1)
  const { addCoffeeToCart } = useContext(CartContext)
  const theme = useTheme()

  const handleAddCoffeeToCard = () => {
    addCoffeeToCart({ id: name, img: image, quantity: counter })
  }

  return (
    <CardContainer>
      <img src={image} alt="" />
      <div>
        {type.map((coffeeType: string, index: number) => (
          <CoffeeType key={index}>{coffeeType}</CoffeeType>
        ))}
      </div>
      <CoffeeName>{name}</CoffeeName>
      <CoffeeDescription>{description}</CoffeeDescription>
      <PriceContainer>
        <CoffeePrice>
          R$<span>9,90</span>
        </CoffeePrice>
        <CounterButton counter={counter} onCounterChange={setCounter} />
        <ShoppingButton onClick={handleAddCoffeeToCard}>
          <ShoppingCart size={22} weight="fill" color={theme['white']} />
        </ShoppingButton>
      </PriceContainer>
    </CardContainer>
  )
}
