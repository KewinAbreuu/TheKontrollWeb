
    import { useState, useEffect } from 'react';

    import Navbar from '../../components/Navbar/Navbar';

    import Avatar from '../../assets/avatar.svg'

    import firebase from "../../services/firebaseConect";

    import Card from '../../components/CardsOcorrencia'


    // import './controle.css'



function Ocorrencia() {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
   let RefreshPage= localStorage.getItem('PageRefresh');
   if(RefreshPage === 'first'){
     localStorage.setItem('PageRefresh',1)
     window.location.reload();
   }
  },[])

 

  let codigoEmpresa =localStorage.getItem('CodigoEmpresa')

  useEffect(()=>{
    async function loadPost(){

      await firebase.firestore().collection('ocorrencias')
      .orderBy('Data','desc')
      // .orderBy('Hora', 'desc')
      .onSnapshot((doc)=>{
        let meusPosts=[];

        doc.forEach((item)=>{
          meusPosts.push({
            id:item.id,
            date:item.data().Date,
            hora:item.data().Hora,
            descrição:item.data().Descricao,
            funcionario:item.data().Funcionario,
            cargo:item.data().Cargo,
            titulo:item.data().Titulo
          })
        });
        

        setPosts(meusPosts)

      })

    }
    
    loadPost();

  },[])
 
 

  // Obtém a data/hora atual
  var data = new Date();

  // Guarda cada pedaço em uma variável
  var dia     = data.getDate();           // 1-31
  var mes     = data.getMonth();          // 0-11 (zero=janeiro)
  var ano4    = data.getFullYear();       // 4 dígitos


  // Formata a data e a hora (note o mês + 1)
  var str_data = dia + '/' + (mes+1) + '/' + ano4;

 
    return (
      
      <div className="Dashboard">
        <Navbar/>

        <div className='corpo'>
        
        <div className='barra'>

          <div className='titulo' id='titulo' >
            <h1>Ocorrências</h1>
            <p className='hora'>{str_data}</p>
            <p className='hora'>codigo da empresa: {codigoEmpresa}</p>

            
          </div>
            
          <div className='barraUsuario' >
                <img src={Avatar} />
            </div>

        </div>
    
        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                  <Card local={post.local}
                   data={post.date}
                    hora={post.hora} 
                    id={post.id} 
                    desc={post.descrição}
                    funcionario={post.cargo + ' ' + post.funcionario}
                    titulo={post.titulo}/>
              </li>
            )
          })}
        </ul>


        </div>  
       
      </div>
      
      
    );
  }
  
  export default Ocorrencia;
  