import { useRouter } from 'next/router'
import {
  TrackArtist,
  TrackDetail,
  TrackRank,
  TracksCard,
  TrackTitle,
} from './TopTracksElement'

const Track = (track) => {
  const router = useRouter()
  const TrackIndex = track.ranking - 1

  const onTrackIndex = () => {
    router.push({
      pathname: '/PlayList',
      query: { TrackIndex },
    })
  }

  return (
    <TracksCard onClick={onTrackIndex}>
      <TrackRank>{track.ranking}</TrackRank>
      <TrackDetail>
        <TrackTitle>{track.title}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </TrackDetail>
    </TracksCard>
  )
}

export default Track
