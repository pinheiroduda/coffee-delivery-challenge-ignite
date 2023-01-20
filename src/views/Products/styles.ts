import styled from "styled-components";

export const ProductsContainer = styled.section`
  padding-top: 2rem;

  >h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 42px;
    text-align: left;

    color: ${props => props.theme['gray-800']}
  }

  >div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`