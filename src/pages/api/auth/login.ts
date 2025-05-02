import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    // TODO: Implement actual authentication logic
    // This is just a placeholder
    if (email && password) {
      return res.status(200).json({
        user: {
          id: 1,
          email,
          name: 'Test User'
        },
        token: 'dummy-token'
      })
    }

    return res.status(401).json({ message: 'Invalid credentials' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
} 