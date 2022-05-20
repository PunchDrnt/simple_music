import { getAccessToken } from 'lib/spotify'

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export default async (_, res) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items
    ?.filter((track) => track.preview_url !== null)
    .slice(0, 10)
    .map((track) => ({
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      previewUrl: track.preview_url,
      title: track.name,
      image: track.album.images[2].url,
    }))

  console.log('data', tracks)

  return res.status(200).json({ tracks })
}
