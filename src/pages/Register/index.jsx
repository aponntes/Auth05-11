import {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './register.css'
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleLogin(e){
        e.preventDefault();
        if(email !== '' && password !==''){
           await signInWithEmailAndPassword(auth,email,password)
           .then(()=>{
              //navegar para /admin
              navigate('/admin',{replace:true})
           })
           .catch(()=>{
            console.log("Erro ao fazer login")
           })
        }else{
            alert("Preencha todos os campos!")
        }//fim do else
    }//fim da função handleLogin

    return (
      <div className='register-container'>
        <h1>Cadastre-se!</h1>
        <span>E aí? Vamos criar sua conta?</span>
        <form className='form' onSubmit={handleLogin}>
            <input type="email"
                   placeholder='seuemail@server.com'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}/> <br/>
            <input type="password"
                   placeholder='******'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/> <br/>
                   <button type="submit">Cadastrar</button>

                  
        </form>
        <Link className="button-Link" to={'/'}>
            Já possui uma conta? Faça o login.
        </Link>
      </div>
    )
    }//fim da função Home

  
  export default Register;
  