'use client'
import { useState} from 'react'
import Genhead from './genhead'
import Genfoot from '../genfoot'
import Navprofile from '../nav'
import ProfileBody from './body'
import Menu from '../menu'
const Profile = () => {
    const [clicked, setClicked] = useState(false)

    const toggleMenu = () => {
      setClicked(prev => !prev)
    }

  return (
    <div>
      <Genhead toggleMenu={toggleMenu} clicked={clicked} />
      <ProfileBody />
      <Menu />
      <Genfoot />
      <Navprofile clicked={clicked}/>
    </div>
  )
}

export default Profile
