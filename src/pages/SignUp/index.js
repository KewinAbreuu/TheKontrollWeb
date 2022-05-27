


    // import './signIn.css'
    import { useState, useContext } from 'react';
    import { AuthContext } from '../../contexts/auth';
    import { Link } from 'react-router-dom';

    import Wave from '../../assets/wave.png';
    import Bg from '../../assets/bg.svg';
    import Bg2 from '../../assets/bg2.svg';
    import Avatar from '../../assets/avatar.svg';
    
    
    
    
   export default function SignUp() {
    
      const [nome, setNome] = useState('');
      const [email, setEmail] = useState('');
      const [senha, setSenha] = useState('');
      const [confirmSenha, setConfirmSenha] = useState('');
      const [admPass, setAdmPass] = useState('');

      const{ signUp, loadingAuth }=useContext(AuthContext);

      function handleSubmit(e){
         e.preventDefault();

         if(nome !=='' && email !=='' && senha!=='' && confirmSenha!==''){
            
               if(senha == confirmSenha){
                  if(admPass==='251225' ){
                  signUp(email, senha, nome);
                  }else{alert('Senha Adm Incorreta!')}
               }else{
                  alert('As senhas não são iguais!')
               }

           
         }else{alert('Preencha todos os campos!')}
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
            <h2 className="title" style={{fontSize:16 , marginBottom:0}}>The Kontrol</h2>
                   <div className="input-div one">
                      <div className="i">
                          <i className="fas fa-user"></i>
                      </div>
                      <div className="div">
                          <input type="text" className="input" placeholder='Name'
                            value={nome} onChange={(e)=>setNome(e.target.value)}
                          />
                      </div>
                   </div>

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
                         value={senha} onChange={(e)=>setSenha(e.target.value)}/>
                     </div>
                  </div>

                  <div className="input-div pass">
                      <div className="i"> 
                         <i className="fas fa-lock"></i>
                      </div>
                      <div className="div">
                         <input type="password" className="input" placeholder='Confirm password'
                            value={confirmSenha} onChange={(e)=>setConfirmSenha(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="input-div pass">
                      <div className="i"> 
                         <i className="fas fa-lock"></i>
                      </div>
                      <div className="div">
                         <input type="password" className="input" placeholder='Adm'
                            value={admPass} onChange={(e)=>setAdmPass(e.target.value)}
                        />
                     </div>
                  </div>

                  <button type="submit" className='btn' onClick={handleSubmit}>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
                  <Link to="/" className='cadastrar'>Já tenho uma conta</Link>
                </form>
            </div>
        </div>
        
    
          </div>
        );
      }
      
     
      
  
  
  