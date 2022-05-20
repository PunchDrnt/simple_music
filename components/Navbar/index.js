import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from '@components/Navbar/NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>Music</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/PlayList">Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="/PlayList">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
