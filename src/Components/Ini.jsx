import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "./Counter";

const Ini = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Fondo con la Foca */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/Foca.webp" 
          alt="Foca"
          className="w-full h-full object-cover opacity-50 dark:opacity-20 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-slate-900/10 dark:to-slate-900" />
      </div>

      {/* Contenido Principal */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center p-6"
      >
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-red-600 mb-6 drop-shadow-lg">
          ¡Feliz Cumple!
        </h1>

        <p className="text-slate-900 dark:text-white text-xl md:text-2xl max-w-md leading-relaxed font-bold bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl p-4 transition-colors duration-500">
          Porque no todos los días la mejor amiga del mundo cumple años.
        </p>

        <Counter />

        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-10 px-10 py-4 bg-orange-600 dark:bg-orange-500 text-white rounded-full font-bold text-lg shadow-xl shadow-orange-500/40 dark:shadow-orange-400/20 transition-all cursor-pointer"
        >
          Haz clic aquí 💖
        </motion.button>
      </motion.div>

      {/* Pop-up Estilo Tarjeta */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Overlay (Fondo oscuro de atrás) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />

            {/* Tarjeta */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] shadow-2xl max-w-2xl w-full border border-white dark:border-slate-700 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Encabezado con Background Color */}
              <div className="bg-orange-500 dark:bg-orange-600 p-6 md:p-8 text-white shadow-lg">
                <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
                  Para Hannah <span className="animate-bounce">✨</span>
                </h2>
                <p className="text-orange-100 text-sm mt-1 font-medium italic">Un pequeño mensaje de tu mejor amigo</p>
              </div>
              
              {/* Cuerpo del Mensaje con Scroll si es necesario */}
              <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar text-slate-700 dark:text-slate-200 space-y-6 text-lg leading-relaxed">
                
                <p className="font-medium">
                  Si soy sincero nunca pensé estar escribiendo una cosa así porque no soy ese tipo de persona, pero como eres una persona tan especial para mi voy a hacer ese esfuerzo
                </p>

                <p>
                  Paso un buen tiempo desde que nos conocimos, ya no recuerdo el día en el que nosotros estábamos jugando ese <span className="text-orange-600 dark:text-orange-400 font-bold">juego de furros</span> y yo no tenia idea que iba a conocer a una de las personas mas especiales de mi vida, la cual eras tu.
                </p>

                <p>
                  Nunca pensé que alguien como tu iba entenderme tan bien y tener mucho en común que yo y eso es lo que te hace muy especial para mí, no se como expresar el cariño y la gratitud que te tengo así que me puse a escribir esto para decirte <span className="text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">gracias Hannah</span>.
                </p>

                {/* Lista de agradecimientos */}
                <div className="space-y-4 py-4 border-y border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <span className="text-orange-500 text-xl">🧡</span>
                    <p>Gracias por pasar tantos días conmigo y jugar aunque a veces era muy pesado</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-orange-500 text-xl">🧡</span>
                    <p>Gracias por escucharme esas veces que sentía que mi mundo se desmoronaba y que me sentía solo</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-orange-500 text-xl">🧡</span>
                    <p>Gracias por estar siempre que te necesitaba y siempre estar al tanto mio</p>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-2xl font-black text-slate-900 dark:text-white text-center leading-tight">
                    Solo te puedo decir una cosa Hannah, <br />
                    <span className="text-orange-600 dark:text-orange-400 text-3xl">¡Muchas gracias por ser mi mejor amiga! 💖</span>
                  </p>
                </div>
              </div>

              {/* Botón de cierre en el footer de la tarjeta */}
              <div className="p-6 bg-slate-100 dark:bg-slate-900/50 flex justify-center">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 bg-slate-800 dark:bg-orange-500 text-white rounded-xl font-bold hover:scale-105 transition-all cursor-pointer shadow-md"
                >
                  Cerrar con cariño
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ini; 