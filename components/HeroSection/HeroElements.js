import styled, { keyframes } from 'styled-components'

const animate = keyframes`
0%{transform:rotateY(90deg);opacity: 0}
50%{transform:rotateY(0deg);opacity: 1}
`

export const HeroContainer = styled.div`
  background: #0f0e0f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`

export const H1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 1rem;
  color: #fff;
`

export const Span = styled.span`
  display: inline-block;
  font-size: 3rem;
  opacity: 0;
  animation: ${animate} 1.5s linear;
  animation-delay: ${(props) => props.Var}s;
`
