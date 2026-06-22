/**
 * Backend API configuration.
 *
 * Resolution order:
 *   1. VITE_API_URL env var (set in `.env` or Cloudflare build vars) — wins.
 *   2. In production builds → the deployed Worker.
 *   3. In local dev → the Wrangler dev server.
 */
const PROD_API_URL = 'https://cloudtech-backend.cloudtechasik.workers.dev'
const DEV_API_URL = 'http://localhost:8787'

export const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, '') ||
  (import.meta.env.PROD ? PROD_API_URL : DEV_API_URL)

export const ENDPOINTS = {
  createUser: `${API_URL}/api/users`,
  health: `${API_URL}/api/health`,
}
