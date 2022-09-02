import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatedRoutes } from '../components/AnimatedRoutes';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { NewNote } from '../pages/NewNote';
import { Profile } from '../pages/Profile';

export function AppRoutes(){
  return (
    <AnimatedRoutes />
  )
}