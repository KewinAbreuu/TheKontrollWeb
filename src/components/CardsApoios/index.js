import './CardsApoios.css'

export default function CardsApoios({name, contato}){
  return(
    <div className='ContainerCardsApoios'>
      <div className='Inform'>
        <h1 className='NameApoio'>{name}</h1>
        <p className='NumeroApoio'>{contato}</p>
      </div>

      <div className='Edit'>
        <h1>+--+</h1>
      </div>
    </div>
  )
}