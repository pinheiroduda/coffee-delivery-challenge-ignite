import PageCover from '../../assets/PageCover.svg'
import { CoverContainer, ListItems, TextSection } from './styles'

export function Cover() {
  return (
    <CoverContainer>
      <TextSection>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <ListItems>
          <li>Compra simples e segura</li>
          <li>Embalagem mantém o café intacto</li>
          <li>Entrega rápida e rastreada</li>
          <li>O café chega fresquinho até você</li>
        </ListItems>
      </TextSection>
      <img src={PageCover} alt="" />
    </CoverContainer>
  )
}