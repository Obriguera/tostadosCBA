import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { Mail } from "lucide-react"; 

export default function Header() {
  return (
    <header className="w-full bg-blue-800 border-b-4 border-blue-900 py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Lado Izquierdo: Logo / Nombre */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-16 h-16 bg-black-400 rounded p-1">
            <Image
              src="/img/Logo.svg" 
              alt="Logo Tostados"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-white font-extrabold text-xl tracking-wide hidden sm:block">
            
          </span>
        </Link>

        {/* Lado Derecho: Redes Sociales adaptadas */}
        <div className="flex gap-3">
          <a
            href="https://instagram.com/octabriguera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-sky-700 border border-blue-500 text-white-300 hover:bg-sky-400 hover:bg-white hover:text-blue-800 hover:border-white transition-colors rounded flex items-center justify-center shadow-sm"
            aria-label="Instagram de Octavio Briguera"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=obriguera03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-sky-700 border border-blue-500 text-white-300 hover:bg-sky-400 hover:bg-white hover:text-blue-800 hover:border-white transition-colors rounded flex items-center justify-center shadow-sm"
            aria-label="Enviar email a Octavio Briguera"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </header>
  );
}