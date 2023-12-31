import { useState } from 'react'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Advantages from './Components/Advantages'
import Catalog from './Components/Catalog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero/>
    <Advantages />
    <Catalog />
    </>
  )
}

export default App
