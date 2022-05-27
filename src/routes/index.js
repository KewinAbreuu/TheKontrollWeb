
import { Switch } from 'react-router-dom';
import Route from  './Route';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import Controle from '../pages/Controle';
import Ocorrencia from '../pages/Ocorrencia';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/controle" isPrivate component={Controle}/>
            <Route exact path="/ocorrencia" isPrivate component={Ocorrencia}/>

        </Switch>
    )
}