import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p, a, input, button, li, span {
    font-size: 1rem;
    font-weight: 400;
  }
`

export const AppContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: auto;
`