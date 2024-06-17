import React from 'react'
import { HeaderDates } from './HeaderDates'
import Footer from './Footer'

const LayoutDates = ({ children }) => {
  return (
    <>
    <HeaderDates />
    {children}
    <Footer />
    </>
  )
}

export default LayoutDates