import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">Готов к гонке?</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Присоединись к 2 миллионам гонщиков по всему миру. Скачивай бесплатно — первый заезд через 30 секунд.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              📱 Скачать в App Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              🤖 Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}