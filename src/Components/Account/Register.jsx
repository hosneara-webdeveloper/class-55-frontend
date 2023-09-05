/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/google.svg';
import githubIcon from '../../assets/github.svg';
import { UseContext } from '../../Context/Context';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    const [errorMessage, setErrorMessage] = useState('');
    const [notMatch, setMatch] = useState('');
    const [validPass, setValid] = useState('');
    const { registerNew, googleAccount, githubAccount } = useContext(UseContext);
    const navigate = useNavigate();
    const registerAccount = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.firstName.value + ' ' + form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        registerNew(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            navigate('/');
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(()=>{}).catch(error => console.log(error.message))
            
            console.log(user);
            
        }).catch(error => setErrorMessage(error.message))

    }
    const match = ()=> {
        const pass = document.getElementById('password').value;
        const cPass = document.getElementById('cpassword').value;

        if(pass != cPass){
            setMatch('Password Not Match');
        } else {
            setMatch('')
        }

    }
    const valid = () => {
        const pass = document.getElementById('password').value;

        if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(pass)){
            setValid('Minimum eight characters, at least one letter, one number and one special character')
        } else{
            setValid('')
        }
    }
    const google = () => {
        googleAccount()
        .then(()=>{ navigate('/')
        }).catch((error)=> setErrorMessage(error.message))
    }
    const github = ()=>{
        githubAccount()
        .then(()=>{ navigate('/')}).catch(error => setErrorMessage(error.message))
    }
    return (
        <div className='signup pt-5 mt-5'>
            <div className="container">
                <div className="box-reg mt-3 px-5 pb-5 shadow-sm rounded-3">
                    <h3 className='text-center text-secondary pt-3 pb-4'>Register Your Account</h3>
                    <br />
                    <form onSubmit={registerAccount} className="row g-3">
                        <div className="col-12 col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" required name='firstName' className="form-control" id="firstName" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" required name='lastName' className="form-control" id="lastName" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" required name='email' className="form-control" id="email" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="number" required name='phone' className="form-control" id="phone" />
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onKeyUp={valid} type="password" required name='password' className="form-control" id="password" />
                            <p className="text-danger">{validPass}</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                            <input onKeyUp={match} type="password" required name='cpassword' className="form-control" id="cpassword" />
                            <p className="text-danger">{notMatch}</p>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" />
                        </div>
                        <p className="text-danger">{errorMessage}</p>
                        <Link to='/login' className='text-decoration-none text-center d-block'>Already Have Account ?</Link>

                        <div className="col-12 text-center">
                            <button type="submit" className="btn btn-lg themeBtn text-white rounded-pill btn-200">Register</button>
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
    );
};

export default Register;