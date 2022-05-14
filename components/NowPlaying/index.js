import useSWR from 'swr'
import { NowText, PlayContainer, SpotifyIcon } from './NowPlayElement'
import { fetcher } from 'pages/api/fetcher'

export function NowPlaying() {
  const apiUrl = '/api/now_playing'

  const { data, error } = useSWR(apiUrl, fetcher)
  const isLoading = data === undefined

  if (error) return <p>ERROR...</p>
  if (isLoading) return <p>Loading...</p>
  if (data.length <= 0) return <p>No data</p>

  return (
    <PlayContainer>
      <SpotifyIcon />
      <NowText>{data?.songUrl ? data?.title : 'Not Playing'}</NowText>
      <NowText> - </NowText>
      <NowText>{data?.artist ?? 'Spotify'}</NowText>
    </PlayContainer>
  )
}
