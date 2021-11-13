import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState("");
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    // const dbURL = "http://localhost:5000";
    const dbURL = "https://glacial-cliffs-26298.herokuapp.com";


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

    const setUserDataInDB = (nUser) => {
        const newUser = {
            email: nUser.email,
            displayName: nUser.displayName,
            photoURL: nUser.photoURL,
            emailVerified: nUser.emailVerified,
            accessToken: nUser.accessToken,
            role: "user"
        };
        fetch(`${dbURL}/users`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).then(response => response.json())
            .catch(err => console.log(err));
    }
    useEffect(() => {
        // if the user is signed In then setting the user
        onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser);
                setUserDataInDB(currentUser);
            }
            else if (auth.currentUser) {
                setUser(auth.currentUser);
                setUserDataInDB(auth.currentUser);
            }
            setLoading(false);
        });
    }, [auth, logged]);

    const useAdminRole = () => {
        useEffect(() => {
            fetch(`${dbURL}/users/role/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role);
                })
        }, []);
    }


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
        dbURL,
        setUser,
        setLogged,
        setLoading,
        setUserDataInDB,
        logInUsingGoogle,
        logOut,
        signUpUsingEmail,
        logInUsingEmail,
        updateName,
        setRole,
        role,
        orders,
        setOrders,
        setProducts,
        products,
        useAdminRole
    };
};

export default useFirebase;