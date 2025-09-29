import SmoothTimeline from "@/components/smooth-timeline"
import IntroHero from "@/components/intro-hero"
import Credits from "@/components/credits"
import { FRANCE_TIMELINE, FRANCE_INTRO, FRANCE_CREDITS } from "@/lib/france-history-data"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight">
            Histoire de la France — Frise interactive
          </h1>
          <p className="text-pretty text-sm text-muted-foreground">
            Faites défiler pour parcourir les grandes périodes. La section active s’agrandit automatiquement et met en
            avant son contenu.
          </p>
        </div>
      </header>

      {/* Dedicated Intro section before the timeline */}
      <section aria-labelledby="intro-title" className="border-b bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <IntroHero
            title={FRANCE_INTRO.title}
            paragraphs={FRANCE_INTRO.paragraphs}
            image={FRANCE_INTRO.image}
            imageAlt={FRANCE_INTRO.imageAlt}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-10" id="chronologie" aria-labelledby="chronologie-title">
        <h2 id="chronologie-title" className="mb-4 text-2xl font-semibold tracking-tight">
          Chronologie
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Faites défiler pour parcourir les grandes périodes. La section active s’agrandit automatiquement et met en
          avant son contenu.
        </p>
        <SmoothTimeline
          items={FRANCE_TIMELINE.map((it) => ({
            id: it.id,
            title: it.title,
            period: it.dates,
            image: it.image,
            alt: it.imageAlt,
            summary: it.paragraphs?.[0],
            content: (it.paragraphs || []).join("\n\n"),
          }))}
        />
      </section>

      <section aria-labelledby="credits-title" className="border-t bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <h2 id="credits-title" className="mb-4 text-2xl font-semibold tracking-tight">
            Crédits
          </h2>
          <Credits group={FRANCE_CREDITS.group} members={FRANCE_CREDITS.members} />
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          Images de remplacement fournies — remplacez-les par vos visuels.
        </div>
      </footer>
    </main>
  )
}
