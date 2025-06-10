import { type NextRequest, NextResponse } from "next/server"

// Datos de servicios (en producción vendrían de MySQL)
const servicesData = {
  instagram: {
    name: "Instagram",
    icon: "📸",
    color: "from-pink-500 to-purple-600",
    services: {
      followers: { name: "Seguidores", basePrice: 0.01, per: 100 },
      likes: { name: "Likes", basePrice: 0.03, per: 100 },
      comments: { name: "Comentarios", basePrice: 0.1, per: 100 },
      customComments: { name: "Comentarios Personalizados", basePrice: 0.5, per: 100 },
      reelsViews: { name: "Vistas de Reels", basePrice: 0.05, per: 1000 },
    },
  },
  youtube: {
    name: "YouTube",
    icon: "🎥",
    color: "from-red-500 to-red-600",
    services: {
      subscribers: { name: "Suscriptores", basePrice: 0.01, per: 100 },
      likes: { name: "Likes", basePrice: 0.03, per: 100 },
      comments: { name: "Comentarios", basePrice: 0.1, per: 100 },
      views: { name: "Visualizaciones", basePrice: 0.05, per: 1000 },
      watchTime: { name: "Horas de Visualización (500h)", basePrice: 15.0, per: 1, special: true },
    },
  },
  // ... otros servicios
}

export async function GET(request: NextRequest) {
  try {
    // En producción, consultar MySQL:
    // const platforms = await db.query('SELECT * FROM platforms WHERE is_active = 1')
    // const services = await db.query('SELECT * FROM services WHERE is_active = 1')

    return NextResponse.json({
      success: true,
      data: servicesData,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error al obtener servicios" }, { status: 500 })
  }
}
