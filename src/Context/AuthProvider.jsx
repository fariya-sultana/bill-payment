import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateProfile, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [balance, setBalance] = useState(10000);
    const [paidBills, setPaidBills] = useState([]);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);


    const payBill = (billId, amount) => {
        if (paidBills.includes(billId)) return false;
        if (amount > balance) return false;

        setPaidBills([...paidBills, billId]);
        setBalance(balance - amount);
        return true;
    };

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        googleLogin,
        updateUser,
        logOut,
        balance,
        paidBills,
        payBill
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;