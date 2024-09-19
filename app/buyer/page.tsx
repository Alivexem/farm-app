'use client'
import { useState} from 'react'
import Genhead from '../genhead'
import Buybody from './body'
import Genfoot from '../genfoot'
import Navbuy from './nav'
import Pchead from '../pchead'
import Menu from '../menu'
const Buyer = () => {

  const [clicked, setClicked] = useState(false)

  const toggleMenu = () => {
    setClicked(prev => !prev)
  }
  return (
    <div>
      <Genhead toggleMenu={toggleMenu} clicked={clicked} />
      <Pchead />
      <Menu />
      <Buybody />
      <Genfoot />
      <Navbuy clicked={clicked} />
    </div>
  )
}

export default Buyer
