import { useEffect, useState } from 'react'
import { NowText, PlayContainer, SpotifyIcon } from './NowPlayElement'

export function NowPlaying() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/now_playing')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>

  return (
    <PlayContainer>
      <SpotifyIcon />
      <NowText>{data?.songUrl ? data?.title : 'Not Playing'}</NowText>
      <NowText> - </NowText>
      <NowText>{data?.artist ?? 'Spotify'}</NowText>
    </PlayContainer>
  )
}
