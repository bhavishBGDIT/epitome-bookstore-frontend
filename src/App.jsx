import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import Greating from './pages/Greating'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<Greating />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
     </>
  )
}

export default App
