import React from 'react'

export default function FleetImg(props) {
  return (
    <div className="w-[400px]">
      <img className="max-w-[100%] rounded-tr-xl rounded-br-xl" src={props.url} alt="fleet-image" />
    </div>
  )
}
