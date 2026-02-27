"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

const reviews = [
  {
    name: "Артём Савельев",
    result: "+34% за 3 месяца",
    text: "До курса вообще не понимал, как работает крипта. Сейчас уверенно торгую на споте и вышел в стабильный плюс. Модуль по риск-менеджменту — бесценный.",
    tariff: "Продвинутый",
  },
  {
    name: "Ольга Миронова",
    result: "Портфель $12K",
    text: "Пришла с нуля. Через 2 месяца после курса собрала диверсифицированный портфель. Отдельное спасибо за модуль по DeFi — фармлю на Aave.",
    tariff: "VIP",
  },
  {
    name: "Иван Щербаков",
    result: "+21% за месяц",
    text: "Раньше торговал по интуиции и сливал депозит. Курс научил системному подходу. Теперь каждая сделка — по стратегии с чётким стоп-лоссом.",
    tariff: "Продвинутый",
  },
  {
    name: "Дарья Ковалёва",
    result: "Работа в Web3",
    text: "Шла за инвестиционными знаниями, а в итоге получила оффер в Web3-стартап. Знания по DeFi и токеномике оказались на вес золота.",
    tariff: "Базовый",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-cyan uppercase tracking-wider">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-heading">
            Результаты выпускников
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Реальные результаты наших студентов после прохождения курса
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-cyan/30 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-text-muted text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-bold text-white text-sm">
                    {review.name}
                  </div>
                  <div className="text-xs text-text-dim">
                    Тариф «{review.tariff}»
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan" />
                  <span className="text-xs font-semibold text-cyan">
                    {review.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
