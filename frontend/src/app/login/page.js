"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/"
    })
  }

  return (
    <div className="p-10 max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <input
        className="border p-2 w-full"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>

      <div className="text-center">or</div>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full px-4 py-2 bg-red-600 text-white rounded"
      >
        Continue with Google
      </button>
    </div>
  )
}
