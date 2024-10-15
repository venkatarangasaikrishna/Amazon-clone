import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    const signIn = e => {
        e.preventDefault()
    }

    const register=e =>{
        
    }

    

    return (
        <div className='login'>
            <Link to='/'>


                <img className='login_logo' src="https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png" />



            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h4 className='login_mail'>E-Mail</h4>
                    <input className='mail_text' value={email} onChange={e => setEmail(e.target.value)} type='text' />
                    <h4 className='login_pass'> Password</h4>
                    <span><a style={{fontSize:"10px", textDecoration:"none", float:"right"}} href="#" id="password">Forgot your password?</a></span>
                    <input className='pass_text' value={password} onChange={e => setPassword(e.target.value)} type='text' />
                </form>
                <button onClick={signIn} type='submit' className='login_signinButton'>Sign In</button>
                <p style={{fontSize:"10px"}}>By continuing, you agree to Amazon's clone Conditions of Use and Privacy Notice.
                </p>



            </div>
            <div id="createAccount">
                <h2><span>New to Amazon?</span></h2>
                <button onClick={register} id="newAccount" name="newAcct">Create your Amazon account</button>
            </div>


        </div>
    )
}

export default Login
