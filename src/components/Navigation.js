import React from 'react';
import '../styles/Nav.css';
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#9a74db',
    minHeight: 50,
    // lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    // padding: '0 20px',
  },
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div >
        <header class="jumbotron">
  <h1 class="display-3">Dominc Teran's Portfolio</h1>
  <nav class = "nav">
    <ul>
        <li> <a href="#about">about me</a></li>
        <li> <a href="#myWork">Previous Work</a></li>
        <li> <a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>   
    </div>
  );
  
  
      
}

export default Navbar;