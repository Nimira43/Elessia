'use client'

import { User } from 'firebase/auth'
import  { createContext, useState } from 'react'

type AuthContextType = {
  currentUser: User | null
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [currentUser, setCurrentUser] = useState(null)

  return (  

    <AuthContext.Provider
      value={
        currentUser
      }
    >
      {children}
    </AuthContext.Provider>
  )
}