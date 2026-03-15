import { motion } from "framer-motion";

const Cupones = () => {
  const listaCupones = [
    { id: 1, titulo: "Partida Épica", desc: "Yo elijo el juego (aunque sea aburrido) y lo jugamos", icono: "🎮", color: "from-blue-400 to-indigo-500" },
    { id: 2, titulo: "Sesión de Quejas", desc: "Te escucho sin decir ni una palabra y trato de ayudarte", icono: "👂", color: "from-purple-400 to-pink-500" },
    { id: 3, titulo: "Perdón Instantáneo", desc: "Úsalo cuando me ponga muy pesado o cuando este enojado", icono: "🙏", color: "from-orange-400 to-red-500" },
  ];

  return (
    <div className="relative mt-20 w-full px-6 py-10 flex flex-col items-center">
      
      <h2 className="text-center text-slate-500 dark:text-slate-400 font-black uppercase tracking-[0.3em] text-sm mb-12 relative">
        <span className="relative z-10">Cupones Especiales</span>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full" />
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
        
        {/* Columna de Cupones */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {listaCupones.map((cupon) => (
            <motion.div
              key={cupon.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm pr-6 rounded-[2rem] border border-white/20 shadow-xl flex items-center gap-4 cursor-pointer overflow-hidden"
              onClick={() => alert(`¡Cupón "${cupon.titulo}" activado!`)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${cupon.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative text-5xl bg-slate-100/50 dark:bg-slate-700/50 w-24 h-24 flex items-center justify-center shrink-0">
                {cupon.icono}
                <div className="absolute top-2 right-2 bg-orange-500 w-3 h-3 rounded-full border-2 border-white dark:border-slate-800" />
              </div>

              <div className="text-left flex-grow py-4">
                <h3 className="text-xl font-black text-slate-800 dark:text-white leading-tight">
                  {cupon.titulo}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {cupon.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Columna Imagen */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img 
            src="/img/gojo.png" 
            alt="Gojo Satoru" 
            className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Cupones;