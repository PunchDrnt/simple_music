import styled, { keyframes } from 'styled-components'

const animateBg = keyframes`
  0%{filter:hue-rotate(0deg)}
  100%{filter:hue-rotate(360deg)}
`

const animate = keyframes`
  0%{transform:rotate(0deg)}
  100%{transform:rotate(360deg)}
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
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
`

export const CircleOuter = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: #000;
  overflow: hidden;
  border-radius: 50%;
  animation: ${animate} 2s linear infinite;
`

export const CircleInner = styled.div`
  position: absolute;
  width: 190px;
  height: 190px;
  background: #000;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before {
    content: 'Loading...';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: green;
    font-size: 1.5rem;
  }
`

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 200px;
  background: linear-gradient(to top, red, blue);
`
