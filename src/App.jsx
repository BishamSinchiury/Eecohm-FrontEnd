import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Component/NavBar/NavBar'
import StudentEntryForm from './Component/Student/DataEntry/StudentDataEntry'
import OrgSetup from './Component/OrgSetUp/OrgSetup'
import LoginForm from './Component/Pages/Loginpage/Login'

function App() {
  return (
    <>
     <LoginForm />
     <OrgSetup />
    </>
  )
}

export default App
