"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabSelector from "@/components/TabSelector";

export default function Home() {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    // Fondo principal celeste argentino
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-sky-400">
      
      <style>{`
        @keyframes slideBackground {
          0% { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
        .animate-bg-slide {
          animation: slideBackground 4s linear infinite;
        }
      `}</style>

      <Header />

      <main className="flex-grow relative z-0">
        
        {/* Capa 1: El patrón de tostados (bajamos un poco la opacidad para que sea sutil) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20 animate-bg-slide"
          style={{
            backgroundImage: "url('/img/Logo.svg')",
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
          }}
        ></div>

        {/* Capa 2: Un gradiente para darle profundidad en lugar de un color sólido oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-900/40 pointer-events-none"></div>
        
        <div className="relative z-10 p-8 max-w-7xl mx-auto flex flex-col items-center min-h-[60vh] mt-8">
          
          {/* Título: Fondo azul oscuro con borde blanco */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white bg-blue-800/90 p-6 border-4 border-white rounded-xl shadow-2xl rotate-[-2deg] mb-12 text-center">
            ¡Buscando el mejor tostado!
          </h1>

          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Contenedor dinámico: Borde azul en lugar de rojo */}
          <div className="w-full max-w-4xl bg-white/95 p-8 rounded-xl shadow-xl border-4 border-blue-600 min-h-[300px]">
            {activeTab === "reglas" && (
              <div className="animate-fade-in">
                {/* Textos azules con subrayado celeste */}
                <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-sky-400 pb-2">Reglas del Ranking</h2>
                <p className="text-gray-700 text-lg">
                  Acá vamos a detallar los criterios de evaluación. Por ejemplo: calidad del pan, proporción de queso/jamón, precio y atención.
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-sky-400 pb-2">Reviews</h2>
                <p className="text-gray-700 text-lg">
                  Acá va a ir la lista de todos los tostados que vayas probando por Córdoba.
                </p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}