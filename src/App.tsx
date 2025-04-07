import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'

import './App.css'
import CounterPage from './pages/CounterPage'
import CountryPage from './pages/CountryPage'
import CountryDetailPage from './pages/CountryDetailPage'
import Counter from "./pages/Counter"
import CountriesPage from './pages/CountriesPage'
import HomePage from './pages/HomePage'





function App() {






  return (
    <BrowserRouter>
      <nav style={{marginBottom:'20px'}}>
        <Link to="/">Counter</Link> | <Link to="/country">CountryInfo</Link>| <Link to="/counter2">Counter2</Link>| <Link to="/countries">Countries</Link>| <Link to="/homepage">Homepage</Link>
      </nav>

      <Routes>
        <Route path='/' element={<CounterPage />} />
        <Route path='/country' element={<CountryPage />} />
        <Route path='/country-detail' element={<CountryDetailPage />} />
        <Route path='/count2' element={<Counter />} />
        <Route path='/countries' element={<CountriesPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
