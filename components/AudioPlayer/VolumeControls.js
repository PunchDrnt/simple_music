import {
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeOff,
  FaVolumeUp,
} from 'react-icons/fa'
import { VolumeContainer, VolumeSlider, AudioBtn } from './AudioElements'

const Volume = ({ isVolume, Mute, ChangeVolume }) => {
  const VolumeIcon = () => {
    if (isVolume === 0) {
      return <FaVolumeMute />
    }
    if ((isVolume > 0) & (isVolume <= 0.3)) {
      return <FaVolumeOff />
    }
    if ((isVolume >= 0.4) & (isVolume <= 0.7)) {
      return <FaVolumeDown />
    }
    if ((isVolume >= 0.8) & (isVolume <= 1)) {
      return <FaVolumeUp />
    }
  }
  return (
    <VolumeContainer>
      <AudioBtn onClick={Mute}>
        <VolumeIcon />
      </AudioBtn>
      <VolumeSlider
        type="range"
        value={isVolume}
        step="0.1"
        min="0"
        max="1"
        onChange={ChangeVolume}
        className="progress"
      />
    </VolumeContainer>
  )
}

export default Volume
