import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "На каких устройствах работает Black Rush?",
      answer:
        "Black Rush доступен на iOS (iPhone/iPad) и Android. Минимальные требования: iOS 13+ или Android 8.0+. Игра оптимизирована для всех современных смартфонов.",
    },
    {
      question: "Игра бесплатная?",
      answer:
        "Да, Black Rush полностью бесплатна для скачивания и игры. В магазине есть косметические предметы, но они никак не влияют на геймплей — побеждает тот, кто лучше играет.",
    },
    {
      question: "Нужен ли интернет для игры?",
      answer:
        "Для одиночного режима интернет не нужен. Онлайн-гонки, рейтинг и турниры требуют стабильного соединения.",
    },
    {
      question: "Как часто выходят обновления?",
      answer:
        "Мы выпускаем обновления каждые 2-3 недели: новые трассы, машины, ивенты и баланс-правки. Следи за нашими соцсетями, чтобы не пропустить ничего.",
    },
    {
      question: "Есть ли мультиплеер?",
      answer:
        "Да! В Black Rush есть живые PvP-гонки 1-на-1 и командные заезды до 8 игроков. Также доступны асинхронные гонки — соревнуйся с записанными результатами других игроков.",
    },
    {
      question: "Как попасть в топ рейтинга?",
      answer:
        "Рейтинговые очки начисляются за победы в онлайн-гонках и турнирах. Каждый сезон длится 30 дней, после чего проходит сброс рейтинга и раздача наград топ-игрокам.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать перед первым заездом в Black Rush
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}