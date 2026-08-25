"use client";

import { motion } from "framer-motion";

interface TabSelectorProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function TabSelector({ activeTab, setActiveTab }: TabSelectorProps) {
  const tabs = [
    { id: "reglas", label: "Reglas" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <section className="mb-12 flex justify-center">
      {/* Contenedor con el fondo celeste oscuro y borde azul */}
      <div className="inline-flex gap-1 p-1 bg-sky-700 border border-blue-500 rounded shadow-sm backdrop-blur-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex items-center gap-2 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.1em] transition-colors duration-300 rounded
                ${isActive 
                  ? "text-blue-800" // Texto azul cuando está activo
                  : "text-white hover:bg-white hover:text-blue-800" // Blanco inactivo, cambia a blanco/azul al hacer hover
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="activePill"
                  // La píldora animada ahora es blanca para coincidir con tu diseño
                  className="absolute inset-0 bg-white border border-white rounded shadow-sm"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}