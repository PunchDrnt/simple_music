import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar'
import { useState } from 'react'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
    </>
  )
}

export default Layout
