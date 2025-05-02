import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, password } = req.body

    // TODO: Implement actual registration logic
    // This is just a placeholder
    if (name && email && password) {
      return res.status(201).json({
        user: {
          id: 1,
          name,
          email
        },
        token: 'dummy-token'
      })
    }

    return res.status(400).json({ message: 'Missing required fields' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
} 