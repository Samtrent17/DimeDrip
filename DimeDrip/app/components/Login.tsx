import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Login({ onLogin, onNavigate }) {
  const [credentials, setCredentials] = useState({ userName: '', password: '' })

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically verify the credentials with your backend
    // For this example, we'll just simulate a successful login
    onLogin({ name: 'Mukasa', balance: 20000 })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Log In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="userName"
            placeholder="User Name"
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">Log In</Button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Button variant="link" onClick={() => onNavigate('register')}>
            Register
          </Button>
        </p>
      </CardContent>
    </Card>
  )
}