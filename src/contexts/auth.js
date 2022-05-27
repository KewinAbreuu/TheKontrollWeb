

import { useState , createContext , useEffect } from 'react';
import firebase from '../services/firebaseConect';

export const AuthContext=createContext({});

export default function AuthProvider({children}){

    const [user, setUser] = useState();
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
    
            setLoading(false)
        }

        loadStorage();
        
    },[])


    async function signUp(email, password, nome){

        setLoadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid= value.user.uid;

            await firebase.firestore().collection('usuario')
            .doc(uid).set({
                nome:nome,
                avatarUrl:null,
                email: email,
                codigoEmpresa:"123"
            })

            .then(()=>{

                let data={
                    uid:uid,
                    nome:nome,
                    email:value.user.email,
                    avatarUrl:null,
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error)=>{
            alert(error);
            setLoadingAuth(false);
        })
    }

    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    function storageCodigoEmpresa(data){
        localStorage.setItem('CodigoEmpresa', data);
    }

    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null);
    }

    async function signIn(email, password){
        setLoadingAuth(true);

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value)=>{
            let uid = value.user.uid;

            const userProfile = await firebase.firestore().collection('usuario')
            .doc(uid).get();

            let data={
                uid:uid,
                nome:userProfile.data().nome,
                avatarUrl: userProfile.data().avatarUrl,
                email:value.user.email
            };

            // let dataCodigo={
            //     codigoEmpresa:userProfile.data().codigoEmpresa,
            // };
            setUser(data);
            storageCodigoEmpresa(userProfile.data().codigoEmpresa)
            storageUser(data);
            setLoadingAuth(false);
            

        })
        .catch((erro)=>{
            setLoadingAuth(false)
            alert('erro')
        })
    }

    return(
        <AuthContext.Provider value={{
         signed: !!user,
         user,
         loading,
         signUp,
         signOut,
         signIn,
         loadingAuth
           
           }}>
            {children}
        </AuthContext.Provider>
    )
}