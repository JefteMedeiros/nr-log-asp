import React from 'react'

export default function SocialMediaList() {
  return (
    <div>
      <ul className="text-white flex flex-col gap-2 text-xl">
        <li className="pb-2">Nos siga</li>
        <li><a className="text-white hover:underline" href="#">Twitter</a></li>
        <li><a className="text-white hover:underline" href="#">Facebook</a></li>
        <li><a className="text-white hover:underline" href="#">Instagram</a></li>
        <li><a className="text-white hover:underline" href="#">LinkedIn</a></li>
      </ul>
    </div>
  )
}
