export default function IntroductionCard (){
  return (
    <div className="introduction-card">
        <div className='introduction-description'>
            <p className='introduction-description__title'>
                ZARA ORIGINS
            </p>
            <p className='introduction-description__text'>
                Identity by MSM paris<br/>Photography by Jaime Hakesworth<br/>Short movie directed by BYNT<br/>Script by David Scearce<br/>Produced by Canada
            </p>
            <p className='introduction-description__inspiration'>
                inspired by Vivaldi´s<br/>four seansons
            </p>
        </div>
        <div className='image-card'>
            <img src="8ef690af8edafe441fa4cf31d02f1d747ee780e9.jpg" alt="Zara Origins" className='image-card__photo'/>
            <p className='image-card__caption'>
                Picture by Jamie<br/>Hakesworth<br/>ZARA ORIGINS collection<br/>Tappei
            </p>
        </div>
      
    </div>
  );
}
