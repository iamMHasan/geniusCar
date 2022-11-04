import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app)

const Authprovider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)


    // email user create
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout 
    const logout = () => {
        return signOut(auth)
        localStorage.removeItem('geniusToken')
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribed()

    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;