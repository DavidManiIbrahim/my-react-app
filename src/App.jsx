// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.js'

function App() {
  

  return (
    <div>
      <form className='my-form' action="">
      <h1>Hello World</h1>
    <input type="text" className='text-input' placeholder='username'/> <br />
    <input type="password" className='password-input' placeholder='password'/> <br />
    {/* <input type="submit" placeholder='password'/> */}
    <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
