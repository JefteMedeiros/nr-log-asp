import React from 'react'
import OurFleet from '../../atoms/OurFleet'
import fleet from '../../../fleet.json'
import FleetContainer from '../../molecules/FleetContainer';

const fleetComponents = fleet.fleet

export default function Fleet() {
    return (
    <div className="bg-rose-600">
      <OurFleet />
      {fleetComponents.map((e, key) => {
        return (
          <FleetContainer title={e.title} description={e.description} url={e.url} key={key} />
        )
      })}
    </div>
  )
}
