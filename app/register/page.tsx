"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  const handleGoogleSignUp = () => {
    // This is where the actual Google Auth logic would go
    console.log("Connect with Google")
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[440px] h-[440px] bg-red-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-[-120px] right-1/5 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-gradient-radial from-purple-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white font-bold">
                M
              </span>
              <span className="text-2xl font-bold tracking-tight text-foreground">Muzads</span>
            </Link>

            <div>
              <div className="inline-flex p-[2px] rounded-full bg-gradient-brand mb-5">
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background">
                  <span className="text-sm text-muted-foreground">Get started</span>
                </div> */}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3 text-balance">
                Create your account and launch more content.
              </h1>
              <p className="text-muted-foreground text-lg max-w-md">
                Generate ads, emails, and social posts with a single brand brain.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="px-3 py-1.5 rounded-full bg-card border border-border">14‑day free trial</div>
              <div className="px-3 py-1.5 rounded-full bg-card border border-border">No credit card</div>
            </div>
          </div>

          <div className="bg-card/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-red-900/20">
            <div className="text-center space-y-2 mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Create your account</h2>
              <p className="text-muted-foreground text-sm">
                Start creating amazing content in minutes
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full h-11 rounded-full border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={handleGoogleSignUp}
              >
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                </svg>
                Sign up with Google
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground text-sm">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="bg-background border-border focus:border-primary h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground text-sm">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    className="bg-background border-border focus:border-primary h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground text-sm">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="bg-background border-border focus:border-primary h-11 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full btn-gradient rounded-full text-base font-medium h-11 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Creating account...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Create account
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
