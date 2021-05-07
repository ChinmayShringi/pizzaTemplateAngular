import React from 'react';
import './home.css';
import Navbar from '../nav/nav'
function Home() {
  return (
    <div className="cont">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Pizza Temptation</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci, magni doloribus sequi recusandae assumenda et ullam ex inventore magnam, est sit mollitia placeat velit.</p>
            
  <button type="button" className="btn btn-warning">Order Today!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
