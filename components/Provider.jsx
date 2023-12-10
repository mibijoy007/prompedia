'use client'

import { SessionProvider, SessionProviderProps } from "next-auth/react"


const Provider = ({children, session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider