import styled from 'styled-components'
import { FaPlay } from 'react-icons/fa'

// index.js
export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  margin-bottom: 100px;
  width: 100%;
`

export const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`

export const TrackWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TrackSubtitle = styled.p`
  font-size: 14px;
  margin: 5px;
`

export const TitleUnderLine = styled.div`
  background: rgba(9, 9, 9, 0.7);
  height: 1px;
  width: 150px;
  margin: 5px;
`

export const TrackName = styled.h1`
  font-size: 2rem;
  padding: 5px;
`

// Track.js
export const TracksCard = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px rgba(9, 9, 9, 0.6);
  width: 100%;
  max-width: 800px;
  margin-top: 10px;
  padding-bottom: 10px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const TrackDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrackRank = styled.div`
  font-size: 16px;
  padding: 16px;
  text-align: center;
`

export const TrackTitle = styled.h1`
  font-size: 1rem;
  text-decoration: none;
`

export const TrackArtist = styled.p`
  font-size: 12px;
  padding: 5px;
`

export const PlayIcon = styled(FaPlay)`
  font-size: 14px;
  text-align: center;
`
