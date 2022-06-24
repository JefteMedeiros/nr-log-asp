import React from 'react'

export default function CustomerImg(props) {
  return (
    <div class="max-w-[600px] lg:max-w-[400px]">
      <img className="max-w-[100%] lg:rounded-tr-xl rounded-bl-xl lg:rounded-bl-none rounded-br-xl" src={props.url} alt="customer-img" />
    </div>
  )
}
