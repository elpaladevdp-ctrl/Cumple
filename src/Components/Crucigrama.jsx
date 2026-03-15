import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Crucigrama = () => {
  const celdas = [
    { f: 4, c: 2, r: "R", p: "1" }, { f: 4, c: 3, r: "A" }, { f: 4, c: 4, r: "T" }, { f: 4, c: 5, r: "A" },
    { f: 1, c: 3, r: "F", p: "2" }, { f: 2, c: 3, r: "O" }, { f: 3, c: 3, r: "C" }, { f: 4, c: 3, r: "A" }, 
    { f: 5, c: 3, r: "G" }, { f: 6, c: 3, r: "U" }, { f: 7, c: 3, r: "A" }, { f: 8, c: 3, r: "T" },
    { f: 9, c: 3, r: "O" }, { f: 10, c: 3, r: "N" }, { f: 11, c: 3, r: "A" }, 
    { f: 11, c: 2, r: "K", p: "3" }, { f: 11, c: 3, r: "A" }, { f: 11, c: 4, r: "I" }, { f: 11, c: 5, r: "J" },
    { f: 11, c: 6, r: "U" }, { f: 11, c: 7, r: "P" }, { f: 11, c: 8, r: "A" }, { f: 11, c: 9, r: "R" },
    { f: 11, c: 10, r: "A" }, { f: 11, c: 11, r: "D" }, { f: 11, c: 12, r: "I" }, { f: 11, c: 13, r: "S" }, { f: 11, c: 14, r: "E" },
    { f: 7, c: 11, r: "O", p: "4" }, { f: 8, c: 11, r: "B" }, { f: 9, c: 11, r: "B" }, { f: 10, c: 11, r: "Y" },
    { f: 11, c: 11, r: "D" }, { f: 12, c: 11, r: "E" }, { f: 13, c: 11, r: "C" }, { f: 14, c: 11, r: "U" }, 
    { f: 15, c: 11, r: "E" }, { f: 16, c: 11, r: "R" }, { f: 17, c: 11, r: "D" }, { f: 18, c: 11, r: "A" },
    { f: 14, c: 8, r: "C", p: "5" }, { f: 14, c: 9, r: "H" }, { f: 14, c: 10, r: "U" }, { f: 14, c: 11, r: "U" }, 
    { f: 14, c: 12, r: "Y" }, { f: 14, c: 13, r: "A" }, { f: 14, c: 14, r: "N" }, { f: 14, c: 15, r: "A" },
    { f: 14, c: 16, r: "K" }, { f: 14, c: 17, r: "A" }, { f: 14, c: 18, r: "H" }, { f: 14, c: 19, r: "A" },
    { f: 14, c: 20, r: "R" }, { f: 14, c: 21, r: "A" },
  ];

  const [respuestas, setRespuestas] = useState({});
  const [ganaste, setGanaste] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const [mostrarCarta, setMostrarCarta] = useState(false);
  const inputsRef = useRef({});

  const celdasUnicas = Array.from(new Set(celdas.map(c => `${c.f}-${c.c}`)))
    .map(id => celdas.find(c => `${c.f}-${c.c}` === id));

  const handleChange = (e, id, celda) => {
    const letra = e.target.value.toUpperCase();
    if (letra && !letra.match(/^[A-ZÑ]$/)) return;
    const nuevas = { ...respuestas, [id]: letra };
    setRespuestas(nuevas);

    if (celdas.every(c => nuevas[`${c.f}-${c.c}`]?.toUpperCase() === c.r)) {
      setGanaste(true);
      setFinalizado(true);
    }

    if (letra) {
      const sig = celdasUnicas.find(c => ((c.f === celda.f && c.c === celda.c + 1) || (c.f === celda.f + 1 && c.c === celda.c)) && nuevas[`${c.f}-${c.c}`] !== c.r);
      if (sig) inputsRef.current[`${sig.f}-${sig.c}`]?.focus();
    }
  };

  return (
    <div className="flex flex-col items-center py-10 px-4 transition-colors duration-500 bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-black mb-16 text-indigo-600 dark:text-indigo-400 italic text-center drop-shadow-lg tracking-tighter"
      >
        🧩 DESAFÍO PARA MI RATA
      </motion.h2>

      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-12 w-full max-w-[1600px] z-10">
        {/* COLUMNA IZQUIERDA */}
        <div className="flex flex-col gap-6 w-[360px]">
          <motion.div whileHover={{ scale: 1.03, y: -5 }} className="w-full h-[520px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-all duration-300">
            <img src="/img/chuuya.png" alt="Chuuya" className="w-full h-full object-cover" />
          </motion.div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border-b-8 border-blue-500 transition-colors">
            <h4 className="font-black text-blue-600 dark:text-blue-400 mb-5 text-sm tracking-widest italic uppercase">↔ HORIZONTALES</h4>
            <div className="space-y-4 dark:text-slate-300 font-bold text-xs leading-relaxed">
              <p>1. Un apodo que me dices mucho.</p>
              <p>3. Juego en el que nos conocimos.</p>
              <p>5. Tu personaje favorito.</p>
            </div>
          </div>
        </div>

        {/* TABLERO */}
        <div className="bg-white dark:bg-slate-900 p-7 rounded-[3rem] shadow-2xl border-2 border-slate-100 dark:border-slate-800 transition-colors">
          <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(21, 32px)`, gridTemplateRows: `repeat(18, 32px)` }}>
            {celdasUnicas.map((celda) => {
              const id = `${celda.f}-${celda.c}`;
              const esCorrecta = respuestas[id]?.toUpperCase() === celda.r;
              return (
                <div key={id} style={{ gridRow: celda.f, gridColumn: celda.c }} className="relative group">
                  {celda.p && <span className="absolute -top-1 -left-1 text-[9px] font-black text-indigo-500 z-10 group-hover:text-indigo-400">{celda.p}</span>}
                  <input
                    ref={(el) => (inputsRef.current[id] = el)}
                    maxLength={1}
                    value={respuestas[id] || ""}
                    onChange={(e) => handleChange(e, id, celda)}
                    className={`w-[32px] h-[32px] text-center font-black text-lg rounded-lg outline-none transition-all border-2
                      ${esCorrecta 
                        ? "bg-indigo-500 border-indigo-600 text-white shadow-md shadow-indigo-500/30" 
                        : "bg-slate-50 dark:bg-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500"
                      }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex flex-col gap-6 w-[360px]">
          <motion.div whileHover={{ scale: 1.03, y: -5 }} className="w-full h-[520px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transition-all duration-300">
            <img src="./img/mao.png" alt="Mao" className="w-full h-full object-cover" />
          </motion.div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border-b-8 border-purple-500 transition-colors">
            <h4 className="font-black text-purple-600 dark:text-purple-400 mb-5 text-sm tracking-widest italic uppercase">↕ VERTICALES</h4>
            <div className="space-y-4 dark:text-slate-300 font-bold text-xs leading-relaxed">
              <p>2. Peluche que pides de broma.</p>
              <p>4. Juego de 2 que 'odias'.</p>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP DE VICTORIA */}
      <AnimatePresence>
        {ganaste && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-slate-950/90 backdrop-blur-md z-50 p-6"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }}
              className="relative bg-white dark:bg-slate-900 p-10 rounded-[3.5rem] text-center shadow-2xl border-4 border-indigo-500 max-w-xl w-full"
            >
              <div className="w-full h-[350px] overflow-hidden rounded-3xl mb-8 border border-slate-200 dark:border-slate-700 shadow-lg">
                <img src="./img/gojo2.png" alt="Gojo" className="w-full h-full object-cover" />
              </div>
              
              <h2 className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-4 italic uppercase tracking-tighter">¡BUEN TRABAJO! 🤞</h2>
              
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-2xl mb-8 border border-indigo-100 dark:border-indigo-800">
                <p className="text-indigo-800 dark:text-indigo-200 font-bold leading-tight text-xl">
                  Lo lograste. ¡Eres la rata más fuerte de la actualidad! <br/>
                  <span className="text-xs mt-4 block font-black uppercase tracking-widest opacity-80">
                    Antes de que te vayas, hay una sorpresa final esperándote abajo ↓
                  </span>
                </p>
              </div>

              <button 
                onClick={() => {
                  setGanaste(false);
                  setTimeout(() => {
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }, 300);
                }}
                className="w-full py-5 bg-indigo-600 text-white rounded-3xl font-black text-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/40"
              >
                IR A LA SORPRESA 🚀
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECCIÓN FINAL */}
      {finalizado && (
        <div className="mt-40 mb-48 w-full flex justify-center z-10">
          <AnimatePresence>
            {!mostrarCarta ? (
              <motion.button
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 40px rgba(99, 102, 241, 0.6)" }}
                onClick={() => setMostrarCarta(true)}
                className="px-16 py-6 bg-indigo-600 text-white rounded-full font-black text-2xl shadow-xl border-b-8 border-indigo-800 transition-all"
              >
                ✉️ UNA ÚLTIMA CARTA
              </motion.button>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-3xl w-full px-6">
                <div className="bg-white dark:bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-2xl border-t-8 border-indigo-500 relative transition-colors">
                  
                  {/* CORAZÓN DEGRADADO (SVG) */}
                  <div className="absolute top-10 right-10 opacity-30 dark:opacity-50 rotate-12">
                    <svg width="80" height="80" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="corazonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: "#7c3aed" }} />
                          <stop offset="100%" style={{ stopColor: "#ff1a1a" }} />
                        </linearGradient>
                      </defs>
                      <path fill="url(#corazonGrad)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-10 italic tracking-tight">Para mi mejor amiga...</h3>
                  
                  <div className="space-y-8 text-slate-700 dark:text-slate-200 font-medium text-xl leading-relaxed whitespace-pre-line text-left bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-inner">
                    <p>Hice todo esto con el propósito de demostrarte cuanto te quiero po, a pesar de que a veces puedo estar molesto o muy pesado siempre lo hago con cariño porque es mi forma de expresar cuanto te quiero y cuan importante eres para mí.</p>
                    <p>Espero que todos tus sueños se cumplan en tu día tal especial y que algún día nos podamos ver en la vida real para poder abrazarte muy pero muy fuerte :3.</p>
                    <p className="font-extrabold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 p-5 rounded-xl border border-indigo-100 dark:border-indigo-800">
                      Si ves este mensaje mándame la palabra “Regalo” para bueno creo que es obvio xd
                    </p>
                  </div>
                  
                  <div className="mt-16 pt-10 border-t-2 border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-indigo-500 font-black text-2xl italic">
                      <span>Con mucho cariño, Yo</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff1a1a">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                    <button onClick={() => setMostrarCarta(false)} className="text-sm font-bold text-slate-400 hover:text-indigo-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-6 py-2 rounded-full transition-all">Cerrar</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Crucigrama;