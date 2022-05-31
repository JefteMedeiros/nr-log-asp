import React from 'react'
import CustomerReview from '../../atoms/CustomerReview'
import CustomerName from '../../atoms/CustomerName'
import CustomerImg from '../../atoms/CustomerImg'

export default function FleetContainer(props) {
  return (
    <div className="flex py-6 justify-center ">
      <div className="w-[400px] rounded-tl-xl p-6 rounded-bl-xl bg-indigo-900">
        <CustomerName name={props.name} />
        <CustomerReview review={props.review}/>
      </div>
      <div>
        <CustomerImg url={props.url}/>
      </div>
    </div>  
  )
}
