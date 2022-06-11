import { H1, HeroContainer, HeroWrapper, Span } from './HeroElements'

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <p>Hello</p>
          <H1>
            <Span Var="0">W</Span>
            <Span Var="0.25">E</Span>
            <Span Var="0.5">L</Span>
            <Span Var="0.75">C</Span>
            <Span Var="1">O</Span>
            <Span Var="1.25">M</Span>
            <Span Var="1.5">E</Span>
            <Span Var="1.75">:</Span>
            <Span Var="2">:</Span>
          </H1>
          <H1>
            <Span Var="2">A</Span>
            <Span Var="2.25">N</Span>
            <Span Var="2.5">I</Span>
            <Span Var="2.75">M</Span>
            <Span Var="3">A</Span>
            <Span Var="3.25">T</Span>
            <Span Var="3.5">I</Span>
            <Span Var="3.75">O</Span>
            <Span Var="4">N</Span>
          </H1>
        </HeroWrapper>
      </HeroContainer>
    </>
  )
}

export default HeroSection
