// Configuración de base de datos específica para Hostinger
import mysql from "mysql2/promise"

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "tu_usuario_hostinger",
  password: process.env.DB_PASSWORD || "tu_password_hostinger",
  database: process.env.DB_NAME || "tu_base_datos_hostinger",
  port: Number.parseInt(process.env.DB_PORT || "3306"),
  // Configuraciones específicas para Hostinger
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  connectTimeout: 60000,
  acquireTimeout: 60000,
  timeout: 60000,
}

let connection: mysql.Connection | null = null

export async function getDbConnection() {
  try {
    if (!connection) {
      connection = await mysql.createConnection(dbConfig)
    }
    return connection
  } catch (error) {
    console.error("Error conectando a la base de datos:", error)
    throw error
  }
}

export async function executeQuery(query: string, params: any[] = []) {
  try {
    const conn = await getDbConnection()
    const [results] = await conn.execute(query, params)
    return results
  } catch (error) {
    console.error("Error ejecutando query:", error)
    throw error
  }
}
