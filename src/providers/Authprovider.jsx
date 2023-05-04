import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
// firebase auth system
export const AuthContext = createContext(null)
 
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const Authprovider = ({children}) => {
    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true)
// create user //
    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password);
       setLoading(true);
    }
// sign in user //
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
        setLoading(true);

    }
    // google sign in //
    const signInGoogle = () => {
       return signInWithPopup(auth,googleProvider);
    }
// github sign in user
    const signInGithub = () => {
        return signInWithPopup(auth,githubProvider);
    }
     // logOut user //
    const logOut = () => {
       return signOut(auth);
       setLoading(true);

    }
    // onauth state reserved //
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

    // pass the function
    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        signInGoogle,
        signInGithub

    }
    // pass all route in children //
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;