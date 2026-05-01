import { MagneticText } from "@/components/ui/morphing-cursor"

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <div className="grid-bg" aria-hidden="true" />

      <header className="relative z-10 flex items-center justify-between px-6 py-7 sm:px-10">
        <div className="flex items-center">
          <span className="text-[15px] font-bold tracking-tight">disrupting.com</span>
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          VIP
        </span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:gap-12 sm:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <MagneticText text="DISRUPTING" hoverText="PREMIUM" />
          <MagneticText text="DOMAINS" hoverText="FOR SALE" />
        </div>

        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Premium domains for sale for your business, idea, or dream.
        </p>

        <a
          href="mailto:contact@disrupting.com"
          className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-foreground transition-opacity hover:opacity-60"
        >
          <span>contact@disrupting.com</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </main>

      <footer className="relative z-10 flex flex-col items-start justify-between gap-3 border-t border-border px-6 py-7 text-sm text-muted-foreground sm:flex-row sm:items-center sm:px-10">
        <span>© 2026 disrupting.com</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
          Over $10M in premium domains sold
        </span>
        <a
          href="mailto:contact@disrupting.com"
          className="font-medium text-foreground transition-opacity hover:opacity-60"
        >
          contact@disrupting.com
        </a>
      </footer>
    </div>
  )
}
