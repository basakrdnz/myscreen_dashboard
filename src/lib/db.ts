import sql from 'mssql'

const config = {
  server: 'localhost',
  database: 'MyScreenDB',
  options: {
    encrypt: false,
    trustServerCertificate: true
  },
  authentication: {
    type: 'ntlm',
    options: {
      domain: 'DESKTOP-42I8OF5', // Bilgisayar adın (senin ekranında üstte yazıyor)
      userName: 'basak',         // Windows kullanıcı adın
      password: ''               // Şifre gerekmez, boş bırakabilirsin
    },
    driver: 'msnodesqlv8'
  }
}

let pool: sql.ConnectionPool | null = null

export async function connectDB() {
  try {
    if (!pool) {
      pool = await sql.connect(config)
      console.log('Veritabanı bağlantısı başarılı')
    }
    return pool
  } catch (err) {
    console.error('Veritabanı bağlantı hatası:', err)
    throw err
  }
}

export async function closeDB() {
  try {
    if (pool) {
      await pool.close()
      pool = null
      console.log('Veritabanı bağlantısı kapatıldı')
    }
  } catch (err) {
    console.error('Veritabanı kapatma hatası:', err)
    throw err
  }
} 