'use client'

import  { createContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    

    <AuthContext.Provider
      value={}
    >
      {children}
    </AuthContext.Provider>
  )
}