import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
 
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Authprovider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true)

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password);
       setLoading(true);
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
        setLoading(true);

    }
    const signInGoogle = () => {
       return signInWithPopup(auth,googleProvider);
    }

    const signInGithub = () => {
        return signInWithPopup(auth,githubProvider);
    }
     
    const logOut = () => {
       return signOut(auth);
       setLoading(true);

    }
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, logUser => {
            console.log('state observer', logUser);
            setUser(logUser);
            setLoading(false);
        })
        return() => {
            unsubscribe();
        }
    } ,[])

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInGoogle,
        signInGithub

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;