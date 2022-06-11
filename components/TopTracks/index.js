import {
  TitleUnderLine,
  TrackContainer,
  TrackName,
  TrackSubtitle,
  TrackWrap,
  TrackWrapper,
} from './TopTracksElements'
import Track from './Track'

const TopTracks = ({ data, trackIndex }) => {
  const Index = (value) => {
    trackIndex(value)
  }

  return (
    <TrackContainer>
      <TrackWrapper>
        <TrackWrap>
          <TrackName>Top Tracks </TrackName>
          <TrackSubtitle>
            Here&apos;s my top tracks on Spotify updated daily.
          </TrackSubtitle>
          <TitleUnderLine />
        </TrackWrap>
        {data.map((tracks, index) => (
          <Track
            ranking={index + 1}
            key={tracks.songUrl}
            TrackIndex={Index}
            {...tracks}
          />
        ))}
      </TrackWrapper>
    </TrackContainer>
  )
}

export default TopTracks
