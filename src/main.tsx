import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import BinarySearch from './pages/BinarySearch.tsx'
import LinkedList from './pages/LinkedList.tsx'
import Stack from './pages/Stack.tsx'
import TwoPointers from './pages/TwoPointers.tsx'
import Navbar from './components/Navbar.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/binary-search',
    element: <BinarySearch/>
  },
  {
    path:'/linked-list',
    element: <LinkedList/>
  },
  {
    path:'/stack',
    element: <Stack/>
  },
  {
    path:'/two-pointers',
    element: <TwoPointers/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
