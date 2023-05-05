import styled from "styled-components";

export const HeaderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0rem;
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

export const ShoppingButton = styled.a`
  width: 2.375rem;
  height: 2.375rem;
  background: ${props => props.theme['yellow-100']};
  border: none;
  border-radius: 6px;
  padding: 8px;
  position: relative;

  :hover {
    opacity: 0.8;
    transition: 0.2s;
  }

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    background: ${props => props.theme['yellow-800']};
    border-radius: 100%;
    padding-top: 2px;
    
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme['white']}
  }
`