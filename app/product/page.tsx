'use client'
import { useState} from 'react'
import Genhead from '../genhead'
import Product from './body'
import Genfoot from '../genfoot'
import Navbuy from '../nav'
const Buyer = () => {

  const [clicked, setClicked] = useState(false)

  const toggleMenu = () => {
    setClicked(prev => !prev)
  }
  return (
    <div>
      <Genhead toggleMenu={toggleMenu} clicked={clicked} />
      <Product />
      <Genfoot />
      <Navbuy clicked={clicked} />
    </div>
  )
}

export default Buyer
