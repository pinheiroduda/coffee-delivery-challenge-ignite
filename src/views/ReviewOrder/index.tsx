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
  const { cart, coffeeAmountSum, removeCoffeeFromCard, resetCart } =
    useContext(CartContext)
  const theme = useTheme()
  const navigate = useNavigate()

  const handleRedirectFinishedBuying = () => {
    resetCart()
    navigate('/confirmed-order')
  }

  const selectedCoffees = cart.map(c => Object.values(c))

  const handleRemoveCoffee = (id: number) => {
    removeCoffeeFromCard({ id })
  }

  const totalPrice = (9.9 * coffeeAmountSum).toFixed(2)
  const deliveryPrice = (3.5 + parseInt(totalPrice)).toFixed(2)

  return (
    <ReviewSection>
      <ItemsDetails>
        {selectedCoffees.length > 0 ? (
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
          })
        ) : (
          <p>O carrinho de compras está vazio</p>
        )}
      </ItemsDetails>
      <ItemsPriceDetails>
        <p>Total de itens</p>
        {parseInt(totalPrice) > 0 ? (
          <span>R${totalPrice}</span>
        ) : (
          <span>RS0,00</span>
        )}
      </ItemsPriceDetails>
      <ItemsPriceDetails>
        <p>Entrega</p>
        {parseInt(totalPrice) > 0 ? <span>R$3,50</span> : <span>RS0,00</span>}
      </ItemsPriceDetails>
      <TotalDetails>
        <p>Total</p>
        {parseInt(totalPrice) > 0 ? <p>R${deliveryPrice}</p> : <p>RS0,00</p>}
      </TotalDetails>
      <ConfirmOrderButton onClick={handleRedirectFinishedBuying}>
        Confirmar pedido
      </ConfirmOrderButton>
    </ReviewSection>
  )
}
