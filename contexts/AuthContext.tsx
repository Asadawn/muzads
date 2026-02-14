"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { loginUser, registerUser, getUserByEmail, APIError, LoginRequest, RegisterRequest } from '@/lib/api'
import { useToast } from '@/hooks/use-toast'

interface User {
  id: number
  email: string
  is_verified: boolean
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginRequest) => Promise<void>
  register: (userData: RegisterRequest) => Promise<void>
  logout: () => void
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_TOKEN_KEY = 'muzads_auth_token'
const USER_DATA_KEY = 'muzads_user_data'

// Public routes that don't require authentication
const PUBLIC_ROUTES = ['/', '/login', '/register', '/blog', '/faq', '/about']

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  // Initialize auth state from localStorage
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem(AUTH_TOKEN_KEY)
        const userData = localStorage.getItem(USER_DATA_KEY)

        if (token && userData) {
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)
          
          // Optionally refresh user data from API
          try {
            const freshUserData = await getUserByEmail(parsedUser.email)
            const updatedUser = {
              id: freshUserData.id,
              email: freshUserData.email,
              is_verified: freshUserData.is_verified
            }
            setUser(updatedUser)
            localStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedUser))
          } catch (error) {
            // If refresh fails, keep using cached data
            console.error('Failed to refresh user data:', error)
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        // Clear invalid data
        localStorage.removeItem(AUTH_TOKEN_KEY)
        localStorage.removeItem(USER_DATA_KEY)
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  // Protect routes - redirect unauthenticated users
  useEffect(() => {
    if (!isLoading) {
      const isPublicRoute = PUBLIC_ROUTES.some(route => 
        pathname === route || pathname.startsWith('/blog/') || pathname.startsWith('/use-cases/')
      )

      if (!user && !isPublicRoute) {
        router.push('/login')
      }
    }
  }, [user, isLoading, pathname, router])

  const login = async (credentials: LoginRequest) => {
    try {
      const response = await loginUser(credentials)

      if (response.success) {
        // Generate a session token (in production, this should come from the API)
        const sessionToken = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`
        
        // Fetch user data
        const userData = await getUserByEmail(credentials.email)
        const userObj: User = {
          id: userData.id,
          email: userData.email,
          is_verified: userData.is_verified
        }

        // Store auth data
        localStorage.setItem(AUTH_TOKEN_KEY, sessionToken)
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userObj))
        
        setUser(userObj)
      } else {
        throw new APIError(response.message || 'Login failed')
      }
    } catch (error) {
      throw error
    }
  }

  const register = async (userData: RegisterRequest) => {
    try {
      const registerResponse = await registerUser({
        ...userData,
        is_verified: false
      })

      if (registerResponse.id) {
        // Auto-login after registration
        await login({
          email: userData.email,
          password: userData.password
        })
      }
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    // Clear auth data
    localStorage.removeItem(AUTH_TOKEN_KEY)
    localStorage.removeItem(USER_DATA_KEY)
    setUser(null)
    
    // Show toast
    toast({
      title: "Signed out",
      description: "You have been successfully logged out.",
    })

    // Redirect to login
    router.push('/login')
  }

  const refreshUser = async () => {
    if (user) {
      try {
        const freshUserData = await getUserByEmail(user.email)
        const updatedUser: User = {
          id: freshUserData.id,
          email: freshUserData.email,
          is_verified: freshUserData.is_verified
        }
        setUser(updatedUser)
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedUser))
      } catch (error) {
        console.error('Failed to refresh user:', error)
      }
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    refreshUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
