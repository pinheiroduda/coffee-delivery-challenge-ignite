import styled from "styled-components";

export const CoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  // flex-wrap: wrap;
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

export const ListItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;

  margin-top: 4.125rem;
`