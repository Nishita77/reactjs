import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
  

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<Layout />}>
      <Route path= ''element={<Home/>} />
      <Route path= '/About' element={<About/>} />
      <Route path= '/Contact' element={<Contact/>} />
      <Route path= '/Github' element={<Github/>} />
      


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
