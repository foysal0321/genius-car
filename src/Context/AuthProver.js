import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/Firebase'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
 const auth = getAuth(app);

const AuthProver = ({children}) => {
    const [user,setuser] = useState(null);
    const [loding,setloding] = useState(true)

    const createUser=(email,pass)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const signUser =(email,pass)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut =()=>{
        localStorage.removeItem('token')
        setloding(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser);
            setloding(false)
        })
        return ()=> unscribe()
    })

    const authInfo = {
        user, loding, createUser, signUser, logOut
    }

    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
    );
};

export default AuthProver;