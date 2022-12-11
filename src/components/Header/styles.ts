import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.75rem;

  >div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: ${props => props.theme['purple-100']};
    border-radius: 6px;
    
    gap: 4px;
    
    color: ${props => props.theme['purple-800']};
    
    >p {
      line-height: 1.1375;
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`

export const ShoppingButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background: ${props => props.theme['yellow-100']};
  border: none;
  border-radius: 6px;
`