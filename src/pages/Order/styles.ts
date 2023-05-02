import styled from 'styled-components';

export const OrderContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 32px;
`

export const OrderSection = styled.section`
  width: 100%;
  max-width: 640px;
`

export const Address = styled.div`
  margin-top: 15px;
  padding: 40px;
  border-radius: 6px;
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

export const TitleBox = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;

  color: ${props => props.theme['gray-800']}
`

export const SectionTitleBox = styled.div`
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
  border-radius: 6px;
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

export const ConfirmOrderButton =styled.button`
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
  color: ${props => props.theme['white']}
`