import About from '../components/About'
import Articles from '../components/Articles'
import Categories from '../components/Categories'
import Profile from '../components/Profile'
import Root from '../components/Root'
import SignUp from '../components/SignUp'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route path='about' element={<About />} />
    <Route path='sign-up' element={<SignUp />} />
    <Route path='articles' element={<Articles />} />
    <Route path='categories' element={<Categories />} />
    <Route path='profile' element={<Profile />} />

  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
