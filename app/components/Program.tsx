"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, BarChart3, Layers, ShieldAlert, Target } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Модуль 1. Основы блокчейна",
    weeks: "Недели 1–2",
    topics: [
      "Как работает блокчейн и почему это важно",
      "Биткоин, Ethereum и альткоины — в чём разница",
      "Кошельки, ключи и безопасность",
      "Биржи: как выбрать и начать торговать",
    ],
  },
  {
    icon: BarChart3,
    title: "Модуль 2. Технический анализ",
    weeks: "Недели 3–4",
    topics: [
      "Свечные паттерны и уровни поддержки/сопротивления",
      "Индикаторы: RSI, MACD, скользящие средние",
      "Объёмный анализ и рыночные тренды",
      "Построение торговой стратегии",
    ],
  },
  {
    icon: Layers,
    title: "Модуль 3. DeFi и Web3",
    weeks: "Неделя 5",
    topics: [
      "Децентрализованные финансы: основные протоколы",
      "Стейкинг, фарминг и пулы ликвидности",
      "NFT и токеномика проектов",
      "Анализ смарт-контрактов для инвестора",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Модуль 4. Риск-менеджмент",
    weeks: "Недели 6–7",
    topics: [
      "Управление капиталом и размер позиции",
      "Стоп-лоссы и тейк-профиты",
      "Психология трейдинга и контроль эмоций",
      "Диверсификация портфеля",
    ],
  },
  {
    icon: Target,
    title: "Модуль 5. Практика на демо-счёте",
    weeks: "Неделя 8",
    topics: [
      "Открытие и управление позициями в реальном времени",
      "Ведение торгового дневника",
      "Разбор сделок с наставником",
      "Финальный проект: торговая стратегия",
    ],
  },
];

function AccordionItem({
  module,
  index,
  isOpen,
  toggle,
}: {
  module: (typeof modules)[0];
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center shrink-0">
          <module.icon className="w-5 h-5 text-violet-light" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white">
            {module.title}
          </h3>
          <span className="text-sm text-text-dim">{module.weeks}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-text-dim shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.25rem] sm:pl-[4.75rem] space-y-2.5">
              {module.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-2.5 text-sm text-text-muted"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Program() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="program" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-violet-light uppercase tracking-wider">
            Программа
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-heading">
            Чему вы научитесь
          </h2>
          <p className="text-text-muted mt-4 max-w-xl mx-auto">
            8 недель интенсивного обучения — от нуля до уверенного трейдера
          </p>
        </motion.div>

        <div className="space-y-3">
          {modules.map((mod, i) => (
            <AccordionItem
              key={mod.title}
              module={mod}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
