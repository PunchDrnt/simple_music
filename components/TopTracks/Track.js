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
  const [Hover, setIsHover] = useState(false)

  const onHover = () => {
    setIsHover(!Hover)
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
      <TrackRank>{Hover ? <PlayIcon /> : track.ranking}</TrackRank>
      <TrackDetail>
        <TrackTitle>{track.title}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </TrackDetail>
    </TracksCard>
  )
}

export default Track
