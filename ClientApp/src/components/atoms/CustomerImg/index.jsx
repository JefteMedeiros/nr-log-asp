import React from 'react'

export default function CustomerImg(props) {
  return (
    <div class="w-[400px]">
      <img className="max-w-[100%] rounded-tr-xl rounded-br-xl" src={props.url} alt="customer-img" />
    </div>
  )
}
