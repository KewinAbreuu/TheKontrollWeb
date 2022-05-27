

import './cardsOcorrencia.css'
import firebase from '../../services/firebaseConect'

 export default function CardsOcorrencia({local, data, hora, id,desc,funcionario,titulo}) {


  async function deletar(){
    await firebase.firestore().collection('ocorrencias')
    .doc(id)
    .delete();
  }

  async function Ver(){
    await firebase.firestore().collection('ocorrencias')
    .doc(id)
     alert(desc)
  }
  
    return (
      <>
      <div className="card-container2" id='card-container' onClick={Ver}>
        
        <div className="card2" id='card'>

            <div className="card-info2" id='card-info' >
                <p className='pa2'>{titulo}</p>
                <button onClick={deletar} className='BtnDelete'>Delete</button>
                {/* <button onClick={Ver} className='BtnDelete'>Ver</button> */}
            </div>

            <div className="card-info22" id='card-info2'>
                {/* <p className='pa2'>{data}</p>  */}
            </div>

            <div className='Barralateral'></div>
            
        </div>
         
      </div>
      </>
      
    )
  }
    