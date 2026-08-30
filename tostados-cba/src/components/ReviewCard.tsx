interface ReviewProps {
  nombreLugar: string;
  fechaVisita: string;
  puntosPan: number;
  puntosFiambre: number;
  puntosPapas: number;
  puntosAtencion: number;
  extraPresentacion: boolean;
  extraDip: boolean;
  comentario: string;
}

export default function ReviewCard({
  nombreLugar,
  fechaVisita,
  puntosPan,
  puntosFiambre,
  puntosPapas,
  puntosAtencion,
  extraPresentacion,
  extraDip,
  comentario,
}: ReviewProps) {
  // Cálculo del puntaje
  const extras = (extraPresentacion ? 1 : 0) + (extraDip ? 1 : 0);
  const total = puntosPan + puntosFiambre + puntosPapas + puntosAtencion + extras;

  return (
    <article className="border-4 border-black p-6 rounded-xl bg-[var(--card-bg)] shadow-[0_12px_0_#111111] flex flex-col gap-4 transition-transform hover:scale-[1.01]">
      <div className="flex justify-between items-start border-b-2 border-black pb-4">
        <div>
          <h3 className="text-2xl font-extrabold text-black">{nombreLugar}</h3>
          <p className="text-black/70 text-sm font-semibold">{fechaVisita}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-black text-white rounded-lg px-4 py-2 shadow-sm border-2 border-black">
          <span className="text-xs uppercase tracking-wider font-bold opacity-80">Total</span>
          <span className="text-3xl font-black leading-none">{total}/20</span>
        </div>
      </div>

      <p className="text-black italic text-lg leading-relaxed">{comentario}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
        <div className="bg-white border-2 border-black rounded p-2 text-center shadow-sm">
          <span className="block text-xs font-bold text-black uppercase">Pan</span>
          <span className="font-bold text-black">{puntosPan}/6</span>
        </div>
        <div className="bg-white border-2 border-black rounded p-2 text-center shadow-sm">
          <span className="block text-xs font-bold text-black uppercase">Fiambre</span>
          <span className="font-bold text-black">{puntosFiambre}/6</span>
        </div>
        <div className="bg-white border-2 border-black rounded p-2 text-center shadow-sm">
          <span className="block text-xs font-bold text-black uppercase">Papas</span>
          <span className="font-bold text-black">{puntosPapas}/5</span>
        </div>
        <div className="bg-white border-2 border-black rounded p-2 text-center shadow-sm">
          <span className="block text-xs font-bold text-black uppercase">Atención</span>
          <span className="font-bold text-black">{puntosAtencion}/2</span>
        </div>
      </div>

      {(extraPresentacion || extraDip) && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {extraPresentacion && (
            <span className="zafaari-chip text-xs font-bold px-2 py-1 rounded">
              +1 Presentación
            </span>
          )}
          {extraDip && (
            <span className="zafaari-chip text-xs font-bold px-2 py-1 rounded">
              +1 Buen Dip
            </span>
          )}
        </div>
      )}
    </article>
  );
}