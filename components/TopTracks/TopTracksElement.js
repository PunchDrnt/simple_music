import styled from 'styled-components'

// index.js
export const TrackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`

export const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// Track.js
export const TracksCard = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px rgba(9, 9, 9, 0.6);
  width: 700px;
  margin-top: 10px;
  padding-bottom: 10px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const TrackRank = styled.h2`
  font-size: 16px;
  margin: 24px;
  text-align: center;
`

export const TrackDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const TrackTitle = styled.p`
  font-size: 18px;
`

export const TrackArtist = styled.p`
  font-size: 12px;
`
