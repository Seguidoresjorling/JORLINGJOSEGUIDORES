"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import {
  Wallet,
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle,
  CreditCard,
  Bitcoin,
  RefreshCw,
  User,
  Settings,
} from "lucide-react"

export default function DashboardPage() {
  const [balance] = useState(47.32)
  const [orders] = useState([
    {
      id: "#ORD-001",
      service: "Instagram Seguidores",
      quantity: 1000,
      amount: 10.0,
      status: "completed",
      progress: 100,
      date: "2024-01-15 14:30",
      url: "https://instagram.com/mi-perfil",
    },
    {
      id: "#ORD-002",
      service: "YouTube Suscriptores",
      quantity: 500,
      amount: 5.0,
      status: "processing",
      progress: 65,
      date: "2024-01-15 13:15",
      url: "https://youtube.com/mi-canal",
    },
    {
      id: "#ORD-003",
      service: "TikTok Likes",
      quantity: 2000,
      amount: 6.0,
      status: "pending",
      progress: 0,
      date: "2024-01-15 12:45",
      url: "https://tiktok.com/@mi-usuario",
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
            <RefreshCw className="w-3 h-3 mr-1" />
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
            <h1 className="text-2xl font-bold text-white">Mi Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/5 rounded-lg px-3 py-2">
                <Wallet className="w-4 h-4 text-green-400" />
                <span className="text-white font-semibold">${balance.toFixed(2)}</span>
              </div>
              <Button variant="outline" className="border-white/20 text-white">
                <User className="w-4 h-4 mr-2" />
                Mi Perfil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">¡Bienvenido de vuelta!</h2>
          <p className="text-white/60">Gestiona tus pedidos y saldo desde aquí</p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Saldo Actual</CardTitle>
                <Wallet className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">${balance.toFixed(2)}</div>
                <p className="text-xs text-white/60">Disponible para usar</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Pedidos Totales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{orders.length}</div>
                <p className="text-xs text-white/60">Este mes</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">Completados</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {orders.filter((o) => o.status === "completed").length}
                </div>
                <p className="text-xs text-green-400">100% de éxito</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-white/80">En Proceso</CardTitle>
                <RefreshCw className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {orders.filter((o) => o.status === "processing").length}
                </div>
                <p className="text-xs text-blue-400">Entregando ahora</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
            <TabsTrigger
              value="orders"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Mis Pedidos
            </TabsTrigger>
            <TabsTrigger
              value="balance"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Cargar Saldo
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-white/60"
            >
              Mi Perfil
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Historial de Pedidos</CardTitle>
                <CardDescription className="text-white/60">Monitorea el estado de todos tus pedidos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-white/80">ID</TableHead>
                      <TableHead className="text-white/80">Servicio</TableHead>
                      <TableHead className="text-white/80">Cantidad</TableHead>
                      <TableHead className="text-white/80">Progreso</TableHead>
                      <TableHead className="text-white/80">Estado</TableHead>
                      <TableHead className="text-white/80">Monto</TableHead>
                      <TableHead className="text-white/80">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id} className="border-white/10">
                        <TableCell className="text-white font-medium">{order.id}</TableCell>
                        <TableCell className="text-white/80">{order.service}</TableCell>
                        <TableCell className="text-white/80">{order.quantity.toLocaleString()}</TableCell>
                        <TableCell className="text-white/80">
                          <div className="flex items-center space-x-2">
                            <Progress value={order.progress} className="w-16" />
                            <span className="text-xs">{order.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="text-white/80">${order.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Repetir
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    PayPal
                  </CardTitle>
                  <CardDescription className="text-white/60">Carga saldo usando PayPal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Monto a cargar</Label>
                    <Input
                      type="number"
                      placeholder="10.00"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Pagar con PayPal
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Bitcoin className="w-5 h-5 mr-2" />
                    Criptomonedas
                  </CardTitle>
                  <CardDescription className="text-white/60">Carga saldo con Bitcoin, USDT, etc.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Monto a cargar</Label>
                    <Input
                      type="number"
                      placeholder="10.00"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Bitcoin className="w-4 h-4 mr-2" />
                    Pagar con Crypto
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white">Historial de Transacciones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-white/60 py-8">
                  <Wallet className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No hay transacciones recientes</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Configuración de Perfil
                </CardTitle>
                <CardDescription className="text-white/60">Actualiza tu información personal</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Nombre</Label>
                    <Input
                      placeholder="Tu nombre"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Email</Label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Teléfono</Label>
                    <Input
                      placeholder="+1 234 567 8900"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <Label className="text-white">País</Label>
                    <Input
                      placeholder="Tu país"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Actualizar Perfil
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
