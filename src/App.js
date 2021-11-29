import React from 'react';
import { Route } from 'react-router-dom';
import CreateHouse from './components/CreateHouse/CreateHouse';
import HouseDetail from './components/HouseDetail/HouseDetail';
import Houses from './components/Houses/Houses';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Houses} />
      <Route exact path="/houses/:houseId" component={HouseDetail} />
      <Route exact path="/house/create" component={CreateHouse} />
    </div>
  );
};

export default App;
