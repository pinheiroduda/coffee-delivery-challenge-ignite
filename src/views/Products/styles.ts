import styled from "styled-components";

export const ProductsContainer = styled.div`
  padding: 2rem 0 7.3125rem 0;

  >h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 42px;
    text-align: left;

    color: ${props => props.theme['gray-800']}
  }
`
