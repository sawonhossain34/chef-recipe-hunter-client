import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
 
const auth = getAuth(app);

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
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;