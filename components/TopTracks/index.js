import useSWR from 'swr'
import { TrackContainer, TrackWrapper } from './TopTracksElement'
import Track from './Track'

const TopTracks = () => {
  // Fetch data from api
  const apiUrl = '/api/top_track'

  const fetcher = (apiUrl) =>
    fetch(apiUrl).then((res) => {
      return res.json()
    })

  const { data, error } = useSWR(apiUrl, fetcher)
  const isLoading = data === undefined

  if (error) return <p>ERROR...</p>
  if (isLoading) return <p>Loading...</p>
  if (data.length <= 0) return <p>No data</p>

  return (
    <TrackContainer>
      <TrackWrapper>
        {data?.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </TrackWrapper>
    </TrackContainer>
  )
}

export default TopTracks
