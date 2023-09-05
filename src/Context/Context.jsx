/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);

 export const UseContext = createContext();
//context
const Context = ({ children }) => {
    const google = new GoogleAuthProvider(); 
    const github = new GithubAuthProvider(); 

    const [userInformation, setUser] = useState({}); 

    const [loader, setLoader] = useState(true); 

    const registerNew = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password) 
    }
    const googleAccount = ()=>{ 
        return signInWithPopup(auth, google) 
    }
    const githubAccount = ()=>{
        return signInWithPopup(auth, github) 
    }
    const loggedAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password) 
    }
    const forgetPass = (email) => {
        return sendPasswordResetEmail(auth, email) 
    }
    
    useEffect(()=>{
        const LoggedUser = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false);
        }) 
        return ()=>{
            LoggedUser();
        }
    },[]);

    const logOut = () => {
       return signOut(auth) 
    }

    
    const information = { registerNew, googleAccount, githubAccount, loggedAccount, forgetPass, userInformation, loader, logOut };

    return (
        
        <UseContext.Provider value={information}>
            {children} 
        </UseContext.Provider>
    );
};

export default Context;

