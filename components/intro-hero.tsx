import Image from "next/image"

export default function IntroHero(props: {
  title: string
  paragraphs: string[]
  image: string
  imageAlt?: string
}) {
  const { title, paragraphs, image, imageAlt } = props
  return (
    <article className="grid items-start gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted">
          <Image
            src={image || "/placeholder.svg?height=400&width=640&query=Carte%20de%20la%20France"}
            alt={imageAlt || "Illustration de la France"}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="md:col-span-3">
        <header className="mb-2">
          <h2 className="text-pretty text-2xl font-semibold leading-7">{title}</h2>
        </header>
        <div className="space-y-3 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
