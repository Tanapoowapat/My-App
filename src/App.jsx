import React from 'react'
import Navbar from './component/Navbar'
import Main from './component/Main'

const App = () => {
  return (
    <div class="bg-gray-300 overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  )
}

export default App
