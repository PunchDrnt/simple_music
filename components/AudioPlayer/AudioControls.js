import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa'
import { AudioBtn, ControlContainer } from './AudioElements'

const AudioControls = ({
  isPlaying,
  onPrevClick,
  onPlayPauseClick,
  onNextClick,
}) => {
  return (
    <ControlContainer>
      <AudioBtn onClick={onPrevClick} hide>
        <FaBackward />
      </AudioBtn>
      <AudioBtn onClick={onPlayPauseClick}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </AudioBtn>
      <AudioBtn onClick={onNextClick} hide>
        <FaForward />
      </AudioBtn>
    </ControlContainer>
  )
}

export default AudioControls
