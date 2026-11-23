import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import BookStore from './pages/BookStore'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<BookStore />} />
        </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
