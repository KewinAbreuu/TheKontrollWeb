
import { Switch } from 'react-router-dom';
import Route from  './Route';

import SelectCompany from '../pages/SelectCompany';
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import Controle from '../pages/Controle';
import Ocorrencia from '../pages/Ocorrencia';
import Config from '../pages/Config';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={SelectCompany} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/controle" isPrivate component={Controle}/>
            <Route exact path="/ocorrencia" isPrivate component={Ocorrencia}/>
            <Route exact path="/config" isPrivate component={Config}/>
        </Switch>
    )
}