import { NowPlaying } from '@components/NowPlaying'
import { FooterCotainer, FooterWrapper, FooterWrap } from './FooterElement'
const Footer = () => {
  return (
    <FooterCotainer>
      <FooterWrapper>
        <NowPlaying />
        <FooterWrap></FooterWrap>
      </FooterWrapper>
    </FooterCotainer>
  )
}

export default Footer
