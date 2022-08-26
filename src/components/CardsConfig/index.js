import  './CardsConfig.css'

export default function CardsConfig({name, icon}){
  return(
    <div className='Container'>
      <img src={icon} className='iconConfig'/>
      <h3 className='tituloConfig'>{name}</h3>
    </div>
  )
}