import { NowPlaying } from '@components/NowPlaying'
import { FooterCotainer, FooterMenu, FooterWrapper } from './FooterElement'
const Footer = () => {
  return (
    <FooterCotainer>
      <NowPlaying />
      <FooterWrapper>
        <FooterMenu>
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </FooterMenu>
        <FooterMenu>
          <p>text2</p>
          <p>text2</p>
          <p>text2</p>
        </FooterMenu>
        <FooterMenu>
          <p>text3</p>
          <p>text3</p>
          <p>text3</p>
        </FooterMenu>
      </FooterWrapper>
    </FooterCotainer>
  )
}

export default Footer
