import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, PieChart, Settings, DollarSign, BarChart } from 'lucide-react'

export default function Dashboard({ user = {} }) {
  const menuItems = [
    { name: 'Notifications', icon: Bell },
    { name: 'Budget', icon: PieChart },
    { name: 'Settings', icon: Settings },
    { name: 'Expenses', icon: DollarSign },
    { name: 'Reports', icon: BarChart },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Hello, {user?.name || 'Guest'}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">Here is your balance</p>
          <p className="text-3xl font-bold text-green-600">
            ${(user?.balance || 0).toLocaleString()}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {menuItems.map((item) => (
          <Button
            key={item.name}
            variant="outline"
            className="h-24 flex flex-col items-center justify-center"
          >
            <item.icon className="h-6 w-6 mb-2" />
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  )
}