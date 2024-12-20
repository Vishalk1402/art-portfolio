import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import Gallery from './components/gallery';
import ContactPage from './components/Contact';
import Shop from './components/Shop';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
    <main>
      <Homepage />
      <Gallery />
      <Shop/>
      <Blog/>
      <ContactPage/>

</main>
    </div>
  );
}

export default App;
