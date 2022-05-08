import styled from 'styled-components'

export const FooterCotainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  margin-top: 24px;
`

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10rem;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1000px;
`
export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-height: 340;
  padding: 30px;
  transition: all 0.2 ease-in-out;
`
