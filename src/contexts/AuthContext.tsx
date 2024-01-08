import { ReactNode, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

interface AuthProviderProps {
  children: ReactNode
}

type AuthContextData = {
  signed: boolean;
  loadingAuth: boolean;
  handleInfouser: ({name, email, uid}: UserProps) => void
  user: UserProps | null;
}

interface UserProps {
  uid: string;
  name: string | null;
  email: string | null
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loadingAuth, setLoagindAuth] = useState(true)

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          name: user?.displayName,
          email: user?.email
        })

        setLoagindAuth(false)

      } else {
        setUser(null)
        setLoagindAuth(false);
      }
    })

    return () => {
      unsub();
    }

  }, [])

  function handleInfouser({name, email, uid}: UserProps){
    setUser({
      name,
      email,
      uid
    })
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        loadingAuth,
        handleInfouser,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;