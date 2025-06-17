'use client'

import  { createContext, useState } from 'react'

const AuthContext = createContext(null)

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