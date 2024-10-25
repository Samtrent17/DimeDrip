'use client'

import { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('login')
  const [user, setUser] = useState(null)

  const navigateTo = (page) => setCurrentPage(page)

  const handleLogin = (userData) => {
    setUser(userData)
    setCurrentPage('dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">DIME DRIP</h1>
        <p className="text-sm">CATCH YOUR DIME</p>
      </header>

      <main className="container mx-auto mt-8 p-4">
        {currentPage === 'register' && <Register onNavigate={navigateTo} />}
        {currentPage === 'login' && <Login onLogin={handleLogin} onNavigate={navigateTo} />}
        {currentPage === 'dashboard' && <Dashboard user={user} />}
      </main>

      <footer className="bg-gray-200 text-center p-4 mt-8">
        <p>Copyright © 2024 Dime Drip All Rights Reserved</p>
      </footer>
    </div>
  )
}