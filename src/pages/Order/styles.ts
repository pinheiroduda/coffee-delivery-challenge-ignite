import styled from 'styled-components';

export const OrderContainer = styled.div`
  display: flex;
  gap: 32px
`

export const OrderSection = styled.section`
  width: 100%;
  max-width: 640px;
`

export const Address = styled.div`
  margin-top: 15px;
  padding: 40px;
  background-color: ${props => props.theme['gray-200']};
  
  form {
    display: grid;
    margin-top: 32px;

    input {
      max-width: 100%;
      width: 200px;
      height: 42px;
      padding: 12px;
      
      color: ${props => props.theme['gray-600']};
      background: ${props => props.theme['gray-300']};
      border: 1px solid ${props => props.theme['gray-400']};
      border-radius: 4px;

      outline: none;
    }
  
    input:not(:last-child)  {
      margin: 0 0.75rem 1rem 0;
    }

    .fullSize {
      width: 560px;
    }

    .bigSize {
      width: 348px;
    }

    .mediumSize {
      width: 276px;
    }

    .smallSize { 
      width: 60px;
    }
  }
  `

export const TitleBox = styled.div`
  display: flex;
  gap: 8px;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 20.8px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18.2px;
  }
`

export const PaymentSection =styled.div`
  margin-top: 12px;
  padding: 40px;
  background-color: ${props => props.theme['gray-200']};
`
export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentOptionsButton = styled.button`
  width: 178.67px;
  height: 51px;
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;

  color: ${props => props.theme['gray-700']};
  background: ${props => props.theme['gray-300']};
  border: 1px solid ${props => props.theme['gray-400']};
  border-radius: 6px;

  font-size: 0.75rem;
  text-transform: uppercase;
`