import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 24px 0 24px;
`

export const NavLogo = styled.p`
  justify-self: flex-start;
  text-align: center;
  font-family: 'Oleo Script', cursive;
  font-size: 2rem;
`

export const MobileIcon = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 24px;
    font-size: 24px;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  margin: 24px;
`

export const NavLinks = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
`
