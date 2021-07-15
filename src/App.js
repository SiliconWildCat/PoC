import React from 'react';
import { Route } from 'react-router-dom';
import Music from './components/music/useMusic';
function App() {
  return (
    <>
      <Route component={Music} path={'/'} exact />
    </>
  );
}

export default App;
