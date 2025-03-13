export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ message: '¡Hola desde la API de Next.js con pnpm!' });
    } else {
      res.status(405).json({ message: 'Método no permitido' });
    }
  }
  