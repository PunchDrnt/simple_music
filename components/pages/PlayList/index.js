import useSWR from 'swr'
import TopTracks from '@components/TopTracks'
import AudioPlayer from '@components/AudioPlayer'
import { fetcher } from 'pages/api/fetcher'
import { useState } from 'react'
import LoadSection from '@components/Loading'
import Layout from '@components/layout'

const apiUrl = '/api/top_track'

const PlayList = () => {
  const { data, error } = useSWR(apiUrl, fetcher)
  const [isIndex, setIsIndex] = useState(0)

  const trackIndex = (value) => {
    setIsIndex(value)
  }

  if (error) return <p>error</p>
  if (!data) return <LoadSection />

  return (
    <>
      <Layout />
      <TopTracks data={data?.tracks} trackIndex={trackIndex} />
      <AudioPlayer data={data?.tracks} trackIndex={isIndex} />
    </>
  )
}

export default PlayList
