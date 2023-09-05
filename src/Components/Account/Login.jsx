/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseContext } from '../../Context/Context';
import googleIcon from '../../assets/google.svg';
import githubIcon from '../../assets/github.svg';

const Login = () => {
    const navigate = useNavigate();
    const { googleAccount, githubAccount, loggedAccount, forgetPass } = useContext(UseContext);
    const [error, setError] = useState('');

    const loginAccount = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loggedAccount(email, password)
            .then(result => { const user = result.user; console.log(user); form.reset(); navigate('/') }).catch(error => setError(error.message))

    }
    const google = () => {
        googleAccount()
            .then(() => { navigate('/') }).catch(error => setError(error.message))
    }
    const github = () => {
        githubAccount()
            .then(() => { navigate('/') }).catch(error => setError(error.message))
    }
    const resetPass = () => {
        const email = document.getElementById('email').value;
        forgetPass(email)
            .then(() => {
                alert('We Sent Password Reset Link in Your Email');
            }).catch(error => setError(error.message))
    }

    return (
        <div className='login-page pt-5 mt-5'>
            <div className="container">
                <div className="login-box mt-5 w-75 mx-auto pt-3 px-5 pb-4 rounded-3 shadow-sm">
                    <h1 className="text-secondary text-center pb-3">Login Your Account</h1>
                    <div className="login-form">
                        <form onSubmit={loginAccount} className="row g-3">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" required name='email' className="form-control" id="email" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" required name='password' className="form-control" id="password" />
                            </div>
                            <p className="text-danger">{error}</p>
                            <div className="d-flex justify-content-center">
                                <Link to='/register' className='text-decoration-none text-center d-block'>Create Account</Link>
                                <p onClick={resetPass} className="d-inline text-primary ps-5 pointer">Forgot Password ?</p>
                            </div>

                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-lg themeBtn text-white rounded-pill btn-200">Login</button>
                            </div>
                        </form>
                        <div className="third pt-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <button onClick={google} className='btn btn-body-secondary shadow-sm mx-2'><img src={googleIcon} alt="Google" /> Register With Google</button>
                                <button onClick={github} className='btn btn-body-secondary shadow-sm mx-2'><img src={githubIcon} alt="github" />Register With Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;