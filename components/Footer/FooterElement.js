import styled from 'styled-components'

export const FooterCotainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
`
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding-top: 24px;
  border-top: 2px solid rgba(9, 9, 9, 0.1);
`

export const FooterWrap = styled.div`
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
