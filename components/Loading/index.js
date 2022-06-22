import {
  Circle,
  LoadContainer,
  LoadWrapper,
  CircleInner,
  Box,
  CircleOuter,
} from './LoadElements'

const LoadSection = () => {
  return (
    <LoadContainer>
      <LoadWrapper>
        <Circle>
          <CircleOuter>
            <Box />
          </CircleOuter>
          <CircleInner />
        </Circle>
      </LoadWrapper>
    </LoadContainer>
  )
}

export default LoadSection
