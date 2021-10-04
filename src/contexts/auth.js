import { useState, useEffect, createContext } from "react";
import firebase from "../firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  async function login(email, senha) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(async (value) => {
        let uid = value.user.uid;
        const userProfile = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        let data = {
          uid: uid,
          email: value.user.email,
        };
        setUser(data);
        storageUser(data);
      })
      .catch((error) => {
        console.log(error);
        alert("email/senha incorretos!");
      });
  }
  function storageUser(data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  useEffect(() => {
    function loadStorage() {
      let dadosStorage = localStorage.getItem("user");
      if (dadosStorage) {
        setUser(JSON.parse(dadosStorage));
      }
    }
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ signed: !!user, login, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
