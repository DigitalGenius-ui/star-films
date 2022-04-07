import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase';

const MovieContext = createContext();
const Context = ({children}) => {
    const [user, setUser] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        }
    },[])

    const signIn = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }
    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = async() => {
        await signOut(auth);
        setUser(null);
    }
  return (
    <MovieContext.Provider value={{
        user,
        signIn,
        signUp,
        logOut
    }}>
        {children}
    </MovieContext.Provider>
  )
}

export default Context

export const MovieState = () => useContext(MovieContext);