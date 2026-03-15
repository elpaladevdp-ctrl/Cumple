import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState({
    años: 0,
    meses: 0,
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const startDate = new Date("2022-03-18T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = now - startDate;

      // Cálculos locos de tiempo
      const segundos = Math.floor((difference / 1000) % 60);
      const minutos = Math.floor((difference / 1000 / 60) % 60);
      const horas = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const díasTotales = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      // Cálculo aproximado de años y meses
      const años = Math.floor(díasTotales / 365);
      const meses = Math.floor((díasTotales % 365) / 30);
      const días = Math.floor((díasTotales % 365) % 30);

      setTimeLeft({ años, meses, días, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Unit = ({ value, label }) => (
    <div className="flex flex-col items-center px-2 md:px-4">
      <span className="text-2xl md:text-4xl font-black text-orange-600 dark:text-orange-400">
        {value}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-12 p-6 bg-white/30 dark:bg-slate-800/30 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl"
    >
      <p className="text-slate-600 dark:text-slate-300 text-sm font-bold mb-4 uppercase tracking-[0.2em]">
        Tiempo siendo mejores amigos
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Unit value={timeLeft.años} label="Años" />
        <Unit value={timeLeft.meses} label="Meses" />
        <Unit value={timeLeft.días} label="Días" />
        <Unit value={timeLeft.horas} label="Hrs" />
        <Unit value={timeLeft.minutos} label="Min" />
        <Unit value={timeLeft.segundos} label="Seg" />
      </div>
    </motion.div>
  );
};

export default Counter;