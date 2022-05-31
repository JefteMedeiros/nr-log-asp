import React from 'react'
import FleetDescription from '../../atoms/FleetDescription'
import FleetTitle from '../../atoms/FleetTitle'
import FleetImg from '../../atoms/FleetImg'

export default function FleetContainer(props) {
  return (
    <div className="flex py-6 justify-center ">
      <div className="w-[400px] rounded-tl-xl p-6 rounded-bl-xl bg-indigo-900">
        <FleetTitle title={props.title} />
        <FleetDescription description={props.description}/>
      </div>
      <div>
        <FleetImg url={props.url}/>
      </div>
    </div>  
  )
}
