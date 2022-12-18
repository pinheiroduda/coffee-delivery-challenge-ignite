import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { AppContainer, GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppContainer>
        <Home />
        
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
