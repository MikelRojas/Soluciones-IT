import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RuterLayout from './common/RuterLayout'
import Principal from './pages/Principal'

const Router: React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/' element={<RuterLayout/>}>
            <Route path='/' element={<Principal/>}/>
        </Route>

    </Routes>
  )
}

export default Router;