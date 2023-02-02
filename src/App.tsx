import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { Router } from "./Router"
import { AppContainer, GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Router />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
