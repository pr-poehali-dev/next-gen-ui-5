import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Сезон 1: Уличные гонки",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Начни с нуля в ночном городе. Докажи всем, что ты лучший уличный гонщик. Пройди 30 уровней и открой
            первый суперкар.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              30 гоночных трасс в ночном мегаполисе
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              5 стартовых автомобилей с базовым тюнингом
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Бонусный суперкар за завершение сезона
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сезон 2: Полицейские погони",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Уходи от полиции на максимальной скорости. Новые трассы, препятствия и режим выживания — всё сложнее,
            всё быстрее, всё опаснее.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Режим погони с полицейским ИИ
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Система уровней розыска (1–5 звёзд)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Новые локации: порт, шоссе, промзона
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Сезон 3: Мировой чемпионат",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Выйди на международную арену. PvP-турниры, топ-500 мирового рейтинга и эксклюзивные призы для лучших
            гонщиков планеты.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Мировой рейтинг и онлайн-чемпионат
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Эксклюзивные машины только для топ-100
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Еженедельные призовые турниры
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="screenshots" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Контент игры</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три сезона, сотни заездов и постоянные обновления — Black Rush держит тебя в игре
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}