import React from 'react';
import Header from './layout/Header';
import Dashboard from './layout/Dashboard';
import CardListContainer from './components/Card';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dashboard>
        <CardListContainer></CardListContainer>
      </Dashboard>
    </div>
  );
}

export default App;
