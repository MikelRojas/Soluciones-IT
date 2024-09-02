import React from 'react'
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const RuterLayout: React.FC<{}> = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default RuterLayout;
