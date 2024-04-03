import { Route, Routes } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import OneBookPage from './pages/OneBookPage'
import AllBooksPage from './pages/AllBooksPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Hey</h1>} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path='/books' element={<AllBooksPage />} />
        <Route path='/books/:bookId' element={<OneBookPage />} />

        <Route path='*' element={<h1>404 Page not found</h1>} />
      </Routes>
    </>
  )
}

export default App
