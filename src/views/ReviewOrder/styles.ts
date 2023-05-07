import styled from "styled-components"

export const ReviewSection = styled.div`
  width: 28rem;
  margin-top: 15px;
  padding: 40px;
  border-radius: 6px 44px;
  background-color: ${props => props.theme['gray-200']};
`

export const ItemsDetails =styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 24px;

  >p {
    font-weight: 700;
    line-height: 20.8px;
    color: ${props => props.theme['gray-700']}
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme['gray-400']};

  >div {
    display: grid;
    gap: 8px;
  }
`

export const ButtonsBox = styled.div`
  display: flex;
  gap: 8px; 

  >button {
    display: flex;
    align-items: center;
    padding: 8px;
    border: none;
    border-radius: 6px;
    gap: 4px;

    background: ${props => props.theme['gray-400']};

    :hover {
      background: ${props => props.theme['gray-500']};
      transition: 0.2s;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 0.75rem;
      font-weight: 400;
      text-transform: uppercase;

      color: ${props => props.theme['gray-700']}
    }
  }
`

export const ItemsPriceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  >p {
    font-size: 0.875rem;
    color: ${props => props.theme['gray-700']}
  }

  >span {
    color: ${props => props.theme['gray-700']}
  }
`

export const TotalDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  >p {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['gray-800']}
  }
`

export const ConfirmOrderButton = styled.button`
  max-width: 368px;
  width: 100%;
  padding: 12px 8px;
  border: none;
  border-radius: 6px;
  margin-top: 24px;

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;

  background: ${props => props.theme['yellow-400']};
  color: ${props => props.theme['white']};

  :hover {
    background: ${props => props.theme['yellow-800']};
    transition: 0.2s;
  }
`
