"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignup = async () => {
    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    })
  }

  return (
    <div className="p-10 max-w-md mx-auto space-y-4">
      <h1 className="text-3xl font-bold mb-6">Signup</h1>

      <input
        className="border p-2 w-full"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

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
        onClick={handleSignup}
        className="w-full px-4 py-2 bg-green-600 text-white rounded"
      >
        Create Account
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
