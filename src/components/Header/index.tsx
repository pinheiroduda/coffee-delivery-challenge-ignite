import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'
import Logo from '../../assets/Logo.svg'
import { HeaderContainer, NavBar, ShoppingButton } from './styles'

export function Header() {
  const theme = useTheme()

  const handleFinishShopping = () => {
    //redirect to finish shopping screen
  }

  return (
    <HeaderContainer>
      <a href="/">
        <img src={ Logo } alt="" />
      </a>
      <NavBar>
        <div>
          <MapPin size={22} weight='fill' color={theme['purple-400']}/>
          <p>Porto Alegre, RS</p>
        </div>
        <ShoppingButton href='/order'>
          <ShoppingCart size={22} weight="fill" color={theme['yellow-800']}/>
        </ShoppingButton>
      </NavBar>
    </HeaderContainer>
  )
}