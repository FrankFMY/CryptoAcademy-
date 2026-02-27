"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "29 900",
    description: "Для знакомства с крипто-рынком",
    featured: false,
    features: [
      "Доступ ко всем 5 модулям",
      "Записи лекций навсегда",
      "Чат с кураторами",
      "Домашние задания с проверкой",
      "Сертификат об окончании",
    ],
    missing: [
      "Личный наставник",
      "Разбор ваших сделок",
      "Закрытый VIP-чат",
    ],
  },
  {
    name: "Продвинутый",
    price: "49 900",
    description: "Для серьёзного старта в трейдинге",
    featured: true,
    features: [
      "Всё из тарифа «Базовый»",
      "Личный наставник на 8 недель",
      "Еженедельный разбор ваших сделок",
      "Доступ к торговым сигналам",
      "3 индивидуальных созвона",
    ],
    missing: [
      "Закрытый VIP-чат навсегда",
    ],
  },
  {
    name: "VIP",
    price: "89 900",
    description: "Максимум поддержки и нетворкинг",
    featured: false,
    features: [
      "Всё из тарифа «Продвинутый»",
      "Закрытый VIP-чат навсегда",
      "Пожизненный доступ к обновлениям",
      "10 индивидуальных созвонов",
      "Помощь в составлении портфеля",
      "Приглашение на офлайн-встречи",
    ],
    missing: [],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-violet-light uppercase tracking-wider">
            Тарифы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-heading">
            Выберите свой формат
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Три тарифа под разные цели — от самостоятельного обучения до
            персонального менторства
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-8 ${
                plan.featured
                  ? "bg-gradient-to-b from-violet/20 to-bg-card border-2 border-violet/40 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                  : "bg-bg-card/60 backdrop-blur-sm border border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet rounded-full flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-white fill-white" />
                  <span className="text-xs font-semibold text-white">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-dim">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white font-heading">
                  {plan.price}
                </span>
                <span className="text-text-dim ml-1">₽</span>
              </div>

              <a
                href="#"
                className={`block w-full text-center py-3.5 rounded-full font-semibold transition-all ${
                  plan.featured
                    ? "bg-violet hover:bg-violet-dark text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-border hover:border-violet/50"
                }`}
              >
                Выбрать тариф
              </a>

              <div className="mt-6 pt-6 border-t border-border space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan mt-0.5 shrink-0" />
                    <span className="text-sm text-text-muted">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5 opacity-40">
                    <Check className="w-4 h-4 text-text-dim mt-0.5 shrink-0" />
                    <span className="text-sm text-text-dim line-through">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
