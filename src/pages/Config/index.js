
import { useState, useEffect } from 'react';

import firebase from '../../services/firebaseConect'

import Navbar from '../../components/Navbar/Navbar';
import CardsConfig from '../../components/CardsConfig';

import apoio from '../../assets/apoio.png'
import moradores from '../../assets/replace.png'

import './config.css'


export default function Config() {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    async function loadPost(){

      await firebase.firestore().collection('config')
      .onSnapshot((doc)=>{
        let meusPosts=[];

        doc.forEach((item)=>{
          meusPosts.push({
            id:item.id,
            Apoio:item.data().Apoio,
            Corresp:item.data().Corresp,
          })
        });
        setPosts(meusPosts)
      })
    }
    loadPost();
  },[])

    return (
      
    <div className="Dashboard">
        <Navbar/>

        <div className='corpoConfig'>
        <h3 className='TituloPageConfig'>Configurações</h3>
          <div className="box1">
            {posts.map((post) => {
                if(post.Apoio === 1){
                  return(
                    <CardsConfig name='Apoios' icon={apoio}/>
                  )
                }
            })}
            {posts.map((post) => {
               if(post.Corresp === 1){
                return(
                  <CardsConfig name='Moradores' icon={moradores}/>
                )
              }
            })}
          </div>
            
        </div>
      </div>
      
      
    );
  }
  