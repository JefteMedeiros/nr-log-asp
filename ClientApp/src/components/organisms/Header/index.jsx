import React from 'react'
import HeaderLogo from '../../molecules/HeaderLogo'
import HeaderNav from '../../molecules/HeaderNav'

export default function Header() {
  return (
    <div className="flex justify-between px-8 py-3 bg-rose-600">
      <HeaderLogo />
      <HeaderNav />
    </div>
  )
}
