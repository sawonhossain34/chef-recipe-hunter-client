import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
 
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser] = useState('');

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
     
    const logOut = () => {
       return signOut(auth);
    }
    useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, logUser => {
            console.log('state observer', logUser);
            setUser(logUser);
        })
        return() => {
            unsubscribe();
        }
    } ,[])

    const authInfo ={
        user,
        createUser,
        signInUser,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;