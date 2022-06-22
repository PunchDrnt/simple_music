import { useState, useRef, useEffect } from 'react'
import AudioControls from './AudioControls'
import {
  AudioArtist,
  AudioContainer,
  AudioHContainer,
  AudioHWrapper,
  AudioTitle,
  AudioWrapper,
  AudioImg,
} from './AudioElements'
import Volume from './VolumeControls'

const PlayList = ({ data, trackIndex }) => {
  // State
  const [isTrack, setIsTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVolume, setIsVolume] = useState(0.5)

  const { previewUrl, image, title, artist } = data[isTrack]

  // Ref
  const audioPlayer = useRef()

  useEffect(() => {
    setIsTrack(trackIndex)
  }, [trackIndex])

  useEffect(() => {
    audioPlayer.current.pause()
    if (isPlaying) {
      audioPlayer.current.play()
    }
  }, [isTrack])

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }, [isPlaying])

  // Play and Pause function
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Play Prev and next tracks
  const toggleNextTrack = () => {
    if (isTrack < data.length - 1) {
      setIsTrack(+isTrack + 1)
    } else {
      setIsTrack(0)
    }
  }

  const togglePrevTrack = () => {
    if (isTrack - 1 < 0) {
      setIsTrack(data.length - 1)
    } else {
      setIsTrack(isTrack - 1)
    }
  }

  // Volume Booster
  const ChangeVolume = (value) => {
    audioPlayer.current.volume = value
    setIsVolume(audioPlayer.current.volume)
  }

  const Mute = () => {
    if (isVolume > 0) {
      ChangeVolume(0)
    } else {
      ChangeVolume(0.5)
    }
  }

  return (
    <AudioContainer>
      <AudioWrapper>
        <audio ref={audioPlayer} src={previewUrl} />
        <AudioHContainer>
          <AudioImg src={image} />
          <AudioHWrapper>
            <AudioTitle>{title}</AudioTitle>
            <AudioArtist>{artist}</AudioArtist>
          </AudioHWrapper>
        </AudioHContainer>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={togglePrevTrack}
          onNextClick={toggleNextTrack}
          onPlayPauseClick={togglePlayPause}
        />
        <Volume
          Mute={Mute}
          isVolume={isVolume}
          ChangeVolume={(e) => ChangeVolume(e.target.value)}
        />
      </AudioWrapper>
    </AudioContainer>
  )
}

export default PlayList
