import React, { Component } from 'react';
import './App.css';
import UserForm from './Components/UserForm';
import Footer from './Components/Footer'
import Header from './Components/Header';

class App extends Component {

  render() {
    return (
      <main className="main">
        {/* The header of the application */}
        <Header />

        {/* The main body of the form */}
        <UserForm />

        {/* The footer of the application */}
        <Footer />
      </main>
    );

  }
}

export default App;
