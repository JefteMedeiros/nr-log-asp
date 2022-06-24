import React from 'react'
import CustomerReview from '../../atoms/CustomerReview'
import CustomerName from '../../atoms/CustomerName'
import CustomerImg from '../../atoms/CustomerImg'

export default function FleetContainer(props) {
  return (
    <div className="flex flex-col lg:flex-row py-6 px-8 justify-center ">
      <div className="max-w-[600px] lg:max-w-[400px] lg:rounded-tr-none rounded-tl-xl rounded-tr-xl rounded-bl-none lg:rounded-bl-xl p-6 bg-indigo-900">
        <CustomerName name={props.name} />
        <CustomerReview review={props.review}/>
      </div>
      <div>
        <CustomerImg url={props.url}/>
      </div>
    </div>  
  )
}
