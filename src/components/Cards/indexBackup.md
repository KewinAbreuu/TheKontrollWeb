

import './card.css'
import firebase from '../../services/firebaseConect'

 export default function Card({local, data, hora, id,desc,funcionario}) {


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
        
        <div className="card" id='card'>

            <div className="card-info" id='card-info'>
                <h2>{local}</h2>
                <p className='pa'>Descrição: {desc}</p>
                <p className='pa'>Funcionário: {funcionario}</p>
                {}
                <button onClick={deletar} className='BtnRonda'>Delete</button>
                  
            </div>

            <div className="card-info2" id='card-info2'>
                <p className='pa'>{data}</p> 
                <p className='pa'>{hora}</p>
            </div>

        </div>
         
      </div>
      </>
      
    )
  }
    