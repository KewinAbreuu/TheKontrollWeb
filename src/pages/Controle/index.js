
    import { useState, useEffect } from 'react';

    import Navbar from '../../components/Navbar/Navbar';

    import Avatar from '../../assets/avatar.svg'

    import firebase from "../../services/firebaseConect";

    import Card from '../../components/Cards'

    import DateTimePicker from 'react-datetime-picker';

    import './controle.css'



function Controle() {

  const [posts, setPosts] = useState([]);

  const [value, onChange] = useState(new Date())


  useEffect(()=>{
   let RefreshPage= localStorage.getItem('PageRefresh');
   if(RefreshPage === 'first'){
     localStorage.setItem('PageRefresh',1)
     window.location.assign("https://shimmering-pithivier-dbee84.netlify.app")
    //  window.location.reload();
   }
  },[])


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
            cargo:item.data().Cargo
          })
        });
        

        setPosts(meusPosts)

      })

    }
    
    loadPost();

  },[value])
 
 

  

 
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
                    status={post.status}
                    desc={post.descrição}
                    funcionario={post.cargo + ' ' + post.funcionario}/>
              </li>
            )
          })}
        </ul>

 
      

        </div>  
       
      </div>
      
      
    );
  }
  
  export default Controle;
  