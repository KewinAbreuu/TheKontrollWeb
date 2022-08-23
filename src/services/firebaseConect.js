  import firebase from  'firebase/app';
  import 'firebase/auth'
  import 'firebase/firestore'

  /* CODES COMPANYS
    123= loginsGeral
    352847= Life
  */ 

  // company firebase config object
  const companysConfig = {
    // KSA PARIPUEIRA
    123: {
      apiKey: "AIzaSyB8WpaHjzv2WLdM812retS2F5Dk0hSYgCM",
      authDomain: "appportaria-b0a1b.firebaseapp.com",
      projectId: "appportaria-b0a1b",
      storageBucket: "appportaria-b0a1b.appspot.com",
      messagingSenderId: "43910768183",
      appId: "1:43910768183:web:33c4d28029359f570c41b2"
    },
    // Life Edf Alameda do Nobres
    352847: {
      apiKey: "AIzaSyBRjPFNagYhbq4Swj-Hr--j7gRcTp_0mwM",
      authDomain: "kontrolllifealamedadosno-a593f.firebaseapp.com",
      projectId: "kontrolllifealamedadosno-a593f",
      storageBucket: "kontrolllifealamedadosno-a593f.appspot.com",
      messagingSenderId: "98044771655",
      appId: "1:98044771655:web:75adc2fd6fb3400b51e062"
    },
    // TESTE
    352844: {
      apiKey: "AIzaSyBINsszJy3il1RjsF6Sn6_hjUtN7Ev77u4",
      authDomain: "appteste-c4486.firebaseapp.com",
      projectId: "appteste-c4486",
      storageBucket: "appteste-c4486.appspot.com",
      messagingSenderId: "999856343253",
      appId: "1:999856343253:web:d26883393b62800f2a3a5c"
    }
  }
  let companyId = localStorage.getItem('CodigoEmpresa');
  
  const config = companysConfig[companyId];
    
  if(!firebase.apps.length){
    firebase.initializeApp(config);
  }
  
  export default firebase;