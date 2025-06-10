/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración específica para Hostinger
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuración para compatibilidad con hosting compartido
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  basePath: "",
  // Optimizaciones para Hostinger
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Configuración de headers para Hostinger
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
