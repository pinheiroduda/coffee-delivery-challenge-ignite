import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Trash } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { CartContext } from '../../context/CartContext'
import { CounterButton } from '../../components/CounterButton'
import {
  ButtonsBox,
  ConfirmOrderButton,
  Item,
  ItemsDetails,
  ItemsPriceDetails,
  ReviewSection,
  TotalDetails
} from './styles'

export function ReviewOrder() {
  const [counter, setCounter] = useState(1)
  const { cart, removeCoffeeFromCard, resetCart } = useContext(CartContext)
  const theme = useTheme()
  const navigate = useNavigate()

  const handleRedirectFinishedBuying = () => {
    resetCart()
    navigate('/confirmed-order')
  }

  const selectedCoffees = cart.map(c => Object.values(c))
  console.log(cart)

  const handleRemoveCoffee = (id: number) => {
    removeCoffeeFromCard({ id })
  }

  return (
    <ReviewSection>
      <ItemsDetails>
        {selectedCoffees &&
          selectedCoffees.map((selectedCoffee, id: number) => {
            return (
              <Item key={id}>
                <img src={selectedCoffee[2]} alt={selectedCoffee[1]} />
                <div>
                  <p>{selectedCoffee[1]}</p>
                  <ButtonsBox>
                    <CounterButton
                      counter={counter}
                      onCounterChange={setCounter}
                    />
                    <button
                      onClick={() => handleRemoveCoffee(selectedCoffee[0])}
                    >
                      <Trash width={16} color={theme['purple-400']} />
                      <p>Remover</p>
                    </button>
                  </ButtonsBox>
                </div>
                <p>R${(9.9 * selectedCoffee[3]).toFixed(2)}</p>
              </Item>
            )
          })}
      </ItemsDetails>
      <ItemsPriceDetails>
        <p>Total de itens</p>
        <span>R$</span>
      </ItemsPriceDetails>
      <ItemsPriceDetails>
        <p>Entrega</p>
        <span>R$</span>
      </ItemsPriceDetails>
      <TotalDetails>
        <p>Total</p>
        <p>R$</p>
      </TotalDetails>
      <ConfirmOrderButton onClick={handleRedirectFinishedBuying}>
        Confirmar pedido
      </ConfirmOrderButton>
    </ReviewSection>
  )
}
