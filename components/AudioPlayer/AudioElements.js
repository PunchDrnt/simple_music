import styled from 'styled-components'

export const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AudioBtn = styled.button`
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  border: none;
  background: none;
  margin: 15px;

  &:hover {
    transform: scale(1.2);
    color: #fff;
  }
`

export const AudioContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  background-color: rgba(9, 9, 9, 0.9);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`

export const AudioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`

export const AudioHContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  width: 300px;
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

export const VolumeContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
`

export const VolumeSlider = styled.input`
  height: 5px;
  margin: 8px;
  border-radius: 8px;
  background: #3b7677;
  transition: background 0.2s ease;
  cursor: pointer;
`
