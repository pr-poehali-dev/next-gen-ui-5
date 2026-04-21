import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Бешеная скорость",
    description: "Разгоняйся до предела на ночных трассах. Почувствуй адреналин каждого поворота на 200+ км/ч.",
    icon: "zap",
    badge: "Экшен",
  },
  {
    title: "Тюнинг авто",
    description: "Десятки машин с глубокой кастомизацией — движок, кузов, нитро. Собери своего монстра.",
    icon: "target",
    badge: "Гараж",
  },
  {
    title: "Онлайн гонки",
    description: "Сражайся с реальными игроками со всего мира в реальном времени. Войди в топ-100 рейтинга.",
    icon: "globe",
    badge: "PvP",
  },
  {
    title: "Ночные заезды",
    description: "Неоновые огни большого города, полицейские погони и тайные трассы под покровом ночи.",
    icon: "brain",
    badge: "Атмосфера",
  },
  {
    title: "Без Pay-to-Win",
    description: "Честная система прогрессии. Побеждай скиллом, а не кошельком.",
    icon: "lock",
    badge: "Честно",
  },
  {
    title: "Турниры и призы",
    description: "Еженедельные турниры с наградами. Стань чемпионом сезона и получи эксклюзивный транспорт.",
    icon: "link",
    badge: "Ивенты",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему Black Rush?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Гоночный экшен, который не отпускает. Каждая гонка — это новый вызов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}