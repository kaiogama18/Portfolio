import { useState } from 'react'
import './App.css'

import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main id="center">
        <section>

          <div>
            <h1>Kaio Eduardo B. Gama</h1>
            <p>
              I’m a developer and game developer creating handcrafted video games.
            </p>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}


export default App
