import { NextApiRequest, NextApiResponse } from 'next'

// Dummy data for demonstration
const movies = [
  {
    id: 1,
    title: 'Film 1',
    description: 'Film açıklaması 1',
    year: 2024,
    director: 'Yönetmen 1',
    genre: 'Aksiyon',
    rating: 8.5
  },
  {
    id: 2,
    title: 'Film 2',
    description: 'Film açıklaması 2',
    year: 2024,
    director: 'Yönetmen 2',
    genre: 'Drama',
    rating: 7.8
  }
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.status(200).json(movies)
  }

  if (req.method === 'POST') {
    try {
      const movie = req.body
      // TODO: Implement actual movie creation logic
      return res.status(201).json({ ...movie, id: movies.length + 1 })
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' })
    }
  }

  return res.status(405).json({ message: 'Method not allowed' })
} 