import {
  SidebarContainar,
  Icon,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainar isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} />
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink onClick={toggle} href="/">
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink onClick={toggle} href="/PlayList">
              Dashboard
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink onClick={toggle} href="/PlayList">
              Contact
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarContainar>
    </>
  )
}

export default Sidebar
