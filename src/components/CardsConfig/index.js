import { Link } from 'react-router-dom'
import  './CardsConfig.css'

export default function CardsConfig({name, icon, local}){
  return(
      <Link to={local}>
        <div className='Container'>
            <img src={icon} className='iconConfig'/>
            <h3 className='tituloConfig'>{name}</h3>
        </div>
      </Link>
  )
}