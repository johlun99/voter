import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'reset-css';
import NavbarScroller from './components/NavbarScroller';

function App() {
  const navigation = {
    brand: { name: "Voter", to: "/" },
    links: [
      { name: "About Me", to: "/about" },
      { name: "Blog", to: "/blog" },
      { name: "Developement", to: "/dev" },
      { name: "Graphic Design", to: "/design" },
      { name: "Contact", to: "/contact" },
    ]
  }
  const { brand, links } = navigation;

  return (
    <div className="App">
      <NavbarScroller brand={brand} links={links} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
