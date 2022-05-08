import {
  TrackArtist,
  TrackDetail,
  TrackRank,
  TracksCard,
  TrackTitle,
} from './TopTracksElement'

const Track = (track) => {
  return (
    <TracksCard href={track.songUrl}>
      <TrackRank>{track.ranking}</TrackRank>
      <TrackDetail>
        <TrackTitle>{track.title}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </TrackDetail>
    </TracksCard>
  )
}

export default Track
