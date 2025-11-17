import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-16 grid md:grid-cols-2 items-center gap-8">
        <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">B.Tech Student Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Showcase of Projects, Skills and Experiments
          </h1>
          <p className="mt-4 text-gray-700">
            Interactive, playful and modern portfolio. Explore my academic work, mini projects and achievements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80" />
    </section>
  )
}
