/**
 * Componente que renderiza una sección con imagen y texto
 *
 * @param {string} imgSrc   - Ruta de la imagen a mostrar
 * @param {string} subtitle - Texto opcional, puede incluir HTML
 * @param {'left'|'right'} display - Define la disposición del layout
 *        'left'  -> imagen a la izquierda
 *        'right' -> imagen a la derecha
 */

export default function ImageTextSection({ imgSrc, subtitle, display }) {
  return (
    <div
      className={
        "image-text-section " +
        (display === "right"
          ? "image-text-section--right"
          : "image-text-section--left")
      }
    >
      {display === "right" && (
        <div className="image-text-description image-text-description--right">
          {subtitle !== "" && (
            <span className="image-text-description__subtitle">{subtitle}</span>
          )}
        </div>
      )}
      <img
        src={imgSrc}
        alt={"Section img " + imgSrc}
        className={
          "card-image " +
          (display === "right" ? "card-image--right" : "card-image--left")
        }
      />
      {display === "left" && (
        <div className="image-text-description image-text-description--left">
          {subtitle !== "" && (
            <span
              className="image-text-description__subtitle"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
        </div>
      )}
    </div>
  );
}
