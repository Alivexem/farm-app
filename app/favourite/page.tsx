'use client'
import { useState} from 'react'
import Genhead from '../genhead'
import Buybody from './body'
import Genfoot from '../genfoot'
import Navbuy from './nav'
import Menu from '../menu'
const Buyer = () => {

  const [clicked, setClicked] = useState(false)

  const toggleMenu = () => {
    setClicked(prev => !prev)
  }
  return (
    <div>
      <Genhead toggleMenu={toggleMenu} clicked={clicked} />
      <Buybody />
      <Menu />
      <Genfoot />
      <Navbuy clicked={clicked} />
    </div>
  )
}

export default Buyer
