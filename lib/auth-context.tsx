'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export interface User {
  id: number
  name: string
  email: string
  phone: string
  address: string
  city: string
  postalCode: string
}

export interface Order {
  id: string
  date: string
  total: number
  status: 'Procesare' | 'Livrat' | 'În curs'
  items: Array<{
    id: number
    name: string
    quantity: number
    price: number
    image: string
  }>
  shippingMethod: string
  paymentMethod: string
}

interface AuthContextType {
  user: User | null
  orders: Order[]
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (data: Partial<User>) => void
  addOrder: (order: Order) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('bogfit_user')
    const savedOrders = localStorage.getItem('bogfit_orders')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders))
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate login - in production this would call an API
    const mockUser: User = {
      id: 1,
      name: 'Utilizator Demo',
      email: email,
      phone: '+40 712 345 678',
      address: 'Strada Exemplu, Nr. 10',
      city: 'București',
      postalCode: '010101',
    }
    setUser(mockUser)
    localStorage.setItem('bogfit_user', JSON.stringify(mockUser))
    return true
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate registration - in production this would call an API
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      phone: '',
      address: '',
      city: '',
      postalCode: '',
    }
    setUser(newUser)
    localStorage.setItem('bogfit_user', JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    setOrders([])
    localStorage.removeItem('bogfit_user')
    localStorage.removeItem('bogfit_orders')
  }

  const updateProfile = (data: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...data }
      setUser(updatedUser)
      localStorage.setItem('bogfit_user', JSON.stringify(updatedUser))
    }
  }

  const addOrder = (order: Order) => {
    const updatedOrders = [order, ...orders]
    setOrders(updatedOrders)
    localStorage.setItem('bogfit_orders', JSON.stringify(updatedOrders))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        orders,
        login,
        register,
        logout,
        updateProfile,
        addOrder,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
