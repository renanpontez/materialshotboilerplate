import React from 'react';
import { Switch } from "react-router-dom";
import AppRoute from './AppRoute';
import HomePage from "../home/HomeContainer";
import DashboardLayout from '../_common/layouts/DashboardLayout'; 
import ResultContainer from '../results/ResultsContainer';
import RoundsContainer from '../rounds/RoundsContainer';

const Routes = () => {
  return (
    <Switch>
      <AppRoute 
        exact 
        path="/" 
        layout={DashboardLayout} 
        component={HomePage}/>

      <AppRoute 
        exact 
        path="/events/:eventId/rounds/" 
        layout={DashboardLayout} 
        component={RoundsContainer}/>

      <AppRoute 
        exact 
        path="/events/:eventId/rounds/:roundId/results" 
        layout={DashboardLayout} 
        component={ResultContainer}/>

      {/* <AppRoute 
        exact 
        path="/" 
        layout={LoginLayout} 
        component={HomePage}/> */}

      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  );
}
export default Routes;