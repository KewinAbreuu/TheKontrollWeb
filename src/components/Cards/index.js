

import './card.css'
import firebase from '../../services/firebaseConect'

 export default function Card({icon1,icon2,icon3,icon4,local, data, hora, id,desc,funcionario, condicoes}) {


  async function deletar(){
    await firebase.firestore().collection('ronda')
    .doc(id)
    .delete();
  }

  // async function Ver(){
  //   await firebase.firestore().collection('ronda')
  //   .doc(id)
  //    alert(desc)
  // }
  
    return (
      <>
      <div className="card-container" id='card-container'>
        
        <div className="card-local">
            <div className="card-icon" >
              <img src={icon4}/>
              <p className='Titulo-card'>Condições</p>
            </div>

            <div className='paragrafoCond'>
              <p id="COND" style={condicoes === 'Bom' || condicoes === 'Ótimo' || condicoes === 'Regular' ? {backgroundColor:'#00FF7F'} : {backgroundColor:'#B22222'}}>{condicoes}</p>
            </div>
        </div>

        <div className="card-local">
            <div className="card-icon" >
              <img src={icon1}/>
              <p className='Titulo-card'>Local</p>
            </div>

            <div className='paragrafo'>
              <p>{local}</p>
            </div>
        </div>

        <div className="card-local">
            <div className="card-icon" >
              <img src={icon2}/>
              <p className='Titulo-card'>Colaborador</p>
            </div>

            <div className='paragrafo'>
              <p>{funcionario}</p>
            </div>
        </div>


        <div className="card-local">
            <div className="card-icon" >
              <img src={icon3}/>
              <p className='Titulo-card'>Observações</p>
            </div>

            <div className='paragrafo'>
              <p style={{marginBottom:'10px'}}>{desc}</p>
              <p>Data: {data} - Hora: {hora}</p>
            </div>
        </div>
        
      </div>
      </>
      
    )
  }
    