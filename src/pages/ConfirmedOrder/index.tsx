import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import Illustration from "../../assets/Illustration.svg"

import { DeliveryDetails, DeliveryItems, DeliveryItem, ConfirmedOrderContainer, OrderContainer } from "./styles";

export function ConfirmedOrder() {
  const theme = useTheme();

  return (
    <ConfirmedOrderContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <OrderContainer>
        <DeliveryDetails>
          <DeliveryItems>
            <DeliveryItem>
              <span style={{backgroundColor: theme['purple-400']}}>
                <MapPin size={16} weight="fill" color={theme['white']} />
              </span>
              <div>
                <p>Entrega em </p>
                <p>Local</p>
              </div>
            </DeliveryItem>
            <DeliveryItem>
              <span style={{backgroundColor: theme['yellow-400']}}>
                <Timer size={16} weight="fill" color={theme['white']} />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </div>
            </DeliveryItem>
            <DeliveryItem>
              <span style={{backgroundColor: theme['yellow-800']}}>
                <CurrencyDollar size={16} weight="fill" color={theme['white']} />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p>Tipo</p>
              </div>
            </DeliveryItem>
          </DeliveryItems>
        </DeliveryDetails>
        <img src={Illustration} alt="" />
      </OrderContainer>
    </ConfirmedOrderContainer>
  )
}