
import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";


const auth = getAuth(app);

const CreateAuth = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);

    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, correntUser => {
            setUser(correntUser)
            if(correntUser) {
                fetch(`http://localhost:3000/jwt?email=${correntUser.email}`,
                {
                    method: "POST"
                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("access-token", data.token)
                })
            }
            else {
                localStorage.removeItem("access-token")
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authData = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInGoogle
    }

    return <CreateAuth.Provider value={authData}>
        {children}
    </CreateAuth.Provider>
}

const useAuthGlobally = () => {
    return useContext(CreateAuth)
} 

export { AuthProvider, useAuthGlobally };