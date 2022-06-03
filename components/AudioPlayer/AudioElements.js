import styled from 'styled-components'

// Control
export const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

export const AudioBtn = styled.button`
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  border: none;
  background: none;
  padding: 5px 16px;

  &:hover {
    transform: scale(1.2);
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: ${({ hide }) => (hide ? 'none' : 'flex')};
  }
`

// index
export const AudioContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: rgb(9, 9, 9);
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const AudioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 24px;
`

export const AudioHContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
`

export const AudioImg = styled.img`
  border-radius: 120px;
`

export const AudioHWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px;
`

export const AudioTitle = styled.h1`
  font-size: 14px;
`

export const AudioArtist = styled.p`
  margin-top: 6px;
  font-size: 12px;
`

// Volume
export const VolumeContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 400px;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const VolumeSlider = styled.input`
  height: 5px;
  margin: 8px;
  border-radius: 8px;
  background: #3b7677;
  transition: background 0.2s ease;
  cursor: pointer;
`
