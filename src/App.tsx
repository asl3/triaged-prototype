import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Query from './Query/Query';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/search' element={<Query/>} />
      </Routes>
    </Router>
  );
}

export default App;