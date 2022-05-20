import useSWR from 'swr'
import { useState, useRef } from 'react'
import { fetcher } from 'pages/api/fetcher'
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
import { useRouter } from 'next/router'

const apiUrl = '/api/top_track'

const PlayList = () => {
  // Router
  const router = useRouter()

  // State
  const [isTrack, setIsTrack] = useState(+router.query.TrackIndex || 0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVolume, setIsVolume] = useState(1)

  // Ref
  const audioPlayer = useRef()

  // Fetcher
  const { data, error } = useSWR(apiUrl, fetcher)

  const previewUrl = data?.tracks[isTrack].previewUrl
  const image = data?.tracks[isTrack].image
  const title = data?.tracks[isTrack].title
  const artist = data?.tracks[isTrack].artist

  // Play Prev and next tracks
  const toggleNextTrack = () => {
    if (isTrack < data?.tracks.length - 1) {
      setIsTrack(isTrack + 1)
    } else {
      setIsTrack(0)
    }
  }

  const togglePrevTrack = () => {
    if (isTrack - 1 < 0) {
      setIsTrack(data?.tracks.length - 1)
    } else {
      setIsTrack(isTrack - 1)
    }
  }

  // Play and Pause function
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
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
      ChangeVolume(1)
    }
  }

  // check error

  if (error) return <p>ERROR</p>
  if (!data) return <p>Loding</p>

  console.log('isTrack before return', isTrack)
  console.log('data?.tracks before return', data?.tracks)

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
