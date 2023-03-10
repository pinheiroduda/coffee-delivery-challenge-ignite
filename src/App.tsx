import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { CartContextProvider } from './context/CartContext'
import { AppContainer, GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <CartContextProvider>
          <Header />
          <Router />
        </CartContextProvider>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
