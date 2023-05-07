import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import { useTheme } from 'styled-components'

import {
  Address,
  OrderContainer,
  OrderSection,
  PaymentOptions,
  PaymentOptionsButton,
  PaymentSection,
  SectionTitleBox,
  TitleBox
} from './styles'
import { ReviewOrder } from '../../views/ReviewOrder'

export function Order() {
  const theme = useTheme()

  return (
    <OrderContainer>
      <OrderSection>
        <TitleBox>Complete seu pedido</TitleBox>
        <Address>
          <SectionTitleBox>
            <MapPinLine
              size={22}
              weight="regular"
              color={theme['yellow-800']}
            />
            <div>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </SectionTitleBox>
          <form>
            <input type="number" placeholder="CEP" />
            <input type="text" className="fullSize" placeholder="Rua" />
            <div>
              <input type="number" placeholder="Número" />
              <input
                type="text"
                className="bigSize"
                placeholder="Complemento"
              />
            </div>
            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" className="mediumSize" />
              <input type="text" className="smallSize" placeholder="UF" />
            </div>
          </form>
        </Address>
        <PaymentSection>
          <SectionTitleBox>
            <CurrencyDollar
              size={22}
              weight="duotone"
              color={theme['purple-400']}
            />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </SectionTitleBox>
          <PaymentOptions>
            <PaymentOptionsButton>
              <CreditCard
                size={16}
                weight="duotone"
                color={theme['purple-400']}
              />
              Cartão de crédito
            </PaymentOptionsButton>
            <PaymentOptionsButton>
              <Bank size={16} weight="duotone" color={theme['purple-400']} />
              Cartão de débito
            </PaymentOptionsButton>
            <PaymentOptionsButton>
              <Money size={16} weight="duotone" color={theme['purple-400']} />
              Dinheiro
            </PaymentOptionsButton>
          </PaymentOptions>
        </PaymentSection>
      </OrderSection>
      <section>
        <TitleBox>Cafés selecionados</TitleBox>
        <ReviewOrder />
      </section>
    </OrderContainer>
  )
}
