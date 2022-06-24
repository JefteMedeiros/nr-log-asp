import React from 'react'

export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-3 text-white" action="">
      <h1 className="text-2xl">Newsletter</h1>
      <input className="px-4 py-1 rounded-md" type="text" placeholder='Digite seu nome'/>
      <input className="px-4 py-1 rounded-md" type="text" placeholder='Digite seu email'/>
      <button className="px-4 py-1 rounded-md bg-rose-600 hover:scale-105 transition-all" type="submit">Inscrever-se</button>
    </form>
  )
}
