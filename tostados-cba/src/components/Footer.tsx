export default function Footer() {
  return (
    <footer className="w-full bg-blue-800 text-yellow-50 py-4 px-6 border-t-4 border-blue-900 relative z-10 text-center font-semibold shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      
      <p>
        Desarrollado por{" "}
        <a 
          href="https://obriguera.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-yellow-200 underline underline-offset-2 transition-colors"
        >
          Octavio Briguera
        </a>
      </p>

      <p className="text-sm font-normal mt-1 opacity-90">
        Contacto:{" "}
        <a 
          href="mailto:obriguera03@gmail.com"
          className="hover:text-yellow-200 transition-colors"
        >
          Obriguera03@gmail.com
        </a>
      </p>

    </footer>
  );
}