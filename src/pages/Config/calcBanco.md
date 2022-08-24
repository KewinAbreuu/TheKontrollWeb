
import { useState, useEffect } from 'react';

import firebase from '../../services/firebaseConect'

import Navbar from '../../components/Navbar/Navbar';

import './config.css'


export default function Config() {

  const [posts, setPosts]=useState([])
  const [a, setA]=useState()

  useEffect(()=>{
    async function loadPost(){

      await firebase.firestore().collection('teste')
      .onSnapshot((doc)=>{
        let meusPosts=[];

        doc.forEach((item)=>{
          meusPosts.push({
            id:item.id,
            Calc:item.data().Calc,
          })
        });
        

        setPosts(meusPosts)

      })

    }
    
    loadPost();

  },[])


  function Calculo(){
    let oi=0
    posts.map((item) => {
      oi = item.Calc * 84 + 50
      setA(oi)
      console.log(oi)
    })

  }
  

    return (
      
      <div className="Dashboard">
        <Navbar/>

        <div className='corpo'>
            <h1>Pagina config</h1>
              <br></br>
              <br></br>
              <br></br>
              <h1>{a}</h1>
              <button onClick={Calculo}>TESTE</button>
        </div>
      </div>
      
      
    );
  }
  