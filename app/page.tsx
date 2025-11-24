import prisma from '@/lib/prisma'
import { addGame } from './actions'

export default async function Home() {
  const Games = await prisma.game.findMany()

  return (
    <main style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Daftar Game (SQLite Prisma)</h1>
      
      <div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h3>Tambah Game Baru</h3>
        <form action={addGame} style={{ display: 'flex', gap: '10px', flexDirection: 'column', maxWidth: '300px' }}>
          <input type="text" name="game" placeholder="Nama Game" required style={{ padding: '8px' }} />
          <input type="text" name="developer" placeholder="Developer" required style={{ padding: '8px' }} />
          <input type="number" name="releaseYear" placeholder="Tahun Rilis" required style={{ padding: '8px' }} />
          <button type="submit" style={{ padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>
            Simpan Data
          </button>
        </form>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Nama Game</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Developer</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Tahun Rilis</th>
          </tr>
        </thead>
        <tbody>
          {Games.map((Game: any) => (
            <tr key={Game.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{Game.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{Game.game}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{Game.developer}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{Game.releaseYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}