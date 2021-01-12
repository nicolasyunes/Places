import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserItem from './user/components/UserItem';
import UserList from './user/components/UserList';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';


const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/:userID/places" exact>
          <UserPlaces/>
        </Route>
        <Route path="/user/items" exact>
          <UserItem />
        </Route>
        <Route path="/user/list" exact>
          <UserList />
        </Route>
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
    
  );
};

export default App;
