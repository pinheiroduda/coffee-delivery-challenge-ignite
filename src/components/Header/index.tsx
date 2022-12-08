import { MapPin } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer, NavBar } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={ Logo } alt="" />
      <NavBar>
        <div>
          <MapPin size={22} weight={'fill'}/>
          <p>Porto Alegre, RS</p>
        </div>
        <i></i>
      </NavBar>
    </HeaderContainer>
  )
}