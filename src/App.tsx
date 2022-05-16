import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Query from './Query/Query';
import DocDisplay from './DocDisplay/DocDisplay';
import {useSelector} from 'react-redux';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/search' element={<Query/>} />
        <Route path='/doc' element={<DocDisplay/>} />
      </Routes>
    </Router>
  );
}

export default App;