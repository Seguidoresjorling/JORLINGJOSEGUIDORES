"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ArrowLeft, Calculator, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState(0)
  const [url, setUrl] = useState("")
  const [customComments, setCustomComments] = useState("")

  const platforms = {
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
    tiktok: {
      name: "TikTok",
      icon: "🎵",
      color: "from-black to-gray-800",
      services: {
        followers: { name: "Seguidores", basePrice: 0.01, per: 100 },
        likes: { name: "Likes", basePrice: 0.03, per: 100 },
        comments: { name: "Comentarios", basePrice: 0.1, per: 100 },
        views: { name: "Vistas", basePrice: 0.05, per: 1000 },
      },
    },
    facebook: {
      name: "Facebook",
      icon: "👥",
      color: "from-blue-500 to-blue-600",
      services: {
        followers: { name: "Seguidores de Página", basePrice: 0.01, per: 100 },
        reactions: { name: "Reacciones", basePrice: 0.03, per: 100 },
        comments: { name: "Comentarios", basePrice: 0.1, per: 100 },
        videoViews: { name: "Vistas de Videos", basePrice: 0.05, per: 1000 },
      },
    },
    telegram: {
      name: "Telegram",
      icon: "✈️",
      color: "from-blue-400 to-blue-500",
      services: {
        channelMembers: { name: "Miembros a Canales", basePrice: 0.2, per: 100 },
        groupMembers: { name: "Miembros a Grupos", basePrice: 0.2, per: 100 },
      },
    },
    whatsapp: {
      name: "WhatsApp",
      icon: "💬",
      color: "from-green-500 to-green-600",
      services: {
        groupMembers: { name: "Miembros a Grupos", basePrice: 0.2, per: 100 },
      },
    },
    twitter: {
      name: "X (Twitter)",
      icon: "🐦",
      color: "from-gray-800 to-black",
      services: {
        followers: { name: "Seguidores", basePrice: 0.01, per: 100 },
        likes: { name: "Likes", basePrice: 0.03, per: 100 },
        retweets: { name: "Retweets", basePrice: 0.05, per: 100 },
        views: { name: "Vistas", basePrice: 0.05, per: 1000 },
      },
    },
  }

  const calculatePrice = (service: any, qty: number) => {
    if (!service || !qty) return 0

    if (service.special) {
      return service.basePrice * qty
    }

    const units = Math.ceil(qty / service.per)
    return service.basePrice * units
  }

  const handleQuantityChange = (value: string) => {
    setQuantity(value)
    const qty = Number.parseInt(value) || 0

    if (selectedService) {
      const [platform, serviceKey] = selectedService.split(".")
      const service = platforms[platform as keyof typeof platforms]?.services[serviceKey as keyof any]
      if (service) {
        setPrice(calculatePrice(service, qty))
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al Inicio</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Servicios</h1>
            <div className="w-24" /> {/* Spacer */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Elige tu Plataforma y Servicio</h2>
          <p className="text-white/60 text-lg">Precios competitivos y entrega automática garantizada</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Selection */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="instagram" className="w-full">
              <TabsList className="grid grid-cols-4 lg:grid-cols-7 mb-8 bg-white/5 border border-white/10">
                {Object.entries(platforms).map(([key, platform]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
                  >
                    <span className="hidden sm:inline">{platform.name}</span>
                    <span className="sm:hidden text-lg">{platform.icon}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(platforms).map(([platformKey, platform]) => (
                <TabsContent key={platformKey} value={platformKey}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(platform.services).map(([serviceKey, service]) => (
                      <motion.div
                        key={serviceKey}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Card
                          className={`bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                            selectedService === `${platformKey}.${serviceKey}` ? "ring-2 ring-purple-500" : ""
                          }`}
                          onClick={() => setSelectedService(`${platformKey}.${serviceKey}`)}
                        >
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-white text-lg">{service.name}</CardTitle>
                              <Badge className="bg-purple-500/20 text-purple-300">
                                {service.special ? `$${service.basePrice}` : `$${service.basePrice}/${service.per}`}
                              </Badge>
                            </div>
                            <CardDescription className="text-white/60">
                              {service.special
                                ? "Precio fijo por unidad"
                                : `Precio por cada ${service.per} ${service.name.toLowerCase()}`}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm sticky top-8">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculadora de Precio
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">URL de la publicación/perfil</Label>
                  <Input
                    placeholder="https://instagram.com/tu-perfil"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <Label className="text-white">Cantidad</Label>
                  <Input
                    type="number"
                    placeholder="1000"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>

                {selectedService?.includes("customComments") && (
                  <div>
                    <Label className="text-white">Comentarios Personalizados</Label>
                    <Textarea
                      placeholder="Escribe los comentarios que deseas, uno por línea"
                      value={customComments}
                      onChange={(e) => setCustomComments(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      rows={4}
                    />
                  </div>
                )}

                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white">Total:</span>
                    <span className="text-2xl font-bold text-purple-400">${price.toFixed(2)}</span>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    disabled={!selectedService || !quantity || !url}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </div>

                <div className="text-xs text-white/60 space-y-1">
                  <p>✅ Entrega automática 24/7</p>
                  <p>✅ Garantía de reposición</p>
                  <p>✅ Soporte técnico incluido</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
