
import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import Avatar from '../../assets/avatar.svg'

import firebase from "../../services/firebaseConect";

import Card from '../../components/Cards'

import DateTimePicker from 'react-datetime-picker';

import Locale from '../../assets/local.png'
import Colaborator from '../../assets/colaborator.png'
import Obs from '../../assets/obs.png'
import Star from '../../assets/star.png'

import './controle.css'



function Controle() {

  const [posts, setPosts] = useState([]);

  const [value, onChange] = useState(new Date())


  let DATINHA =value.toLocaleDateString()

  let codigoEmpresa =localStorage.getItem('CodigoEmpresa')

  useEffect(()=>{
    async function loadPost(){

      await firebase.firestore().collection('ronda')
      .where('Date','==',DATINHA)
      .orderBy('Data','desc')
      .onSnapshot((doc)=>{
        let meusPosts=[];

        doc.forEach((item)=>{
          meusPosts.push({
            id:item.id,
            date:item.data().Date,
            local:item.data().Local,
            hora:item.data().Hora,
            descrição:item.data().Descricao,
            funcionario:item.data().Funcionario,
            cargo:item.data().Cargo,
            condicoes:item.data().Condicoes
          })
        });
        

        setPosts(meusPosts)

      })

    }
    
    loadPost();

  },[value])
 

  async function Config(){
    await firebase.firestore().collection('config')
    .add({
      Apoio: 1,
      Corresp: 1,
      Dispositivos: 1,
      Ocorrencias: 1,
      Ronda: 1,
      Pagamento: 1,
      NameApoio:'',
      NameCorresp:'',
      NameDispositivos:'',
      NameOcorrencias:'',
      NameRonda:'',

    })
    .then(()=>{
      alert('Configurações Adicionadas com Sucesso!')
    })
    .catch((e)=>{
      alert(e)
    })
  }
 
    return (
      
      <div className="Dashboard">
        <Navbar/>

        <div className='corpo'>
        
        <div className='barra'>

          <div className='titulo' id='titulo' >
            <h1>Ronda</h1>
            <DateTimePicker onChange={onChange} value={value}
              disableClock={true}
              isClockOpen={true}
              format="dd-MM-y"
              calendarClassName="test"
              className="fora"
            />
            <p className='hora'>codigo da empresa: {codigoEmpresa}</p>

            {/* <button onClick={Config}>AddConfig</button> */}
            
          </div>
            
          <div className='barraUsuario' >
                <img src={Avatar} />
            </div>

        </div>
    
        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                  <Card 
                    icon1={Locale}
                    icon2={Colaborator}
                    icon3={Obs}
                    icon4={Star}
                    local={post.local}
                    data={post.date}
                    hora={post.hora} 
                    id={post.id} 
                    status={post.status}
                    desc={post.descrição}
                    funcionario={post.cargo + ' ' + post.funcionario}
                    condicoes={post.condicoes}/>
              </li>
            )
          })}
        </ul>

        </div>  
       
      </div>
      
      
    );
  }
  
  export default Controle;
  