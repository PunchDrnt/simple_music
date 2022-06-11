import { useState } from 'react'
import {
  PlayIcon,
  TrackArtist,
  TrackDetail,
  TrackRank,
  TracksCard,
  TrackTitle,
} from './TopTracksElements'

const Track = (track) => {
  const [isHover, setIsHover] = useState(false)

  const onHover = () => {
    setIsHover(!isHover)
  }

  const onActive = () => {
    track.TrackIndex(track.ranking - 1)
  }

  return (
    <TracksCard
      id={track.ranking}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
      onClick={onActive}
    >
      <TrackRank>{isHover ? <PlayIcon /> : track.ranking}</TrackRank>
      <TrackDetail>
        <TrackTitle>{track.title}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </TrackDetail>
    </TracksCard>
  )
}

export default Track
