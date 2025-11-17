import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send message')
      const data = await res.json()
      setStatus({ type: 'success', message: 'Message sent! Thank you.' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Contact</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Have a question or want to collaborate? Send a message and I will reply soon.</p>

        <form onSubmit={handleSubmit} className="mt-10 grid md:grid-cols-2 gap-6 bg-white rounded-2xl p-6 shadow">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="md:col-span-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="6" required className="md:col-span-2 w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button disabled={loading} className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 disabled:opacity-60">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <span className={status.type === 'success' ? 'text-green-600' : 'text-red-600'}>
                {status.message}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
