"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Star, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [stats, setStats] = useState({
    followers: 2847392,
    views: 15847293,
    orders: 48392,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        followers: prev.followers + Math.floor(Math.random() * 10),
        views: prev.views + Math.floor(Math.random() * 50),
        orders: prev.orders + Math.floor(Math.random() * 3),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      platform: "Instagram",
      icon: "📸",
      color: "from-pink-500 to-purple-600",
      services: ["Seguidores", "Likes", "Comentarios", "Vistas de Reels"],
    },
    {
      platform: "YouTube",
      icon: "🎥",
      color: "from-red-500 to-red-600",
      services: ["Suscriptores", "Likes", "Comentarios", "Visualizaciones", "Horas de Visualización"],
    },
    {
      platform: "TikTok",
      icon: "🎵",
      color: "from-black to-gray-800",
      services: ["Seguidores", "Likes", "Comentarios", "Vistas"],
    },
    {
      platform: "Facebook",
      icon: "👥",
      color: "from-blue-500 to-blue-600",
      services: ["Seguidores", "Reacciones", "Comentarios", "Vistas de Videos"],
    },
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Entrega Automática",
      description: "Sistema 100% automatizado para entregas rápidas",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguro y Confiable",
      description: "Métodos seguros que no comprometen tu cuenta",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Crecimiento Real",
      description: "Seguidores y engagement de calidad premium",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Jroling Seguidores</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                Precios
              </Link>
              <Link href="/login" className="text-white/80 hover:text-white transition-colors">
                Iniciar Sesión
              </Link>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Registrarse
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🚀 Plataforma #1 en Crecimiento Social
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Impulsa tus redes sociales
              </span>
              <br />
              al siguiente nivel
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Obtén seguidores, likes, comentarios y vistas reales para Instagram, YouTube, TikTok, Facebook y más.
              Sistema 100% automatizado y seguro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
              >
                Comprar Seguidores
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                Ver Precios
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{stats.followers.toLocaleString()}+</div>
                <div className="text-white/60">Seguidores Entregados</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-pink-400 mb-2">{stats.views.toLocaleString()}+</div>
                <div className="text-white/60">Vistas Generadas</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.orders.toLocaleString()}+</div>
                <div className="text-white/60">Pedidos Completados</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Servicios para Todas las Plataformas</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ofrecemos servicios de crecimiento para las principales redes sociales con precios competitivos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4`}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-white">{service.platform}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.services.map((item, i) => (
                        <li key={i} className="text-white/60 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para hacer crecer tu presencia online?</h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Únete a miles de creadores que ya confían en nosotros para impulsar sus redes sociales
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Jroling Seguidores</span>
              </div>
              <p className="text-white/60">La plataforma líder en crecimiento de redes sociales</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-white/60">
                <li>Instagram</li>
                <li>YouTube</li>
                <li>TikTok</li>
                <li>Facebook</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-white/60">
                <li>Centro de Ayuda</li>
                <li>Contacto</li>
                <li>FAQ</li>
                <li>Estado del Servicio</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/60">
                <li>Términos de Servicio</li>
                <li>Política de Privacidad</li>
                <li>Política de Reembolso</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Jroling Seguidores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
