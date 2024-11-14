import React from 'react';
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import './App.css';
import notes from "./notes";

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map(e => (
        <Note 
          key={e.key}
          title = {e.title}
          content = {e.content}
          />
          ))};
      <Footer></Footer>
    </div>
  );
}

export default App;
