import { useState } from 'react'
import './App.css'
import Data from './Data'

function App() {

  
  return (
    <>
      <div className='heading-container'>
        <h1 className='heading'>The Fruit Shop</h1>
      </div>
      <div className='navbar-container'>
        <nav className='navbar'>
          <a className='nav-button' href='home'>Home</a>
          <a className='nav-button' href='products'>Products</a>
          <a className='nav-button' href='cart'>Cart</a>
        </nav>
      </div>
      <div className='card-container'>
        {
        Data.map(({id, name, image, price}) => {
          return (
          <div key={id} className='box'>
            <div className='card'>
              <div className='card-image'>
                <img src={image} alt="" />
              </div>
              <div className='card-content'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <button className='card-button'>Add to Cart</button>
              </div>
            </div>
          </div>)
        })
        }

      </div>
    </>
  )
}

export default App
