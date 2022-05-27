
import './signIn.css'
import Wave from '../../assets/wave.png';
import Bg from '../../assets/bg.svg';
import Bg2 from '../../assets/bg2.svg';
import Avatar from '../../assets/avatar.svg';
import { Link } from 'react-router-dom';

import { useState, useContext, useEffect} from 'react';
import { AuthContext } from '../../contexts/auth';


function SignIn() {

	useEffect(()=>{
		localStorage.setItem('CodigoEmpresa', '123')
		localStorage.setItem('PageRefresh','first')
	},[])

	const{ signIn, loadingAuth }=useContext(AuthContext);

	const[email, setEmail] =useState('');
	const[senha, setSenha] =useState('');

	function login(e){
		e.preventDefault();
		if(email !=='' && senha !==''){
			signIn(email, senha);
		}else{
			alert('Preencha todos os campos!')
		}
	}
  
	function CSuporte(){
		alert('Contate o suporte do sistema para alterações de senhas!')
	}
    return (
      <div >
       
    <img className='wave' src={Wave}></img>

    <div className="container">
		<div className="img">
			<img src={Bg2}/>
		</div>
		<div className="login-content">
			<form>
				<img src={Avatar}/>
				<h2 className="title">The Kontrol</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="text" className="input" placeholder='Email'
							value={email} onChange={(e)=>setEmail(e.target.value)}
						/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" className="input" placeholder='Password'
						   value={senha} onChange={(e)=>setSenha(e.target.value)}
						/>
            	   </div>
            	</div>
            	<a href="#" onClick={CSuporte}>Forgot Password?</a>
              <button type="submit" className='btn' onClick={login}>{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
			  <Link to="/register" className='cadastrar'>Criar uma conta</Link>
            </form>
        </div>
    </div>
    

      </div>
    );
  }
  
  export default SignIn;
  