export default function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Background
          </h2>
        </div>

        <p className="text-lg leading-relaxed text-slate dark:text-slate-dark max-w-2xl">
          I am a recent graduate from the Department of Computer Science and Engineering at Khwaja Yunus
          Ali University, where I focused on AI and deep learning applications in medical imaging. I
          recently completed my coursework, and my thesis defense is scheduled for December. My research
          focuses on applying machine learning and deep learning models to enhance diagnostic accuracy in
          medical imaging, particularly for early disease detection.
        </p>
      </div>
    </section>
  )
}
