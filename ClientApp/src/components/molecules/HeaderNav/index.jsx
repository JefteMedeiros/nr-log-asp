import React from 'react'

import HeaderAbout from '../../atoms/HeaderAbout'
import HeaderLogin from '../../atoms/HeaderLogin'
import HeaderRegister from '../../atoms/HeaderRegister'
import SendPackage from '../../atoms/SendPackage'

export default function HeaderNav() {
  return (
    <ul className="flex gap-4">
      <li className="hover:scale-105 transition-all"><SendPackage /></li>
      <li className="hover:scale-105 transition-all"><HeaderAbout /></li>
      <li className="hover:scale-105 transition-all"><HeaderRegister /></li>
      <li className="hover:scale-105 transition-all"><HeaderLogin /></li>
    </ul>
  )
}
