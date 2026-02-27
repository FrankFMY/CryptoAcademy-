"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    q: "Нужен ли опыт в трейдинге?",
    a: "Нет. Курс рассчитан на новичков и начинается с самых основ. Мы проведём вас от «что такое блокчейн» до реальных сделок на демо-счёте.",
  },
  {
    q: "Сколько времени нужно уделять обучению?",
    a: "В среднем 6–8 часов в неделю: 2 часа лекций, 2 часа практики и 2–4 часа на домашние задания. Записи лекций доступны в любое время.",
  },
  {
    q: "Какой депозит нужен для старта торговли?",
    a: "На курсе мы работаем исключительно на демо-счёте с виртуальными деньгами. Для самостоятельной торговли после курса рекомендуем начинать с суммы, потеря которой не повлияет на ваш бюджет.",
  },
  {
    q: "Есть ли гарантия результата?",
    a: "Мы не обещаем конкретную доходность — это было бы нечестно. Мы даём знания, инструменты и наставничество. Результат зависит от вашей дисциплины и практики.",
  },
  {
    q: "Можно ли вернуть деньги?",
    a: "Да. Если в течение первых 7 дней вы поймёте, что курс вам не подходит, мы вернём 100% оплаты без вопросов.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-violet-light uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 font-heading">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="space-y-3">
          {questions.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-base font-semibold text-white">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-text-dim shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-text-muted leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
