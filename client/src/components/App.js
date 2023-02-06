import React, { useState, useEffect } from 'react';
import Header from './Header';
import Container from './Container';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <img
        src="https://happywall-img-gallery.imgix.net/8224/watercolor_world_map_pastel_display.jpg"
        class="Background"
      />
      <Header className="MainHeader" />
      <Container className="MainContainer" />
    </div>
  );
}

export default App;
