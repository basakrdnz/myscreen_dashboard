import { NextApiRequest, NextApiResponse } from 'next'

// Dummy data for demonstration
const reviews = [
  {
    id: 1,
    movieId: 1,
    userId: 1,
    content: 'Harika bir film!',
    rating: 9,
    createdAt: new Date().toISOString()
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.status(200).json(reviews)
  }

  if (req.method === 'POST') {
    try {
      const review = req.body
      // TODO: Implement actual review creation logic
      return res.status(201).json({ ...review, id: reviews.length + 1 })
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  return res.status(405).json({ message: 'Method not allowed' })
} 