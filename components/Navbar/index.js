import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
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
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
