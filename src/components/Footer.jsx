export default function Footer() {
  return (
    <footer className="section-pad py-8 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="font-mono text-xs text-slate dark:text-slate-dark">
          © {new Date().getFullYear()} Neyamul Islam
        </p>
        <p className="font-mono text-xs text-slate dark:text-slate-dark">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
