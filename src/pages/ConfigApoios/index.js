
import { useState, useEffect } from 'react';

import firebase from '../../services/firebaseConect'

import Navbar from '../../components/Navbar/Navbar';
import CardsApoios from '../../components/CardsApoios';

import './configApoios.css'

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ConfigApoios() {

  const[posts, setPosts] = useState([])
  const[nome, setNome] = useState()
  const[contato, setContato] = useState()

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(()=>{
    async function loadPost(){

      await firebase.firestore().collection('apoio')
      // .where('Date','==',DATINHA)
      // .orderBy('Data','desc')
      .onSnapshot((doc)=>{
        let meusPosts=[];

        doc.forEach((item)=>{
          meusPosts.push({
            id:item.id,
            Nome:item.data().Nome,
            Contato:item.data().Contato
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
        <h3 className='TituloPageConfig'>Apoios</h3>
          <div className="box2">
            <button className='btnAddApoios' onClick={openModal}>+ Incluir Apoio</button>
            
            {posts.map((item)=>{
              return(
                <CardsApoios name={item.Nome} contato={item.Contato}/>
              )
            })}
          </div>

      <div className='Containe'>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Adicionar novo</h2>
        <hr />
        <input type='text' placeholder='Nome' onChange={(e)=>setNome(e.target.value)}/>
        <input type='text' placeholder='Contato' onChange={(e)=>setContato(e.target.value)}/>
        <button onClick={closeModal}>Adicionar</button>
      </Modal>
      </div>
            
        </div>
      </div>
      
      
    );
  }
  