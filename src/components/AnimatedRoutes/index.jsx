import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { Details } from '../../pages/Details';
import { Home } from '../../pages/Home';
import { NewNote } from '../../pages/NewNote';
import { Profile } from '../../pages/Profile';

import { AnimatePresence } from 'framer-motion';

export function AnimatedRoutes() {
  const location = useLocation();
  return(
  <AnimatePresence>
  <Routes location={location} key={location.pathname}>
    <Route path='/' element={ <Home /> }/>
    <Route path='/newnote' element={ <NewNote /> }/>
    <Route path='/profile' element={ <Profile /> }/>
    <Route path='/details/:id' element={ <Details /> }/>
  </Routes>
  </AnimatePresence>
  )
}