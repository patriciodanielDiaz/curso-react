import { createContext, useContext, useEffect } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";

const AuthContext = createContext()

const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    //login
    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password);
    //register
    const register = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);

    //logout
    const logout = () => {
        signOut(auth)
    }

    return (
    <AuthContext.Provider value={{ login, register, user , logout }}>
        {props.children}
    </AuthContext.Provider>
    );
}
const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };