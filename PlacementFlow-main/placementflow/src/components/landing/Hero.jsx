import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          🚀 Campus Placement Manager
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
          Organize Your Entire
          <span className="block text-blue-500">Placement Journey</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Track applications, online assessments, interviews, deadlines, offers
          and preparation notes from one clean dashboard.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Start Tracking
            <FiArrowRight size={18} />
          </Link>

          <button className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-3xl font-bold text-white">100+</h3>
            <p className="mt-2 text-sm text-slate-400">Applications</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-3xl font-bold text-white">40+</h3>
            <p className="mt-2 text-sm text-slate-400">Assessments</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-3xl font-bold text-white">18</h3>
            <p className="mt-2 text-sm text-slate-400">Interviews</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-3xl font-bold text-white">6</h3>
            <p className="mt-2 text-sm text-slate-400">Offers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
