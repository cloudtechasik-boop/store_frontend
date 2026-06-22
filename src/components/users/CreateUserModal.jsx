import { useEffect, useState } from 'react'
import { X, UserPlus, Loader2, CheckCircle2 } from 'lucide-react'
import { ENDPOINTS } from '../../config/api'

const EMPTY = { username: '', email: '', password: '', age: '' }

export default function CreateUserModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  // Reset state whenever the modal is (re)opened, and lock body scroll.
  useEffect(() => {
    if (open) {
      setForm(EMPTY)
      setErrors({})
      setStatus('idle')
      setMessage('')
    }
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    setErrors({})

    try {
      const res = await fetch(ENDPOINTS.createUser, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
          age: Number(form.age),
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        if (data.fields) setErrors(data.fields)
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
      setMessage(data.message || 'User created successfully.')
    } catch {
      setStatus('error')
      setMessage(
        'Could not reach the server. Is the backend running on the configured API URL?'
      )
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="glass-card glass-ring relative w-full max-w-md rounded-3xl p-6 sm:p-8">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-glow">
            <UserPlus className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-lg font-bold text-white">Create User</h2>
            <p className="text-xs text-slate-400">
              Fill in the details to register a new user.
            </p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="mt-8 flex flex-col items-center text-center">
            <CheckCircle2 className="h-14 w-14 text-emerald-400" />
            <p className="mt-4 text-base font-semibold text-white">{message}</p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-glow"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <Field
              label="Username"
              type="text"
              value={form.username}
              onChange={update('username')}
              error={errors.username}
              placeholder="asik"
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={update('email')}
              error={errors.email}
              placeholder="you@example.com"
            />
            <Field
              label="Password"
              type="password"
              value={form.password}
              onChange={update('password')}
              error={errors.password}
              placeholder="At least 6 characters"
            />
            <Field
              label="Age"
              type="number"
              value={form.age}
              onChange={update('age')}
              error={errors.age}
              placeholder="25"
              min="1"
              max="120"
            />

            {status === 'error' && message && (
              <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-cyan disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4" />
                  Create User
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, error, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </span>
      <input
        {...props}
        className={`w-full rounded-xl border bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-300/50 focus:bg-white/10 ${
          error ? 'border-red-500/50' : 'border-white/10'
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  )
}
