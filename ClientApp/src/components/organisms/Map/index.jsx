import React from 'react'
import MapTitle from '../../atoms/MapTitle'
import MapAtom from '../../atoms/MapAtom'

export default function Map() {
  return (
    <div className="flex items-center bg-indigo-900 p-4 flex-col gap-3">
      <MapTitle />
      <MapAtom />
    </div>
  )
}
