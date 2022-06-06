import { NowText, PlayContainer, SpotifyIcon } from './NowPlayElement'

export const NowPlaying = ({ songUrl, title, artist }) => {
  return (
    <PlayContainer>
      <SpotifyIcon />
      <NowText>{songUrl ? title : 'Not Playing'}</NowText>
      <NowText> - </NowText>
      <NowText>{artist ?? 'Spotify'}</NowText>
    </PlayContainer>
  )
}
