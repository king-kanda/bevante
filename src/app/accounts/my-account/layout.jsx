import { SideNav } from '@/components'
import React  from 'react'

const layout = ({children}) => {
  return (
    <>
        <SideNav/>    
        {children}
    </>
  )
}

export default layout