import React from 'react'
import AboutTitle from '../../molecules/AboutTitle'
import AboutDescription from '../../molecules/AboutDescription'

export default function About() {
  return (
    <div className="text-center py-6 text-white px-60 bg-blue-500">
      <AboutTitle />
      <AboutDescription />
    </div>
  )
}
