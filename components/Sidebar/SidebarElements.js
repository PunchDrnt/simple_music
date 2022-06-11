import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export const SidebarContainar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000031;
  color: #fff;
  width: 100%;
  height: 60%;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`

export const Icon = styled(FaTimes)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
`

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 24px;
`

export const SidebarLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  text-decoration: none;
  cursor: pointer;
`
