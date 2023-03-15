import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import ResponsiveAppBar from './components/Header/ResponsiveAppBar'
import Home from './components/Home'
import Card from './components/CardServices'
import AccountService from './components/AccountServices'
import Contact from './components/ContactPage'
import CheckingsTransaction from './components/CheckingsTransactions'
import SavingsTransactions from './components/SavingsTransactions'

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/card-services" element = {<Card/>} />
        <Route path="/account-services" element = {<AccountService/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/checkings-transactions" element = {<CheckingsTransaction/>}/>
        <Route path="/savings-transactions" element = {<SavingsTransactions/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
