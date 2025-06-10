"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react"
import { Users, ShoppingCart, DollarSign, Eye, CheckCircle, XCircle, Clock, TrendingUp } from "lucide-react"

export default function AdminPage() {
  const [stats] = useState({
    totalOrders: 1247,
    pendingOrders: 23,
    completedOrders: 1224,
    totalRevenue: 15847.32,
    activeUsers: 892,
    todayRevenue: 1247.89,
  })

  const [orders] = useState([
    {
      id: "#ORD-001",
      user: "usuario@email.com",
      service: "Instagram Seguidores",
      quantity: 1000,
      amount: 10.0,
      status: "pending",
      date: "2024-01-15 14:30",
    },
    {
      id: "#ORD-002",
      user: "cliente@email.com",
      service: "YouTube Suscriptores",
      quantity: 500,
      amount: 5.0,
      status: "completed",
      date: "2024-01-15 13:15",
    },
    {
      id: "#ORD-003",
      user: "user@email.com",
      service: "TikTok Likes",
      quantity: 2000,
      amount: 6.0,
      status: "processing",
      date: "2024-01-15 12:45",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
            <Clock className="w-3 h-3 mr-1" />
            Pendiente
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
            <TrendingUp className="w-3 h-3 mr-1" />
            Procesando
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-500/20 text-green-300">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completado
          </Badge>
        )
      case "failed":
        return (
          <Badge variant="secondary" className="bg-red-500/20 text-red-300">
            <XCircle className="w-3 h-3 mr-1" />
            Fallido
          </Badge>
        )
      default:
        return <Badge variant="secondary">Desconocido</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-500/20 text-green-300">Sistema Activo</Badge>
              <Button variant="outline" className="border-white/20 text-white">
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Pedidos Totales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stats.totalOrders.toLocaleString()}</div>
                <p className="text-xs text-green-400">+12% desde el mes pasado</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Ingresos Totales</CardTitle>
                <DollarSign className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">${stats.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-green-400">+8% desde el mes pasado</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Usuarios Activos</CardTitle>
                <Users className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stats.activeUsers.toLocaleString()}</div>
                <p className="text-xs text-green-400">+23% desde el mes pasado</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Ingresos Hoy</CardTitle>
                <TrendingUp className="h-4 w-4 text-pink-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">${stats.todayRevenue.toLocaleString()}</div>
                <p className="text-xs text-green-400">+15% vs ayer</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-white/5 border border-white/10">
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Pedidos
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Usuarios
            </TabsTrigger>
            <TabsTrigger
              value="services"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Servicios
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Analíticas
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Configuración
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Gestión de Pedidos</CardTitle>
                <CardDescription className="text-white/60">
                  Administra y monitorea todos los pedidos en tiempo real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-white/80">ID</TableHead>
                      <TableHead className="text-white/80">Usuario</TableHead>
                      <TableHead className="text-white/80">Servicio</TableHead>
                      <TableHead className="text-white/80">Cantidad</TableHead>
                      <TableHead className="text-white/80">Monto</TableHead>
                      <TableHead className="text-white/80">Estado</TableHead>
                      <TableHead className="text-white/80">Fecha</TableHead>
                      <TableHead className="text-white/80">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-white/10">
                        <TableCell className="text-white font-medium">{order.id}</TableCell>
                        <TableCell className="text-white/80">{order.user}</TableCell>
                        <TableCell className="text-white/80">{order.service}</TableCell>
                        <TableCell className="text-white/80">{order.quantity.toLocaleString()}</TableCell>
                        <TableCell className="text-white/80">${order.amount.toFixed(2)}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="text-white/80">{order.date}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white/20 text-white hover:bg-white/10"
                            >
                              <Eye className="w-3 h-3" />
                            </Button>
                            <Button size="sm" className="bg-green-500 hover:bg-green-600">
                              <CheckCircle className="w-3 h-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Gestión de Servicios</CardTitle>
                <CardDescription className="text-white/60">
                  Configura precios y disponibilidad de servicios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Plataforma</Label>
                    <Input className="bg-white/10 border-white/20 text-white" placeholder="Instagram" />
                  </div>
                  <div>
                    <Label className="text-white">Servicio</Label>
                    <Input className="bg-white/10 border-white/20 text-white" placeholder="Seguidores" />
                  </div>
                  <div>
                    <Label className="text-white">Precio Base</Label>
                    <Input
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="0.01"
                      type="number"
                      step="0.01"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Por Cantidad</Label>
                    <Input className="bg-white/10 border-white/20 text-white" placeholder="100" type="number" />
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Agregar Servicio
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Configuración del Sistema</CardTitle>
                <CardDescription className="text-white/60">
                  Configura APIs, métodos de pago y otros ajustes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">APIs de Proveedores</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">API Key Principal</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="Ingresa tu API key"
                        type="password"
                      />
                    </div>
                    <div>
                      <Label className="text-white">URL del Proveedor</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="https://api.proveedor.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Métodos de Pago</h3>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">PayPal Client ID</Label>
                      <Input
                        className="bg-white/10 border-white/20 text-white"
                        placeholder="PayPal Client ID"
                        type="password"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Wallet de Criptomonedas</Label>
                      <Input className="bg-white/10 border-white/20 text-white" placeholder="Dirección de wallet" />
                    </div>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Guardar Configuración
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
