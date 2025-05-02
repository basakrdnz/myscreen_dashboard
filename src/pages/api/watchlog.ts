import { NextApiRequest, NextApiResponse } from 'next'

// Dummy data for demonstration
const watchLogs = [
  {
    id: 1,
    movieId: 1,
    userId: 1,
    watchedAt: new Date().toISOString(),
    rating: 8.5
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.status(200).json(watchLogs)
  }

  if (req.method === 'POST') {
    try {
      const watchLog = req.body
      // TODO: Implement actual watchlog creation logic
      return res.status(201).json({ ...watchLog, id: watchLogs.length + 1 })
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  return res.status(405).json({ message: 'Method not allowed' })
} 