import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    //google login system
    const logInUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };




    const updateName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        });
    }
    // code for email sign in and sign Up
    const signUpUsingEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUsingEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };



    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                console.log(user);
            }
            else if (auth.currentUser) {
                setUser(auth.currentUser);
            }
            setLoading(false);
        });
    }, [auth, logged]);


    const logOut = (path, history) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                history.push(path || '/');
            })
            .finally(setLoading(false));
    }

    return {
        user,
        logged,
        loading,
        setUser,
        setLogged,
        setLoading,
        logInUsingGoogle,
        logOut,
        signUpUsingEmail,
        logInUsingEmail,
        updateName
    };
};

export default useFirebase;