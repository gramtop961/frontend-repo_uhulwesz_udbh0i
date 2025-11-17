import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">A selection of college and personal projects showcasing problem-solving and creativity.</p>

        {loading ? (
          <p className="text-center mt-10 text-gray-500">Loading projects...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100" />
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech?.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-700 font-medium">View more →</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
