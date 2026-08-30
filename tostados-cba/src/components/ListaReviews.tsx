import ReviewCard from "./ReviewCard";

export default function ListaReviews() {
  // Datos de prueba simulando lo que luego vendrá de PostgreSQL
  const reviews = [
    {
      id: "1",
      nombreLugar: "Cafetería Central",
      fechaVisita: "2026-08-30",
      puntosPan: 6,
      puntosFiambre: 4,
      puntosPapas: 5,
      puntosAtencion: 2,
      extraPresentacion: true,
      extraDip: false,
      comentario: "El tostado estaba increíble. El pan súper crujiente y las papas en su punto exacto. El fiambre era bueno pero el queso podría haber estado un poco más fundido.",
    },
    {
      id: "2",
      nombreLugar: "Bar de la Esquina",
      fechaVisita: "2026-08-25",
      puntosPan: 2,
      puntosFiambre: 2,
      puntosPapas: 3,
      puntosAtencion: 1,
      extraPresentacion: false,
      extraDip: true,
      comentario: "Un tostado aceptable para salir del paso. El pan llegó un poco húmedo en la base y las papas estaban medio aceitosas. Suma que trajeron una lactonesa casera muy rica.",
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          nombreLugar={review.nombreLugar}
          fechaVisita={review.fechaVisita}
          puntosPan={review.puntosPan}
          puntosFiambre={review.puntosFiambre}
          puntosPapas={review.puntosPapas}
          puntosAtencion={review.puntosAtencion}
          extraPresentacion={review.extraPresentacion}
          extraDip={review.extraDip}
          comentario={review.comentario}
        />
      ))}
    </div>
  );
}