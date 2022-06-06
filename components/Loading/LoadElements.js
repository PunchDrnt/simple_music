import styled, { keyframes } from 'styled-components'

const animateBg = keyframes`
  0%{filter:hue-rotate(0deg)}
  100%{filter:hue-rotate(360deg)}
`

const animate = keyframes`
0%{transform:scale(1)}
80%,100%{transform:scale(0)}
`

export const LoadContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #000;
  animation: ${animateBg} 5s linear infinite;
`

export const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`

export const Circle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;

  &::before {
    content: 'Loading...';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #00ff0a;
    font-size: 1.5rem;
  }
`

export const Ball = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(${(props) => props.Var * 18}deg);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: #00ff0a;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
      0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
    animation: ${animate} 1s linear infinite;
    animation-delay: ${(props) => props.Var * 0.05}s;
  }
`
