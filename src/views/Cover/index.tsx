import PageCover from '../../assets/PageCover.svg'
import { coverList } from '../../services/coverListData'
import { CoverContainer, FeaturesList, Feature, TextSection } from './styles'

export function Cover() {
  return (
    <CoverContainer>
      <TextSection>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <FeaturesList>
          {coverList.map(feature => 
            <Feature>
              <span style={{backgroundColor: feature.backgroundColor}}>
                <feature.icon size={16} weight="fill" color="#FFF"/>
              </span>
              <span>{feature.text}</span>
            </Feature>
          )}
        </FeaturesList>
      </TextSection>
      <img src={PageCover} alt="" />
    </CoverContainer>
  )
}