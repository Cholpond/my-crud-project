import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Users from './components/Users';
import Footer from './components/Footer';
import UsersTable from './components/UsersTable';
import Search from './components/Search';

function App() {
  return(
    <div className="App">
      <Header/>
      <Users/>
      <Footer/>
      <UsersTable/>
    </div>
  );
}

export default App;
