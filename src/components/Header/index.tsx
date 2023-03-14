import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'
import Logo from '../../assets/Logo.svg'
import { CartContext } from '../../context/CartContext'
import { HeaderContainer, NavBar, ShoppingButton } from './styles'

export function Header() {
  const { coffeeAmountSum } = useContext(CartContext)
  const theme = useTheme()

  return (
    <HeaderContainer>
      <a href="/">
        <img src={Logo} alt="" />
      </a>
      <NavBar>
        <div>
          <MapPin size={22} weight="fill" color={theme['purple-400']} />
          <p>Porto Alegre, RS</p>
        </div>
        <ShoppingButton href="/order">
          {coffeeAmountSum ? <span> {coffeeAmountSum} </span> : null}
          <ShoppingCart size={22} weight="fill" color={theme['yellow-800']} />
        </ShoppingButton>
      </NavBar>
    </HeaderContainer>
  )
}
