import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    return <div className='login-parent'>
        <div className='row justify-content-center'>
            <div className='col-md-5'>
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_hu9cd9.json" background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
            <div className='col-md-4'>
                <div className='login-form'>
                    <h2>Login</h2>
                    <hr></hr>
                    <input type="text" className='form-control' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    <input type="text" className='form-control' placeholder='password' value={email} onChange={(e) => { setPassword(e.target.value) }}></input>

                    <button className='my-3'>Login</button>
                    <hr>
                    </hr>
                    <Link to='/register'>Click here to Register</Link>
                </div>
            </div>
        </div>
    </div>;
}

export default LoginPage;
