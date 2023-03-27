import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {

  let imageURL = 'https://t3.ftcdn.net/jpg/00/19/89/58/360_F_19895879_uZ0tHguWowgKxb7jgUzuJk7IdXJCYZkI.jpg';
    const [count, setCount] = useState(0)
    const [images, setImages] = useState([])

  return (
    <div className="App">
        <div className='nav-bar'>
          <img src={logo} className="App-logo"></img>
          <a>menu</a>
        </div>
      
      <h3>{count}</h3>
            <button onClick={() => {
                if (count === 5) {
                    return;
                };
                images.push(imageURL);
                setImages(images);
                setCount(count + 1);
                }}>Add 1</button>

            <button onClick={() => {
                 if (count === 0) {
                    return;
                };
                images.shift();
                setImages(images);
                setCount(count - 1);
            }}>Remove 1</button>

            <br/>

            {images.map(e => 
            <img src={imageURL} height='70px' width= '100px'></img>
            )}

    </div>
  );
}

export default App;
