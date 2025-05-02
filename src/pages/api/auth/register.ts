import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB, closeDB } from '@/lib/db'
import sql from 'mssql'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Tüm alanları doldurunuz' })
    }

    const pool = await connectDB()

    // Email kontrolü
    const emailCheck = await pool
      .request()
      .input('email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE Email = @email')

    if (emailCheck.recordset.length > 0) {
      await closeDB()
      return res.status(400).json({ message: 'Bu email adresi zaten kullanılıyor' })
    }

    // Kullanıcıyı veritabanına ekle
    const result = await pool
      .request()
      .input('name', sql.NVarChar, name)
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, password) // Gerçek uygulamada şifre hash'lenmelidir
      .query(`
        INSERT INTO Users (Name, Email, Password, CreatedAt)
        VALUES (@name, @email, @password, GETDATE())
        SELECT SCOPE_IDENTITY() as id
      `)

    await closeDB()

    return res.status(201).json({
      user: {
        id: result.recordset[0].id,
        name,
        email
      },
      message: 'Kayıt başarılı'
    })
  } catch (error) {
    console.error('Kayıt hatası:', error)
    return res.status(500).json({ message: 'Kayıt işlemi sırasında bir hata oluştu' })
  }
} 