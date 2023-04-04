import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import ResponsiveAppBar from './components/Header/ResponsiveAppBar'
import Home from './components/Home'
import Card from './components/CardServices'
import AccountService from './components/AccountServices'
import Contact from './components/ContactPage'
import Transactions from './components/Transactions'
import AppointmentDisplay from './components/AppointmentDisplay'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'



function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/card-services" element = {<Card/>} />
        <Route path="/account-services" element = {<AccountService/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/all-transactions" element = {<Transactions/>}/>
        <Route path="/schedule-appointment" element={<AppointmentDisplay/>}/>
      </Routes>
      </LocalizationProvider>
    </BrowserRouter>
  )
}

export default App
