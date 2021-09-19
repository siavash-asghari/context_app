import './App.css';
import React from 'react';
import Navbar from './componenets/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './componenets/BookList';
import BookForm from './componenets/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
