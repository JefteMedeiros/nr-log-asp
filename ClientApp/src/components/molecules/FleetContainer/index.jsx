import React from 'react'
import FleetDescription from '../../atoms/FleetDescription'
import FleetTitle from '../../atoms/FleetTitle'
import FleetImg from '../../atoms/FleetImg'

export default function FleetContainer(props) {
  return (
    <div className="flex px-8 py-6 justify-center items-center lg:items-stretch flex-col lg:flex-row">
      <div className="max-w-[600px] lg:max-w-[400px] rounded-tl-xl rounded-tr-xl p-6 lg:rounded-tr-none lg:rounded-bl-xl bg-indigo-900">
        <FleetTitle title={props.title} />
        <FleetDescription description={props.description}/>
      </div>
      <div>
        <FleetImg url={props.url}/>
      </div>
    </div>  
  )
}
