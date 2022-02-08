import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = getAuth();

    const login = async () => {
        try {
            setLoading(true)
            const result = await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('currentUser', JSON.stringify(result))
            setLoading(false)
            toast.success('Login Successfull')
            window.location.href = '/'
        } catch (error) {
            console.log(error);
            toast.error('Login Failed')
            setLoading(false)
        }
    }




    return <div className='login-parent'>
        {loading && (<Loader />)}
        <div className='row justify-content-center'>
            <div className='col-md-5'>
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_hu9cd9.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div className='col-md-4'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <hr></hr>
                    <input type="text" className='form-control' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="text" className='form-control' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>

                    <button className='my-3' onClick={login}>Login</button>
                    <hr>
                    </hr>
                    <Link to='/register'>Click here to Register</Link>
                </div>
            </div>
        </div>
    </div>;
}

export default LoginPage;
