export default function TwoPhotoCard() {
  return (
    <div className="two-photo-card">
      <div className="photo-card-left">
        <img
          src="7914267b405ae0b2d846130fb3925aff2c5ce31c.jpg"
          alt="Zara car"
          className="photo-card-img photo-card-left__image"
        />
        <p className="photo-card-left__description">
          When Zara Origins launched its first two collection for the winter and
          summer seasons, the constantly evoluing project was defined by thes
          statement. After two editions allowing for experimentation within the
          collection, the approach for the third editon has evolved naturally
          solidifying Zara Origins as a yearlong offering of wardrobe essentials
          that will be supplemented with limited edition seasonal piece.
        </p>
      </div>
      <img
        src="96789e1c565feb4cff53c78627dbbd87fd3e2e2b.jpg"
        alt="First Zara collection"
        className="photo-card-img photo-card-right"
      />
    </div>
  );
}
