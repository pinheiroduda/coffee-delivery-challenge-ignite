import { 
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from "phosphor-react";
import { useTheme } from "styled-components";

import { 
  Address,
  OrderContainer,
  OrderSection,
  PaymentOptions,
  PaymentOptionsButton,
  PaymentSection,
  TitleBox
} from "./styles";

export function Order() {
  const theme = useTheme()

  return (
    <OrderContainer>
      <OrderSection>
        <p>Complete seu pedido</p>
        <Address>
          <TitleBox>
            <MapPinLine size={22} weight="thin" color={theme['yellow-800']}/>
            <div>
              <h2>Endereço de entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleBox>
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
          <TitleBox>
            <CurrencyDollar size={22} weight="duotone" color={theme['purple-400']}/>
            <div>
              <h2>Pagamento</h2>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </TitleBox>
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
        <p>Cafés selecionados</p>
        <div>
          <div>
            <img></img>
            <div>
              <p>Nome do café</p>
               {/*counter */}
              <button>
                <i></i>
                Remover
              </button>
            </div>
            <p>total</p>
          </div>
          <div>
            <p>Total de itens</p>
            <p>R$</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$</p>
          </div>
          <div>
            <p>Total</p>
            <p>R$</p>
          </div>
          <button>Confirmar pedido</button>
        </div>
      </section>
    </OrderContainer>
  )
}