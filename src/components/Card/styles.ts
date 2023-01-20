import styled from "styled-components";

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  margin: 3.375rem 0 2.5rem 0;
  padding: 0 1.25rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${props => props.theme['gray-200']};

  >img {
    position: relative;
    top: -20px;
    width: 120px;
    height: 120px;
  }

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;   
  }
`

export const CoffeeType = styled.p`
  width: auto;
  height: 21px;
  padding: 4px 8px;
  border-radius: 100px;

  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 13px;
  text-transform: uppercase;

  background: ${props => props.theme['yellow-100']};
  color: ${props => props.theme['yellow-800']};
`

export const CoffeeName = styled.h2`
  margin: 1rem 0 0.5rem;

  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 26px;

  color: ${props => props.theme['gray-800']};
`

export const CoffeeDescription = styled.h2`
  margin-bottom: 2rem;

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;

  color: ${props => props.theme['gray-600']};
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CoffeePrice = styled.p`
  margin-top: 1px;
  display: flex;
  align-items: baseline;
  gap: 4px;

  font-family: 'Regular', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 18.2px;

  color: ${props => props.theme['gray-800']};

  >span{
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 31.2px;

    color: ${props => props.theme['gray-800']};
  }
`

export const CoffeeCounter = styled.div`
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px 0 23px;
  padding: 8px;
  border-radius: 6px;

  background: ${props => props.theme['gray-400']};
`

export const ShoppingButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background: ${props => props.theme['purple-800']};
  border: none;
  border-radius: 6px;
`