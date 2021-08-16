import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
})