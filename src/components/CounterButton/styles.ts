import styled from "styled-components";

export const CoffeeCounter = styled.div`
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: none;
  border-radius: 6px;

  background: ${props => props.theme['gray-400']};

  button {
    border: none;
    background: none;
    color: ${props => props.theme['purple-400']};

    >:hover {
      color: ${props => props.theme['purple-800']};
      transition: 0.2s;
    }
  }
`