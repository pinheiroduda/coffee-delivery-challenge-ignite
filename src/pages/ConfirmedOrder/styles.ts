import styled from "styled-components";

export const ConfirmedOrderContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme['yellow-800']}
  }

  >p {
    font-size: 1.25rem; 
    color: ${props => props.theme['gray-800']};
    margin: 4px 0;
  }
`

export const OrderContainer = styled.div`
  display: flex;
  gap: 6.375rem;
  margin-top: 24px;
`

export const DeliveryDetails = styled.div`
  width: 526px;
  height: 270px;
  border-radius: 6px 36px;

  background: linear-gradient(to right, ${props => props.theme['yellow-400']}, ${props => props.theme['purple-400']});
`

export const DeliveryItems = styled.div`
  background: ${props => props.theme['white']};
  padding: 40px;
  margin: 1px;
  border-radius: 6px 36px;
`

export const DeliveryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  >span {
    padding: 8px 8px 4px;
    border-radius: 100%;
  }

  p {
    line-height: 20.6px;
  }
`