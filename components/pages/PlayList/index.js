import useSWR from 'swr'
import TopTracks from '@components/TopTracks'
import AudioPlayer from '@components/AudioPlayer'
import Navbar from '@components/Navbar'
import { fetcher } from 'pages/api/fetcher'
import { useState } from 'react'

const apiUrl = '/api/top_track'

const PlayList = () => {
  const { data, error } = useSWR(apiUrl, fetcher)
  const [isIndex, setIsIndex] = useState(0)

  const trackIndex = (value) => {
    setIsIndex(value)
  }

  if (error) return <p>error</p>
  if (!data) return <p>...Loding</p>
  return (
    <>
      <Navbar />
      <TopTracks data={data?.tracks} trackIndex={trackIndex} />
      <AudioPlayer data={data?.tracks} trackIndex={isIndex} />
    </>
  )
}

export default PlayList
