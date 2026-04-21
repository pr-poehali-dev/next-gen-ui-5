import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Антон К.",
    role: "🏆 Топ-10 мирового рейтинга",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Лучший мобильный гонщик из всех, что я играл. Управление чёткое, физика реалистичная, а погони с полицией — просто огонь!",
  },
  {
    name: "Марина Д.",
    role: "⭐ 4.9 — App Store отзыв",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Наконец-то игра без жёсткого доната! Прокачиваюсь честно, уже 3-й сезон не могу остановиться. Рекомендую всем!",
  },
  {
    name: "Иван Р.",
    role: "🎮 Стример, 50k подписчиков",
    avatar: "/professional-woman-scientist.png",
    content:
      "Зрители сходят с ума когда я играю в Black Rush. Каждая гонка — это шоу. Механика дрифта просто шедевральная.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Игроки в восторге</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 2 млн скачиваний и рейтинг 4.8 ⭐ — игроки говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}