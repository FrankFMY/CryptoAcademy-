"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

function getTargetDate() {
  const target = new Date();
  target.setDate(target.getDate() + 14);
  target.setHours(10, 0, 0, 0);
  return target;
}

const TARGET = getTargetDate();

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, TARGET.getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function TimerBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold text-white font-heading">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-text-dim mt-2">{label}</span>
    </div>
  );
}

export default function Hero() {
  const countdown = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-[#12122A] to-bg-card" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-violet/10 blur-[100px]"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-cyan/10 blur-[120px]"
          style={{ animation: "pulse-glow 5s ease-in-out infinite 1s" }}
        />

        <svg className="absolute top-32 right-[15%] w-16 h-16 text-violet/20" style={{ animation: "float 6s ease-in-out infinite" }} viewBox="0 0 100 100">
          <polygon points="50,5 95,97 5,97" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute top-[60%] left-[8%] w-12 h-12 text-cyan/20" style={{ animation: "float 7s ease-in-out infinite 2s" }} viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="10" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-[30%] right-[25%] w-10 h-10 text-violet-light/15" style={{ animation: "float 5s ease-in-out infinite 1s" }} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute top-[40%] left-[30%] w-8 h-8 text-cyan-light/10" style={{ animation: "float 8s ease-in-out infinite 3s" }} viewBox="0 0 100 100">
          <polygon points="50,5 95,40 80,95 20,95 5,40" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet/10 border border-violet/20 mb-8">
              <Play className="w-3.5 h-3.5 text-violet-light fill-violet-light" />
              <span className="text-sm font-medium text-violet-light">
                Набор на новый поток открыт
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading"
          >
            Зарабатывай на крипте{" "}
            <span className="bg-gradient-to-r from-violet-light to-cyan bg-clip-text text-transparent">
              осознанно
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-text-muted mb-10 max-w-2xl mx-auto"
          >
            Структурированный курс от практиков рынка. От основ блокчейна до
            реальных сделок на демо-счёте за 8 недель.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-violet hover:bg-violet-dark text-white font-semibold rounded-full transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
            >
              Начать обучение
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#program"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-border hover:border-violet/50 transition-all"
            >
              Смотреть программу
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-text-dim mb-4">
              До старта нового потока:
            </p>
            <div className="flex justify-center gap-2 sm:gap-4">
              <TimerBlock value={countdown.days} label="дней" />
              <TimerBlock value={countdown.hours} label="часов" />
              <TimerBlock value={countdown.minutes} label="минут" />
              <TimerBlock value={countdown.seconds} label="секунд" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
