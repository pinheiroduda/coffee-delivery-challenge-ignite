import styled from "styled-components";

export const CoverContainer = styled.div`
  height: 544px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`

export const TextSection = styled.section`
  width: 36.75rem;
  
  >h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 3.9rem;
  }

  >p {
    margin-top: 1rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const FeaturesList = styled.ul`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  list-style: none;
`

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  >span:first-child {
    padding: 8px 8px 4px;
    border-radius: 100%;
  }

  >span:last-child {
    font-family: 'Roboto', sans-serif;
    color: #574F4D;
  }
  
  margin-bottom: 20px;
`