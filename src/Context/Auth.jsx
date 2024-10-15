import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [IsLoggedin, setIsLoggedin] = useState(false);
  const [GetUser, setGetUser] = useState(null);
  const [userId, setuserId] = useState("");
  const [loading, setLoading] = useState(true); // For managing loading state

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        setIsLoggedin(true);
        setuserId(uid);

        // Check if user data already exists in state to prevent duplicate requests
        if (!GetUser) {
          try {
            const userDocRef = doc(db, "Users", uid);
            const userSnapshot = await getDoc(userDocRef);

            if (userSnapshot.exists()) {
              const userData = userSnapshot.data();
              setGetUser(userData);
            } else {
              console.log("No such document!");
              setGetUser(null);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            setGetUser(null);
          }
        }
      } else {
        // User is signed out
        setIsLoggedin(false);
        setGetUser(null);
        setuserId("");
      }
      setLoading(false); // End loading state
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [GetUser]); // Add GetUser to dependencies to avoid repeated fetches

  if (loading) return <div>Loading...</div>; // Show loading indicator

  return (
    <AuthContext.Provider value={{ IsLoggedin, GetUser, userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
