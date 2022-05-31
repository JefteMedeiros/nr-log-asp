import React from 'react'

export default function InfoList() {
  return (
    <div>
      <ul className="text-white flex flex-col gap-2 text-xl">
        <li className="pb-2">Informações</li>
        <li><a className="text-white hover:underline" href="#">Rastreio</a></li>
        <li><a className="text-white hover:underline" href="#">Enviar remessa</a></li>
        <li><a className="text-white hover:underline" href="#">Serviços</a></li>
        <li><a className="text-white hover:underline" href="#">Termos de uso</a></li>
        <li><a className="text-white hover:underline" href="#">Política de privacidade</a></li>
        <li><a className="text-white hover:underline" href="#">FAQ</a></li>
      </ul>
    </div>
  )
}
