import React from 'react';
import Portfolio from './components/Project';
import About from './components/AboutMe';
import Navbar from './components/Navigation';

function App() {
    return(
        <div>
            <Navbar />
            <Portfolio />
            <About />
        </div>
    );
    
}

export default App;