import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Credentials({
      name: "credentials",
      credentials: { email: {}, password: {} },
      async authorize({ email, password }) {
        const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        })
        const user = await res.json()
        if (!res.ok) return null
        return user
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login"
  }
}
