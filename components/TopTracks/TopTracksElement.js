import styled from 'styled-components'

export const TrackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
`

export const TrackWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: center;
`

export const TracksCard = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.2 ease-in-out;
  align-items: center;
  width: 400px;
  height: 200px;
  padding: 30px;

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
  justify-content: center;
  align-items: center;
`

export const TrackTitle = styled.p`
  font-size: 18px;
  margin: 12px;
  text-align: center;
`

export const TrackArtist = styled.p`
  font-size: 14px;
  margin: 12px;
  text-align: center;
`
