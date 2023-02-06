import React, { FC, ReactNode } from 'react'

interface ILayout{
    children: ReactNode
}
export const Layout: FC<ILayout> = ({children}) => {
  return (
    <>
    {children}
    </>
  )
}
