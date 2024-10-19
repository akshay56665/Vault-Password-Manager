import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Key, Lock, RefreshCw } from "lucide-react"

function HeroSection() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Secure Your Digital Life
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Manage all your passwords in one secure place. Stay protected with our easy-to-use password manager at zero cost.
              </p>
            </div>
            <div className="space-x-4">
              <Link to={'/signup'}>
                <Button  className="text-xl p-6 hover:scale-105 transition-all duration-300">Join Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 text-center">
              <Key className="h-10 w-10" />
              <h2 className="text-xl font-bold">Secure Storage</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your passwords are encrypted and stored securely, accessible only by you.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <Lock className="h-10 w-10" />
              <h2 className="text-xl font-bold">Easy Access</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access your passwords across all your devices with our synchronized cloud storage.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <RefreshCw className="h-10 w-10" />
              <h2 className="text-xl font-bold">Zero cost</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Store your password at no cost and have no limits for storage.
              </p>
            </div> 
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start Securing Your Passwords Today</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join thousands of users who trust SecurePass to manage their digital lives.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link to={'/signup'}>
                  <Button type="submit" className="hover:scale-105 transition-all duration-300">Sign Up</Button>
              </Link>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By signing up, you agree to our{" "}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HeroSection
