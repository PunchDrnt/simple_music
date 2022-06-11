import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from '@components/Navbar/NavbarElements'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>Music</NavLogo>
          <MobileIcon onClick={toggle} />
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
