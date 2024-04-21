import  { useState } from 'react'
import imgHashtaurante from './assets/hashtaurante.webp'
import './App.css'
import {Navegacao} from './Navegacao.jsx'
import { ItemCardapio } from './ItemCardapio.jsx'

import { pratosPrincipais, bebidas, sobremesas } from './cardapio.js'


export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0)
  return(
    <>
      <img src={imgHashtaurante} alt="" className="capa" id='banner'/>
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
      <div className='menu'>
        { paginasMenu[paginaSelecionada].map((item, i) => <ItemCardapio key={i} nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem} />) }
      </div>
    </>
  )
}