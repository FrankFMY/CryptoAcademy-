"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
  {
    name: "Алексей Дорохов",
    role: "Lead Trader, ex-Binance",
    bio: "10 лет в крипто-трейдинге. Управлял портфелями на $50M+. Специализация — технический анализ и алгоритмические стратегии.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Мария Кузнецова",
    role: "DeFi Analyst, Web3 Researcher",
    bio: "Эксперт по децентрализованным финансам. Аудитор смарт-контрактов. Публикуется в CoinDesk и The Block.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Дмитрий Волков",
    role: "Risk Manager, Hedge Fund Partner",
    bio: "15 лет в финансах, из них 7 в крипте. Разработал систему риск-менеджмента для крипто-хедж-фонда с AUM $200M.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-cyan uppercase tracking-wider">
            Спикеры
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-heading">
            Учитесь у практиков
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            Наши спикеры — действующие участники рынка с реальными результатами
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, i) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-violet/30 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-violet-light font-medium mb-3">
                  {speaker.role}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
