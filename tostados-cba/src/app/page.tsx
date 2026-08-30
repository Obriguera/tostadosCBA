"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabSelector from "@/components/TabSelector";
import ListaReviews from "@/components/ListaReviews";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [activeTab, setActiveTab] = useState("reviews");
  
  // Estado para guardar el contenido del archivo .md
  const [reglasMarkdown, setReglasMarkdown] = useState("");

  // Hook para buscar el archivo de reglas al cargar la página
  useEffect(() => {
    fetch("/reglas.md")
      .then((res) => res.text())
      .then((text) => setReglasMarkdown(text))
      .catch((err) => console.error("Error cargando las reglas:", err));
  }, []);

  return (
    // Fondo principal
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-red-600">
      
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
        <div className="llinear-gradient(180deg, var(--zafaari-plum) 0%, var(--zafaari-plum-strong) 100%)"></div>
        
        <div className="relative z-10 p-8 max-w-7xl mx-auto flex flex-col items-center min-h-[60vh] mt-8">
          
          {/* Título: Fondo azul oscuro con borde blanco */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white bg-blue-800/90 p-6 border-4 border-white rounded-xl shadow-2xl rotate-[-2deg] mb-12 text-center">
            ¡Buscando el mejor tostado!
          </h1>

          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Contenedor dinámico: Borde azul en lugar de rojo */}
          <div className="w-full max-w-4xl bg-[#fcfbfa] p-8 rounded-xl shadow-xl border-4 border-black min-h-[300px]">
                
                {/* Pestaña de Reglas */}
                {activeTab === "reglas" && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-sky-400 pb-2">
                      Reglas del Ranking
                    </h2>
                    
                    {/* Contenedor del Markdown */}
                    <div className="text-gray-700 text-lg space-y-4 prose-ul:list-disc prose-ul:pl-6">
                      <ReactMarkdown>{reglasMarkdown}</ReactMarkdown>
                    </div>
                  </div>
                )}

                {/* Pestaña de Reviews */}
                {activeTab === "reviews" && (
                  <div className="animate-fade-in">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b-2 border-sky-400 pb-2">
                      Reviews
                    </h2>
                    
                    {/* Insertamos tu componente acá */}
                    <ListaReviews />
                  </div>
                )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}