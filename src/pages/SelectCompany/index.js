
import './signIn.css'
import Wave from '../../assets/wave.png';
import Bg2 from '../../assets/bg2.svg';
import Avatar from '../../assets/avatar.svg';

import { useState,  useEffect} from 'react';


export default function SelectCompany() {
	const [valor, setValor] = useState('')
  const [controlBtn, setControlBtn] = useState(false)

  useEffect(() => {
    localStorage.setItem('CodigoEmpresa', '123')
  }, [])

  function handlleValueCompanyId () {
    if (valor === '') {
      alert('Escolha uma opção')
    }
    localStorage.removeItem('CodigoEmpresa')
    localStorage.setItem('CodigoEmpresa', JSON.parse(valor))
    setControlBtn(true)
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

							<select className="select" onChange={(e) => setValor(e.target.value)}>
								<option value="" disabled selected>Selecione sua Empresa</option>
								<option value="123">Life kontroll</option>
								<option value="352847">Advec</option>
								<option value="352844">Teste</option>
							</select>

							{!controlBtn && <button onClick={handlleValueCompanyId} className="btn">{valor === '' ? '...' : 'Confirmar'}</button>}

							{valor !== '' && controlBtn
										? <a href="/signIn" className='btn'><p>Continuar</p></a>
										: <div></div>
									}

									</div>
								</div>	
					</form>
					</div>
			</div>
		</div>
	);
  }
  
  