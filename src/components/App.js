import React from 'react';
import '../styles/style.css';
import SearchBar from './SearchBar.js';

export default function App() {
  const exercises = [
    { name: 'Polynomial division', id: 0 },
    { name: 'Finding the roots of a function', id: 1 },
    { name: 'Horner-Scheme', id: 2 },
  ];

  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ height: '30vh' }}></div>
        <div className="row" style={{ height: '20vh' }}>
          <div className="col-sm-3"></div>
          <div className="col-sm-6" style={{ height: '100%' }}>
            <div id="title-container" style={{ height: '100%' }}>
              <img
                id="site-icon"
                className="float-end"
                src="https://i.ibb.co/vxKxN7L/site-icon.png"
              />
              <h1 id="title">Math Helper</h1>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row" style={{ height: '5vh' }}></div>
        <div className="row" style={{ height: '8vh' }}>
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <SearchBar list={exercises} />
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
}
