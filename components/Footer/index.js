import { NowPlaying } from '@components/NowPlaying'
import { FooterCotainer, FooterWrapper, FooterWrap } from './FooterElement'
const Footer = ({ songUrl, artist, title }) => {
  return (
    <FooterCotainer>
      <FooterWrapper>
        <NowPlaying songUrl={songUrl} artist={artist} title={title} />
        <FooterWrap></FooterWrap>
      </FooterWrapper>
    </FooterCotainer>
  )
}

export default Footer
