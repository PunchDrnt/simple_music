import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
  background-color: rgb(9, 9, 9);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;

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
`

export const NavLogo = styled.p`
  justify-self: flex-start;
  text-align: center;
  margin-left: 24px;
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
  margin-right: 24px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  margin: 24px;
`

export const NavLinks = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
`
