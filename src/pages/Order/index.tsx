import { 
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash
} from "phosphor-react";
import { useTheme } from "styled-components";
import { CounterButton } from "../../components/CounterButton";

import { 
  Address,
  ButtonsBox,
  ConfirmOrderButton,
  Item,
  ItemsDetails,
  ItemsPriceDetails,
  OrderContainer,
  OrderSection,
  PaymentOptions,
  PaymentOptionsButton,
  PaymentSection,
  ReviewSection,
  SectionTitleBox,
  TitleBox,
  TotalDetails
} from "./styles";

export function Order() {
  const theme = useTheme()

  return (
    <OrderContainer>
      <OrderSection>
        <TitleBox>Complete seu pedido</TitleBox>
        <Address>
          <SectionTitleBox>
            <MapPinLine size={22} weight="regular" color={theme['yellow-800']}/>
            <div>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </SectionTitleBox>
          <form>
            <input type="number" placeholder="CEP"/>
            <input type="text"  className="fullSize" placeholder="Rua"/>
            <div>
              <input type="number" placeholder="Número"/>
              <input type="text" className="bigSize" placeholder="Complemento"/>
            </div>
            <div>
              <input type="text" placeholder="Bairro"/>
              <input type="text" placeholder="Cidade" className="mediumSize"/>
              <input type="text" className="smallSize" placeholder="UF"/>
            </div>
          </form>
        </Address>
        <PaymentSection>
          <SectionTitleBox>
            <CurrencyDollar size={22} weight="duotone" color={theme['purple-400']}/>
            <div>
              <h2>Pagamento</h2>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </SectionTitleBox>
          <PaymentOptions>
            <PaymentOptionsButton>
              <CreditCard size={16} weight="duotone" color={theme['purple-400']}/>
              Cartão de crédito
            </PaymentOptionsButton>
            <PaymentOptionsButton>
              <Bank size={16} weight="duotone" color={theme['purple-400']}/>
              Cartão de débito
            </PaymentOptionsButton>
            <PaymentOptionsButton>
              <Money size={16} weight="duotone" color={theme['purple-400']}/>
              Dinheiro
            </PaymentOptionsButton>
          </PaymentOptions>
        </PaymentSection>
      </OrderSection>
      <section>
        <TitleBox>Cafés selecionados</TitleBox>
        <ReviewSection>
          <ItemsDetails>
            <Item>
              <p>aqui vai a imagem</p>
              <div>
                <p>Nome do café</p>
                <ButtonsBox>
                  <CounterButton />
                  <button>
                    <Trash width={16} color={theme['purple-400']}/>
                    <p>Remover</p>
                  </button>
                </ButtonsBox>
              </div>
            </Item>
              <p>total</p>
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
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </ReviewSection>
      </section>
    </OrderContainer>
  )
}