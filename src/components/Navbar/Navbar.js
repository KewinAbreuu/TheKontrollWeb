import {useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './navbar.css';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/avatar.svg';

import {useEffect,useState} from 'react'

import { BsFillShieldFill, BsBookFill, BsInfoSquareFill, BsFillLayersFill,BsFillGearFill } from "react-icons/bs";


export default function Navbar(){

    const { user, signOut }=useContext(AuthContext);

    const [visible,setVisible] = useState(true);
    const [confUser,setConfUser] = useState(false);
    

// -----------------------------------------------------------------
    useEffect(()=>{
        teste();
        
    },[visible])

   
   
    function teste(){
        if(visible === true){
            document.querySelector('.sidebar').setAttribute('id', 'ver');
            document.querySelector('.navb').setAttribute('id', 'ver');
        }else{
            document.querySelector('.sidebar').removeAttribute('id', 'ver');
            document.querySelector('.navb').removeAttribute('id', 'ver');
        }
    }


function whats(){
    window.location.href = 'https://api.whatsapp.com/send?phone=5582981129518&text=Preciso%20de%20ajuda!'
}
// -----------------------------------------------------------------
function Pdf(){
    document.querySelector('.sidebar').setAttribute('id', 'ver');
    document.querySelector('.navb').setAttribute('id', 'ver');
    PrintScreen()
  }

  function PrintScreen(){
    window.print()
  }
// -----------------------------------------------------------------

    return(
        <>
        <div className='sideMobile'>

            <div  className="mobile-menu" onClick={()=>setVisible(!visible)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <p className='nomeNav'>THE KONTROLL</p>
            
            <div className='usuario' >
                <img src={Avatar} onClick={()=>setConfUser(!confUser)}/>
            </div>
            
        </div>


        <div className="sidebar" id='sidebar'>
            <div className='LOGO'>
                <img src={ Avatar }/> 
            </div>

            <span className="Nome">The Kontrol</span>


            <div className='navb'>

            <Link to="/controle" >
                <BsFillShieldFill  size="24" className='icon'/>
               <span>Ronda</span> 
            </Link>

            <Link to="/ocorrencia" >
                <BsFillLayersFill  size="24" className='icon'/>
               <span>Ocorrências</span> 
            </Link>

            <Link onClick={Pdf} >
                <BsBookFill  size="24" className='icon'/>
               <span>Relatório</span> 
            </Link>

            <Link onClick={whats} >
                <BsInfoSquareFill  size="24" className='icon'/>
               <span>Suporte</span> 
            </Link>

            <Link to="/config" >
                <BsFillGearFill  size="24" className='icon'/>
               <span>Configurações</span> 
            </Link>


            </div>
            <button onClick={signOut} className="botao">Sair</button>
            <p style={{color:"#fff", fontWeight:'lighter'}}>ADM: {user.nome}</p>

           
        </div>
        </>
    )
}