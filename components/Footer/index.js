import { NowPlaying } from '@components/NowPlaying'
import {
  FooterCotainer,
  FooterMenu,
  FooterWrapper,
  FooterWrap,
} from './FooterElement'
const Footer = () => {
  return (
    <FooterCotainer>
      <FooterWrapper>
        <NowPlaying />
        <FooterWrap>
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
        </FooterWrap>
      </FooterWrapper>
    </FooterCotainer>
  )
}

export default Footer
