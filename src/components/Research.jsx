import Reveal from './Reveal'

const RESEARCH = [
  {
    code: 'OvFusionX-Net',
    summary:
      'An explainable hybrid deep learning architecture for early-stage ovarian cancer detection, built to keep every prediction traceable back to the image evidence that produced it.',
    area: 'Medical Imaging · Explainable AI',
    model: 'Hybrid CNN with Attention Mechanism + Grad-CAM',
    contribution: '98.48% classification accuracy with Grad-CAM interpretability for clinical validation',
  },
  {
    code: 'HybridCNN',
    summary:
      'An attention-enhanced deep learning framework for classifying multiple respiratory diseases from chest X-ray images, validated with a 5-fold cross-validation pipeline.',
    area: 'Medical Imaging · Explainable AI',
    model: 'Attention-Enhanced CNN, 5-fold Cross-Validation',
    contribution: 'Multi-class respiratory disease classification with explainable attention maps',
  },
  {
    code: 'BeanXNet',
    summary:
      'A hybrid CNN approach for identifying bean leaf disease from leaf imagery, paired with explainability tooling so model decisions remain interpretable to agronomists.',
    area: 'Agricultural AI · Computer Vision',
    model: 'Deep Hybrid CNN',
    contribution: 'Explainable multi-class plant disease classification',
  },
]

export default function Research() {
  return (
    <section id="research" className="section-pad py-20 sm:py-28 border-t border-line dark:border-line-dark">
      <div className="mx-auto max-w-6xl">
        <Reveal className="lg:max-w-[420px]">
          <p className="eyebrow">Research</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-ink-dark">
            Focus Areas
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line dark:divide-line-dark border-t border-b border-line dark:border-line-dark">
          {RESEARCH.map((r, i) => (
            <Reveal key={r.code} delay={i * 80}>
              <article className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-6 py-8 px-2 -mx-2 rounded-md hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink dark:text-ink-dark mb-2">
                    {r.code}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate dark:text-slate-dark max-w-sm">
                    {r.summary}
                  </p>
                </div>

                <dl className="grid grid-cols-1 gap-3 content-start">
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                      Research Area
                    </dt>
                    <dd className="text-sm text-ink dark:text-ink-dark mt-0.5">{r.area}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                      Model Used
                    </dt>
                    <dd className="text-sm text-ink dark:text-ink-dark mt-0.5">{r.model}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent dark:text-accent-light">
                      Key Contribution
                    </dt>
                    <dd className="text-sm text-ink dark:text-ink-dark mt-0.5">{r.contribution}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
