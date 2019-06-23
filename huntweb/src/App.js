import React from 'react';
import Routes from './routes';
import Main from './pages/main/index';
import Header from './components/Header/index';
import './styles.css';

const App = () => (
  <div className="App">
    <Header></Header>
    <Routes></Routes>
  </div>
);

export default App;
